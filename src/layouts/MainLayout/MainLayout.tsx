import { Outlet } from "react-router-dom";

import NavBar from "../../components/NavBar";
import LeftBar from "../../components/LeftBar";
import Footer from "../../components/Footer";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <LeftBar />
      <div className="main-content">
        <Outlet/>
        <Footer />
      </div>
      <NavBar />
    </div>
  )
}

export default MainLayout