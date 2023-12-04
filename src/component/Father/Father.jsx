import React from "react";
import Myself from "../Myself/Myself";
import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";

const Father = () => {
   return (
      <div className="area">
         <h3>Father</h3>
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
      </div>
   );
};

export default Father;
