import React from 'react'
import './Footer.css'
import  Instagram  from '../../assets/Instagram.svg'
import  Linkedin  from '../../assets/Linkedin.svg'
import  Gmail  from '../../assets/Gmail.svg'

const Footer = () => {
  return (
    <div id="foot">
        <footer className="footer">
            <div className="left ft">
                <h1>Tomato.</h1>
            </div>
            <div className="right ft">
                <div className="social">
                    <img src={Instagram} className='logo' alt="" />
                    <img src={Linkedin} className='logo' alt="" />
                    <img src={Gmail} className='logo' alt="" />
                </div>

            </div>
        </footer>
            <p>&copy;2024 Tomato. | All Rights Reserved</p>
    </div>
  )
}

export default Footer