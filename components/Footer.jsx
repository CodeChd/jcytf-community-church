import Link from "next/link"
import styles from '@/styles/Footer.module.css'
import Image from "next/image"

const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className="grid grid-container footer-grid-home">

                <div className="col-1 flex">

                    <div className="img-container">

                        <img className="image" src="/images/JYCTF_NAME.svg" alt="logo" />

                    </div>

                    <p className="text-white address fs-300 "> Madjaas Street Group 2, Area B, Quezon City, 1119 Metro Manila</p>

                </div>

                <div className="col-2 flex">
                    <div>
                        <h2 className="orange fs-700">Schedule of Services</h2>
                        <p className="text-white">
                            <span className="pale_yellow d-block fs-300">WEDNESDAY PRAYER MEETING</span>
                            <span className="fs-200">7:00PM - 9:00PM</span>
                        </p>
                    </div>

                    <div className="Sunday-Service">
                        <h3 className="orange fs-600">SUNDAY SERVICE</h3>
                        <div className="flex" >

                            <div className="S1">
                                <p className="text-white">
                                    <span className="pale_yellow d-block fs-300">KID'S MINISTRY</span>
                                    <span className="fs-200">8:00AM - 9:00AM</span>
                                </p>

                                <p className="text-white">
                                    <span className="pale_yellow d-block fs-300">SUNDAY SCHOOL</span>
                                    <span className="fs-200">9:30AM - 10:00 AM</span>
                                </p>
                            </div>

                            <div className="S2">
                                <p className="text-white">
                                    <span className="pale_yellow d-block fs-300">DIVINE SERVICE</span>
                                    <span className="fs-200">10:30AM - 12:30NN</span>
                                </p>

                                <p className="text-white">
                                    <span className="pale_yellow d-block fs-300">YOUTH SERVICE</span>
                                    <span className="fs-200">3:00PM - 5:00PM</span>
                                </p>
                            </div>
                        </div>

                    </div>


                </div>

                <div className="col-3">
                    <h2 className="orange fs-700 ">Contact Us</h2>
                    <p className="text-white fs-300">0997 574 4318</p>
                    <p className="text-white fs-300">heraldoednas@gmail.com</p>
                </div>



            </div>

            <div className="origin text-left">
                <h3 className="fs-200 text-white">DEVELOPED BY CARL FRANCISCO</h3>
            </div>

        </footer>
    )
}

export default Footer