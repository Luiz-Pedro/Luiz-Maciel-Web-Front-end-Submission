import Head from 'next/head'
import PosterrLogo from '../assets/logo.svg'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Home Page / Posterr</title>
      </Head>

      <main >
        <PosterrLogo/>

        <h1>Welcome to <a href="https://nextjs.org">Next.js!</a></h1>

      </main>
    </div>
  )
}
