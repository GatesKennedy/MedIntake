import React, { useState } from 'react';
import {
	Heading,
	Flex,
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
	Text,
	InputRightElement,
	Tooltip,
	InputGroup,
	Box,
	FormErrorMessage,
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import { useForm, SubmitHandler } from 'react-hook-form';
import NavGroup from './NavGroup';
import { IIdentityData } from '@/data/questionData';

interface IdentityFormProps {
	identityData: IIdentityData;
	handleData: (data: IIdentityData) => void;
	navRegress: () => void;
	navProgress: () => void;
}

const FormIdentity = ({
	identityData,
	handleData,
	navRegress,
	navProgress,
}: IdentityFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<IIdentityData>({
		defaultValues: {
			firstName: identityData.firstName,
			lastName: identityData.lastName,
			email: identityData.email,
		},
	});

	const handleSetData: SubmitHandler<IIdentityData> = (data) => {
		if (isValid) {
			handleData(data);
			navProgress();
			return;
		}
	};

	return (
		<>
			<Box
				as='form'
				w={'full'}
				onSubmit={handleSubmit(handleSetData)}
				noValidate
			>
				<Heading
					w='100%'
					textAlign={'center'}
					fontWeight='normal'
					mb='2%'
				>
					Welcome!
				</Heading>
				<Flex>
					<FormControl
						isRequired
						isInvalid={Boolean(errors.firstName)}
						mr='5%'
					>
						<FormLabel
							htmlFor='firstName'
							fontWeight={'normal'}
						>
							First name
						</FormLabel>
						<Input
							id='firstName'
							placeholder='First name'
							{...register('firstName', {
								required: 'First name is required...',
								minLength: {
									value: 2,
									message: 'Minimum length should be 2',
								},
							})}
						/>
						<FormErrorMessage>
							{errors.firstName && errors.firstName?.message}
						</FormErrorMessage>
					</FormControl>

					<FormControl
						isRequired
						isInvalid={Boolean(errors.lastName)}
					>
						<FormLabel
							htmlFor='lastName'
							fontWeight={'normal'}
						>
							Last name
						</FormLabel>
						<Input
							id='lastName'
							placeholder='Last name'
							{...register('lastName', {
								required: 'Last name is required...',
								minLength: {
									value: 2,
									message: 'Minimum length should be 2',
								},
							})}
						/>
						<FormErrorMessage>
							{errors.lastName && errors.lastName?.message}
						</FormErrorMessage>
					</FormControl>
				</Flex>
				<FormControl
					isRequired
					isInvalid={Boolean(errors.email)}
					mt='2%'
				>
					<FormLabel
						htmlFor='email'
						fontWeight={'normal'}
					>
						Email address
					</FormLabel>
					<InputGroup>
						<Input
							id='email'
							type='email'
							{...register('email', {
								required: 'Where should we send your results?',
								minLength: {
									value: 6,
									message: 'Miniumn length is 6 characters',
								},
							})}
						/>
						<InputRightElement>
							<Tooltip
								label={
									'Where would you like us to send your results?'
								}
								aria-label='A tooltip'
							>
								<InfoIcon />
							</Tooltip>
						</InputRightElement>
					</InputGroup>
					<FormErrorMessage>
						{errors.email && errors.email?.message}
					</FormErrorMessage>
					<FormHelperText>
						<Text>We&apos;ll never share your email.</Text>
					</FormHelperText>
				</FormControl>
				<NavGroup
					stepNow={1}
					navRegress={navRegress}
					navProgress={navProgress}
				/>
			</Box>
		</>
	);
};

export default FormIdentity;
