export type Question = {
	name: string;
	prompt: string;
	result: string;
}
export const questionData: Question[] = [
	{
		name: 'isOver65',
		prompt: 'Are you over 65 years old?',
		result: 'You are more likely to...'
	},
	{
		name: 'isDiabetic',
		prompt: 'Do you have Type-II Diabetes?',
		result: 'You are more likely to...'
	},
	{
		name: 'isMedicated',
		prompt: 'Do you take at least 3 medications?',
		result: 'You are more likely to...'
	},
	{
		name: 'hasVascularIssue',
		prompt: 'Have you ever had a heart attack or stroke?',
		result: 'You are more likely to...'
	},
	{
		name: 'hasApnea',
		prompt: 'Do you have sleep apnea?',
		result: 'You are more likely to...'
	},
	{
		name: 'isCoffeeRegular',
		prompt: 'Do you drink coffee regularly?',
		result: 'You are more likely to...'
	},
	{
		name: 'hasGumDisease',
		prompt: 'Have you been diagnosed with gum disease?',
		result: 'You are more likely to...'
	},
	{
		name: 'hasDentures',
		prompt: 'To your knowledge, do either of your parents have dentures?',
		result: 'You are more likely to...'
	},
	{
		name: 'isSmoker',
		prompt: 'Do you smoke anything regularly?',
		result: 'You are more likely to...'
	},
	{
		name: 'isCleaned',
		prompt: 'Have you had a dental cleaning within the last 3 years?',
		result: 'You are more likely to...'
	},
]