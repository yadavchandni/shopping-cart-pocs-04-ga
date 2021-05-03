import React, { Fragment } from "react";
import { connect } from "react-redux";

//material Ui
import PlusOneIcon from "@material-ui/icons/PlusOne";
import ExposureNeg1Icon from "@material-ui/icons/ExposureNeg1";

//Assets
import Cats_First from "../../assets/cats_first.jpg";
import Cats_Second from "../../assets/cats_second.jpg";
import Cats_Third from "../../assets/cats_third.jpg";

//Style
import "../../style/cart.css";

const Cart = ({ basketProps }) => {
  console.log("basketProps", basketProps);

  let productInCart = [];
  Object.keys(basketProps.products).forEach(function (item) {
    // console.log("item cart", item);
    //check the item when in cart
    // console.log(basketProps.products[item].inCart);
    if (basketProps.products[item].inCart) {
      productInCart.push(basketProps.products[item]);
    }
    // console.log('productInCart',productInCart);
  });

  //For product Image stored in array
  const productImages = [Cats_First, Cats_Second, Cats_Third];

  productInCart = productInCart.map((product, index) => {
    console.log("product", product);
    // var Total=product.number*product.price;
    // console.log('total',Total);
    return (

      <Fragment>

        <div className="card" key={product.id}>
          <div className="product-image">
            <img src={productImages[index]} alt="all array pic" />
          </div>
          <div className="product-info">
            <h1 className="product-name">{product.name}</h1>
            <div>
              <button>
                <PlusOneIcon />
              </button>
              <span className="product-cart-name">{product.number}</span>
              <button>
                <ExposureNeg1Icon />
              </button>
            </div>
            <h2 className="product-price">{product.price}.00</h2>

            <button className="button" href="#">
              Delete
            </button>
          </div>
        </div>
      </Fragment>
    );
  });
  return (
    <div>
    <div className='total-bill'>Total : ${basketProps.cartCost}</div>

    <div style={{ marginTop:"12%" }}> 
      {productInCart}
    </div>
    </div>

  );
};

const mapStateToProps = (state) => ({
  basketProps: state.addToCartState,
});

export default connect(mapStateToProps)(Cart);
