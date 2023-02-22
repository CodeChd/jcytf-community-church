import ImageUpload from '@/components/ImageUpload';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router"
import Layout from "@/components/Layout"
import Modal from "@/components/Modal"
import { useContext, useEffect, useState } from "react"
import Link from "next/link"
import { API_URL } from "@/config/index"
import { formatDateInput } from '@/utils/fomatDate'
import styles from '@/styles/Form.module.css'
import Image from 'next/image';
import { FaImage } from 'react-icons/fa';
import { parseCookies } from '@/helper/index';
import AuthContext from '@/context/AuthContext';



const EditEvents = ({ Edata ,token}) => {

    const [values, setValue] = useState({
        name: Edata.attributes.name,
        performers: Edata.attributes.performers,
        venue: Edata.attributes.venue,
        address: Edata.attributes.address,
        date: formatDateInput(Edata.attributes.date),
        time: Edata.attributes.time,
        description: Edata.attributes.description,
    })
    
    const router = useRouter()
  const { user } = useContext(AuthContext);


    useEffect(() => {
        if (!user) {
            router.push('/account/enter');
          }
  
    });
  
    if (!user) {
        return null;
    };
  
  
  
    


    const [imagePreview, setImagePreview] = useState(
        Edata.attributes.image.data !== null ? Edata.attributes.image.data.attributes.formats.thumbnail.url :
            null
    )

    const [showModal, setModal] = useState(false)



    const handleSubmit = async (e) => {
        e.preventDefault()

        const hasEmptyFields = Object.values(values).some((e) => (
            e === ""
        ))


        if (hasEmptyFields) {
            toast.error('Please fill in all fields!')
        }

        const res = await fetch(`${API_URL}/api/events/${Edata.id}`, {

            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${token}`,
            },
            body: JSON.stringify(
                {
                    "data": { 
                        "name": `${values.name}`,
                        "performers": `${values.performers}`,
                        "venue": `${values.venue}`,
                        "address": `${values.address}`,
                        "date": `${values.date}`,
                        "time": `${values.time}`,
                        "description": `${values.description}`,

                    }
                }
            )

        })

        if (!res.ok) {
            
            if(res.status === 403 || res.status === 401){

                toast.error('Unauthorized!')
                return
            }        

            toast.error('Something Went Wrong!')
        } else {
            const evt = await res.json()
            router.push(`/events/${evt.data.attributes.slug}`)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setValue({ ...values, [name]: value })
    }


    const imageUploaded = async (e) =>{
        const res = await fetch(`${API_URL}/api/events?populate=*&filters\[id\]=${Edata.id}`)
        const data = await res.json()
        
        setImagePreview(data.data[0].attributes.image.data !== null ? data.data[0].attributes.image.data.attributes.formats.thumbnail.url : <p>No Image Uploaded</p>)
        setModal(false)
    }


    return (
        <Layout title='Edit Event'>
            <Link href='/events'>{'<'} Go Back</Link>
            <h1>Edit Event</h1>
            <ToastContainer />
            <div className={styles.imgbox}>
                <h3>Event Image</h3>
                {imagePreview ? (
                    <Image src={imagePreview} height={100} width={170} alt="Image Preview"/>
                ) : (
                    <div>
                        <p>No Image Uploaded</p>
                    </div>
                )}

                <div className={styles.imgbox2}>
                    <button className={`btn-secondary ${styles.imgicon}`} onClick={() => setModal(true)}>
                        <FaImage /> Set Image
                    </button>
                </div>

                <Modal show={showModal} onClose={() => setModal(false)}>
                    <ImageUpload eventId={Edata.id} imageUploaded={imageUploaded} token={token}/>
                </Modal>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.grid}>
                    <div>
                        <label htmlFor="name">Event Name</label>
                        <input type="text" name="name" id="name" value={values.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="performers">Performers</label>
                        <input type="text" name="performers" id="performers" value={values.performers} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="venue">Venue</label>
                        <input type="text" name="venue" id="venue" value={values.venue} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" id="address" value={values.address} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" id="date" value={values.date} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="time">Time</label>
                        <input type="text" name="time" id="time" value={values.time} onChange={handleChange} />
                    </div>
                </div>

                <div>
                    <label htmlFor="description">Event Description</label>
                    <textarea
                        name="description"
                        id="description"
                        value={values.description}
                        onChange={handleChange}
                    />

                </div>
                <input type="submit" value="Update Event" className="btn" />
            </form>
        </Layout>
    )
}

export default EditEvents

export async function getServerSideProps({ params: { id }, req }) {
    const {token} = parseCookies(req)

    const res = await fetch(`${API_URL}/api/events?populate=*&filters\[id\]=${id}`)
    const Edata = await res.json()
    if(token)
    {


    return {
        props: {
            Edata: Edata.data[0],
            token
        }
    } 
}
    else {

        return {
            props: {
                Edata: Edata.data[0],
                token: token || ""
            },
        };
    };
}