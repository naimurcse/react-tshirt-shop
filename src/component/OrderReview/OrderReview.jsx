import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import "./OrderReview.css";

const OrderReview = () => {
   const tshirts = useLoaderData();
   return (
      <div className="container order-review">
         <div className="product-container">
            {tshirts.map((tshirt) => (
               <Tshirt key={tshirt._id} tshirt={tshirt}></Tshirt>
            ))}
         </div>
         <div className="cart-container">
            <h2>Order summary</h2>
         </div>
      </div>
   );
};

export default OrderReview;
