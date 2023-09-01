import React from 'react';
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

const FormIdentity = (props: { width: string }) => {
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
				<FormControl mr='5%'>
					<FormLabel
						htmlFor='first-name'
						fontWeight={'normal'}
					>
						First name
					</FormLabel>
					<Input
						id='first-name'
						placeholder='First name'
					/>
				</FormControl>

				<FormControl>
					<FormLabel
						htmlFor='last-name'
						fontWeight={'normal'}
					>
						Last name
					</FormLabel>
					<Input
						id='last-name'
						placeholder='First name'
					/>
				</FormControl>
			</Flex>
			<FormControl mt='2%'>
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
					/>
					<InputRightElement>
						<Tooltip
							label={'Where we send your results.'}
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
