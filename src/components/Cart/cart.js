import React, { Fragment } from "react";
import { connect } from "react-redux";

//material Ui
import PlusOneIcon from "@material-ui/icons/PlusOne";
import ExposureNeg1Icon from "@material-ui/icons/ExposureNeg1";

//Assets
import Cats_First from "../../assets/cats_first.jpg";
import Cats_Second from "../../assets/cats_second.jpg";
import Cats_Third from "../../assets/cats_third.jpg";

//Action
import { productQnty ,clearProduct} from "../../services/action/productQnty";

//Style
import "../../style/cart.css";

const Cart = ({ basketProps, productQnty ,clearProduct}) => {
  // console.log("basketProps", basketProps);

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
  // const productImages = [Cats_First, Cats_Second, Cats_Third];

  //created product image loop function
  const productImages = (product) => {
    if (product.tagName === "mollyCat") {
      return Cats_First;
    } else if (product.tagName === "smudgeCat") {
      return Cats_Second;
    } else if (product.tagName === "indonesianCat") {
      return Cats_Third;
    }
  };

  productInCart = productInCart.map((product, index) => {
    // console.log("product", product);
    // var Total=product.number*product.price;
    // console.log('total',Total);
    return (
      <Fragment key={index}>
        <div className="card" key={product.id}>
          {/* ======================================= Product Image ================================== */}
          <div className="product-image">
            <img src={productImages(product)} alt="all array pic" />
          </div>
          <div className="product-info">
            <h1 className="product-name">{product.name}</h1>

            {/*================================== qntys functionality ================================*/}
            <div>
              <button onClick={() => productQnty("increase", product.tagName)}>
                <PlusOneIcon />
              </button>
              <span className="product-cart-name">{product.number}</span>
              <button onClick={() => productQnty("decrease", product.tagName)}>
                <ExposureNeg1Icon />
              </button>
            </div>

            {/* ==================================== Product Price ==================================== */}
            <h2 className="product-price">{product.price}.00</h2>

            {/* ===================================== Delete Button ==================================== */}
            <button className="button" href="#" onClick={()=>clearProduct(product.tagName)}>
              Delete
            </button>
          </div>
        </div>
      </Fragment>
    );
  });
  return (
    <div>
      <div className="total-bill">Total : ${basketProps.cartCost}</div>

      <div style={{ marginTop: "12%" }}>{productInCart}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.addToCartState,
});

export default connect(mapStateToProps, { productQnty ,clearProduct})(Cart);
