import React from 'react'
import homeStyle from './Home.module.css'
import Font from './Font.module.css'
import { FaAngleDoubleDown } from "react-icons/fa";
import Categories from './Categories';
import { MdEmail } from "react-icons/md";

const Home = () => {
  function getCurrentYear() {
    const currentDate = new Date(); // Get the current date
    return currentDate.getFullYear(); // Get the full year
  }
  return (
    <div className={`${homeStyle.home} ${Font.poppinsMi}`}>
        <div className={homeStyle.img} >
          <h1 className={`${homeStyle.head} ${Font.cinzel}`}>Man Things</h1>
          <FaAngleDoubleDown size={80} color='white' className={homeStyle.scroll} />
        </div> 
        <div className={homeStyle.sectionTwo}>
          <Categories />
        </div>
        <div className={`${homeStyle.quote} ${Font.poppinsLi}`}>
        "Fashion is the armor to survive the reality of everyday life." — Bill Cunningham
        </div>
        <div className={`${homeStyle.footer} ${Font.poppinsR}`}>
          <p className={homeStyle.footerHead}>Contact me on</p>
          <div className={homeStyle.socialLinks}>
            <a href="https://www.youtube.com/@Bhushan-03-V" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              Youtube
            </a>
            <a href="https://www.instagram.com/03_bxuxxan/profilecard/?igsh=NW5nc3FnOHJ1Nng4" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              Instagram
            </a>
            {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              Facebook
            </a> */}
          </div>
          <div>
            <p className={homeStyle.footerHead}>Developed by</p>
            <div className={homeStyle.socialLinks}>
              <a href="mailto:prahul001224@gmail.com"><MdEmail  /> Rahul</a>
              <a href="mailto:aruthrasenthilkumar108@gmail.com"><MdEmail /> Aruthra</a>
            </div>
          </div>

          <p className={homeStyle.footerend}>&copy; {getCurrentYear()} Man Things. All rights reserved.</p>
      </div>
    </div>

  )
}

export default Home