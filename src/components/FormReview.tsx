import React from 'react';
import { IHistoryData, IIdentityData } from './MultiStep';
import {
	Box,
	Divider,
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

export interface QuestionResult extends HistoryQuestion {
	answer: boolean | string;
}

const ReviewAnswer = ({ questionData, answerData }: ReviewAnswerProps) => {
	console.log('\n answerData: ', answerData);
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
				<>
					<GridItem key={index}>
						<Flex justify={'space-between'}>
							<Text w={'80%'}>{result.prompt}</Text>
							<Text
								fontWeight={'bold'}
								color={
									result.answer ? 'teal.300' : 'yellow.300'
								}
							>
								{result.answer ? 'Yes' : 'No'}
							</Text>
						</Flex>
					</GridItem>
					<Divider key={index + '-d'} />
				</>
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
				mb={4}
			>
				Review
			</Heading>
			<SimpleGrid
				columns={1}
				spacing={2}
			>
				<GridItem>
					<Flex justify={'space-between'}>
						<Text>Full Name: </Text>
						<Text fontWeight={'bold'}>
							{`${identityData.firstName} ${identityData.lastName}`}
						</Text>
					</Flex>
				</GridItem>
				<Divider />
				<GridItem>
					<Flex justify={'space-between'}>
						<Text>Email for Results: </Text>
						<Text fontWeight={'bold'}>{identityData.email}</Text>
					</Flex>
				</GridItem>
				<Divider />

				<ReviewAnswer
					questionData={historyQuestions}
					answerData={{ ...identityData, ...historyData }}
				/>
			</SimpleGrid>
			<NavGroup
				stepNow={3}
				navRegress={navRegress}
				navProgress={handleData}
			/>
		</Box>
	);
};

export default FormReview;
