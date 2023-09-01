import { Question } from '@/data/questionData';
import {
	Heading,
	FormControl,
	GridItem,
	FormLabel,
	Input,
	Container,
	Switch,
	Divider,
	Box,
	HStack,
	Text,
	Fade,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Question = (props: { questionData: Question; index: number }) => {
	const [answer, setAnswer] = useState(false);
	const [showAnswer, setShowAnswer] = useState(false);

	function toggleShowAnswer() {
		setShowAnswer(!showAnswer);
	}
	function onToggle() {
		setAnswer(!answer);
		setShowAnswer(true);
		setTimeout(toggleShowAnswer, 2000);
	}
	return (
		<>
			{props.index === 0 ? '' : <Divider />}
			<HStack>
				<FormControl
					display={'flex'}
					alignItems={'center'}
					justifyContent={'space-between'}
					m={1}
					p={2}
				>
					<FormLabel
						htmlFor={props.questionData.name}
						mb='0'
					>
						{props.questionData.prompt}
					</FormLabel>
					<Switch
						id={props.questionData.name}
						onChange={onToggle}
					/>
				</FormControl>
				<Fade in={showAnswer}>
					<Text w={'4ch'}>{answer ? 'Yes' : 'No'}</Text>
				</Fade>
			</HStack>
		</>
	);
};

const FormQuestions = (props: { width: string; questionData: Question[] }) => {
	return (
		<Container w={props.width}>
			<Heading
				w='100%'
				textAlign={'center'}
				fontWeight='normal'
				mb='2%'
			>
				Questions
			</Heading>
			{props.questionData.map((question, index) => (
				<Question
					key={index}
					index={index}
					questionData={question}
				/>
			))}
		</Container>
	);
};

export default FormQuestions;
