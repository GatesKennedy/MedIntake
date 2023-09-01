import { Heading, SimpleGrid, Container } from '@chakra-ui/react';
import React from 'react';
import { HistoryData, IdentityData } from './MultiStep';

const FormReview = (props: {
	width: string;
	historyData: HistoryData;
	identityData: IdentityData;
}) => {
	return (
		<Container w={props.width}>
			<Heading
				w='100%'
				textAlign={'center'}
				fontWeight='normal'
			>
				Review
			</Heading>
			<SimpleGrid
				columns={1}
				spacing={6}
			></SimpleGrid>
		</Container>
	);
};

export default FormReview;
