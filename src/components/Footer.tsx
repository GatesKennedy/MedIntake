'use client';
import { Center, Divider, Stack, Text } from '@chakra-ui/react';

const Footer = () => {
	return (
		<Center
			as={'footer'}
			id={'footer-root'}
			height={'36px'}
			width={'full'}
			// position={'fixed'}
			bottom={0}
			mb={2}
		>
			<Stack
				w={'full'}
				m={4}
			>
				{/* <Divider /> */}
				<Text
					align={'center'}
					fontSize={'xs'}
				>
					Dr. Peter Mclellan 2023
				</Text>
			</Stack>
		</Center>
	);
};

export default Footer;
