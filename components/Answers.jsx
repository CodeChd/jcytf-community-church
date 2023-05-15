import { motion } from "framer-motion";

export default function Answers() {
  return (
    <section className="Answers-container">
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
      >
        LOOKING FOR ANSWERS? THINK YOUR VISITING THIS SITE IS A COINCIDENCE?
        YOUR BEING HERE TODAY IS NO ACCIDENT!
      </motion.p>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        viewport={{ once: true }}
        className="answers-heading"
      >
        God brought you here for His purpose
      </motion.h2>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
        className="container-answers"
      >
        <div className="grid-answers-item-1">
          <div className="item item-1">
            <h3>1</h3>
            <p>
              <span className="asnwers-main">GOD LOVES YOU.</span>

              <span className="answer-quote">
                He desires for you to have a meaningful life with Him in the
                present and gain eternal life with Him in the future.
              </span>

              <span className="answer-quote">
                Know therefore that the Lord your God, He is God, the faithful
                God, who keeps His covenant and His lovingkindness to a
                thousandth generation with those who love Him and keep His
                commandments –Deuteronomy 7:9
              </span>
            </p>
          </div>
          <div className="item item-2">
            <h3>2</h3>
            <p>
              <span className="asnwers-main"> GOD IS HOLY.</span>
              <span className="answer-quote">
                We are sinful, and our sin separates us from Him.
              </span>
              <span className="answer-quote">
                Everyone has sinned and is far away from God’s saving presence.
                – Romans 3:23
              </span>
            </p>
          </div>
          <div className="item item-3">
            <h3>3</h3>
            <p>
              <span className="asnwers-main"> GOD IS MERCIFUL.</span>

              <span className="answer-quote">
                In His love, He made the only way for us to be reconciled to
                Him: through His son, Jesus Christ. Jesus had to die on the
                cross for our sins and be raised to life for eternity.
              </span>

              <span className="answer-quote">
                But God demonstrates His own love toward us, in that while we
                were yet sinners, Christ died for us. Much more then, having now
                been justified by His blood, we shall be saved from the wrath of
                God through Him. – Romans 5:8
              </span>

              <span className="answer-quote">
                I am the way, and the truth, and the life; no one comes to the
                Father but through Me. – John 14:6
              </span>
            </p>
          </div>
        </div>

        <div className="grid-answers-item-2">
          <div className="item item-4">
            <h3>4</h3>
            <p>
              <span className="asnwers-main">GOD IS GRACIOUS. </span>

              <span className="answer-quote">
                {" "}
                By placing our faith in Jesus Christ, we are forgiven of our
                sins and saved from eternal death.
              </span>

              <span className="answer-quote">
                {" "}
                For God so loved the world, that He gave His only begotten Son,
                that whoever believes in Him shall not perish, but have eternal
                life. – John 3:16
              </span>

              <span className="answer-quote">
                For by grace you have been saved through faith; and that not of
                yourselves, it is the gift of God; not as a result of works, so
                that no one may boast. – Ephesians 2:8-9
              </span>
            </p>
          </div>

          <div className="faith-wrapper">
            <span className="faith-heading">
              Would you like to place your faith in Jesus Christ today?
            </span>

            <div className="faith-box">
              <span className="faith-msg">
                Lord Jesus, I need You. I confess that I am a sinner. I believe
                that You died on the cross to pay for all my sins. With Your
                help, I will turn away from my sins. Please come into my life
                and be my Savior and my Master. I accept Your gift of eternal
                life. Make me the kind of new person You want me to be. Thank
                You for giving me eternal life. Amen.
              </span>
            </div>
          </div>

          <div className="item item-5">
            <h3>5</h3>
            <p>
              <span className="asnwers-main">GOD KEEPS HIS PROMISES. </span>

              <span className="answer-quote">
                You can be sure that you have eternal life when you trust in
                Jesus.
              </span>

              <span>
                And the testimony is this, that God has given us eternal life,
                and this life is in His Son. He who has the Son has the life; he
                who does not have the Son of God does not have the life. These
                things I have written to you who believe in the name of the Son
                of God, so that you may know that you have eternal life. 1 John
                5:11-13
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
