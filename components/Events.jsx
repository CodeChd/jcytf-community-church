import EventItem from "@/components/EventItem";
import Link from "next/link";

export default function Events({ events }) {
  return (

    <div className="events-container">

      <h2 className="ft-home uppercase text-white fsi-700">Featured Events</h2>
      <hr />


      <div className='center'>
        {events.data.length === 0 && <h3>No events to show!</h3>}
      </div>

      {events.data.map((evt) => (


        <EventItem key={evt.id} evt={evt} />

      ))
      }

      {events.data.length > 0 && (<Link href='/events'><button className="btn-secondary  ">More Events</button></Link>)}

    </div>




  )
}




