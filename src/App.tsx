import { Outlet } from "react-router-dom";
import { HeroUIProvider } from "@heroui/system";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <HeroUIProvider>
      <div style={{ fontFamily: "'Kite One', sans-serif" }} className="pt-5 px-5 !text-[#C6BECF] !bg-[#0F0A22] w-screen h-screen overflow-x-hidden">
        <Navbar />
        <div className=" pt-2 sm:pt-5 h-full w-full ">
          <Outlet />
        </div>
      </div>
    </HeroUIProvider>
  );
}
