import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { API_URL } from "@/config/index";
import styles from "@/styles/Form.module.css";
import { parseCookies } from "@/helper/index";
import AuthContext from "@/context/AuthContext";
const AddEvents = ({ token }) => {
  const router = useRouter();
  const [values, setValue] = useState({
    name: "",
    performers: "",
    venue: "",
    address: "",
    date: "",
    time: "",
    description: "",
  });

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      router.push("/account/enter");
    }
  });

  if (!user) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasEmptyFields = Object.values(values).some((e) => e === "");

    if (hasEmptyFields) {
      toast.error("Please fill in all fields!");
    }

    const res = await fetch(
      `https://capstone-jcytf-ccc1.onrender.com/api/events`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          data: {
            name: `${values.name}`,
            performers: `${values.performers}`,
            venue: `${values.venue}`,
            address: `${values.address}`,
            date: `${values.date}`,
            time: `${values.time}`,
            description: `${values.description}`,
          },
        }),
      }
    );

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error("No Token!");
        return;
      }
      toast.error("Something Went Wrong!");
    } else {
      const evt = await res.json();
      router.push(`/events/${evt.data.attributes.slug}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...values, [name]: value });
  };
  return (
    <Layout title="Add New Event">
      <div className="sub-container">
        <Link href="/events">{"<"} Go Back</Link>
        <h1>Add Event</h1>
        <ToastContainer />

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.grid}>
            <div>
              <label htmlFor="name">Event Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="performers">Performers</label>
              <input
                type="text"
                name="performers"
                id="performers"
                value={values.performers}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="venue">Venue</label>
              <input
                type="text"
                name="venue"
                id="venue"
                value={values.venue}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                value={values.address}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                value={values.date}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="time">Time</label>
              <input
                type="text"
                name="time"
                id="time"
                value={values.time}
                onChange={handleChange}
              />
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
          <input type="submit" value="Add Event" className="btn-event-details" />
        </form>
      </div>
    </Layout>
  );
};

export default AddEvents;

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  if (token) {
    return {
      props: { token },
    };
  } else {
    return {
      props: {},
    };
  }
}
