import Nephew from "../Nephew/Nephew";
import Niece from "../Niece/Niece";

const Sister = ({ children }) => {
   return (
      <div className="area">
         <h3>Sister</h3>
         <p>{children}</p>
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
      </div>
   );
};

export default Sister;
