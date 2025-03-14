import React, { useRef } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FaPhoneAlt } from "react-icons/fa";


const ResponsiveServiceButton = ({ handleContactNavigate }) => {
  const isDesktop = useMediaQuery({ minWidth: 769 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {isDesktop && (
        <div onClick={handleContactNavigate} className="cta2">
          Book A Service
        </div>
      )}
      {isMobile && (
        <div onClick={handleContactNavigate} className="cta2">
          Book A Service
        </div>
      )}
    </>
  );
};


const Header = () => {
  const navigate = useNavigate();
  function handleContactNavigate() {
    navigate('/Book')
    console.log('Book Now')
  }

  return (
    <div className='header'>
      <div className='content'>
        <div className='description'>
          <h1 className='text'><span>Professional</span> Cleaning <br></br>Service Be it your home</h1>
          <p>Life's too short to spend it cleaning. Let us handle the mess, so you can enjoy what matters most.
            At Aimer, we offer professional, reliable, and affordable services tailored to your needs - because your time is spent living not scrubbing.</p>
          <div className='checkus'>
            {/* <Link to="/Contact" className="cta2">Book A Service</Link> */}
            {/* <div onClick={handleContactNavigate} className='cta2'>Book A Service </div> */}
            <ResponsiveServiceButton handleContactNavigate={handleContactNavigate} />
            <div className='wos'>
              <FaPhoneAlt className='play' />
              <a href='tel:+14313345256'><p >+1 (431) 334-5256</p></a>
            </div>
          </div>
        </div>
        <img src='./images/cleaning service-cuate (1).png' className='content-img' alt='img' />
      </div>
    </div>
  )
}

export default Header
