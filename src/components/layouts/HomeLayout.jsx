import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import FooterLayout from "./FooterLayout";

export default function HomeLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <FooterLayout />
    </div>
  );
}