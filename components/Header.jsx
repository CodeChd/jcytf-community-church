import { useContext, useState } from "react"
import Link from "next/link"
import styles from '@/styles/Header.module.css'
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa"
import AuthContext from "@/context/AuthContext"
import { FaBars } from "react-icons/fa"
import { HiX } from 'react-icons/hi'
import Image from "next/image"

const Header = () => {
    const { user, logout } = useContext(AuthContext)

    // console.log(user)
    const [click, setClick] = useState(false);
    const handleIcon = () => {
        setClick(!click);
    };


    return (
        <header className={styles.header}>
            <div className={styles.container}>

    
                    <Link href='/'>
                       <Image className={styles.nav_logo} src="/images/jcytf.png" width={68} height={60}/>
                    </Link>
              



                <nav className={
              click ? `${styles.navbar_container_menu}  ${styles.active}`  :` ${styles.navbar_container_menu} `
            }>

                    <ul  >
                        <li>
                            <Link href='/events'>
                                <p> VISIT</p>
                            </Link>
                        </li>
                        <li>
                            <Link href='/events'>
                                <p>EVENTS</p>
                            </Link>
                        </li>
                        <li>
                            <Link href='/events'>
                                <p>PROGRAMS</p>
                            </Link>
                        </li>
                        <li>
                            <Link href='/events'>
                                <p>PARTNERS</p>
                            </Link>
                        </li>
                        <li>
                            <Link href='/events'>
                                <p>MINISTRY</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.btnNav}>
                    {user ? (< >


                        <li>
                            <Link href='/account/dashboard'>
                                <h4>DASHBOARD</h4>
                            </Link>
                        </li>

                        <li>
                            <button className="btn-nav btn-icon" onClick={() => logout()}>
                                <FaSignOutAlt />LOGOUT

                            </button>
                        </li>
                    </>
                    ) : (
                        <li>
                            <Link href='/account/login'>
                                <p className="btn-secondary btn-icon"><FaSignInAlt /> Login</p>
                            </Link>
                        </li>
                    )}
                </div>

                <div className={styles.navIcon} onClick={handleIcon}>
                    {click ? <HiX fontSize="2rem" /> : <FaBars fontSize="2rem" />}
                </div>
            </div>
        </header>
    )
}

export default Header