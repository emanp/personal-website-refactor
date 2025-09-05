
import {Button} from "@heroui/button";
import ImagePill from "@/Components/ImagePill";


export default function Home(){

    return (
    <section className="flex flex-col md:flex-row md:items-center md:space-x-10">
        {/* Left: Header + description */}
        <div className="md:w-3/5 space-y-2">
          <div className="pt-5 text-center md:text-left space-y-1">

         
            <h1 className="text-4xl">Eman Pelayo</h1>
            <h2 className="text-2xl">Software Engineer | Musician</h2>
            <h3 className="text-md">B.S. Computer Science & Engineering</h3>
          </div>
      
        <div className="md:w-2/5 flex justify-center py-5">
            <div className="block md:hidden">
                <ImagePill />
            </div>
        </div>
          <p className="sm:py-5 md:py-10 text-justify md:text-lg">
            Based in Reno, Nevada, I am a fresh
            Computer Science & Engineering graduate from the University of Nevada, 
            Reno who is passionate about creating software and music 
            that pushes limits and improves lives while being accessible 
            to everybody. When I am not jamming out to music, you will often find me 
            learning new technologies or working on building projects that aid others.
             Always open to any opportunities or inquiries. 
             Feel free to contact me for any development help!
          </p>
          
      
          <div className="flex md:block justify-center pt-5">
            <a href="/portfolio">
              <Button href="/portfolio" className="rounded-full border-2 justify-center">
                View My Work
              </Button>

            </a>
          </div>
        </div>
      
        <div className="md:w-2/5 flex justify-center items-center ">
          <div className="hidden md:block">
            <ImagePill />
          </div>
            
        </div>
      </section>
      
        )
}