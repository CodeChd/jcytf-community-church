import Events from "@/components/Events";
import Layout from "@/components/Layout";
import OurStory from "@/components/OurStory";
import Quote from "@/components/Quote";
import { API_URL } from "../config";
import WhatNext from "@/components/WhatNext";
import Answers from "@/components/Answers";
import OurPastor from "@/components/OurPastor";

export default function Home({ events }) {



  return (
    <Layout>

      <OurStory/>
      <Quote/>
      
      <Events   events={events}/>
      <WhatNext/>
      <Answers/>
      <OurPastor/>


    </Layout>
  );
}


export async function getServerSideProps() {

  //fetch events
  const res = await fetch(`${ API_URL }/api/events?sort=date%3Aasc&pagination[limit]=3&populate=*`)
  const events = await res.json()


  return {
    props: { events },
 
  }
}
