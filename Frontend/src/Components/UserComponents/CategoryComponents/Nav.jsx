import React from 'react'
import nav from './Nav.module.css'
import Font from '../Font.module.css'
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIosNew } from "react-icons/md";

const Nav = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); 
  };

  return (
    <div className={nav.head}>
        <button className={nav.back} onClick={ handleClick }>
            <MdArrowBackIosNew size={20} />
        </button>
        <h1 className={` ${Font.cinzel}`}>Man Things</h1>
    </div>
  )
}

export default Nav