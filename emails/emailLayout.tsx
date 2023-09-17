import { STR } from '@/data/stringConstants';
import { Column } from '@react-email/column';
import { Container } from '@react-email/container';
import { Font } from '@react-email/font';
import { Head } from '@react-email/head';
import { Heading } from '@react-email/heading';
import { Html } from '@react-email/html';
import { Text } from '@react-email/text';
import { Hr } from '@react-email/hr';
import * as React from 'react';
import { IIdentityData, IResultsList } from '@/data/questionData';
import { buildServerResults } from '../lib/buildResults';

interface IResultsEmail extends IResultsList {
	identityData: IIdentityData;
}

export default function ResultsEmail({
	historyData,
	identityData,
	issueStateData,
	questionData,
}: IResultsEmail) {
	const resultsData = buildServerResults(
		historyData,
		issueStateData,
		questionData,
	);

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
			<body
				style={{
					backgroundColor: '#1A202C',
					color: '#F7FAFC',
					borderRadius: 12,
					paddingTop: 8,
					paddingRight: 12,
					paddingBottom: 12,
					paddingLeft: 18,
					margin: 'auto',
				}}
			>
				<Column style={{ margin: 'auto', maxWidth: 900 }}>
					<div
						style={{
							padding: 8,
							marginTop: 12,
							marginBottom: 12,
							borderRadius: 12,
							marginLeft: 8,
						}}
					>
						<Heading
							id={'main-heading'}
							style={{ color: '#38A169' }}
						>
							{STR.RESULT_TITLE}
						</Heading>
						<div
							style={{
								backgroundColor: '#2D3748',
								color: '#F7FAFC',
								padding: 18,

								marginBottom: 12,
								borderRadius: 12,
								marginLeft: 8,
							}}
						>
							<p style={{ fontSize: '16px', color: '#F7FAFC' }}>
								{`Hello ${identityData.firstName} ${identityData.lastName},`}
							</p>
							<p style={{ fontSize: '16px', color: '#F7FAFC' }}>
								Thank you for completing our new patient intake
								form! We have provided the results to your
								answers below.
							</p>
							<p style={{ fontSize: '16px', color: '#F7FAFC' }}>
								This information is for your benefit as a future
								patient. Please review this information before
								your next appointment.
							</p>
							<p style={{ fontSize: '16px', color: '#F7FAFC' }}>
								We look forward to improving your dental health
								in the near future!
							</p>
							<p style={{ fontSize: '16px', color: '#F7FAFC' }}>
								{STR.DOCTOR_SIGNATURE}
							</p>
						</div>
					</div>

					<div id={'results-cont'}>
						{resultsData.map((question, index) => {
							return (
								<div
									key={index}
									className={'question-cont'}
									style={{ marginLeft: 18 }}
								>
									<Hr />
									<Heading
										as={'h2'}
										id={'prompt-heading'}
										style={{ color: '#ECC94B' }}
									>
										{question.resultPrompt}
									</Heading>
									<ul
										style={{ margin: 12, fontSize: '14px' }}
									>
										{question.result.map((issue, index) => {
											return issue.isShown ? (
												<li
													key={index}
													className={'result-cont'}
													style={{ margin: 12 }}
												>
													<div
														style={{
															fontWeight: 'bold',
															color: '#4299E1',
														}}
													>
														{issue.name}
													</div>
													<div
														style={{
															marginLeft: 6,
															color: '#F7FAFC',
														}}
													>
														{issue.desc}
													</div>
												</li>
											) : (
												''
											);
										})}
									</ul>
								</div>
							);
						})}
					</div>
				</Column>{' '}
			</body>
		</Html>
	);
}
