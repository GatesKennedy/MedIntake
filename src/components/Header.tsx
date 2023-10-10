'use client';
import { STR } from '@/data/stringConstants';
import { Center, Heading, VStack } from '@chakra-ui/react';

const Header = () => {
	return (
		<Center
			m={2}
			p={2}
			as={'header'}
			id={'header-root'}
		>
			<VStack width={'full'}>
				<Heading size={'lg'}>{STR.RESULT_TITLE}</Heading>
			</VStack>
		</Center>
	);
};

export default Header;
