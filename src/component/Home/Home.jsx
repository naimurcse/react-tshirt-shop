import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Home = () => {
   return (
      <>
         <Header></Header>
         <Outlet></Outlet>
         <Toaster position="top-right" reverseOrder={false} />
      </>
   );
};

export default Home;
