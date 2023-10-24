import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer/Footer";

export default function Main() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div>
        <Toaster position="bottom-right" />
      </div>
      <Footer></Footer>
    </>
  );
}
