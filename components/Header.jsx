import { useContext, useEffect } from "react"
import Link from "next/link"
import styles from '@/styles/Header.module.css'
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa"
import AuthContext from "@/context/AuthContext"

const Header = () => {
    const { user, logout } = useContext(AuthContext)

    console.log(user)

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>
                    <p>JCYTF</p>
                </Link>

            </div>



            <nav>
                <ul>
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
                    {user ? (<>

            
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
                </ul>
            </nav>
        </header>
    )
}

export default Header