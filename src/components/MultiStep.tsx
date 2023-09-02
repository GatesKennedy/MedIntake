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
import FormQuestions from './FormHistory';
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
	const [inProcess, setInProcess] = useState(false);
	const [isSent, setIsSent] = useState(false);
	const [progress, setProgress] = useState(33.33);
	//!!! TODO: RESOLVE STATE
	const [formData, setFormData] = useState<IFormData>({
		firstName: 'dart',
		lastName: 'mithra',
		email: 'chunks',
	});
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

	//	Reach Hook Form
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm<IFormData>();

	const onSubmit: SubmitHandler<IFormData> = (values) => {
		setFormData(values);
		return new Promise<void>((resolve) => {
			// alert(JSON.stringify(values, null, 2));
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				resolve();
			}, 3000);
		});
	};

	// Work Flows
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
				onSubmit={handleSubmit(onSubmit)}
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
							<FormIdentity
								width={formWidth}
								data={identityData}
								register={register}
								setData={setIdentityData}
							/>
						) : step === 2 ? (
							<FormQuestions
								width={formWidth}
								questionData={questionData}
							/>
						) : (
							<FormReview
								width={formWidth}
								formData={formData}
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
											setProgress(progress - 30);
										}}
										isDisabled={step === 1}
										colorScheme='teal'
										variant='solid'
										w='7rem'
										mr='5%'
									>
										Back
									</Button>
									{step === 1 ? (
										<Button
											// isDisabled={step === 3}
											onClick={() => {
												setStep(step + 1);
												setProgress(progress + 30);
											}}
											colorScheme='teal'
											variant='outline'
											w='7rem'
										>
											Next
										</Button>
									) : (
										<Button
											type={'submit'}
											isDisabled={step === 3}
											// isLoading={isSubmitting} !!! TODO
											onClick={() => {
												setStep(step + 1);
												setProgress(progress + 30);
											}}
											colorScheme='teal'
											variant='outline'
											w='7rem'
										>
											Review
										</Button>
									)}
								</Flex>

								{step === 3 ? (
									<Button
										colorScheme='red'
										variant='solid'
										w='7rem'
										onClick={handleConfirm}
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
