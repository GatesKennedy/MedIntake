'use client';
import MultiStep from '@/components/MultiStep';
import { Box, Center, HStack, VStack } from '@chakra-ui/react';

export default function Home() {
	return (
		<Center id={'page-root'}>
			<MultiStep />
		</Center>
	);
}
