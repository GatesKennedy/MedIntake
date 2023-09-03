'use client';

import { useState } from 'react';
import {
	Progress,
	Box,
	ButtonGroup,
	Button,
	Flex,
	Text,
	Fade,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import FormIdentity from './FormIdentity';
import FormHistory from './FormHistory';
import FormResults from './FormResults';
import { questionData } from '@/data/questionData';
import FormReview from './FormReview';
import { RepeatIcon } from '@chakra-ui/icons';
import { SubmitHandler, useForm } from 'react-hook-form';

export type HistoryData = {
	isSmoker?: boolean;
	isOver65?: boolean;
	isDiabetic?: boolean;
	isMedicated?: boolean;
	hasDentures?: boolean;
	hasVascularIssue?: boolean;
	hasApnea?: boolean;
	drinksCoffee?: boolean;
	hasGumDisease?: boolean;
	isCleaned?: boolean;
};
export type IdentityData = {
	firstName?: string;
	lastName?: string;
	email?: string;
};
export interface IFormData {
	firstName: string;
	lastName: string;
	email: string;
}

export const MultiStep = () => {
	const formWidth = 'lg';
	const toast = useToast();
	const [step, setStep] = useState(1);
	const [isSent, setIsSent] = useState(false);
	const [progress, setProgress] = useState(30);
	// const [inProcess, setInProcess] = useState(false);
	//!!! TODO: RESOLVE STATE
	const [identityData, setIdentityData] = useState<IdentityData>({
		firstName: '',
		lastName: '',
		email: '',
	});
	const [historyData, setHistoryData] = useState<HistoryData>({
		isSmoker: false,
		isOver65: false,
		isDiabetic: false,
		isMedicated: false,
		hasDentures: false,
		hasApnea: false,
		drinksCoffee: false,
		hasGumDisease: false,
		isCleaned: false,
	});

	// Work Flows
	const handleProgress = () => {
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
						width={formWidth}
						handleData={setIdentityData}
						navRegress={handleRegress}
						navProgress={handleProgress}
					/>
				) : step === 2 ? (
					// HISTORY
					<FormHistory
						width={formWidth}
						questionData={questionData}
						handleData={setHistoryData}
						navRegress={handleRegress}
						navProgress={handleProgress}
					/>
				) : step === 3 ? (
					// REVIEW
					<FormReview
						width={formWidth}
						historyData={historyData}
						identityData={identityData}
						handleData={handleConfirm}
						navRegress={handleRegress}
						navProgress={handleProgress}
					/>
				) : (
					// RESULTS
					<FormResults
						width={formWidth}
						historyData={historyData}
						identityData={identityData}
						questionData={questionData}
						navReset={handleReset}
					/>
				)}

				{/* BTTN GROUP */}
				<ButtonGroup
					mt='5%'
					w='100%'
				>
					{!isSent ? (
						<Flex
							w='100%'
							justifyContent='space-between'
						>
							<Flex>
								<Button
									isDisabled={step === 1}
									onClick={handleRegress}
									colorScheme='teal'
									variant='solid'
									w='7rem'
									mr='5%'
								>
									Back
								</Button>
								<Button
									isDisabled={step === 3}
									onClick={handleProgress}
									colorScheme='teal'
									variant='outline'
									w='7rem'
								>
									{step === 1 ? 'Next' : 'Review'}
								</Button>
							</Flex>

							{/* REVIEW */}
							<Fade
								in={step === 3}
								unmountOnExit
							>
								<Button
									colorScheme='red'
									variant='solid'
									w='7rem'
									onClick={handleConfirm}
								>
									Submit
								</Button>
							</Fade>
						</Flex>
					) : (
						<Flex
							w='100%'
							justifyContent='center'
						>
							<Button
								onClick={handleReset}
								colorScheme='teal'
								variant='solid'
								w='9rem'
							>
								<Text>Take Again</Text>
								<RepeatIcon ml={2} />
							</Button>
						</Flex>
					)}
				</ButtonGroup>
			</Box>
		</>
	);
};

export default MultiStep;
