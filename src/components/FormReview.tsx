import React from 'react';
import {
	Box,
	Center,
	Divider,
	Flex,
	GridItem,
	Heading,
	SimpleGrid,
	Spinner,
	Text,
} from '@chakra-ui/react';
import {
	HistoryQuestion,
	IHistoryData,
	IIdentityData,
	historyQuestions,
} from '@/data/questionData';
import NavGroup from './NavGroup';

interface ReviewFormProps {
	sending: boolean;
	historyData: IHistoryData;
	identityData: IIdentityData;
	navRegress: () => void;
	handleConfirm: () => void;
}
interface ReviewAnswerProps {
	questionData: HistoryQuestion[];
	answerData: IHistoryData;
}

const ReviewAnswer = ({ questionData, answerData }: ReviewAnswerProps) => {
	// console.log('\n answerData: ', answerData);
	const results: HistoryQuestion[] = questionData.map((question) => {
		return {
			...question,
			answer:
				Object.entries(answerData).find(
					(e) => e[0] === question.name,
				)?.[1] ?? null,
		};
	});

	return (
		<>
			{results.map((result, index) => (
				<GridItem key={index}>
					<Flex justify={'space-between'}>
						<Text w={'80%'}>{result.prompt}</Text>
						<Text
							fontWeight={'bold'}
							color={result.answer ? 'teal.300' : 'yellow.300'}
						>
							{result.answer ? 'Yes' : 'No'}
						</Text>
					</Flex>
					<Divider key={index + '-d'} />
				</GridItem>
			))}
		</>
	);
};

const FormReview = ({
	sending,
	historyData,
	identityData,
	navRegress,
	handleConfirm,
}: ReviewFormProps) => {
	// console.log('identityData: \n', identityData);
	// console.log('historyData: \n', historyData);
	return (
		<Box
			as='form'
			w={'full'}
			opacity={sending ? '0.4' : '1'}
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

			{sending ? (
				<Center m={4}>
					<Spinner />
				</Center>
			) : (
				<NavGroup
					stepNow={3}
					navRegress={navRegress}
					navProgress={handleConfirm}
				/>
			)}
		</Box>
	);
};

export default FormReview;
