import { ContactFormType } from 'types/models'

export const sendContactForm = async (data: ContactFormType) =>
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => {
    if (!res.ok) throw new Error('Failed to send contact form')
    return res.json()
  })
