'use client';

import { useState } from 'react';
import {
	Progress,
	Box,
	ButtonGroup,
	Button,
	Flex,
	Text,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import FormIdentity from './FormIdentity';
import FormQuestions from './FormQuestions';
import FormResults from './FormResults';
import { questionData } from '@/data/questionData';
import FormReview from './FormReview';
import { RepeatIcon } from '@chakra-ui/icons';

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

	const handleSubmit = () => {
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
				{isSent ? (
					<>
						<FormResults
							width={formWidth}
							historyData={historyData}
							identityData={identityData}
							questionData={questionData}
						/>
						<ButtonGroup
							mt='5%'
							w='100%'
						>
							<Flex
								w='100%'
								justifyContent='center'
							>
								<Button
									onClick={() => {
										setStep(1);
										setProgress(33.33);
										setIsSent(false);
									}}
									colorScheme='teal'
									variant='solid'
									w='9rem'
								>
									<Text>Take Again</Text>
									<RepeatIcon ml={2} />
								</Button>
							</Flex>
						</ButtonGroup>
					</>
				) : (
					<>
						<Progress
							hasStripe
							value={progress}
							mb='5%'
							mx='5%'
							isAnimated
						></Progress>
						{/* FORM BODY */}
						{step === 1 ? (
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
										w='7rem'
									>
										Next
									</Button>
								</Flex>

								{step === 3 ? (
									<Button
										colorScheme='red'
										variant='solid'
										w='7rem'
										onClick={() => handleSubmit()}
									>
										Submit
									</Button>
								) : null}
							</Flex>
						</ButtonGroup>
					</>
				)}
			</Box>
		</>
	);
};

export default MultiStep;
