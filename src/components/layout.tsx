import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Layout = () => {
  return (
    <>
    <Header/>
    <div className="flex-1">
    <Outlet/>
    </div>
    {/* <Footer/> */}
    </>

  );
}

export default Layout