//Importing Constant
import {
  ADD_TO_CART,
  GET_ALL_NUMBERS_IN_CART,
  INCREASE_QNTY,
  DECREASE_QNTY,
  CLAER_PRODUCT

} from "../constant";

//State stuff
const initialState = {
  basketNumber: 0,
  cartCost: 0,
  products: {
    WisteriaMollyCat: {
      name: "Wisteria Molly Cat",
      price: 15.0,
      place: "Wisteria",
      number: 0,
      inCart: false,
      tagName: "mollyCat",
    },
    AmericaSmudgeCat: {
      name: "America Smudge Cat",
      price: 89.0,
      place: "America",
      number: 0,
      inCart: false,
      tagName: "smudgeCat",
    },
    OscarIndonesianCat: {
      name: "Oscar Indonesian Cat",
      price: 19.0,
      place: "Indonesian",
      number: 0,
      inCart: false,
      tagName: "indonesianCat",
    },
  },
};

// Use the initialState as a default value
export const AddToCartReducer = (state = initialState, action) => {
  // The reducer normally looks at the action type field to decide what happens
  let productSelected = "";

  switch (action.type) {
    // Do something here based on the different types of actions
    case ADD_TO_CART:
      productSelected = { ...state.products[action.payload] };
      productSelected.number += 1;
      productSelected.inCart = true;
      // console.log('price', state.products.WisteriaMollyCat.price);
      return {
        // that has all the existing state data
        ...state,
        basketNumber: state.basketNumber + 1,
        //total cost
        cartCost: state.cartCost + state.products[action.payload].price,
        //data stuff here
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    // Add to cart reducer
    case GET_ALL_NUMBERS_IN_CART:
      return {
        ...state,
      };

    // Add to product  qnty  increase
    case INCREASE_QNTY:
      productSelected = { ...state.products[action.payload] }
      productSelected.number += 1;
      // console.log('productSelected',productSelected);
      // console.log('Cost', (state.cartCost + state.products[action.payload].price)); //underfined
      return {
        ...state,
        basketNumber:state.basketNumber+1,
        cartCost: state.cartCost + (state.products[action.payload].price),
        //data stuff here
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };

    // Add to product  qnty  decraese
    case DECREASE_QNTY:
      let newCartCost = 0;
      let newBasketNumber=0
      productSelected = { ...state.products[action.payload] }
      if (productSelected.number === 0) {
        productSelected.number = 0;
        newCartCost = state.cartCost;
        newBasketNumber=state.basketNumber
      }
      else {
        productSelected.number -= 1;
        newCartCost = state.cartCost - state.products[action.payload].price;
        newBasketNumber=state.basketNumber-1
      }
      return {
        ...state,
        basketNumber:newBasketNumber,
        cartCost: newCartCost,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        }
      };

    case CLAER_PRODUCT:
      productSelected = { ...state.products[action.payload] };
      let numberBackup = productSelected.number;
      productSelected.number = 0;
      productSelected.inCart = false;
      return {
        ...state,
        basketNumber:state.basketNumber-numberBackup,
        cartCost: state.cartCost-(numberBackup * productSelected.price),
        products: {
          ...state.products,
          [action.payload]: productSelected,
        }
      }

    default:
      //If this reducer doesn't recognize the action type, or doesn't
      return state;
  }
};
