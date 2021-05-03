import { GET_ALL_NUMBERS_IN_CART } from "../constant";

export const getAllNumberInCart = () => {
  return (dispatch) => {
    console.log("get All Number action");
    dispatch({
      type: GET_ALL_NUMBERS_IN_CART,
    });
  };
};
