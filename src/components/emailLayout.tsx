import { STR } from '@/data/stringConstants';
import { Column } from '@react-email/column';
import { Container } from '@react-email/container';
import { Font } from '@react-email/font';
import { Head } from '@react-email/head';
import { Heading } from '@react-email/heading';
import { Html } from '@react-email/html';
import { Text } from '@react-email/text';
import * as React from 'react';
import { IResultsList, buildResults } from './ResultsList';
import { IIdentityData } from './MultiStep';
import { HealthIssue } from '@/data/questionData';

interface IResultsEmail extends IResultsList {
	identityData: IIdentityData;
}

export default function ResultsEmail({
	historyData,
	identityData,
	issueStateData,
	questionData,
}: IResultsEmail) {
	const resultsData = buildResults(historyData, issueStateData, questionData);

	return (
		<Html lang='en'>
			<Head>
				<title>{STR.RESULT_TITLE}</title>
				<Font
					fontFamily='Roboto'
					fallbackFontFamily='Verdana'
					webFont={{
						url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
						format: 'woff2',
					}}
					fontWeight={400}
					fontStyle='normal'
				/>
			</Head>
			<Container>
				<Heading id={'main-heading'}>{STR.RESULT_TITLE}</Heading>
				<p>
					{`Hello ${identityData.firstName} ${identityData.lastName},`}
				</p>
				<p>
					Thank you for completing our new patient intake form! We
					have provided the results to your answers below. This
					information is for your benefit as a future patient. Please
					review this information before your next appointment.
				</p>
				<p>
					We look forward to improving your dental health in the near
					future!
				</p>
				<Column id={'results-cont'}>
					{resultsData.map((question, index) => {
						return (
							<div
								key={index}
								className={'question-cont'}
							>
								<Heading id={'prompt-heading'}>
									{question.resultPrompt}
								</Heading>
								<Column>
									{question.result.map((issue, index) => {
										return issue.isShown ? (
											<div
												key={index}
												className={'result-cont'}
											>
												<Heading>{issue.name}</Heading>
												<Text>{issue.desc}</Text>
											</div>
										) : (
											''
										);
									})}
								</Column>
							</div>
						);
					})}
				</Column>
			</Container>
		</Html>
	);
}
