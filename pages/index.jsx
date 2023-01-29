import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import { API_URL } from '@/config/index';
import Link from "next/link";


export default function Home({ events }) {
  const res = events.data
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {res.length === 0 && <h3>No events to show!</h3>}

      {res.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))
      }

      {res.length > 0 && (<Link href='/events'><button className="btn-secondary">View All Events</button></Link>)}


    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events?populate=*`)
  const events = await res.json()
  console.log(events)


  return {
    props: { events },
    revalidate: 1,
  }
}
