'use client';

import { useState } from 'react';
import { Progress, Box, ButtonGroup, Button, Flex } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import FormIdentity from './FormIdentity';
import FormQuestions from './FormQuestions';
import FormResults from './FormResults';
import { questionData } from '@/data/questionData';
import FormReview from './FormReview';

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

export const MultiStep = () => {
	const toast = useToast();
	const [step, setStep] = useState(1);
	const [inProcess, setInProcess] = useState(false);
	const [isSent, setIsSent] = useState(false);
	const [progress, setProgress] = useState(33.33);
	//!!! TODO: RESOLVE STATE
	const [identityData, setIdentityData] = useState<IdentityData>({
		firstName: undefined,
		lastName: undefined,
		email: undefined,
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
	const formWidth = 'lg';

	const handleSubmit = async () => {
		// SpinnerOn setInProcess()
		// Send Email
		// handle Response
		toast({
			title: 'Great! Thank you.',
			description: "We've sent your results to the email you provided.",
			status: 'success',
			duration: 3000,
			isClosable: true,
		});
	};
	return (
		<>
			<Box
				borderWidth='1px'
				rounded='lg'
				shadow='1px 1px 3px rgba(0,0,0,0.3)'
				maxWidth={800}
				p={6}
				m='10px auto'
				as='form'
			>
				<Progress
					hasStripe
					value={progress}
					mb='5%'
					mx='5%'
					isAnimated
				></Progress>

				{/* FORM BODY */}
				{!isSent ? (
					step === 1 ? (
						<FormIdentity width={formWidth} />
					) : step === 2 ? (
						<FormQuestions
							width={formWidth}
							questionData={questionData}
						/>
					) : (
						<FormReview
							width={formWidth}
							historyData={historyData}
							identityData={identityData}
						/>
					)
				) : (
					<FormResults
						width={formWidth}
						historyData={historyData}
						identityData={identityData}
						questionData={questionData}
					/>
				)}

				{/* BTTN GROUP */}
				<ButtonGroup
					mt='5%'
					w='100%'
				>
					<Flex
						w='100%'
						justifyContent='space-between'
					>
						<Flex>
							<Button
								onClick={() => {
									setStep(step - 1);
									setProgress(progress - 33.33);
								}}
								isDisabled={step === 1}
								colorScheme='teal'
								variant='solid'
								w='7rem'
								mr='5%'
							>
								Back
							</Button>
							<Button
								w='7rem'
								isDisabled={step === 3}
								onClick={() => {
									setStep(step + 1);
									if (step === 3) {
										setProgress(100);
									} else {
										setProgress(progress + 33.33);
									}
								}}
								colorScheme='teal'
								variant='outline'
							>
								Next
							</Button>
						</Flex>
						{step === 3 ? (
							<Button
								w='7rem'
								colorScheme='red'
								variant='solid'
								onClick={() => handleSubmit}
							>
								Submit
							</Button>
						) : null}
					</Flex>
				</ButtonGroup>
			</Box>
		</>
	);
};

export default MultiStep;
