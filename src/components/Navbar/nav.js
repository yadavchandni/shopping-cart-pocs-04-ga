import React, { useEffect } from "react";

//Router
import { Link } from "react-router-dom";

import { connect } from "react-redux";

//Action
import { getAllNumberInCart } from "../../services/action/getAllNumberInCartAction";

//style
import "../../style/navbar.css";

const Navbar = (props) => {
  // console.log('basketprops',basketProps);

  useEffect(() => {
    getAllNumberInCart();
  }, []);
  return (
    <nav>
      <div className="container">
        <ul className="navbar-left">
          <Link to="/">
            <li>
              <span href="#">Home</span>
            </li>
          </Link>
          <li>
            <span href="#about">About</span>
          </li>
        </ul>
        <ul className="navbar-right">
            <li >
          <Link to="/cart">
              <span href="#" id="cart" style={{color:"white"}}>
                <i className="fa fa-shopping-cart"  /> Cart
                <span className="badge">{props.basketProps.basketNumber}</span>
              </span>
          </Link>
            </li>
        </ul>
      </div>
    </nav>
  );
};

//Action
const mapStateToProps = (state) => ({
  basketProps: state.addToCartState,
});

export default connect(mapStateToProps, { getAllNumberInCart })(Navbar);
