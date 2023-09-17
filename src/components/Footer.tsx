'use client';
import { LinkIcon } from '@chakra-ui/icons';
import { Center, Divider, HStack, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Footer = () => {
	return (
		<Center
			as={'footer'}
			id={'footer-root'}
			height={'36px'}
			width={'full'}
			maxWidth={900}
			bottom={0}
			m={'auto'}
			pb={2}
		>
			<HStack
				m={4}
				justifyContent={'space-between'}
				width={{ base: 'full', md: 'lg' }}
				p={2}
			>
				<Text
					align={'center'}
					fontSize={'xs'}
				>
					Gates Kennedy LLC, 2023
				</Text>
				<Text fontSize={'xs'}>
					<LinkIcon />{' '}
					<Link
						href={'https://gateskennedy.com'}
						target={'_blank'}
					>
						GatesKennedy.com
					</Link>
				</Text>
			</HStack>
		</Center>
	);
};

export default Footer;
