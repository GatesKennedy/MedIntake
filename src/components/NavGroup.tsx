import { RepeatIcon } from '@chakra-ui/icons';
import { ButtonGroup, Flex, Button, Fade, Text } from '@chakra-ui/react';
import React from 'react';

interface NavGroupProps {
	stepNow: number;
	navRegress: () => void;
	navProgress: () => void;
}

const NavGroup = ({ stepNow, navRegress, navProgress }: NavGroupProps) => {
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
							onClick={navRegress}
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
							colorScheme='red'
							variant='solid'
							w='7rem'
							onClick={navProgress}
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
						onClick={navProgress}
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
