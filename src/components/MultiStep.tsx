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

export interface IFormsData {
	historyData: IHistoryData;
	identityData: IIdentityData;
}

export const MultiStep = () => {
	const toast = useToast();
	const [step, setStep] = useState(1);
	const [isSent, setIsSent] = useState(false);
	const [progress, setProgress] = useState(30);
	const [inProcess, setInProcess] = useState(false);
	const [identityData, setIdentityData] = useState<IIdentityData>({
		firstName: null,
		lastName: null,
		email: null,
	});
	const [historyData, setHistoryData] = useState<IHistoryData>({
		hasApnea: false,
		hasDenturedParents: false,
		hasGumDisease: false,
		hasVascularIssue: false,
		isCleanedRecently: false,
		isCoffeeRegular: false,
		isDiabetic: false,
		isMedicated: false,
		isOver65: false,
		isSmoker: false,
	});

	// SEND EMAIL
	const sendEmailAPI = async (data: IFormsData) => {
		console.log('MultiStep > sendEmailAPI()...');
		const apiResponse = await fetch('api/email', {
			method: 'POST',
			body: JSON.stringify(data),
		});

		if (apiResponse.ok) {
			console.log('\nSENT SUCCESS\n');
			console.log(apiResponse); // !!!
			// setInProcess(false);
		} else {
			console.log('\nSEND FAILURE\n');
			console.log(apiResponse);
		}
	};

	// Work Flows
	const handleProgress = () => {
		setStep(step + 1);
		setProgress(progress + 30);
	};
	const handleRegress = () => {
		setStep(step - 1);
		setProgress(progress - 30);
	};
	const handleConfirm = async () => {
		console.log('handleConfirm()...');
		// SpinnerOn
		setInProcess(true);
		// Send Email
		await sendEmailAPI({
			historyData: historyData,
			identityData: identityData,
		} as IFormsData);
		// handle Response
		setIsSent(true);
		toast({
			title: 'Great! Thank you.',
			description: "We've sent your results to the email you provided.",
			status: 'success',
			duration: 3000,
			isClosable: true,
		});
		setInProcess(false);
		setStep(step + 1);
	};
	const handleReset = () => {
		setStep(1);
		setProgress(30);
		setIdentityData({ firstName: null, lastName: null, email: null });
		setHistoryData({
			[QuestionNameEnum.IS_SMOKER]: false,
			[QuestionNameEnum.HAS_APNEA]: false,
			[QuestionNameEnum.IS_DIABETIC]: false,
			[QuestionNameEnum.IS_MEDICATED]: false,
			[QuestionNameEnum.HAS_GUM_DISEASE]: false,
			[QuestionNameEnum.IS_COFFEE_REGULAR]: false,
			[QuestionNameEnum.IS_OVER_SIXTYFIVE]: false,
			[QuestionNameEnum.HAS_VASCULAR_ISSUE]: false,
			[QuestionNameEnum.IS_CLEANED_RECENTLY]: false,
			[QuestionNameEnum.HAS_DENTURED_PARENTS]: false,
		});
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
						identityData={identityData}
						handleData={setIdentityData}
						navRegress={handleRegress}
						navProgress={handleProgress}
					/>
				) : step === 2 ? (
					// HISTORY
					<FormHistory
						historyData={historyData}
						questionData={historyQuestions}
						handleData={setHistoryData}
						navRegress={handleRegress}
						navProgress={handleProgress}
					/>
				) : step === 3 ? (
					// REVIEW
					<FormReview
						sending={inProcess}
						historyData={historyData}
						identityData={identityData}
						navRegress={handleRegress}
						handleConfirm={handleConfirm}
					/>
				) : (
					// RESULTS
					<FormResults
						historyData={historyData}
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
