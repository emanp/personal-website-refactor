import { Tabs, Tab } from "@heroui/tabs";
import { useState } from "react";
import type { Key } from "react";
import abelpic from "../Images/abel.png"
import { Button } from "@heroui/button";
import apexExtinctionLogo from "../Images/Apex.png"
import WaveBrigadeDemoImg from "../Images/wb-demo-lab.png"
import apexPicCropped from "../Images/apex-pic-cropped.png"
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BORDER_COLOR } from "@/Components/ProjectTabList";
import swampCoolerDemoPic from "../Images/swamp-cooler-demo.png"
import emanPic from "../Images/eman.jpeg"

export const TEXT_COLOR = "#C6BECF"

import ProjectTabList from "@/Components/ProjectTabList";
import Slide from "@/Components/Slide";


const apexExtinctionGitHubLink = "https://github.com/Andrade-Sebastian/Apex-Extinction";
const swampCoolerGitHubLink = "https://github.com/Pelayo-Emanuelle/CPE-301-Final-Project-";
const swampCoolerYoutubeLink = "https://youtu.be/aPLeDOnwAaY";




export default function PortfolioPage() {
  return (
    <div className="pb-10">


      <Slide
        projectTitle="WaveBrigade"
        description="
      WaveBrigade is a web-based platform with the purpose of studying reactions to media while providing instructors with an environment to create lesson plans in the form of experiments. Instructors can create virtual lobbies 
      utilizing the experiment and present media 
      to students while collecting students' 
      real-time biometric responses, such as temperature, heart rate, 
      and electrodermal activity utilizing the EmotiBit device.
       Data is illustrated in charts and graphs. 
       Lobbies provide a live chat, which allows for rapid communication between students and instructors. 
       Once the experiment concludes, instructors are able to download participants' 
       data report."
        languages="TypeScript, Python, SQL"
        frontend={"React.js, TailwindCSS, Zustand"}
        backend={"Express.js, PostgreSQL, Socket.IO"}
        githubLink="https://github.com/Andrade-Sebastian/CapstoneGroup9"
        youtubeLink={"https://youtu.be/nYSBfULpLCM?si=mXeT5z_isW-yZXyp"}
        img={WaveBrigadeDemoImg}
        hardware="EmotiBit"
        aboutLink={"https://marquez-haley.github.io/WaveBrigade/"}
      />

      <Slide
        projectTitle="Apex Extinction"
        description="As an unnamed soldier, you venture through a post-apocalyptic Earth,
      collecting currency and power-ups while mowing down various kinds of enemies."
        languages="C#, Visual Scripting"
        githubLink={apexExtinctionGitHubLink}
        img={apexPicCropped}


      />

      <Slide
        projectTitle="Swamp Cooler"
        description="A fully customizable swamp cooler capable of monitoring and regulating
        temperature based on user-defined temperature and water level thresholds."
        hardware="Arduino Mega 2560"
        languages="ANSI C"
        githubLink={swampCoolerGitHubLink}
        youtubeLink={swampCoolerYoutubeLink}
        img={swampCoolerDemoPic}
      />

    </div>


  )
}