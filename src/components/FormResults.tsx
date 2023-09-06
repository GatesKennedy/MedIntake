import { Heading, Text, Container, Box } from '@chakra-ui/react';
import React from 'react';
import { IHistoryData, IIdentityData } from './MultiStep';
import { HistoryQuestion } from '@/data/questionData';
import NavGroup from './NavGroup';

export const Result = (props: { question: HistoryQuestion }) => {
	return <div>Result</div>;
};
interface IFormResults {
	historyData: IHistoryData;
	identityData: IIdentityData;
	questionData: HistoryQuestion[];
	navReset: () => void;
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
			{/* {questionData.map((question, index) => (
				<>
					<Text>result {index}</Text>
				</>
			))} */}
			<NavGroup
				stepNow={4}
				navRegress={navReset}
				navProgress={navReset}
			/>
		</Box>
	);
};

export default FormResults;
