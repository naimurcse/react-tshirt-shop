import Niece from "../Niece/Niece";

const Sister = ({ children }) => {
   return (
      <div className="area">
         <h3>Sister</h3>
         <p>{children}</p>
         {children === "Sima" && <Niece>Diva</Niece>}
      </div>
   );
};

export default Sister;
