import { Heading, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { IHistoryData, IIdentityData } from './MultiStep';
import {
	HistoryQuestion,
	QuestionNameEnum,
	answerIsAnIssueState,
} from '@/data/questionData';
import NavGroup from './NavGroup';

export const Result = (props: { question: HistoryQuestion }) => {
	return (
		<Box my={3}>
			<Heading size={'md'}>
				{props.question.prompt}: {props.question.answer ? 'Yes' : 'No'}
			</Heading>
			{props.question.result.map((result, index) => (
				<Box
					key={index}
					my={3}
					ml={3}
				>
					<Heading size={'sm'}>{result.name}</Heading>
					<Text ml={3}>{result.desc}</Text>
				</Box>
			))}
		</Box>
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
			{/* <Box
				my={4}
				py={2}
			>
				{Object.entries(historyData)
					.filter((q) => q[1] === true)
					.map((entry, index) => {
						return (
							<Box
								key={index}
								my={3}
							>
								<Heading
									my={2}
									size={'lg'}
								>
									{entry[0]}
								</Heading>
								{questionData
									.find((q) => q.name.toString() === entry[0])
									?.result.map((issue) => (
										<Box
											mt={2}
											ml={2}
											key={'issue-' + index}
										>
											<Heading size={'md'}>
												{issue.name}
											</Heading>
											<Text ml={3}>{issue.desc}</Text>
										</Box>
									))}
							</Box>
						);
					})}
			</Box> */}
			<Box my={4}>
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
			</Box>
			<NavGroup
				stepNow={4}
				navRegress={navReset}
				navProgress={navReset}
			/>
		</Box>
	);
};

export default FormResults;
