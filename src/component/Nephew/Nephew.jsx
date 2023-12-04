import { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Nephew = ({ children }) => {
   const newRing = useContext(RingContext);
   return (
      <div className="area">
         <h3>Nephew</h3>
         <p>{children}</p>
         {children === "New Baby" && (
            <p className="text-red">
               <strong>{newRing}</strong>
            </p>
         )}
      </div>
   );
};

export default Nephew;
