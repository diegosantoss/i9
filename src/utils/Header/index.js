import React, { useContext } from 'react';
import DefaultContext from '../../services/Context';
import { Link } from 'react-router-dom';

const Header = () => {
  const ut = useContext(DefaultContext);
  console.log(ut)
  return (
    <>
      <h4>Header</h4>   
      <Link to="/">home</Link>
      <Link to="/orcamento">orcamento</Link>
    </>
  )
}

export default Header;


