import e90Front from "/public/drawings/e90_front.webp"
import e90Back from "/public/drawings/e90_back.webp"
import e90Collage from "/public/collage/E90_collage.webp"

const E90 = () => {
    return (
        <div>
            <img className="my-[4vw]" src={e90Collage} alt="" />
            <div className="bg-white text-black grid grid-cols-2 grid-rows-2 gap-[2vw] justify-items-center items-center mx-[4vw] p-[4vw] rounded-xl">
                <img className="h-[400px] max-w-fit" src={e90Front} alt="" />
                <div>
                    <h2 className="font-bold">5th Generation</h2>
                    <h2 className="font-bold">Built: 2005-2013</h2>
                    <h2 className="font-bold">Power: 90-331 kW / 122-450 hp</h2>
                    <h2 className="mb-[2vh] font-bold">Variants: Sedan, Coupé, Convertible, Touring, M3 (as Sedan, Coupé, and Convertible)</h2>
                    <p>“Harry Potter and the Goblet of Fire” was the highest-grossing movie of 2005. The charts were dominated by 50 Cent, Mariah Carey, and Gwen Stefani. YouTube’s story of success begins.</p>
                    <p>At the Geneva Motor Show in March 2005, BMW unveiled the fifth generation of the 3 Series– which just one year later was awarded the title of “World Car of the Year.”</p>
                    <p>The design of the fifth generation was also quick to evolve, as for the first time the variants followed their own paths. The Coupé and Convertible models, for example, now moved in quite different design directions.</p>
                </div>
                <div>
                    <h2 className="mb-[2vh] font-bold">A Fusion like no Other</h2>
                    <p>The BMW M3 Sedan grew out of a fusion between the two designs. The design involved an unprecedented combination of a front section based on the Coupé’s front end and a tail section derived from the Sedan.</p>
                    <p>The fifth-generation M3 was put through its paces both on the racetrack and at the BMW M GmbH factory – even in a pickup version! The M3 pickup was not the first of its kind, however, as a second-generation BMW M3 pickup truck was used for moving supplies around the factory site for some 26 years.</p>
                </div>
                <img className="h-[400px] max-w-fit" src={e90Back} alt="" />
            </div>
        </div>
    );
}
 
export default E90;