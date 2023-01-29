import Link from "next/link"
import styles from '@/styles/Header.module.css'
import Search from "./Search"
import { useRouter } from "next/router"

const Header = () => {

    const router = useRouter()
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>
                    <p>Festival Events</p>
                </Link>

            </div>

            {router.pathname === '/events' && 'events/search' && <Search/>}
 
            <nav>
                <ul>
                    <li>
                        <Link href='/events'>
                            <p> Events</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='/events/add'>
                            <p>Add Event</p>
                        </Link>
                    </li>
                    `
                </ul>
            </nav>
        </header>
    )
}

export default Header