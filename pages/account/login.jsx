
import { useState, useEffect, useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/Auth.module.css'

export default function login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) =>{
        e.preventdefault()
        console.log('hello')
    }

  return ( 
    <Layout title="User Login">
        <div className={styles.auth}>
            <h1>
                <FaUser/> LOGIN
            </h1>
            <ToastContainer/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" >Email</label>
                    <input type="email"  placeholder='Email Address' id='email' value={email} onChange={(x) => setEmail(x.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password" >Password</label>
                    <input type="password"  placeholder='Password' id='password' value={password} onChange={(x) => setPassword(x.target.value)}/>
                </div>

                <input type="submit" value='Login' className='btn' />
            </form>
            <p>Don't have an account? <Link href='/account/register'>Register</Link></p>
        </div>
    </Layout>
  )
}
