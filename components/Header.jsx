import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <Head>
        <title>Movie list</title>
        <meta name="description" content="Prisma AND Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
       <Navbar />
        <h1 className="text-5xl pl-5 font-bold underline mt-10 pb-12 border-b-2 ">
          HD-Shahed
        </h1>
      </header>
    </div>
  );
};

export default Header;
