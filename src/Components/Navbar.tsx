
import NavbarAvatar from "./NavbarAvatar";
import AbelPic from "../Images/abel.png";
import LinkedInPic from "../Images/Linkedin.svg"
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

import { FaMoon, FaLinkedinIn } from "react-icons/fa6";
import { BsMoonStarsFill } from "react-icons/bs";


export default function Navbar(){
    return (
        // Needs mobile compatibility 
        <nav className="flex items-center justify-between p-4 rounded-full bg-[rgba(217,217,217,0.07)] border-[3px] border-[#61136D]">
            <div className="hidden md:block">
            <a href={"/"}>
                    <FaMoon className="w-10 h-10 hover:opacity-70 transition" />
                </a>
            </div>

            <div className="text-lg flex-1 flex justify-center space-x-6">
                <a className="hover:underline" href="/"> Home </a>
                <a className="hover:underline" href="/portfolio"> Portfolio </a>
                {/* <a className="hover:underline" href="/inquiries"> Inquiries </a> */}
                <a className="hover:underline" href="/contact"> Contact </a>
            </div>

            <div className="hidden md:flex md:space-x-2"> 
                <a href={"https://github.com/emanp"} target="_blank" rel="noreferrer">
                    <FaGithub className="w-10 h-10 hover:opacity-70 transition" />
                </a>
                <a href={"https://www.linkedin.com/in/emanpelayo/"} target="_blank" rel="noreferrer">
                    <FaLinkedin className=" w-10 h-10 hover:opacity-70 transition" />
                </a>
            </div>
        </nav>
    )
}
