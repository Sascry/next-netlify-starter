import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
         <h1> Assales Amokrane, 2047462, AppWeb 2, Patrick Pierre. Facile</h1>

        </p>
      </main>

      <Footer />
    </div>
  )
}
