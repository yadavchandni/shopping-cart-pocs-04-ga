// createStore is Globalized state
import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

// Custom rootReducer
import rootReducer from "./reducer/rootReducer";

let store;

// Enable redux dev tool only in development mode
if (process.env.NODE_ENV !== "production") {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
} else {
  store = createStore(rootReducer, applyMiddleware(thunk));
}

export default store;
