export type IdentityQuestion = {
	name: string;
	prompt: string;
	error: string;
	result: string | null;
	answer: string | null;
}
export const identityQuestions: IdentityQuestion[] = [
	{
		name: 'firstName',
		prompt: 'First Name is required...',
		error: 'First Name is required...',
		result: null,
		answer: null
	},
	{
		name: 'lastName',
		prompt: 'Last Name is required...',
		error: 'Last Name is required...',
		result: null,
		answer: null
	},
	{
		name: 'email',
		prompt: 'Where will we send your results?',
		error: 'Where will we send your results?',
		result: null,
		answer: null
	},
]

export enum IdentityNameEnum  {
	ID_EMAIL = 'email',
	ID_FIRST_NAME = 'firstName',
	ID_LAST_NAME = 'lastName',
}
export enum QuestionNameEnum {
	HAS_APNEA = 'hasApnea',
	HAS_DENTURED_PARENTS = 'hasDenturedParents',
	HAS_GUM_DISEASE = 'hasGumDisease',
	HAS_VASCULAR_ISSUE = 'hasVascularIssue',
	IS_CLEANED_RECENTLY = 'isCleanedRecently',
	IS_COFFEE_REGULAR = 'isCoffeeRegular',
	IS_DIABETIC = 'isDiabetic',
	IS_MEDICATED = 'isMedicated',
	IS_OVER_SIXTYFIVE = 'isOver65',
	IS_SMOKER = 'isSmoker',
}

export type HistoryQuestion = {
	name: QuestionNameEnum;
	prompt: string;
	result: string;
	// answer: boolean | null;
}

export const historyQuestions: HistoryQuestion[] = [
	{
		name: QuestionNameEnum.IS_OVER_SIXTYFIVE,
		prompt: 'Are you over 65 years old?',
		result: 'You are more likely to...',
		// answer: null
	},
	{
		name: QuestionNameEnum.IS_DIABETIC,
		prompt: 'Do you have Type-II Diabetes?',
		result: 'You are more likely to...',
		// answer: null
	},
	{
		name: QuestionNameEnum.IS_MEDICATED,
		prompt: 'Do you take at least 3 medications?',
		result: 'You are more likely to...',
		// answer: null
	},
	{
		name: QuestionNameEnum.HAS_VASCULAR_ISSUE,
		prompt: 'Have you ever had a heart attack or stroke?',
		result: 'You are more likely to...',
		// answer: null
	},
	{
		name: QuestionNameEnum.HAS_APNEA,
		prompt: 'Do you have sleep apnea?',
		result: 'You are more likely to...',
		// answer: null
	},
	{
		name: QuestionNameEnum.IS_COFFEE_REGULAR,
		prompt: 'Do you drink coffee regularly?',
		result: 'You are more likely to...',
		// answer: null
	},
	{
		name: QuestionNameEnum.HAS_GUM_DISEASE,
		prompt: 'Have you been diagnosed with gum disease?',
		result: 'You are more likely to...',
		// answer: null
	},
	{
		name: QuestionNameEnum.HAS_DENTURED_PARENTS,
		prompt: 'To your knowledge, do either of your parents have dentures?',
		result: 'You are more likely to...',
		// answer: null
	},
	{
		name: QuestionNameEnum.IS_SMOKER,
		prompt: 'Do you smoke anything regularly?',
		result: 'You are more likely to...',
		// answer: null
	},
	{
		name: QuestionNameEnum.IS_CLEANED_RECENTLY,
		prompt: 'Have you had a dental cleaning within the last 3 years?',
		result: 'You are more likely to...',
		// answer: null
	},
]