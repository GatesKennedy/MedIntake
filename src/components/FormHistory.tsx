import { HistoryQuestion, IHistoryData } from '@/data/questionData';
import {
	Heading,
	FormControl,
	FormLabel,
	Switch,
	Divider,
	HStack,
	Text,
	Fade,
	Box,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import NavGroup from './NavGroup';
import { SubmitHandler, UseFormRegister, useForm } from 'react-hook-form';

// QUESTION COMPONENT
interface IQuestionProps {
	index: number;
	question: HistoryQuestion;
	registerHook: UseFormRegister<IHistoryData>;
}
const Question = ({ index, question, registerHook }: IQuestionProps) => {
	const [answer, setAnswer] = useState(question.answer);
	const [showAnswer, setShowAnswer] = useState(false);

	function hideAnswer() {
		setShowAnswer(false);
	}
	function onToggle() {
		setAnswer(!answer);
		setShowAnswer(true);
		setTimeout(hideAnswer, 2000);
	}
	const name: string = question.name;
	return (
		<>
			{index === 0 ? '' : <Divider />}
			<HStack>
				<FormControl
					display={'flex'}
					alignItems={'center'}
					justifyContent={'space-between'}
					m={1}
					p={2}
				>
					<FormLabel
						htmlFor={question.name}
						mb='0'
					>
						{question.prompt}
					</FormLabel>
					<Switch
						id={question.name}
						{...registerHook(question.name, { onChange: onToggle })}
					/>
				</FormControl>
				<Fade in={showAnswer}>
					<Text w={'3ch'}>{answer ? 'Yes' : 'No'}</Text>
				</Fade>
			</HStack>
		</>
	);
};

//	HISTORY FORM
interface HistoryFormProps {
	historyData: IHistoryData;
	questionData: HistoryQuestion[];
	handleData: (data: IHistoryData) => void;
	navRegress: () => void;
	navProgress: () => void;
}

const FormHistory = ({
	historyData,
	questionData,
	handleData,
	navRegress,
	navProgress,
}: HistoryFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
	} = useForm<IHistoryData>({
		defaultValues: {
			...historyData,
		},
	});

	const formData: HistoryQuestion[] = questionData.map((question) => {
		return {
			...question,
			answer:
				Object.entries(historyData).find(
					(e) => e[0] === question.name,
				)?.[1] ?? null,
		};
	});

	const handleSetData: SubmitHandler<IHistoryData> = (data) => {
		if (isValid) {
			handleData(data);
			navProgress();
		}
		console.log('handleSetData() > isValid: ', isValid); // !!!
	};

	return (
		<Box
			as='form'
			w={'full'}
			onSubmit={handleSubmit(handleSetData)}
		>
			<Heading
				w='100%'
				textAlign={'center'}
				fontWeight='normal'
				mb='2%'
			>
				Questions
			</Heading>

			{formData.map((question, index) => (
				<Question
					key={index}
					index={index}
					question={question}
					registerHook={register}
				/>
			))}

			<NavGroup
				stepNow={2}
				navRegress={navRegress}
				navProgress={navProgress}
			/>
		</Box>
	);
};

export default FormHistory;
