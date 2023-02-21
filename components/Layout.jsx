import Head from "next/head"
import styles from '@/styles/Layout.module.css'
import Footer from "./Footer"
import Header from "./Header"
import Showcase from "@/components/Showcase"
import { useRouter } from "next/router"

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} /> 
        <meta name='keywords' content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" type="image/png" sizes="32x32" href="/jcytf-website-favicon-color.png"/>
      </Head>


      <Header />
      {router.pathname === '/' && <Showcase />}
      <div className={`${styles.container} page`}>

        {children}
      </div>
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: 'JCYTF | Community Church',
  description: 'Church in Quezon City, Payatas',  
  keywords: 'church, group, worships, prayer, events, quezon city, payatas'
}

export default Layout