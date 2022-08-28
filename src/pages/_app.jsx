import "tailwindcss/tailwind.css";
// import "src/styles/globals.css";
import Head from "next/head";
import { Layout } from "src/components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="text-red-500" >test</div>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
