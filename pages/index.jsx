import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import { API_URL } from '@/config/index';
import Link from "next/link";


export default function Home({ events }) {



  console.log(events, "index")
  return (
    <Layout>


      <h1>Upcoming Events</h1>
      <div className='center'>
      {events.data.length === 0 && <h3>No events to show!</h3>}
      </div>

      {events.data.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))
      }

      {events.data.length > 0 && (<Link href='/events'><button className="btn-secondary">View All Events</button></Link>)}
      


    </Layout>
  );
}

export async function getServerSideProps() {

  //fetch events
  const res = await fetch(`https://capstone-jcytf-ccc1.onrender.com/api/events?sort=date%3Aasc&pagination[limit]=3&populate=*`)
  const events = await res.json()


  return {
    props: { events },
 
  }
}