/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/EventItem.module.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function EventItem({ evt }) {
  const router = useRouter();
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
      viewport={{ once: true }}
      className={styles.event}
    >
      <div className={styles.img}>
        {evt.attributes.image.data === null ? (
          <Image
            src={"/images/JCYTF_FOOTER.png"}
            width={170}
            height={150}
            alt="Event"
          />
        ) : (
          <Image
            priority
            src={evt.attributes.image.data.attributes.formats.medium.url}
            width={200}
            height={180}
            alt="Event"
          />
        )}
      </div>

      <div className={styles.info}>
        <span>
          {evt.attributes.date ? (
            new Date(evt.attributes.date).toLocaleDateString("en-US")
          ) : (
            <p>N/A</p>
          )}
          &nbsp;at&nbsp;{evt.attributes.time && evt.attributes.time}
          <h3>{evt.attributes.name}</h3>
        </span>
      </div>

      <motion.div transition={{ delay: 0.3 }} className={styles.link}>
        {router.pathname === "/" ? null : router.pathname === "/events" ||
          "/search" ? (
          <Link href={`/events/${evt.attributes.slug}`}>
            <div className="btn-event-details">Details</div>
          </Link>
        ) : null}

        {router.pathname === "/" ? (
          <Link href={`/events/${evt.attributes.slug}`}>
            <div className="btn">Details</div>
          </Link>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
