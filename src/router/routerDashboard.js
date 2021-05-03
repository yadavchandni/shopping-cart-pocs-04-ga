//NPM package and Fragment
import React,{Fragment} from 'react'

//Router Package
import {Switch, Route } from "react-router-dom";

//Local file 
import DashboardContainer from '../container/dashboardContainer'
import Cart from '../components/Cart/cart'


//main function 
export default function RouterDashboard() {
    return (
       
      <Fragment>
          <Switch>
            {/* ======================= Common Header========================================= */}
            <Route exact path="/" component={DashboardContainer} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        {/* Common footer */}
      </Fragment>
       
    )
}
