import "@/styles/globals.css";
import { PageSpeedProvider } from "../contexts/PageSpeedContext";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <PageSpeedProvider>
      <div className={`${figtree.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </PageSpeedProvider>
  );
}
