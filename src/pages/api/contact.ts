import { transporter } from 'config/nodemailer'
import { mailOptions } from 'config'
import { ContactFormType } from 'types/models'
import { NextApiResponse, NextApiRequest } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data = req.body as ContactFormType | null
    if (!data?.name || !data?.email || !data?.message) {
      return res.status(400).json({ message: 'Bad Request' })
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: 'New contact!',
        html: `<div>
          <h1>Name: ${data.name}</h1>
          <h2>Email: ${data.email}</h2>
          </br>
          </br>
          <p>${data.message}</p>
        </div>
        `,
      })
      return res.status(200).json({ success: true })
    } catch (error) {
      return res.status(400).json({ message: error })
    }
  }

  return res.status(400).json({ message: 'Bad Request' })
}

export default handler
