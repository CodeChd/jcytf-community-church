import Layout from "@/components/Layout";
import { Properties } from "@/helper/css";
import Image from "next/image";
import Place from "../public/images/place.jpg";
import Link from "next/link";

const visit = () => {
  return (
    <Layout>
      <main style={{ paddingTop: "7rem" }}>
        <section className="Visit-hero">
          <div className="Visit-hero-info">
            <p className="fsi-500">
              Address Madjaas Street Group 2, Area B, Quezon City 1119 Manila
            </p>
            <p className="fsi-500"> Monday to Sunday 9:00 a.m. - 5:00 p.m.</p>
            <p className="fsi-500">Saturday - Closed</p>
            <p className="fsi-500">Contact 0997 574 4318</p>
            <p className="fsi-500">heraldoednas@gmail.com</p>
            <div style={{ marginTop: "2rem" }}>
              <Link
                href="https://www.google.com/maps/place/Jesus+Christ+Yesterday+Today+And+Forever+Church+Inc.+JCYTF/@14.6442202,120.9615001,12.54z/data=!4m10!1m2!2m1!1sMadjaas+Street+Group+2,+Area+B,+Quezon+City,+1119+Metro+Manila!3m6!1s0x3397ba612cfb73a1:0x9f280217a54c2b46!8m2!3d14.7124479!4d121.0989109!15sCj5NYWRqYWFzIFN0cmVldCBHcm91cCAyLCBBcmVhIEIsIFF1ZXpvbiBDaXR5LCAxMTE5IE1ldHJvIE1hbmlsYZIBEGNocmlzdGlhbl9jaHVyY2jgAQA!16s%2Fg%2F11c6q8r45p"
                className="btn-visit"
              >
                Get Directions
              </Link>
            </div>
          </div>
          <div>
            <Image src={Place} />
          </div>
        </section>
        <section className="visit-first-bg text-white text-center">
          <div className="visit-first-txt" style={Properties}>
            <h3 className="fsi-500 text-center">
              HELPING PEOPLE TAKE THEIR NEXT STEPS TOWARD CHRIST…TOGETHER.
            </h3>
            <hr className="hr-visit__1" />
            <p className="fsi-300">
              A lot of things have changed since we were founded in 1986, but
              some things never have: connecting with God and each other through
              biblical teaching, inspiring art and practical next steps that
              make a difference in the here and now.
            </p>
          </div>
        </section>
        <section className="visit-second-bg text-white">
          <div className="visit-second-txt" style={Properties}>
            <h3 className="fsi-500 ">WHO WE ARE</h3>
            <hr className="hr-visit__1" />
            <p className="fsi-300 text-center">
              We prioritize simple and clear opportunities to help people take
              their next steps toward Christ…together. We’re building a thriving
              volunteer culture that provides next-level kids, students and
              young adult ministries in addition to opportunities for women, men
              and families. The fun and adventure of life transformation is
              happening all across our weekly gatherings, events and groups, one
              relationship at a time.
            </p>
          </div>
        </section>
        <section className="visit-third-bg text-white">
          <div style={Properties} className="text-center">
            <h3 className="fsi-500 ">OUR MISSION & VISION</h3>
            <hr className="hr-visit__1" />
            <div style={{ marginBlock: "1rem" }}>
              <h4>JCYTF MISSION</h4>
              <p className="fsi-300">
                TO CONNECT WITH GOD, CONNECT WITH OTHERS, AND CONNECT OTHERS
                WITH GOD
              </p>

              <h4>JCYTF VISION</h4>
              <p className="fsi-300">
                A TRANSFORMED FOLLOWERS OF JESUS CHRIST WHO EXTEND GOD'S LOVE TO
                THE NEIGHBORHOOD AND WILL EFFECT TRANSFORMATION IN THE COMMUNITY
                AND BEYOND.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default visit;
