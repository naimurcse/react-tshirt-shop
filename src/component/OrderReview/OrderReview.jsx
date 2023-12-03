import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import "./OrderReview.css";
import { useState } from "react";
import Cart from "../Cart/Cart";
import toast from "react-hot-toast";

const OrderReview = () => {
   const notify = () => toast.success("Added new item.");

   const tshirts = useLoaderData();
   const [cart, setCart] = useState([]);

   const addToCartHandler = (product) => {
      //   console.log(product);

      let newCart = [];
      const existProduct = cart.find((item) => item._id === product._id);
      if (existProduct) {
         existProduct.quantity = existProduct.quantity + 1;

         const remaining = cart.filter((item) => item._id !== product._id);
         newCart = [...remaining, existProduct];
      } else {
         notify();
         product.quantity = 1;
         newCart = [...cart, product];
      }
      setCart(newCart);
   };
   //    console.log(cart);
   return (
      <div className="container order-review">
         <div className="product-container">
            {tshirts.map((tshirt) => (
               <Tshirt
                  key={tshirt._id}
                  tshirt={tshirt}
                  addToCartHandler={addToCartHandler}
               ></Tshirt>
            ))}
         </div>
         <div className="cart-container">
            <h2>Order summary</h2>
            <Cart cart={cart}></Cart>
         </div>
      </div>
   );
};

export default OrderReview;
