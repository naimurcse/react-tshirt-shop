import React, { createContext, useState } from "react";
import Myself from "../Myself/Myself";
import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";

export const MoneyContext = createContext(0);
const Father = () => {
   const [money, setMoney] = useState(12000);

   return (
      <div className="area">
         <h3>Father</h3>
         <p>
            Balance:{" "}
            <span className="text-red">
               {" "}
               <strong>{money}</strong>{" "}
            </span>
         </p>
         <MoneyContext.Provider value={[money, setMoney]}>
            <div className="">
               <Myself></Myself>
               <div className="area-flex">
                  <Brother>Paris</Brother>
                  <Brother>Melton</Brother>
                  <Brother>John</Brother>
                  <Brother>Khuka</Brother>
               </div>
               <div className="area-flex">
                  <Sister>Sima</Sister>
                  <Sister>Lipi</Sister>
                  <Sister>Mukti</Sister>
                  <Sister>Munni</Sister>
                  <Sister>Kajol</Sister>
                  <Sister>Eti</Sister>
                  <Sister>Setu</Sister>
                  <Sister>Tuni</Sister>
               </div>
            </div>
         </MoneyContext.Provider>
      </div>
   );
};

export default Father;
