import React, { useContext, useState } from 'react'
import './Navbar.css'
import search from '../../assets/search.svg'
import cart from '../../assets/cart.svg'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../Eassets/assets'

const navbar = ({setShowLogin}) => {

  const [Menu,setMenu] = useState("home");
  const {GetTotalCartAmount,token,setToken} = useContext(StoreContext);
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  function handleClickMenu(){
    const element = document.getElementById('food-display');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  function handleClickApp(){
    const element = document.getElementById('app-download');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='navbar'>
      <Link to='/'><div className="name">Tomato.</div></Link>
      <ul className='navbar-menu'>
        <Link to='/'><li>Home</li></Link>
        <li onClick={() => handleClickMenu()}>Menu</li>
        <li onClick={() => handleClickApp()}>Mobile App</li>
        <li>Contact Us</li>
      </ul>

      <div className="right-nav">
          <img src={search} alt="" />
          <div className="nav-cart">
            <Link to='/Cart'><img src={cart} alt="" /></Link>
            <div className={GetTotalCartAmount() === 0 ? "":"dot"}></div>
          </div>
          {!token ? <button className='button-33' onClick={() => setShowLogin(true)}>Sign In</button>
            : <div className='navbar-profile'>
              <img src={assets.profile_icon} alt="Profile Icon" />
              <ul className='nav-profile-dropdown'>
                <li onClick={() => navigate("/myorders")}><img src={assets.bag_icon} alt="" />Orders</li>
                {/* <hr /> */}
                <li onClick={Logout}><img src={assets.logout_icon} alt="" />Logout</li>
              </ul>
            </div>
          }
      </div>
    </div>
  )
}

export default navbar

