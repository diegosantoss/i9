import React from 'react';
import Header from '../Header';
import Footer from '../Footer';


const BaseApp = props => (
  <>
    <Header />
    {props.children}  
    <Footer />
  </>
)

export default BaseApp; 