import { useContext } from "react";
import Nephew from "../Nephew/Nephew";
import Niece from "../Niece/Niece";
import { MoneyContext } from "../Father/Father";

const Sister = ({ children }) => {
   const [balance, setBalance] = useContext(MoneyContext);
   return (
      <div className="area">
         <h3>Sister</h3>
         <p>{children}</p>
         {(children === "Setu" || children === "Sima") && (
            <p>
               Father's Balance: <span className="text-red">{balance}</span>
            </p>
         )}

         {children === "Sima" && <Niece>Diva</Niece>}
         {children === "Lipi" && <Nephew>Munna</Nephew>}
         {children === "Lipi" && <Niece>Mow</Niece>}
         {children === "Eti" && <Niece>Pak Pak</Niece>}
         {children === "Mukti" && <Nephew>Abdullah</Nephew>}
         {children === "Munni" && <Nephew>Mithu</Nephew>}
         {children === "Kajol" && <Nephew>Shovon</Nephew>}
         {children === "Kajol" && <Niece>Rushni</Niece>}
         {children === "Tuni" && <Niece>Oboni</Niece>}
         {children === "Tuni" && <Nephew>Alvi</Nephew>}

         {children === "Setu" && (
            <button className="btn btn-blue" onClick={() => setBalance(balance + 500)}>
               Add 500 TK
            </button>
         )}
         {children === "Setu" && (
            <button className="btn btn-warning" onClick={() => setBalance(balance - 500)}>
               Add 500 TK
            </button>
         )}
      </div>
   );
};

export default Sister;
