
// <script lang="ts"> 
//     import {onMount} from "svelte";
//     import {type IProject} from "../Types"
//     import {printArray} from "../Helpers/helpers";
//     import abelPic from "../Images/abel.png"



//     export let projects: Array<IProject>;



//     // export let includeExternalButton: boolean = false;


//     let focusedProject: IProject | undefined = undefined;
    
//     //go to the next project every second 
//     onMount(() => {
//         var nextIndex: number = 0;
        
//         if (!projects || projects.length === 0){
//             console.log("(Slideshow.svelte): No projects passed in")
//         }
        
//         printArray(projects)
        
//         let interval = setInterval(() => {
//             focusedProject = projects[nextIndex];
//             console.log(focusedProject);

//             if (nextIndex + 1 >= projects.length){
//                 nextIndex = 0;
//             }else{
//                 nextIndex++;
//             }
//         }, 1000)

//         return () => clearInterval(interval)
//     });


// </script>

// <div>
//    <!-- To change the width of the entire component, change the "2" on all styling to "4" or whatever you want to set it to.$$render. -->
//     <div class="flex flex-col items-center h-screen">
//         <!-- <div>
//             <img alt="test" src={abelPic} class="w-full h-min pb-10"/>
//         </div> -->

//         <!-- !TODO -- Make currennt project show as a bit bigger than the others in the list that is rendered on the bottom of the screen -->
//         <div class="flex justify-center divide-x-2 border-[#61136D] border-l-2 border-r-2 w-min">
//             {#each projects as project}
//               <div class="flex flex-col border-[#61136D] border-t-2 border-b-2 h-48 w-64 p-2 hover:bg-[rgba(217,217,217,0.07)] hover:scale-105 hover:cursor-pointer">
//                 <div class="h-2/3 flex items-center justify-center">
//                   <img class="w-full h-full object-contain" src={project.logoSrc} alt={`${project.title} Logo`} />
//                 </div>
//                 <div class="text-center text-white text-lg">
//                   <p>{project.title}</p>
//                 </div>
//               </div>
//             {/each}
//         </div>
//     </div>    
// </div>    
          