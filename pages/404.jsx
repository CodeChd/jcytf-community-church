import Link from "next/link"
import Layout from "@/components/Layout"
import styles from '@/styles/404.module.css'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
    return (
        <Layout title='Page Not Found'>
            <div className="sub-container">
                <div className={styles.error}>
                    <h1><FaExclamationTriangle/> 404</h1>
                    <h4>heyy!.. there is nothing here!</h4>
                    <Link href='/'>Go Back Home</Link>

                </div>
            </div>
        </Layout>
    )
}

export default NotFoundPage