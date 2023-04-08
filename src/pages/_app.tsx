import "@styles/globals.css";
import Footer from "@components/Footer";
import Header from "@components/Header";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList.add(inter.className);
  }, []);
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
