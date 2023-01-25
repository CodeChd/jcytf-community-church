import Link from "next/link"
import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>
                    <p>Festival Events</p>
                </Link>

            </div>
 
            <nav>
                <ul>
                    <li>
                        <Link href='/events'>
                            <p> Events</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header