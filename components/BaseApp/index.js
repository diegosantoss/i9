import React, { useEffect } from "react";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import BaseContext from '../Context';
import { PageView, initGA, Event } from '../Tracking';

const BaseApp = (props) => {
  const handleClickBudget = (newLink, removelink) => {
    let link = location.origin + location.pathname + newLink;

    document.querySelector('#contactform_container').classList.toggle('open_contactform');

    if(removelink){
      link = location.origin + location.pathname;
      Event('orcamento', 'close', newLink);
    } else {
      Event('orcamento', 'open', newLink);
    }

    window.history.pushState('', '', link);
    return false;
  }
  
  useEffect(() => {
    initGA('UA-171780980-1');
    PageView();

    if(location.hash === '#orcamento'){
      handleClickBudget(location.hash);
    }
  })  

  return(
    <BaseContext.Provider value={handleClickBudget}>
      <Head>
        <title>i9 Corporation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </BaseContext.Provider>
  )
}

export default BaseApp;
