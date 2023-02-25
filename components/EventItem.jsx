/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/EventItem.module.css'
import { useRouter } from "next/router"



export default function EventItem({ evt }) {
    const router = useRouter()

    return (
        
        <div className={styles.event}>
            <div className={styles.img}>
                {
                evt.attributes.image.data === null ? (<Image src={router.pathname === "/events" ? '/images/event-default_dark.svg' : '/images/event-default.svg'} width={170} height={150} alt="Event" /> )
                :
                ( <Image src={evt.attributes.image.data.attributes.formats.medium.url} width={200} height={180} alt="Event" />)
                
                }
               
            </div>

            <div className={styles.info}>
                <h3 >{evt.attributes.name}</h3>
                <span >
                    {evt.attributes.date ? new Date (evt.attributes.date).toLocaleDateString('en-US'): ""} AT {evt.attributes.time && evt.attributes.time}
                </span>

            </div>

            <div className={`${styles.link} detail-btn`}>
                <Link href={`/events/${evt.attributes.slug}`}>
                    <div className="btn ">Details</div>
                </Link>
            </div>

        </div>
        
    )
    
}
