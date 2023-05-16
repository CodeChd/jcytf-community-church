import Layout from "@/components/Layout";

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
            <h2 className="fsi-600">Samaritana</h2>
            <p className=" fsi-500">
              Samaritana Transformation Ministries is a non-profit,
              non-denominational organization committed to sharing and living
              out the Gospel among Filipino women caught in prostitution, in
              partnership with other members of the Body of Christ
            </p>
          </div>

          <div className="partners-b1m ">
            <h2 className="fsi-600">Bawat Isa Mahalaga (B1M)</h2>
            <p className="fsi-500">
              a movement of citizens and groups of citizens, whose mission is to
              pursue transformation of the Filipino nation. 
            </p>
          </div>

          <div className="partners-pem">
            <h2 className="fsi-600">PEM</h2>
            <p className=" fsi-500">
              1 Corinthians : 12 -For as the body is one, and hath many members,
              and all the members of that one body, being many, are one body: so
              also is Christ.
            </p>
          </div>
        </main>
      </section>
    </Layout>
  );
};

export default partners;
