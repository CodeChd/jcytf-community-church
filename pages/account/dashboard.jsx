import DashEvent from "@/components/DashEvent"
import Layout from "@/components/Layout"
import { API_URL } from "@/config/index"
import { parseCookies } from "@/helper/index"
import styles from '@/styles/Dashboard.module.css'
import Link from "next/link"
import { useRouter } from "next/router"




export default function Dashboard({ events, token }) {
    const router = useRouter()

    

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
            <div className={styles.dash}>
                <h1>Dashboard</h1>
                <div className={styles.grid}>

                    <h3>My Events</h3>
                    

                    <Link href='/add'>
                        <p className="btn-event btn-icon">Add Event</p>
                    </Link>

                </div>



                {events.map((e) => (
                    <DashEvent key={e.id} evt={e} handleDelete={delEvent} />
                ))}

            </div>
        </Layout>
    )
}

export async function getServerSideProps({ req }) {
    const { token } = parseCookies(req)

    const res = await fetch(`https://capstone-jcytf-ccc1.onrender.com/api/events/me`, {
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
