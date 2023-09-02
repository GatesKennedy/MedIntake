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
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import { IFormData, IdentityData } from './MultiStep';
import { UseFormRegister, FieldValues } from 'react-hook-form';

const FormIdentity = (props: {
	width: string;
	data: IdentityData;
	register: UseFormRegister<IFormData>;
	setData: Dispatch<SetStateAction<IdentityData>>;
}) => {
	return (
		<Container w={props.width}>
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
						{...props.register('firstName', {
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
						{...props.register('lastName', {
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
						{...props.register('email', {
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
		</Container>
	);
};

export default FormIdentity;
