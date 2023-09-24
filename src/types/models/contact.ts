import { z } from 'zod'

export const ContactFormSchema = z.object({
  name: z.string().min(1).max(336),
  email: z.string().min(1).max(336).email(),
  message: z.string().min(1).max(336),
})

export type ContactFormType = z.infer<typeof ContactFormSchema>
