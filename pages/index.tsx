import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Header from '../components/Header'
import Nav from '../components/Navbar'
import SectionOne from '../components/SectionOne'

const locomotiveScroll =
  typeof window !== `undefined` ? require("locomotive-scroll").default : null;

const Home: NextPage = () => {

  const refScroll = useRef(null);
  let lscroll: any;

  useEffect(() => {
    if (!refScroll.current) return;
    // @ts-ignore
    lscroll = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      reloadOnContextChange: true,
      multiplier: 0.75,
      inertia: 0.5,
    })

    window.addEventListener("load", () => {
      let image = document.querySelector("img");
      // @ts-ignore
      const isLoaded = image!.complete && image!.naturalHeight !== 0;
      lscroll.update();
    });

  })

  return (
    <div className="relative flex flex-col items-center w-full z-100 " ref={refScroll}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='absolute top-[300px] w-full h-[400px] bg-[conic-gradient(from_132deg,_#CF59E6_172deg,_#b165c1_177deg,_#6BC5F8_276deg)] opacity-30 blur-[150px] sm:top-[400px] md:top-[500px] lg:top-[550px] xl:top-[400px]'></div>
      <Nav />
      <Header />
      <SectionOne />
    </div>
  )
}

export default Home
