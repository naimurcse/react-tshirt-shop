import { useLoaderData } from "react-router-dom";

const OrderReview = () => {
   const tshirts = useLoaderData();
   return (
      <div className="container">
         <h1>Order Review: {tshirts.length}</h1>
      </div>
   );
};

export default OrderReview;
