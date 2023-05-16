import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const Groups = ({names}) => {
  return <motion.p whileHover={{y: -10}} className="group-name">{names}</motion.p>;
};

const programs = () => {
  return (
    <Layout>
      <main className="Programs-container">
        <section className="programs-hero">
          <h1 className="fsi-800 programs-heading">LIFE GROUPS</h1>
        </section>
        <section className="programs-group">
          <h2 className="fsi-500">
            Find the group for this season of your life.
          </h2>

          <div>
            <p className="fsi-400">
              Want to get connected? Try a life group. Life groups are meeting
              at homes and coffee shops all across the community and at our
              church. There are groups available for just men or just women,
              young adults, singles, married couples and more. Find your fit and
              take your next step.
            </p>
            <div className="group-container">

          <Groups names="Cellgroup"/>
          <Groups names="Mentoring"/>
          <Groups names="SmallGroup"/>
          <Groups names="Livelihood"/>
            </div>
          </div>
          
        </section>
      </main>
    </Layout>
  );
};

export default programs;
