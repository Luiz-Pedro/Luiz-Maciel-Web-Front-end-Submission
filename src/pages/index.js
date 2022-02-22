import Head from 'next/head'
import PosterrLogo from '../assets/logo.svg'
import {Layout} from '../components/layout'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Home Page / Posterr</title>
      </Head>

      <Layout />
    </div>
  )
}
