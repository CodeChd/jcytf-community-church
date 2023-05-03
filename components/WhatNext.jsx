import { motion } from "framer-motion";

export default function WhatNext() {
  return (
    <div className="next-container">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: -80, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="next-card"
      >
        <h2 className="fsi-700">What's Next</h2>
        <hr />

        <p className="quote-next">
          Where God is calling us to go as a church will be difficult,
          exhilarating and nothing short of an adventure that we’ll be talking
          about for generations to come. God really knows what He’s doing and
          that’s why we’re committed to simply listen and obey and leave the
          consequences up to Him. We believe this is what God will do because
          this is what He has always done. Follow along with the progress of the
          “Go & Make” initiative.
        </p>

        <button className="join-btn">Join A Community</button>
      </motion.div>

      <motion.div
         initial={{ y: 50, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.4, duration: 0.5 }}
         viewport={{ once: true }}
      className="img-next-container">
        <div className="imgs-next"></div>
      </motion.div>
    </div>
  );
}
