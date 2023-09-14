import { HistoryQuestion, QuestionNameEnum } from '@/data/questionData';
import { IHistoryData } from './MultiStep';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	HStack,
	Heading,
	Text,
} from '@chakra-ui/react';
import { QuestionOutlineIcon } from '@chakra-ui/icons';

function buildResults(
	historyData: IHistoryData,
	issueState: IHistoryData,
	questionData: HistoryQuestion[],
): HistoryQuestion[] {
	const resultsArray: HistoryQuestion[] = [];
	const answersArray = Object.entries(historyData).filter(
		(a) => a[1] === issueState[a[0] as QuestionNameEnum],
	);
	answersArray.forEach((a) => {
		const result = questionData.find(
			(q) => q.name === (a[0] as QuestionNameEnum),
		);
		if (result) {
			result.answer = a[1];
			resultsArray.push(result);
		}
	});

	return resultsArray;
}

export const Result = (props: { question: HistoryQuestion }) => {
	return (
		<AccordionItem
			w={'full'}
			my={3}
		>
			<AccordionButton w={'full'}>
				<Heading
					w={'full'}
					size={'md'}
				>
					<HStack justify={'space-between'}>
						<HStack>
							<QuestionOutlineIcon color={'yellow.300'} />{' '}
							<Text ml={4}>{props.question.resultPrompt}...</Text>
						</HStack>
						<AccordionIcon />
					</HStack>
				</Heading>
			</AccordionButton>
			<AccordionPanel>
				{props.question.result.map((result, index) => (
					<Box
						key={index}
						my={3}
						ml={3}
					>
						<Heading
							size={'sm'}
							color={'blue.300'}
						>
							{result.name}
						</Heading>
						<Text ml={3}>{result.desc}</Text>
					</Box>
				))}
			</AccordionPanel>
		</AccordionItem>
	);
};

interface IResultsList {
	historyData: IHistoryData;
	issueStateData: IHistoryData;
	questionData: HistoryQuestion[];
}

export const ResultsList = ({
	historyData,
	issueStateData,
	questionData,
}: IResultsList) => {
	return (
		<Accordion
			allowToggle={true}
			my={4}
		>
			{buildResults(historyData, issueStateData, questionData).map(
				(question, index) => (
					<Result
						key={index}
						question={question}
					/>
				),
			)}
		</Accordion>
	);
};
