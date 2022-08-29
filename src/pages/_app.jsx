import "tailwindcss/tailwind.css";
import Head from "next/head";
import { SWRConfig } from "swr";
import { AppLayout } from "src/layouts/AppLayout";

const fetcher = async (...args) => {
  const res = await fetch(...args);
  const json = res.json();
  return json;
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </SWRConfig>
    </>
  );
};

export default MyApp;
