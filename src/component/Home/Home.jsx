import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Home = () => {
   return (
      <>
         <Header></Header>
         <Outlet></Outlet>
         <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
               className: "",
               style: {
                  padding: "16px",
                  color: "#333",
                  fontSize: "1.6rem",
               },
            }}
         />
      </>
   );
};

export default Home;
