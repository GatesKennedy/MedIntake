import React from 'react';
import { HistoryData, IdentityData } from './MultiStep';
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';

interface ReviewFormProps {
	width: string;
	historyData: HistoryData;
	identityData: IdentityData;
	handleData: () => void;
	navRegress: () => void;
	navProgress: () => void;
}

const FormReview = ({
	width,
	historyData,
	identityData,
	handleData,
}: ReviewFormProps) => {
	// for (const [key, value] of Object.entries(props.formData)) {
	// 	console.log(`${key}: ${value}`);
	// }
	return (
		<Box
			as='form'
			w={width}
		>
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
			>
				{/* {Object.keys(props.formData).map((key, index) => {
					return <GridItem key={index}>{key}</GridItem>;
				})} */}
			</SimpleGrid>
		</Box>
	);
};

export default FormReview;
