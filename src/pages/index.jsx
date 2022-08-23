import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { useCallback, useEffect } from "react";
import styles from "src/styles/Home.module.css";

// const handleClick = (e) => {
//   console.log(e.target.href);
//   e.preventDefault();
//   alert(foo);
// };

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  useEffect(() => {
    console.log("マウント時")
    document.body.style.backgroundColor = "lightblue"
    return () => {
      console.log("アンマウント時")
      document.body.style.backgroundColor = ""
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <a href="about" onClick={handleClick}>
        ボタン
      </a>
      <Main title="index" />
      <Footer />
    </div>
  );
}
