import { Question } from '@/data/questionData';
import {
	Heading,
	FormControl,
	FormLabel,
	Container,
	Switch,
	Divider,
	HStack,
	Text,
	Fade,
	Box,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { HistoryData } from './MultiStep';

const Question = (props: { questionData: Question; index: number }) => {
	const [answer, setAnswer] = useState(false);
	const [showAnswer, setShowAnswer] = useState(false);

	function hideAnswer() {
		setShowAnswer(false);
	}
	function onToggle() {
		setAnswer(!answer);
		setShowAnswer(true);
		setTimeout(hideAnswer, 2000);
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

interface HistoryFormProps {
	width: string;
	questionData: Question[];
	handleData: (data: HistoryData) => void;
	navRegress: () => void;
	navProgress: () => void;
}
const FormHistory = ({ width, questionData, handleData }: HistoryFormProps) => {
	return (
		<Box
			as='form'
			w={width}
		>
			<Heading
				w='100%'
				textAlign={'center'}
				fontWeight='normal'
				mb='2%'
			>
				Questions
			</Heading>
			{questionData.map((question, index) => (
				<Question
					key={index}
					index={index}
					questionData={question}
				/>
			))}
		</Box>
	);
};

export default FormHistory;
