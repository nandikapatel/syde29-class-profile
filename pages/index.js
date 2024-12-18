import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import { BiPaperPlane } from "react-icons/bi";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>SYDE '27</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <h1>Systems Design Engineering 2027 Class Profile!</h1>
            <Link href="/demographics">
              <span>go to profile</span>
              <BiPaperPlane size={25} className={styles.icon} />
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/homeImg.png"
            alt="home image"
            width="500"
            height="500"
          />
        </div>
      </div>
    </>
  );
}
