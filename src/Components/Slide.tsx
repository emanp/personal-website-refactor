

interface SlideProps {
    projectTitle: string,
    description: string,
    languages: string,
    frontend?: string | null,
    backend?: string | null,
    hardware?: string
    githubLink?: string,
    youtubeLink?: string | null,
    aboutLink?: string | null,
    img: string


}

import { FaGithub, FaYoutube, FaInfoCircle } from "react-icons/fa";


export default function Slide({ projectTitle, description, languages, frontend, backend, githubLink, youtubeLink, img, aboutLink, hardware}: SlideProps) {
    return (
        
            <div className="pb-5 border-3 border-[#61136D] rounded-2xl mb-5 flex flex-col md:flex-row items-center justify-between bg-[#0D0B1F] text-white p-5 gap-8">

                {/* Left side */}
                <div className="md:w-1/2 space-y-6 ">
                    <h1 className="text-3xl">{projectTitle}</h1>

                    <p className="text-lg text-justify">
                        {description}
                    </p>

                    <div className="text-md space-y-1">
                        <p><span className="font-semibold">Languages:</span> {languages}</p>
                        {frontend ? <p><span className="font-semibold">Frontend:</span> {frontend}</p> : null}
                        {backend ? <p><span className="font-semibold">Backend:</span> {backend}</p> : null }
                        {hardware ? <p><span className="font-semibold">Hardware:</span> {hardware}</p> : null }
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4 pt-4 justify-center md:justify-start">
                        <a href={githubLink} target="_blank" rel="noreferrer">
                            <FaGithub className="w-10 h-10 hover:opacity-70 transition" />
                        </a>
                        {aboutLink ? <a href={aboutLink} target="_blank" rel="noreferrer">
                            <FaInfoCircle className="w-10 h-10 hover:opacity-70 transition" />
                        </a> : null }
                        {youtubeLink ? <a href={youtubeLink} target="_blank" rel="noreferrer">
                            <FaYoutube className="w-10 h-10 hover:opacity-70 transition" />
                        </a> : null}
                    </div>
                </div>

                {/* Right side */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={img}
                        alt="WaveBrigade"
                        className="rounded-lg shadow-lg border border-gray-700 w-full max-w-xl md:max-h-80 bg-[#0D0B1F]"
                    />
                </div>
            </div>
    );
}