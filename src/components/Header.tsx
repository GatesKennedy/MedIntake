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
			m={2}
			p={2}
			as={'header'}
			id={'header-root'}
			// width={'full'}
		>
			<VStack width={'full'}>
				<Heading size={'lg'}>Dental Risk Assessment</Heading>
				{/* <Heading size={'md'}> Intake Form</Heading> */}
				{/* <Divider pt={4} /> */}
			</VStack>
		</Center>
	);
};

export default Header;
