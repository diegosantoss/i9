import React, { useEffect } from "react";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import { PageView, initGA } from '../Tracking';

const BaseApp = (props) => {

  useEffect(() => {
    initGA('UA-171780980-1');
    PageView();
  })

  return(
    <>
      <Head>
        <title>i9 Corporation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default BaseApp;
