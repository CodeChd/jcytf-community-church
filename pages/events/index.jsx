import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import Pagination from "@/components/Pagination";
import { API_URL, PER_PAGE } from '@/config/index';
import Search from "@/components/Search"
import { useRouter } from "next/router"
import styles from '@/styles/EventHome.module.css'






export default function EventsPage({ events, total, page }) {
  const router = useRouter()


  return (
    <Layout>
      <div className="sub-container">
      <div className={styles.flex}>

      <h1>Events</h1>
      <div>

      {router.pathname === '/events' && 'events/search' && <Search/>}
      </div>

      </div>
      <div className="center">

      {events.data.length === 0 && <h3>No events to show!</h3>}
      </div>

      {events.data.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))
      }



      <Pagination page={page} total={total} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {

  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  //fetch total
  const totalRes = await fetch(`${API_URL}/api/events?pagination[withCount]=true`)
  const totalData = await totalRes.json()
  const total = totalData.meta.pagination.total;


  //fetch events
  const res = await fetch(`${API_URL}/api/events?sort=date%3Aasc&pagination[start]=${start}&pagination[limit]=${PER_PAGE}&populate=*`)
  const events = await res.json()


  return {
    props: { events, page: +page, total },

  }
}
