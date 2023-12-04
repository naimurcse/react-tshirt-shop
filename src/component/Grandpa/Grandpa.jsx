import "./Grandpa.css";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import { createContext } from "react";

export const LevelContext = createContext("Hello");
export const RingContext = createContext("Gold");

const Grandpa = () => {
   return (
      <div className="container area grandpa">
         <h3>Grandpa</h3>
         <RingContext.Provider value="Golden Ring">
            <div className="">
               <Father></Father>
               <Uncle></Uncle>
               <Aunty></Aunty>
            </div>
         </RingContext.Provider>
      </div>
   );
};

export default Grandpa;
