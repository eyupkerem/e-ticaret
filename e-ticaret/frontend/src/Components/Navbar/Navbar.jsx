import React, { useContext, useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'


export const Navbar = () => {
  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=> {setMenu("shop")}}> <Link to='/' className='nav-menu-link'>Shop</Link>  {menu === "shop" ? <hr/> : <> </>}</li>
        <li onClick={()=> {setMenu("men")}}> <Link to='/mens' className='nav-menu-link'>Mens</Link>  {menu === "men" ? <hr/> : <> </>}</li>
        <li onClick={()=> {setMenu("women")}}> <Link to='/womens' className='nav-menu-link'>Womens</Link> {menu === "women" ? <hr/> : <> </>}</li>
        <li onClick={()=> {setMenu("kid")}}> <Link to='/kids' className='nav-menu-link'>Kids</Link> {menu === "kid" ? <hr/> : <> </>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'> <button> Login </button> </Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}
