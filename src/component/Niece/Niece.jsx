import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Niece = ({ children }) => {
   const angtiKoti = useContext(RingContext);
   return (
      <div className="area">
         <h3>Niece</h3>
         <p>{children}</p>
         {children === "Pak Pak" && (
            <p className="text-red">
               <strong>{angtiKoti}</strong>
            </p>
         )}
      </div>
   );
};

export default Niece;
