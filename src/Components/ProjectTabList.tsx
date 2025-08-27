
import apexExtinctionLogo from "../Images/Apex.png"
import waveBrigadeLogo from "../Images/WaveBrigadeLogo.png"
import embeddedLogo from "../Images/embeddedLogo.png"


interface IProjectTab {
    title: string,
    imgSrc: string,
    // href: string,
}

export const BORDER_COLOR = "[#61136D]"

export default function ProjectTabList() {
    const projectsList: IProjectTab[] = [
    {
        title: "WaveBrigade",
        imgSrc: waveBrigadeLogo
    }, 
    {
        title: "Swamp Cooler",
        imgSrc: embeddedLogo
    }];


    return (
            <div className="flex flex-row justify-center w-fit">    
                <div className={`
                flex flex-col
                px-2 items-center border-[3px] border-${BORDER_COLOR}
                align-middle content-center`} >
                <a href="APEX-EXTINCTION.COM" target="_blank" rel="noopener noreferrer">
                    <img className="flex-[3] w-12 h-12 md:w-24 md:h-24 object-contain hover:cursor-pointer" src={waveBrigadeLogo} alt={"WaveBrigade"} />
                </a>

                <h1 className="flex flex-[2] text-center">{"WaveBrigade"}</h1>
                    </div>

                    <div className={`px-2 flex flex-col items-center
            border-[3px] border-${BORDER_COLOR} align-middle content-center`} >
                <a href="APEX-EXTINCTION.COM" target="_blank" rel="noopener noreferrer">
                <img className="
                w-24 h-12 md:w-32 md:h-24 
                object-contain
                hover:cursor-pointer
                " src={apexExtinctionLogo} alt={"aoex"} />
                </a>
                <h1 className="flex text-center">{"Apex Extinction"}</h1>
        </div>

        <div className={`
                flex flex-col
                px-2 items-center border-[3px] border-${BORDER_COLOR}
                align-middle content-center`} >
                <a href="APEX-EXTINCTION.COM" target="_blank" rel="noopener noreferrer">
                    <img className="flex-[3] w-12 h-12 md:w-24 md:h-24 object-contain hover:cursor-pointer" src={embeddedLogo} alt={"Swamp Cooler"} />
                </a>

                <h1 className="flex flex-[2] text-center">{"Swamp Cooler"}</h1>
                    </div>


            </div>
    );
}