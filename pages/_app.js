import Layout from '../components/Layout'
import '../styles/globals.css'
// import variables from '../styles/variables.module.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
