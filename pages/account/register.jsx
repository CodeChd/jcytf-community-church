
import { useState, useEffect, useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/Auth.module.css'
import AuthContext from '@/context/AuthContext';


export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')


    const { register } = useContext(AuthContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('hello')

        if (!username || !email || !password || !passwordConfirm) {
            toast.error("Fill In the Required fields");
            return;
        }

        else if (password !== passwordConfirm) {
            toast.error('Password do not match!')
            return
        }

        register({ username, email, password })

    }

    return (
        <Layout title="User Registration">
            <div className="sub-container">
                <div className={styles.auth}>
                    <h1>
                        <FaUser /> REGISTER
                    </h1>
                    <ToastContainer />
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username" >Username</label>
                            <input type="text" placeholder='Username' id='username' value={username} onChange={(x) => setUsername(x.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="email" >Email</label>
                            <input type="email" placeholder='Email Address' id='email' value={email} onChange={(x) => setEmail(x.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password" >Password</label>
                            <input type="password" placeholder='Password' id='password' value={password} onChange={(x) => setPassword(x.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="passwordConfirm" >Confirm Password</label>
                            <input type="password" placeholder='Password' id='passwordConfirm' value={passwordConfirm} onChange={(x) => setPasswordConfirm(x.target.value)} />
                        </div>

                        <input type="submit" value='Register' className='btn' />
                    </form>
                    <p>Already have an account? <Link href='/account/login'>Login</Link></p>
                </div>
            </div>
        </Layout>
    )
}
