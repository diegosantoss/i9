import React from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';


const BaseApp = props => (
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

export default BaseApp; 