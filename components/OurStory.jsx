import { motion } from "framer-motion"


export default function OurStory() {
    return (
        <div>

            <div className="wrapper flex">

                <div className="content ">
                    <div>
                        <motion.h1
                            whileInView="visible"
                            initial="hidden"
                            viewport={{ once: true }}
                            transition={{ duration: 0.99 }}
                            variants={{
                                hidden: { opacity: 0, x: 0 },
                                visible: { opacity: 1, x: 50 }
                            }} 
                         
                            className="fsi-700">
                                OUR STORY
                        </motion.h1>

                        <hr />
                    </div>
                    <div className="story-ch">
                        <p className="fsi-300">We are a movement of men and women who have encountered god and committed our lives to the lord, focused on making an impact through the work of the holy spirit in transforming lives, families, communities and nations, for the glory of god. </p>
                    </div>
                    <div className="readmore"><a className="btn-readmore text-white" href="#">READ MORE</a></div>
                </div>

                <div className="image-container">
                    <motion.div 
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }} 
                    className="imgs"
                    >
                        {""}
                    </motion.div>
                </div>

            </div>


        </div>
    )
}
