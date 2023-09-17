import { sendEmailSMTP } from '../../../../lib/email';
import ResultsEmail from '../../../../emails/emailLayout';
import {
	IFormsData,
	answerIsAnIssueState,
	historyQuestions,
} from '@/data/questionData';
import { render } from '@react-email/render';

export async function POST(req: Request): Promise<Response> {
	try {
		const body: IFormsData = (await req.json()) as IFormsData;
		const {
			identityData: { email, firstName, lastName },
			historyData,
		} = body;

		if (
			email &&
			firstName &&
			lastName &&
			historyData &&
			process.env.SMTP_USER
		) {
			const emailHtml: string = render(
				ResultsEmail({
					historyData: historyData,
					identityData: body.identityData,
					issueStateData: answerIsAnIssueState,
					questionData: historyQuestions,
				}),
			);
			const smtpResponse = await sendEmailSMTP({
				to: [email, String(process.env.SMTP_USER)],
				subject: `Dental Risk Results for ${firstName} ${lastName}`,
				text: `Results For ${firstName} ${lastName}`,
				html: emailHtml,
			});

			return new Response(JSON.stringify(smtpResponse));
		}

		throw new Error('ERR! Insufficent Data');
	} catch (error: any) {
		console.log('ROUTE ERR: ', error);
		return error;
	}
}

//======REF======

// interface SentMessageInfo {
// 			/** includes the envelope object for the message */
// 		envelope: MimeNode.Envelope;
// 			/** most transports should return the final Message-Id value used with this property */
// 		messageId: string;
// 		accepted: Array<string | Mail.Address>;
// 		rejected: Array<string | Mail.Address>;
// 		pending: Array<string | Mail.Address>;
// 		response: string;
// }
