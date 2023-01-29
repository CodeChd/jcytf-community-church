import Link from "next/link"
import styles from '@/styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Developed by | Carl | All Star Group</p>

                <p>
                <Link href='/about'>About This Project</Link> 
                </p>
        </footer>
    )
}

export default Footer