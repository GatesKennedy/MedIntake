'use client';

import { useState } from 'react';
import { Progress, Box } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import FormIdentity from './FormIdentity';
import FormHistory from './FormHistory';
import FormResults from './FormResults';
import {
	IdentityNameEnum,
	QuestionNameEnum,
	historyQuestions,
} from '@/data/questionData';
import FormReview from './FormReview';

export type IHistoryData = {
	[key in QuestionNameEnum]: boolean | null;
};
export interface IIdentityData {
	[IdentityNameEnum.ID_FIRST_NAME]: string | null;
	[IdentityNameEnum.ID_LAST_NAME]: string | null;
	[IdentityNameEnum.ID_EMAIL]: string | null;
}

export const MultiStep = () => {
	const toast = useToast();
	const [step, setStep] = useState(1);
	const [isSent, setIsSent] = useState(false);
	const [progress, setProgress] = useState(30);
	// const [inProcess, setInProcess] = useState(false);
	//!!! TODO: RESOLVE STATE
	const [identityData, setIdentityData] = useState<IIdentityData>({
		firstName: null,
		lastName: null,
		email: null,
	});
	const [historyData, setHistoryData] = useState<IHistoryData>({
		hasApnea: null,
		hasDenturedParents: null,
		hasGumDisease: null,
		hasVascularIssue: null,
		isCleanedRecently: null,
		isCoffeeRegular: null,
		isDiabetic: null,
		isMedicated: null,
		isOver65: null,
		isSmoker: null,
	});

	// Work Flows
	const handleProgress = () => {
		console.log('handleProgress()...');
		setStep(step + 1);
		setProgress(progress + 30);
	};
	const handleRegress = () => {
		setStep(step - 1);
		setProgress(progress - 30);
	};
	const handleConfirm = () => {
		console.log('handleSubmit()...');
		// SpinnerOn setInProcess()
		// Send Email
		// handle Response
		setIsSent(true);
		toast({
			title: 'Great! Thank you.',
			description: "We've sent your results to the email you provided.",
			status: 'success',
			duration: 3000,
			isClosable: true,
		});
		setStep(step + 1);
	};
	const handleReset = () => {
		setStep(1);
		setProgress(30);
		setIsSent(false);
	};

	return (
		<>
			<Box
				borderWidth='1px'
				rounded='lg'
				shadow='1px 1px 3px rgba(0,0,0,0.3)'
				width={{ base: '240px', md: 'lg' }}
				maxWidth={800}
				p={6}
				m='10px auto'
			>
				{step < 4 ? (
					<Progress
						hasStripe
						value={progress}
						mb='5%'
						mx='5%'
						isAnimated
					></Progress>
				) : null}

				{step === 1 ? (
					// IDENTITY
					<FormIdentity
						// width={formWidth}
						handleData={setIdentityData}
						navRegress={handleRegress}
						navProgress={handleProgress}
					/>
				) : step === 2 ? (
					// HISTORY
					<FormHistory
						// width={formWidth}
						questionData={historyQuestions}
						handleData={setHistoryData}
						navRegress={handleRegress}
						navProgress={handleProgress}
					/>
				) : step === 3 ? (
					// REVIEW
					<FormReview
						// width={formWidth}
						historyData={historyData}
						identityData={identityData}
						handleData={handleConfirm}
						navRegress={handleRegress}
						navProgress={handleProgress}
					/>
				) : (
					// RESULTS
					<FormResults
						// width={formWidth}
						// historyData={historyData}
						identityData={identityData}
						questionData={historyQuestions}
						navReset={handleReset}
					/>
				)}
			</Box>
		</>
	);
};

export default MultiStep;
