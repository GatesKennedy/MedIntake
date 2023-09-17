import {
	HistoryQuestion,
	IHistoryData,
	QuestionNameEnum,
} from '@/data/questionData';

export function buildServerResults(
	historyData: IHistoryData,
	issueState: IHistoryData,
	questionData: HistoryQuestion[],
): HistoryQuestion[] {
	console.log('buildResults()...');
	const resultsArray: HistoryQuestion[] = [];
	const answersArray = Object.entries(historyData).filter(
		(a) => a[1] === issueState[a[0] as QuestionNameEnum],
	);
	answersArray.forEach((a) => {
		const result = questionData.find(
			(q) => q.name === (a[0] as QuestionNameEnum),
		);
		if (result) {
			result.answer = a[1];
			resultsArray.push(result);
		}
	});

	return resultsArray;
}
