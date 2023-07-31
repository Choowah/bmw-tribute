import { useEffect, useRef, useState } from "react";

// Pages appear onClick
import E21 from "./E21";
import E30 from "./E30";
import E36 from "./E36";
import E46 from "./E46";
import E90 from "./E90";
import F30 from "./F30";
import G20 from "./G20";

const HoverList = () => {
    const mainContent = useRef(null)
    const [model, setModel] = useState(null)

    useEffect(() => {
        // Only show after initial animation
        const content = mainContent.current
        gsap.fromTo(content, {
            opacity: 0,
            display: "none"
        }, {
            opacity: 1,
            display: "block",
            delay: 5.5
        })
    }, [])

    return (
       <div id="top" ref={mainContent} className="h-screen w-screen overflow-x-hidden">
              <div>
                     <h1 className="p-8 w-[50%] md:text-[3em]">JOURNEY THROUGH THE GENERATIONS</h1>
                     <div className="ml-[2vw] w-[96vw]">
                       <ul>
                           <a href="#displayedModel" className="relative border-t border-[#afafaf] pl-[50%] h-[10vh] flex flex-wrap content-center text-3xl
                                          group hover:opacity-100"
                                          onClick={() => setModel("E21")}>
                                   <img
                                   className="absolute h-[30vh] left-[10vw] top-[-5vh] opacity-0 z-10
                                          group-hover:opacity-100 transition duration-500"
                                   src="../src/assets/tg_topgear/tg_e21.webp"
                                   alt=""
                                   />
                                   <span className="absolute pt-1 text-[#afafaf] left-0 text-xs">1975-1982</span>
                                   E21
                                   <span className="pl-5 opacity-0 z-10 group-hover:opacity-100 transition duration-500">"The OG"</span>
                           </a>
                           <a href="#displayedModel" className="relative border-t border-[#afafaf] pl-[50%] h-[10vh] flex flex-wrap content-center text-3xl
                                          group hover:opacity-100 "
                                          onClick={() => setModel("E30")}>
                                   <img
                                   className="absolute h-[30vh] left-[20vw] top-[-5vh] opacity-0 z-10
                                          group-hover:opacity-100 transition duration-500"
                                   src="../src/assets/tg_topgear/tg_e30.webp"
                                   alt=""
                                   />
                                   <span className="absolute pt-1 text-[#afafaf] left-0 text-xs">1982-1991</span>
                                   E30
                                   <span className="pl-5 opacity-0 z-10 group-hover:opacity-100 transition duration-500">"Racing Roots"</span>
                           </a>
                           <a href="#displayedModel" className="relative border-t border-[#afafaf] pl-[50%] h-[10vh] flex flex-wrap content-center text-3xl
                                          group hover:opacity-100"
                                          onClick={() => setModel("E36")}>
                                   <img
                                   className="absolute h-[30vh] left-[12vw] top-[-5vh] opacity-0 z-10
                                          group-hover:opacity-100 transition duration-500"
                                   src="../src/assets/tg_topgear/tg_e36.webp"
                                   alt=""
                                   />
                                   <span className="absolute pt-1 text-[#afafaf] left-0 text-xs">1991-1998</span>
                                   E36
                                   <span className="pl-5 opacity-0 z-10 group-hover:opacity-100 transition duration-500">"Cult Classic"</span>
                           </a>
                           <a href="#displayedModel" className="relative border-t border-[#afafaf] pl-[50%] h-[10vh] flex flex-wrap content-center text-3xl
                                          group hover:opacity-100"
                                          onClick={() => setModel("E46")}>
                                   <img
                                   className="absolute h-[30vh] left-[17vw] top-[-5vh] opacity-0 z-10
                                          group-hover:opacity-100 transition duration-500"
                                   src="../src/assets/tg_topgear/tg_e46.webp"
                                   alt=""
                                   />
                                   <span className="absolute pt-1 text-[#afafaf] left-0 text-xs">1998-2005</span>
                                   E46
                                   <span className="pl-5 opacity-0 z-10 group-hover:opacity-100 transition duration-500">"Most Wanted"</span>
                           </a>
                           <a href="#displayedModel" className="relative border-t border-[#afafaf] pl-[50%] h-[10vh] flex flex-wrap content-center text-3xl
                                          group hover:opacity-100"
                                          onClick={() => setModel("E90")}>
                                   <img
                                   className="absolute h-[30vh] left-[10vw] top-[-5vh] opacity-0 z-10
                                          group-hover:opacity-100 transition duration-500"
                                   src="../src/assets/tg_topgear/tg_e90.webp"
                                   alt=""
                                   />
                                   <span className="absolute pt-1 text-[#afafaf] left-0 text-xs">2005-2015</span>
                                   E90
                                   <span className="pl-5 opacity-0 z-10 group-hover:opacity-100 transition duration-500">"2006 Car of the Year"</span>
                           </a>
                           <a href="#displayedModel" className="relative border-t border-[#afafaf] pl-[50%] h-[10vh] flex flex-wrap content-center text-3xl
                                          group hover:opacity-100"
                                          onClick={() => setModel("F30")}>
                                   <img
                                   className="absolute h-[30vh] left-[20vw] top-[-5vh] opacity-0 z-10
                                          group-hover:opacity-100 transition duration-500"
                                   src="../src/assets/tg_topgear/tg_f30.webp"
                                   alt=""
                                   />
                                   <span className="absolute pt-1 text-[#afafaf] left-0 text-xs">2012-2018</span>
                                   F30
                                   <span className="pl-5 opacity-0 z-10 group-hover:opacity-100 transition duration-500">"Gran Turismo"</span>
                           </a>
                           <a href="#displayedModel" className="relative border-t border-b border-[#afafaf] pl-[50%] h-[10vh] flex flex-wrap content-center text-3xl
                                          group hover:opacity-100"
                                          onClick={() => setModel("G20")}>
                                   <img
                                   className="absolute h-[30vh] left-[10vw] top-[-5vh] opacity-0 z-10
                                          group-hover:opacity-100 transition duration-500"
                                   src="../src/assets/tg_topgear/tg_g20.webp"
                                   alt=""
                                   />
                                   <span className="absolute pt-1 text-[#afafaf] left-0 text-xs">2019-</span>
                                   G20
                                   <span className="pl-5 opacity-0 z-10 group-hover:opacity-100 transition duration-500">"New Kid on The Block"</span>
                           </a>
                       </ul>
                     </div>
              </div>
              <section id="displayedModel" className="w-[96dvw] ml-[2dvw] pb-[4vh]">
                     {(model == "E21") && <E21 />}
                     {(model == "E30") && <E30 />}
                     {(model == "E36") && <E36 />}
                     {(model == "E46") && <E46 />}
                     {(model == "E90") && <E90 />}
                     {(model == "F30") && <F30 />}
                     {(model == "G20") && <G20 />}
              </section>
       </div>
    );
}
 
export default HoverList;