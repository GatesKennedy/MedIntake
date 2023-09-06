'use client';
import {
	Center,
	Divider,
	Flex,
	HStack,
	Heading,
	StackDivider,
	VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
	return (
		<Center
			as={'header'}
			id={'header-root'}
			height={'64px'}
			width={'full'}
		>
			<VStack
				width={'full'}
				m={4}
			>
				<Flex
					as={'nav'}
					m={2}
					pt={2}
				>
					<Heading size={'md'}>
						Dental Risk Assessment Intake Form
					</Heading>
				</Flex>
				<Divider mb={4} />
			</VStack>
		</Center>
	);
};

export default Header;
