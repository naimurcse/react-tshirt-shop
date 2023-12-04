import "./Grandpa.css";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import { createContext } from "react";

export const LevelContext = createContext("Hello");

const Grandpa = () => {
   return (
      <div className="container area grandpa">
         <h3>Grandpa</h3>
         <div className="">
            <Father></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
         </div>
      </div>
   );
};

export default Grandpa;
