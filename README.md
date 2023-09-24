## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Check The Contact Form

The results of the form on Vercel are sent to my email address. To set it up for yourself, you need to:

1. Install this repository locally.

2. Create a password on your Google account:

It would help if you generated an app password to use nodemailer.

- First, you need to turn on two-factor-authentication.
- And then in your manage account go to security.
- You can see the app password below two-step verification.
- Go to app password select and other and write custom app name (example project name) and click on generate.
- You get a password use that password instead of your mail password.

3. Rename the .env.example file to .env in the project.
4. Paste in the file .env password without spaces in the EMAIL_PASS line, and insert your email in the EMAIL line.
5. If you did everything right - congratulations, the form is working!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
