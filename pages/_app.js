import { AuthProvider } from "@/context/AuthContext";
import "@/styles/Footer.css";
import "@/styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;

