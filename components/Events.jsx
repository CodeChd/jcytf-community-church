import EventItem from "@/components/EventItem";
import Link from "next/link";

export default function Events({events}) {
  return (
    <div>

        <div className="events-container">

      <h1 className=" ft-home uppercase">Featured Events</h1>
      <div className='center'>
      {events.data.length === 0 && <h3>No events to show!</h3>}
      </div>

      {events.data.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))
      }

      {events.data.length > 0 && (<Link href='/events'><button className="btn-secondary fs-300">View More</button></Link>)}
      
      </div>

    </div>
  )
}




