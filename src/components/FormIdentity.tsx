import React, { Dispatch, SetStateAction } from 'react';
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
	Container,
	Box,
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import { IdentityData } from './MultiStep';
import { UseFormRegister, FieldValues, useForm } from 'react-hook-form';

interface IdentityFormProps {
	width: string;
	handleData: (data: IdentityData) => void;
	navRegress: () => void;
	navProgress: () => void;
}

const FormIdentity = ({ width, handleData }: IdentityFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<IdentityData>();

	return (
		<Box
			as='form'
			w={width}
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
					// isInvalid={errors.name}
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
							required: true,
							minLength: {
								value: 2,
								message: 'Minimum length should be 2',
							},
						})}
					/>
				</FormControl>

				<FormControl isRequired>
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
							required: 'This is required',
							minLength: {
								value: 2,
								message: 'Minimum length should be 2',
							},
						})}
					/>
				</FormControl>
			</Flex>
			<FormControl
				isRequired
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
							required: 'Email is required',
							minLength: {
								value: 6,
								message: 'Miniumn length is 6 characters',
							},
						})}
					/>
					<InputRightElement>
						<Tooltip
							label={'The address where we send your results.'}
							aria-label='A tooltip'
						>
							<InfoIcon />
						</Tooltip>
					</InputRightElement>
				</InputGroup>

				<FormHelperText>
					<Text>We&apos;ll never share your email.</Text>
				</FormHelperText>
			</FormControl>
		</Box>
	);
};

export default FormIdentity;
