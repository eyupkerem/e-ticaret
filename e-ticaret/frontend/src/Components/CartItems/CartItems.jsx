import React, { useContext } from 'react'
import './CartItem.css'
import {ShopContext} from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
    return (
    <div className='caritems'>
        <div className="caritems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e,index)=>{
            if(cartItems[e.id]>0){
                return <div key={index}>
                        <div className="caritems-format caritems-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon'/>
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>${e.new_price * cartItems[e.id] }</p>
                        <img src={remove_icon} className='cartitems-remove-icon' onClick={()=>{removeFromCart(e.id)}} alt="" />
                        </div>
                <hr />
               </div>
            }
            return null;
        })}
        <div className="caritems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button> PROCEED TO CHECKOUT </button>
            </div>
            <div className="caritems-promocode">
                <p>IF YU HAVE A PROMO CODE , ENTER IT HERE</p>
                <div className="caritems-promobox">
                    <input type="text" placeholder='PROMO CODE' />
                    <button>SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
  )
}
