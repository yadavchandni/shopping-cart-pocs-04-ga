import React,{Suspense} from "react";
import Home from "../components/Home/home";
import Spinner from "../Spinner/spinner";


export default function HomeContainer() {
  return (

    <Suspense fallback={<Spinner/>}>
        <Home />
    </Suspense>
  );
}
