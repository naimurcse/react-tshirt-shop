import React from "react";
import Nephew from "./../Nephew/Nephew";

const Brother = ({ children }) => {
   return (
      <div className="area">
         <h3>Brother</h3>
         <p>{children}</p>
         {children === "John" && <Nephew>New Baby</Nephew>}
      </div>
   );
};

export default Brother;
