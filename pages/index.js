import Head from 'next/head'
import Article  from '../components/Article'

export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
        <Head>
          <title>WebDev Newz</title>
          <meta name='keywords' content='Web Development, programming' />
        </Head>
        <h1>Welcome to the NextJs Project</h1>
        <Article articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}