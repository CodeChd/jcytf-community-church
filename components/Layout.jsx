import Head from "next/head"
import styles from '@/styles/Layout.module.css'
import Footer from "./Footer"
import Header from "./Header"
import Showcase from "@/components/Showcase"
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
  title: 'JCYTF | Community Church',
  description: 'kingdom of god',  
  keywords: 'church, group, worships, prayer, events, quezon city, payatas'
}

export default Layout