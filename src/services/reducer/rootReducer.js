//Combined 
import { combineReducers } from 'redux';

//Reducer 
import {AddToCartReducer} from './basketReducer';


// stuff Reducer
export default combineReducers({
    //define reducer in other container
    addToCartState:AddToCartReducer,
})