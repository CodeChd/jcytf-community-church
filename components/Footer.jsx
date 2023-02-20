import Link from "next/link"
import styles from '@/styles/Footer.module.css'
import Image from "next/image"

const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className="grid grid-container">

                <div className="col-1">
                    <div className="footer-logo flex">

                        <Image src="/images/JCYTF_FOOTER.png" width={100} height={100} alt="logo" />

                        <p className="primary-logo text-white fs-700"> JCYTF<span className="d-block secondary-logo">Community Church</span></p>
                    </div>

                    <div className="address-container">


                        <p className="text-white address"> Madjaas Street Group 2, Area B, Quezon City, 1119 Metro Manila</p>
                        <button className="btn-footer "><a href="/about">About us</a> </button>

                    </div>


                </div>

                <div className="col-2">
                    <h2 className="orange">Schedule of Services</h2>

                    <p className="text-white">
                        <span className="pale_yellow d-block">WEDNESDAY PRAYER MEETING</span>
                        7:00PM - 9:00PM
                    </p>

                    <h3 className="orange">SUNDAY SERVICE</h3>
                    <div className="Sunday-Service flex ">

                        <div>
                            <p className="text-white">
                                <span className="pale_yellow d-block">KID'S MINISTRY</span>
                                8:00AM - 9:00AM
                            </p>

                            <p className="text-white">
                                <span className="pale_yellow d-block">SUNDAY SCHOOL</span>
                                9:30AM - 10:00 AM
                            </p>
                        </div>

                        <div>
                            <p className="text-white">
                                <span className="pale_yellow d-block">DIVINE SERVICE</span>
                                10:30AM - 12:30NN
                            </p>

                            <p className="text-white">
                                <span className="pale_yellow d-block">YOUTH SERVICE</span>
                                3:00PM - 5:00PM
                            </p>
                        </div>

                    </div>


                </div>

                <div className="col-3">
                    <h2 className="orange ">Contact Us</h2>
                    <p className="text-white">0997 574 4318</p>
                    <p className="text-white">heraldoednas@gmail.com</p>
                </div>



            </div>
            <div className="origin  text-left">
                <h3 className="container fs-400">DEVELOPED BY CARL FRANCISCO</h3>
            </div>

        </footer>
    )
}

export default Footer