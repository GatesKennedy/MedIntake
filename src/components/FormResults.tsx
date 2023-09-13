import {
	Heading,
	Text,
	Box,
	Divider,
	HStack,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Accordion,
} from '@chakra-ui/react';
import React from 'react';
import { IHistoryData, IIdentityData } from './MultiStep';
import {
	HistoryQuestion,
	QuestionNameEnum,
	answerIsAnIssueState,
} from '@/data/questionData';
import NavGroup from './NavGroup';
import Head from 'next/head';
import { QuestionOutlineIcon } from '@chakra-ui/icons';

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
						{/* <Box
							justifyContent={'right'}
							color={'yellow.300'}
						>
							{props.question.answer ? 'Yes' : 'No'}
						</Box> */}
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
interface IFormResults {
	historyData: IHistoryData;
	identityData: IIdentityData;
	questionData: HistoryQuestion[];
	navReset: () => void;
}

function buildResults(
	historyData: IHistoryData,
	issueState: IHistoryData,
	questionData: HistoryQuestion[],
): HistoryQuestion[] {
	const resultsArray: HistoryQuestion[] = [];
	// const issueStateArray = Object.entries(issueState);
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

const FormResults = ({
	historyData,
	identityData,
	questionData,
	navReset,
}: IFormResults) => {
	return (
		<Box w={'full'}>
			<Heading
				w='100%'
				textAlign={'center'}
				fontWeight='normal'
			>
				Complete!
			</Heading>

			<Box>
				<Text>
					Thank you <b>{identityData.firstName}</b>.
				</Text>
				<Text mt={4}>
					An email with your results has been sent to{' '}
					<b>{identityData.email}</b>.
				</Text>
				<Text mt={4}>
					Before your next visit, please review the information
					provided for each of your responses. You can review this
					information below or in the email we&#39;ve sent.
				</Text>
			</Box>

			<Divider mt={6} />

			<Accordion
				allowToggle={true}
				my={4}
			>
				{buildResults(
					historyData,
					answerIsAnIssueState,
					questionData,
				).map((question, index) => (
					<Result
						key={index}
						question={question}
					/>
				))}
			</Accordion>

			<NavGroup
				stepNow={4}
				navRegress={navReset}
				navProgress={navReset}
			/>
		</Box>
	);
};

export default FormResults;
