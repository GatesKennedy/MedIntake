export type Question = {
	name: string;
	prompt: string;
	result: string;
}
export const questionData: Question[] = [
	{
	name: 'hasDentures',
	prompt: 'Do your parents have dentures?',
	result: 'You are more likely to have dentures.'
},
	{
	name: 'isSmoker',
	prompt: 'Do you smoke?',
	result: 'You are more likely to loose teeth.'
},
	{
	name: 'isDrinker',
	prompt: 'Do you drink?',
	result: 'You are more likely to loose teeth.'
},
]