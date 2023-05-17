import Layout from "@/components/Layout";
import Image from "next/image";
import Gcash from "../public/images/gcash.png"

const partners = () => {
  return (
    <Layout>
      <section className="partners-container">
        <h1 className="partners-heading fsi-700">Our Partners
        <hr className="hr-visit__partners" />
        </h1>
        
      </section>
      <section className="partners-bg">
        <main className="partners-info">
          <div className="partners-samaritana">
            <h2 className="fsi-600 partners-sponsor-heading">Samaritana</h2>
            <p className=" fsi-400 partners-text">
              Samaritana Transformation Ministries is a non-profit,
              non-denominational organization committed to sharing and living
              out the Gospel among Filipino women caught in prostitution, in
              partnership with other members of the Body of Christ
            </p>
          </div>

          <div className="partners-b1m ">
            <h2 className="fsi-600 partners-sponsor-heading">Bawat Isa Mahalaga (B1M)</h2>
            <p className="fsi-400 partners-text">
              a movement of citizens and groups of citizens, whose mission is to
              pursue transformation of the Filipino nation. 
            </p>
          </div>

          <div className="partners-pem">
            <h2 className="fsi-600 partners-sponsor-heading">PEM</h2>
            <p className=" fsi-400 partners-text">
              1 Corinthians : 12 -For as the body is one, and hath many members,
              and all the members of that one body, being many, are one body: so
              also is Christ.
            </p>
          </div>
        </main>
        <div className="gcash ">

          <h2 className="fsi-500 gcash-heading" >Do you want to become our ministry partner? You cand send your cash gift to expand God's Kingdom!</h2>
     
          <p className="fsi-500 gcash-info">GCASH number: 09555315564 Carla B.</p>
        </div>
      </section>
    </Layout>
  );
};

export default partners;
