import React from 'react';
import { Heading, Text, Box, Divider } from '@chakra-ui/react';
import {
	HistoryQuestion,
	IHistoryData,
	IIdentityData,
	answerIsAnIssueState,
} from '@/data/questionData';
import NavGroup from './NavGroup';
import { ResultsList } from './ResultsList';

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

			<Divider mt={6} />

			<ResultsList
				historyData={historyData}
				issueStateData={answerIsAnIssueState}
				questionData={questionData}
			/>

			<NavGroup
				stepNow={4}
				navRegress={navReset}
				navProgress={navReset}
			/>
		</Box>
	);
};

export default FormResults;
