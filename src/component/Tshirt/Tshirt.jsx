import "./Tshirt.css";
const Tshirt = ({ tshirt, addToCartHandler }) => {
   const { _id, name, picture, price, gender } = tshirt;

   return (
      <div className="product">
         <img src={picture} alt="" />
         <div className="product-details">
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <button className="btn btn-blue" onClick={() => addToCartHandler(_id)}>
               Buy Now
            </button>
         </div>
      </div>
   );
};

export default Tshirt;
