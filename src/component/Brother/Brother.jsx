import React, { useContext } from "react";
import Nephew from "./../Nephew/Nephew";
import { MoneyContext } from "../Father/Father";

const Brother = ({ children }) => {
   const [money, setMoney] = useContext(MoneyContext);

   return (
      <div className="area">
         <p>Brother Component</p>
         <h3>{children}</h3>
         {(children === "Khuka" || children === "Melton") && (
            <p>
               Father's Balance: <span className="text-red">{money}</span>{" "}
            </p>
         )}

         {children === "John" && <Nephew>New Baby</Nephew>}
         {children === "Paris" && (
            <button className="btn btn-blue" onClick={() => setMoney(money + 1000)}>
               Give 1000 TK
            </button>
         )}
         {children === "Khuka" && (
            <button className="btn btn-warning" onClick={() => setMoney(money - 500)}>
               Take 500 TK
            </button>
         )}
      </div>
   );
};

export default Brother;
