import { HistoryQuestion } from '@/data/questionData';
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
import { IHistoryData, IIdentityData } from './MultiStep';
import NavGroup from './NavGroup';
import {
	RegisterOptions,
	SubmitHandler,
	UseFormRegister,
	useForm,
} from 'react-hook-form';

// QUESTION COMPONENT
interface IQuestionProps {
	index: number;
	question: HistoryQuestion;
	registerHook: UseFormRegister<IHistoryData>;
}
const Question = ({ index, question, registerHook }: IQuestionProps) => {
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
						// onChange={onToggle}
						{...registerHook(question.name, {})}
					/>
				</FormControl>
				<Fade in={showAnswer}>
					<Text w={'4ch'}>{answer ? 'Yes' : 'No'}</Text>
				</Fade>
			</HStack>
		</>
	);
};

//	HISTORY FORM
interface HistoryFormProps {
	identityData: IIdentityData;
	historyData: IHistoryData;
	questionData: HistoryQuestion[];
	handleData: (data: IHistoryData) => void;
	navRegress: () => void;
	navProgress: () => void;
}

const FormHistory = ({
	identityData,
	historyData,
	questionData,
	handleData,
	navRegress,
	navProgress,
}: HistoryFormProps) => {
	console.log('identityData: ', identityData);
	console.log('historyData: ', historyData);
	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
	} = useForm<IHistoryData>({
		defaultValues: {
			...historyData,
		},
	});

	const handleSetData: SubmitHandler<IHistoryData> = (data) => {
		console.log('handleSetData()...');
		if (isValid) {
			console.log('isValid: ', isValid);
			handleData(data);
			navProgress();
		}
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
			{questionData.map((question, index) => (
				<Question
					key={index}
					index={index}
					question={question}
					registerHook={register}
				/>
			))}

			<NavGroup
				stepNow={2}
				errors={errors}
				isValid={isValid}
				navRegress={navRegress}
				navProgress={navProgress}
			/>
		</Box>
	);
};

export default FormHistory;
