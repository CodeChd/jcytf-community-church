import { AuthProvider } from "@/context/AuthContext";
import "@/styles/Footer.css";
import "@/styles/Quote.css";
import "@/styles/OurStory.css";
import "@/styles/Events.css";
import "@/styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;

