import React from "react";

//connect
import { connect } from "react-redux";

//Action files
import { addToCartAction } from "../../services/action/addToCartActionAction";

//Style
import "../../style/home.css";

//Assets
import Cats_First from "../../assets/cats_first.jpg";
import Cats_Second from "../../assets/cats_second.jpg";
import Cats_Third from "../../assets/cats_third.jpg";



const Home = (props,basketProps) => {
  // console.log("action and reducer props==", basketProps);
  //without redux how to manage state :
  //   const [inCart, setInCart] = useState(0);
//   const handlebtn = () => {
//     // setInCart(inCart + 1);
//     const actionData = props.addToCartAction;
//     console.log('actionData',actionData);
//   };

  //with Redux
  return (
    <div>
      
      {/*==================== shopping Cart =========================*/}
      <div className='mainHomePage'>
        <h1>Shopping Cart</h1>
        {/* <h1>In our cart {inCart}</h1> */}
        {/* first figure  */}
        <div className="snip1583">
          <img src={Cats_First} alt="sample68" />
          <div className="icons">
            <span>
              <i className="ion-android-cart" onClick={() => props.addToCartAction('WisteriaMollyCat')} />
            </span>
            <span>
              <i className="ion-android-star" />
            </span>
            <span>
              <i className="ion-android-share-alt" />
            </span>
          </div>
          <div className="figcaption">
            <h3>Wisteria Molly Cat</h3>
            <div className="price">$15.00</div>
          </div>
        </div>

        {/* second figure */}
        <div className="snip1583 hover">
          <img src={Cats_Second} alt="sample77" />
          <div className="icons">
            <span>
              <i className="ion-android-cart" onClick={()=>props.addToCartAction('AmericaSmudgeCat')}/>
            </span>
            <span>
              <i className="ion-android-star" />
            </span>
            <span>
              <i className="ion-android-share-alt" />
            </span>
          </div>
          <div className="figcaption">
            <h3>America Smudge Cat</h3>
            <div className="price">$89.00</div>
          </div>
        </div>

        {/* third figure */}
        <div className="snip1583">
          <img src={Cats_Third} alt="sample71" />
          <div className="icons">
            <span>
              <i className="ion-android-cart" onClick={()=>props.addToCartAction('OscarIndonesianCat')} />
            </span>
            <span>
              <i className="ion-android-star" />
            </span>
            <span>
              <i className="ion-android-share-alt" />
            </span>
          </div>
          <div className="figcaption">
            <h3>Oscar Indonesian Cat</h3>
            <div className="price">$19.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   basketProps: state.addToCartState,
// });

export default connect(null, { addToCartAction })(Home);
