// import { useRouter } from 'next/router';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPencilAlt, FaTimes,FaRegHandPeace } from 'react-icons/fa'
import Link from "next/link";
import Image from "next/image";
import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";
import styles from '@/styles/Event.module.css'


const slug = ({ evt }) => {


  return (
    <Layout>

      <div className={styles.event}>
        {/* <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <span>  <FaPencilAlt /> Edit Event </span>
          </Link>

          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div> */}

        <span>
        {new Date (evt.attributes.date).toLocaleDateString('en-US')} at {evt.attributes.time}
        </span>
        <h1>{evt.attributes.name}</h1>
        {evt.attributes.image.data !== null ? (
          <div className={styles.image}>
              <Image src={evt.attributes.image.data.attributes.formats.medium.url} width={960} height={600} alt="Event"/>
             </div>
        ): (<FaRegHandPeace size={40}/>) }
      </div> 

      <h3>Performers:</h3>
      <p>{evt.attributes.performers}</p>
      <h3>Description:</h3>
      <p>{evt.attributes.description}</p>
      <h3>Venue: {evt.attributes.venue}</h3>
      <p>{evt.attributes.address}</p>


      <Link href='/events'>
        <p className={styles.back}>
          {"<"} Go Back
        </p>
      </Link>

    </Layout>
  )
}

export default slug;


// export async function getStaticPaths() {
//   const res = await fetch(`https://capstone-jcytf-ccc1.onrender.com/api/events`)
//   const events = await res.json()

//   const paths = events.data.map((evt) => ({
//     params: { slug: evt.attributes.slug }
//   }))

//   return {
//     paths,
//     fallback: true
//   }
// }


// export async function getStaticProps({params : {slug}}) {     

//   const res = await fetch(`https://capstone-jcytf-ccc1.onrender.com/api/events?populate=*&filters\[slug\]=${slug}`)
//   const events = await res.json()
//   console.log(events)

//   return {
//     props: {
//       evt: events.data[0]
//     },
//     revalidate: 1
//   }
// }

export async function getServerSideProps({params : {slug}}) {     

  const res = await fetch(`https://capstone-jcytf-ccc1.onrender.com/api/events?populate=*&filters\[slug\][$eq]=${slug}`)
  const events = await res.json()


  return {
    props: {
      evt: events.data[0]
    },
  }
}



