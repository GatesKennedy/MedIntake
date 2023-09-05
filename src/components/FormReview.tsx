import React from 'react';
import { IHistoryData, IIdentityData } from './MultiStep';
import {
	Box,
	Flex,
	GridItem,
	Heading,
	SimpleGrid,
	Text,
} from '@chakra-ui/react';
import { HistoryQuestion, historyQuestions } from '@/data/questionData';
import NavGroup from './NavGroup';

interface ReviewFormProps {
	historyData: IHistoryData;
	identityData: IIdentityData;
	handleData: () => void;
	navRegress: () => void;
	navProgress: () => void;
}
interface ReviewAnswerProps {
	questionData: HistoryQuestion[];
	answerData: IHistoryData;
}

interface QuestionResult extends HistoryQuestion {
	answer: boolean | string;
}

const ReviewAnswer = ({ questionData, answerData }: ReviewAnswerProps) => {
	const results: QuestionResult[] = questionData.map((question) => {
		return {
			...question,
			answer:
				Object.entries(answerData).find(
					(e) => e[0] === question.name,
				)?.[1] ?? 'oops',
		};
	});

	return (
		<>
			{results.map((result, index) => (
				<GridItem key={index}>
					<Flex justify={'space-between'}>
						<Text>{result.prompt}</Text>
						<Text>{result.answer}</Text>
					</Flex>
				</GridItem>
			))}
		</>
	);
};
const FormReview = ({
	historyData,
	identityData,
	handleData,
	navRegress,
	navProgress,
}: ReviewFormProps) => {
	// for (const [key, value] of Object.entries(historyData)) {
	// 	console.log(`${key}: ${value}`);
	// }
	console.log('identityData: \n', identityData);
	console.log('historyData: \n', historyData);
	return (
		<Box
			as='form'
			w={'full'}
		>
			<Heading
				w='100%'
				textAlign={'center'}
				fontWeight='normal'
			>
				Review
			</Heading>
			<SimpleGrid
				columns={1}
				spacing={6}
			>
				<ReviewAnswer
					questionData={historyQuestions}
					answerData={{ ...identityData, ...historyData }}
				/>
			</SimpleGrid>
			<NavGroup
				stepNow={3}
				errors={null}
				isValid={true}
				navRegress={navRegress}
				navProgress={navProgress}
			/>
		</Box>
	);
};

export default FormReview;
