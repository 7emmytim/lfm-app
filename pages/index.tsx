import Banner from "@/layouts/home/landing/banner";
import Header from "@/layouts/home/landing/header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Life meal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Banner />
      </main>
    </>
  );
}
