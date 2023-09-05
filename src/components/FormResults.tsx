import { Heading, Text, Container, Box } from '@chakra-ui/react';
import React from 'react';
import { IHistoryData, IIdentityData } from './MultiStep';
import { HistoryQuestion } from '@/data/questionData';

export const Result = (props: { question: HistoryQuestion }) => {
	return <div>Result</div>;
};

const FormResults = (props: {
	historyData?: IHistoryData;
	identityData: IIdentityData;
	questionData: HistoryQuestion[];
	navReset: () => void;
}) => {
	return (
		<Container w={'full'}>
			<Heading
				w='100%'
				textAlign={'center'}
				fontWeight='normal'
			>
				Complete!
			</Heading>
			<Box>
				<Text>Thank you {props.identityData.firstName}.</Text>
				<Text>
					An email with your results has been sent to{' '}
					{props.identityData.email}.
				</Text>
				<Text>
					Before your next visit, please review the information
					provided for each of your responses. You can review this
					information below or in the email we&#39;ve sent.
				</Text>
			</Box>
			{/* {questionData.map((question, index) => (
				<>
					<Text>result {index}</Text>
				</>
			))} */}
		</Container>
	);
};

export default FormResults;
