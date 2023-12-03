import "./Cart.css";

const Cart = ({ cart }) => {
   console.log(cart);
   return (
      <div>
         <h2>Added Items: {cart.length}</h2>
         {cart.map((product) => (
            <div key={product._id}>{product.name}</div>
         ))}
      </div>
   );
};

export default Cart;
