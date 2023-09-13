import nodemailer from "nodemailer"

type EmailPayload = {
  to: string[]
  subject: string
  text: string
  html: string
}

// Replace with your SMTP credentials
const smtpOptions = {
  host: String(process.env.SMTP_HOST),
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: String(process.env.SMTP_USER),
    pass: String(process.env.SMTP_PASS),
  },
}

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  })

  return await transporter.sendMail({
    from: process.env.SMTP_USER,
    ...data,
  })
}