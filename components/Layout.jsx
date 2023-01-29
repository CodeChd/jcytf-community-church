import Head from "next/head"
import styles from '@/styles/Layout.module.css'
import Footer from "./Footer"
import Header from "./Header"
import Showcase from "pages/events/Showcase"
import { useRouter } from "next/router"

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} /> 
        <meta name='keywords' content={keywords} />
      </Head>


      <Header />
      {router.pathname === '/' && <Showcase />}
      <div className={styles.container}>

        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Festival Event | full weekend of live music entertaiment',
  description: 'Find the latest DJ and other musical events ',
  keywords: 'music, dj, edm, events '
}

export default Layout