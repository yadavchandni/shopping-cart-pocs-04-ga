
// NPM packages
import React from 'react';

//Router importing
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//Provider file (Wrapping )
import { Provider } from 'react-redux';

// Component files
import App from './App';

// Redux store
import store from './services/store';

//importing css
 import './index.css'


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

