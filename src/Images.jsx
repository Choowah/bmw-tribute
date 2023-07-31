import { useEffect, useRef } from "react";

const Images = () => {
    const imageContainer = useRef(null)
    const carIcons = useRef(null)

    useEffect(() => {
            const images = imageContainer.current
            const cars = carIcons.current
            const individualImages = images.children
            const tl = gsap.timeline()
    
            gsap.set(individualImages, { opacity:0 })
            gsap.set(cars, { opacity:0 })
    
                tl.fromTo('.wikiImage', {
                    y: '100%',
                }, {
                y:0,
                opacity: 1,
                stagger: 0.4,
                ease: Power1.easeInOut
            })
                .to(images, {
                    width: '100%',
                    height: '100%',
                    ease: Power3.easeInOut,
                    duration: 2
                })
    
                .to(images, {
                    opacity: 0,
                    display: "none"
                })
    },[])

    return (
        <>
            <div className=" absolute overflow-hidden w-[50vw] aspect-[16/8] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" ref={imageContainer}>
                <div className="wikiImage absolute w-[100%] h-[100%] bg-[url('./assets/tg_topgear/tg_e21.webp')] bg-cover bg-center"></div>
                <div className="wikiImage absolute w-[100%] h-[100%] bg-[url('./assets/tg_topgear/tg_e30.webp')] bg-cover bg-center"></div>
                <div className="wikiImage absolute w-[100%] h-[100%] bg-[url('./assets/tg_topgear/tg_e36.webp')] bg-cover bg-center"></div>
                <div className="wikiImage absolute w-[100%] h-[100%] bg-[url('./assets/tg_topgear/tg_e46.webp')] bg-cover bg-center"></div>
                <div className="wikiImage absolute w-[100%] h-[100%] bg-[url('./assets/tg_topgear/tg_e90.webp')] bg-cover bg-center"></div>
                <div className="wikiImage absolute w-[100%] h-[100%] bg-[url('./assets/tg_topgear/tg_f30.webp')] bg-cover bg-center"></div>
                <div className="wikiImage absolute w-[100%] h-[100%] bg-[url('./assets/tg_topgear/tg_g20.webp')] bg-cover bg-center"></div>
                <div className="wikiImage absolute w-[100%] h-[100%] flex place-content-center place-items-center bg-black">The BMW 3 Series</div>
            </div>
        </>
    );
}
 
export default Images;