
import { IFormsData } from '@/components/MultiStep'
import { sendEmail } from '../../../lib/email'


export async function POST(req: Request): Promise<Response> {
	try {
		const body: IFormsData = await req.json() as IFormsData
		const { identityData: { email, firstName, lastName }, historyData} = body

		if (email && firstName && lastName && historyData) {

			const smtpResponse = await sendEmail({
				to: [email, String(process.env.SMTP_USER) ],
				subject: `Dental Risk Results for ${firstName} ${lastName}`,
				text: `Results: `,
				html: `<div style="background-color:black;color:ivory;border-radius: 12px; padding: 24px;"><h3>Auto-Engagment from Gates_Kennedy </h3><ul>
				<li>Sender: ${firstName} ${lastName}</li>
				<li>Results: ${historyData}</li>
				</ul></div>`
			})

			return new Response(JSON.stringify(smtpResponse))
		}

		throw new Error('ERR! Insufficent Data')

	} catch (error: any) {
		console.log('ERR: ', error)
		return error
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