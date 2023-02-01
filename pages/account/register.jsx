
import { useState, useEffect, useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/Auth.module.css'

export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('hello')

        if(password !== passwordConfirm){
            toast.error('Password do not match!')
            return
        }

        console.log({username, email, password})

    }

  return ( 
    <Layout title="User Registration">
        <div className={styles.auth}>
            <h1>
                <FaUser/> REGISTER
            </h1>
            <ToastContainer/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username" >Username</label>
                    <input type="text"  placeholder='Username' id='username' value={username} onChange={(x) => setUsername(x.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email" >Email</label>
                    <input type="email"  placeholder='Email Address' id='email' value={email} onChange={(x) => setEmail(x.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password" >Password</label>
                    <input type="password"  placeholder='Password' id='password' value={password} onChange={(x) => setPassword(x.target.value)}/>
                </div>
                <div>
                    <label htmlFor="passwordConfirm" >Confirm Password</label>
                    <input type="password"  placeholder='Password' id='passwordConfirm' value={passwordConfirm} onChange={(x) => setPasswordConfirm(x.target.value)}/>
                </div>

                <input type="submit" value='Login' className='btn' />
            </form>
            <p>Already have an account? <Link href='/account/login'>Login</Link></p>
        </div>
    </Layout>
  )
}
