/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/EventItem.module.css'


export default function EventItem({ evt }) {


    
    return (
        <div className={styles.event}>
            <div className={styles.img}>
                <Image src={evt.attributes.image ? evt.attributes.image.data.attributes.formats.thumbnail.url : '/images/event-default.png'} width={170} height={100} alt="Event" />
            </div>

            <div className={styles.info}>
                <span >
                    {new Date (evt.attributes.date).toLocaleDateString('en-US')} AT {evt.attributes.time}
                </span>
                <h3>{evt.attributes.name}</h3>

            </div>

            <div className={styles.link}>
                <Link href={`/events/${evt.attributes.slug}`}>
                    <div className="btn">Details</div>
                </Link>
            </div>

        </div>
    )
    
}
