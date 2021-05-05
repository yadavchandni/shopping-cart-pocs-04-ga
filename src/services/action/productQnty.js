//Constant Action
import { INCREASE_QNTY,DECREASE_QNTY } from "../constant";

//action is a simple function those return object
export const productQnty = (action,name) => {
  return (dispatch) => {
    // console.log('action qnty name',name);
    // console.log('action qnty ',action)
    // console.log("inside if product qnty ")

    dispatch({
      type: action === "increase" ? INCREASE_QNTY : DECREASE_QNTY,
      payload: name,
    });
  };
};

export const clearProduct =(name)=>{
  return (dispatch) => {
    console.log('action qnty claer name :',name);
    console.log("inside if product qnty ")

    dispatch({
      
    
    });
  };
}