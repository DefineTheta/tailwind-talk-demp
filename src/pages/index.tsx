import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-2xl font-bold">
      <span>Next.js</span>
      <span>Template</span>
    </div>
  );
};

export default Home;
