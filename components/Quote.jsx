import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function Quote() {
  return (
    <div className="inner-container">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="img-quote"
      ></motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        div
        className="content-quote"
      >
        <div className="inner">
          <FaQuoteLeft className="text-white fs-700" />

          <h1 className="text-white">Isaiah 43:2 NIV </h1>
          <hr />
          <p className="text-white quote">
            When you pass through the waters, I will be with you; and when you
            pass through the rivers, they will not sweep over you. When you walk
            through the fire, you will not be burned the flames will not set you
            ablaze. So do not fear, for I am with you do not be dismayed, for I
            am your God. I will strengthen you and help you I will uphold you
            with my righteous right hand.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
