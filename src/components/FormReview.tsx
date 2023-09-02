import { Heading, SimpleGrid, Container, GridItem } from '@chakra-ui/react';
import React from 'react';
import { IFormData } from './MultiStep';

const FormReview = (props: { width: string; formData: IFormData }) => {
	for (const [key, value] of Object.entries(props.formData)) {
		console.log(`${key}: ${value}`);
	}
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
			>
				{Object.keys(props.formData).map((key, index) => {
					return <GridItem key={index}>{key}</GridItem>;
				})}
			</SimpleGrid>
		</Container>
	);
};

export default FormReview;
