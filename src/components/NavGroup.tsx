import { RepeatIcon } from '@chakra-ui/icons';
import { ButtonGroup, Flex, Button, Fade, Text } from '@chakra-ui/react';
import React from 'react';
import { FieldErrors } from 'react-hook-form';

interface NavGroupProps {
	stepNow: number;
	errors: FieldErrors<any> | null;
	isValid: boolean;
	navRegress: () => void;
	navProgress: () => void;
}

const NavGroup = ({
	stepNow,
	errors,
	isValid,
	navRegress,
	navProgress,
}: NavGroupProps) => {
	function handleRegress(): void {
		// if (!!errors) {
		// 	console.log('errors: ', errors);
		// 	return;
		// }
		navRegress();
	}
	// function handleProgress(): void {
	// 	if (isValid) {
	// 		navProgress();
	// 		return;
	// 	}
	// 	console.log('handleProgress() > errors: ', errors);
	// }

	return (
		<ButtonGroup
			mt='5%'
			w='100%'
		>
			{stepNow !== 4 ? (
				<Flex
					w='100%'
					justifyContent='space-between'
				>
					<Flex>
						<Button
							isDisabled={stepNow === 1}
							onClick={handleRegress}
							colorScheme='teal'
							variant='solid'
							w='7rem'
							mr='5%'
						>
							Back
						</Button>
						<Button
							type={'submit'}
							isDisabled={stepNow === 3}
							// onClick={handleProgress}
							colorScheme='teal'
							variant='outline'
							w='7rem'
						>
							{stepNow === 1 ? 'Next' : 'Review'}
						</Button>
					</Flex>

					{/* REVIEW */}
					<Fade
						in={stepNow === 3}
						unmountOnExit
					>
						<Button
							type={'submit'}
							colorScheme='red'
							variant='solid'
							w='7rem'
							// onClick={handleProgress}
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
						// onClick={handleProgress}
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
	);
};

export default NavGroup;
