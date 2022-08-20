import Head from "next/head";
import Hero from "../Components/Home";


export default function Home() {
  return (
    <div>
      <Head>
        <title>NGO website</title>
        <meta name="description" content="generated using next app" />
        <link rel="shortcut icon" href="home1.jpg" type="image/x-icon" />
      </Head>
      
      <Hero />
    </div>
  );
}
