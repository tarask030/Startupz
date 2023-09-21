import {
  ContactForm,
  Footer,
  OurCoreValues,
  OurWork,
  WeAreHiring,
  SolvingProblems,
  WhoWeAre,
  Header,
  NavBar,
} from 'components'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>We Create Startups.</title>
        <meta name='description' content='Startupz. We Create Startups.' />
      </Head>
      <NavBar />
      <Header />
      <WhoWeAre />
      <SolvingProblems />
      <OurCoreValues />
      <OurWork />
      <WeAreHiring />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Home
