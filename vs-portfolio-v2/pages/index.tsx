import { NextPage } from "next";
import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Vishal Shingare Portfolio</title>
      </Head>

      <Header />

      {/* { Hero } */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* { About } */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* { Experince } */}

      {/* { Projects } */}

      {/* { Contact Me } */}
    </div>
  );
};

export default Home;
