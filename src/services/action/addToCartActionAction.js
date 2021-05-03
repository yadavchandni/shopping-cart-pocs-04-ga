//Constant Action
import { ADD_TO_CART } from "../constant";

//action is a simple function those return object
//we cant use async
export const addToCartAction = (productName) => {
  return (dispatch) => {
    //consoling data
    // console.log("adding to cart action");
    console.log("product details action",productName);
    dispatch({
      type: ADD_TO_CART,
      payload:productName
    });
  };
};
