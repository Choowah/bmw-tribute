import e36Front from "/public/drawings/e36_front.webp"
import e36Back from "/public/drawings/e36_back.webp"
import e36Collage from "/public/collage/E36_collage.webp"

const E36 = () => {
    return (
        <div>
            <img className="my-[4vw]" src={e36Collage} alt="" />
            <div className="bg-white text-black grid grid-cols-2 grid-rows-2 gap-[2vw] justify-items-center items-center mx-[4vw] p-[4vw] rounded-xl">
                <img className="h-[400px] max-w-fit" src={e36Front} alt="" />
                <div>
                    <h2 className="font-bold">3rd Generation</h2>
                    <h2 className="font-bold">Built: 1990-2000</h2>
                    <h2 className="font-bold">Power: 73-236 kW / 99-321 hp</h2>
                    <h2 className="mb-[2vh] font-bold">Variants: Sedan, Coupé, Convertible, Baur Topcabriolet, Touring, Compact, M3 (as Sedan, Coupé, and Convertible)</h2>
                    <p>Wide-leg jeans and flannel shirts were all the rage. Boy bands were in their heyday, thanks to the success of groups like the Backstreet Boys and New Kids on the Block. Families could suddenly use a modem to go “online.” Welcome to the nineties!</p>
                    <p>The third generation of the BMW 3 Series represented one of the most significant design advances in its history to date. The formal language was much more coupé-oriented, with a strongly sloping A-line and C-line. The angle of the roof now had a clear downward incline. And the third-generation vehicles were also notable for the twin headlamps installed beneath a shared glass cover.</p>
                </div>
                <div>
                    <h2 className="mb-[2vh] font-bold">Eight Variants of the 3 Series</h2>
                    <p>The third-generation of the BMW 3 Series comprised the widest range of body styles to date, including the Sedan, Coupé, Convertible, Touring, Compact, and M3 – the latter as a Sedan, Coupé, or Convertible.</p>
                    <h2 className="my-[2vh] font-bold">Compact Hatchback</h2>
                    <p>The BMW 3 Series Compact represented something brand new in the range. This new variant was launched in March 1994 as a more compact three-door hatchback option. While the front of the vehicle was no different from the other models, the rear end had a unique design and was 22.5 cm shorter than the Coupé. The BMW 3 Series Compact was well received, moving from a standing start to become the model with the third-highest sales, behind the Sedan and the Coupé.</p>
                </div>
                <img className="h-[400px] max-w-fit" src={e36Back} alt="" />
            </div>
        </div>
    );
}
 
export default E36;