//Navbar.js
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Store/Auth/AuthContext";
import CartContext from "../Store/CartContext";
import './navbar.css'
export let Navbar=(props)=>{
    let AuthCtx=useContext(AuthContext)
    let CartCtx = useContext(CartContext)
    let navigate= useNavigate()
    let [noOfItems,setNoOfItems]=useState(0)
    useEffect(()=>{
        setNoOfItems(CartCtx.cartItems.length)
    },[CartCtx.cartItems])

    let handleLogOut=()=>{
        
        AuthCtx.setIsLoggedIn(false);
        navigate('/admin/login')
    }
    return(
        // 
        <nav className="navbar navbar-expand-lg bg-grey fixed-top navbar-dark"> 
            <div className="container-fluid navbar-fixed-top">
                <Link className="nav-link active" aria-current="page" to="/"><img  className='logo' src="data:image/png;base64,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" alt={'LOGO'}/></Link>
                
                <div className="navbar-nav" >
                
                    <Link className="nav-link mx-4 " aria-current="page" to="/">Home</Link>
                    { !(AuthCtx.isLoggedIn) ? <Link className="nav-link " aria-current="page" to="/admin/login">Login</Link> :
                    <a className="nav-link" aria-current="page" onClick={handleLogOut}>Logout</a>
                    }

                    <Link className="nav-link mx-1 " aria-current="page" to="/admin/register">Register</Link>

                    <Link className="nav-link " aria-current="page" to="/admin/product/add">Add Product</Link>

                    <Link className="nav-link " aria-current="page" to="/admin/product/edit">Products</Link>
                   
                </div>
                <Link className="nav-link active" aria-current="page" to="/product/cart">
                        <div className="shopping-cart">
                            <img className="cart" src='https://endlessicons.com/wp-content/uploads/2012/11/shopping-cart-icon-614x460.png' alt={'CART'}/>
                            <div className="number">{noOfItems}</div>
                        </div>
                    </Link>
            </div>
        </nav>
    
    )
}
/**/ 
