import EventItem from "@/components/EventItem";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Events({ events }) {
  return (
    <div className="events-container">
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "tween" }}
        viewport={{ once: true }}
        className="ft-home uppercase text-white"
      >
        Featured Events
      </motion.h2>
      <hr />

      <div className="center">
        {events.data.length === 0 && <h3>No events to show!</h3>}
      </div>

      {events.data.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
      {events.data.length > 0 && (
        <Link className="more-events" href="/events">
          <button className=" btn-secondary ">More Events</button>
        </Link>
      )}
    </div>
  );
}
