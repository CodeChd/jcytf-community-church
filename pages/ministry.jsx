import Layout from "@/components/Layout";
import Image from "next/image";

const ministry = () => {
  return (
    <Layout>
      <section className="ministry-bg">
        <h1 className="fsi-800 ministry-heading">MINISTRY</h1>
      </section>
      <section className="ministry-info-box">
        <div className="ministry-info">
          <h2>WORSHIP MINISTRY</h2>
          <p>
            The Worship Ministry is dedicated to facilitating meaningful and
            engaging worship experiences within the church. We strive to create
            an atmosphere where individuals can connect with God through music,
            singing, and other expressions of worship.
          </p>
        </div>
        <div className="ministry-info">
          <h2>YOUTH MINISTRY</h2>
          <p>The Youth Ministry is focused on guiding and nurturing the spiritual growth of teenagers within our church community. We provide a safe and supportive environment where young people can explore their faith, develop a personal relationship with God, and build strong Christian values.</p>
        </div>
        <div className="ministry-info">
          <h2>JUNIOR MINISTRY</h2>
          <p>The Junior Ministry is designed for children in the age group of 9 to 12 years. Our team of dedicated volunteers works to teach and inspire these young individuals to love and follow Jesus. Through interactive lessons, fun activities, and age-appropriate teachings, we aim to lay a strong foundation for their faith.</p>
        </div>
        <div className="ministry-info">
          <h2>KIDS MINISTRY</h2>
          <p>The Kids Ministry is a vibrant and engaging program for children aged 3 to 8 years old. Our passionate team is committed to introducing children to the love of Jesus and helping them understand biblical truths in a fun and interactive way. We provide age-appropriate lessons, games, crafts, and activities that nurture their spiritual growth.</p>
        </div>
        <div className="ministry-info">
          <h2>PRAYER MINISTRY</h2>
          <p>The Prayer Ministry is a vital part of our church community, dedicated to fostering a culture of prayer. We believe in the power of prayer to bring about transformation, healing, and guidance. Our ministry organizes prayer meetings, intercessory sessions, and equips individuals to develop a deeper prayer life. We also offer prayer support for specific needs and encourage a regular habit of seeking God's presence through prayer.</p>
        </div>
      </section>
    </Layout>
  );
};

export default ministry;
