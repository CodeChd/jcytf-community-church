import DashEvent from "@/components/DashEvent"
import Layout from "@/components/Layout"
import { API_URL } from "@/config/index"
import AuthContext from "@/context/AuthContext"
import { parseCookies } from "@/helper/index"
import styles from '@/styles/Dashboard.module.css'
import Link from "next/link"
import { useRouter } from "next/router";
import { useCallback, useContext } from "react"




export default function Dashboard({ events, token }) {
    const router = useRouter()

    const { user } = useContext(AuthContext);

    useCallback(() => {
        if (!user) {
            router.push('/account/enter');
        }

        if (user) {
            router.push('/account/dashboard')
        }




    });

    if (!user) {
        return null;
    };




    const delEvent = async (id) => {
        if (confirm('Are you sure?')) {

            const res = await fetch(`${API_URL}/api/events/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const data = await res.json()

            if (!res.ok) {
                toast.error(data.message)
            } else {
                router.push('/events')
            }

        }

    }

    return (
        <Layout title="User Dashboard">
            <div className="sub-container">
                <div className={styles.dash}>
                    <h1>DASHBOARD</h1>
                    <div className={styles.grid}>

                        <h3>MY EVENTS</h3>


                        <Link href='/add'>
                            <p className="btn-event btn-icon">Add Event</p>
                        </Link>

                    </div>

                    {events &&


                        events.map((e) => (
                            <DashEvent key={e.id} evt={e} handleDelete={delEvent} />
                        ))}



                </div>
            </div>
        </Layout>
    )

}
export async function getServerSideProps({ req }) {
    const { token } = parseCookies(req)



    if (token) {



        const res = await fetch(`${API_URL}/api/events/me`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const events = await res.json()

        return {
            props: { events, token }

        }
    }


    else {

        return {
            props: {},
        };
    };
}
