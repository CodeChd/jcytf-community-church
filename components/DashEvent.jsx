import Link from "next/link"
import { FaPencilAlt,FaTimes } from "react-icons/fa"
import styles from '@/styles/DashEvent.module.css'

export default function DashEvent({evt, handleDelete}) {
  return (
    <div className={styles.event}>
        <h4>
            <Link href={`/events/${evt.slug}`}>
                <p>{evt.name}</p>
            </Link>
        </h4>
    <Link href={`/events/edit/${evt.id}`}>
        <FaPencilAlt/><span className={styles.edit}>Edit Event</span>
    </Link>

    <a href="#" className={styles.delete} onClick={() => handleDelete(evt.id)}>
        <FaTimes/> Delete
    </a>

    
    </div>
  )
}
