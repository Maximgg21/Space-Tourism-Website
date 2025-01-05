import {useState} from "react"

export default function Destination() {
    const [selected, setSelected] = useState("moon");

    function NavBtn({children}) {
        return (
            <button onClick={() => setSelected(children)} className={`pb-2 hover:border-b-2 uppercase text-blue-300 ${selected === children ? "border-b-2 border-b-white text-white hover:border-b-white" : "hover:border-b-blue-300"}`}>{children}</button>
        )
    }

    function StarInfo({children, distance, travelTime}) {
        return (
            <>
                <h1 className="uppercase text-7xl font-bellefair">{selected}</h1>
                <p className="text-blue-300 font-barlow">{children}</p>
                <hr />
                <div className="flex gap-24">
                    <div>
                        <div className="text-blue-300 font-barlowCondensed uppercase text-sm">avg. distance</div>
                        <div className="text-2xl font-bellefair uppercase">{distance} km</div>
                    </div>
                    <div>
                        <div className="text-blue-300 font-barlowCondensed uppercase text-sm">est. travel time</div>
                        <div className="text-2xl font-bellefair uppercase">{travelTime}</div>
                    </div>
                </div>
            </>

        )
    }

    return (
        <>
            <img className="fixed -z-50" src="src\assets\destination\background-destination-desktop.jpg" alt="" />
            <div className="flex flex-col px-32 pt-24">
                <div className="flex gap-3 uppercase tracking-widest text-xl font-barlowCondensed mb-10"><span className="opacity-25 font-bold tracking-widest">01</span>pick your destination</div>
                <div className="flex justify-center gap-44">
                    <div>
                        {selected === "moon" ?
                        <img className="size-80" src="src\assets\destination\image-moon.png" alt="" />
                        : selected === "mars" ?
                        <img className="size-80" src="src\assets\destination\image-mars.png" alt="" />
                        : selected === "europa" ?
                        <img className="size-80" src="src\assets\destination\image-europa.png" alt="" />
                        : selected === "titan" ?
                        <img className="size-80" src="src\assets\destination\image-titan.png" alt="" />
                        : ""}
                    </div>
                    <div className="max-w-sm -translate-y-8">
                        <nav className="flex gap-4 mb-5 font-barlowCondensed tracking-wide">
                            <NavBtn>moon</NavBtn>
                            <NavBtn>mars</NavBtn>
                            <NavBtn>europa</NavBtn>
                            <NavBtn>titan</NavBtn>
                        </nav>
                        <div className="flex flex-col gap-5">
                            {selected === "moon" ? 
                            <StarInfo distance="384,400" travelTime="3 days">
                                See our planet as you’ve never seen it before. A perfect relaxing trip
                                away to help regain perspective and come back refreshed. While you’re
                                there, take in some history by visiting the Luna 2 and Apollo 11 landing
                                sites.
                            </StarInfo>
                            : selected === "mars" ?
                            <StarInfo distance="225 mil." travelTime="3 months">
                                Don’t forget to pack your hiking boots. You’ll need them to tackle 
                                Olympus Mons, the tallest planetary mountain in our solar system. 
                                It’s two and a half times the size of Everest!
                            </StarInfo>
                            : selected === "europa" ?
                            <StarInfo distance="628 mil." travelTime="3 years">
                                The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                                winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                                ice skating, curling, hockey, or simple relaxation in your snug wintery 
                                cabin.
                            </StarInfo>
                            : selected === "titan" ?
                            <StarInfo distance="1.6 bil." travelTime="7 years">
                                The only moon known to have a dense atmosphere other than Earth, Titan 
                                is a home away from home (just a few hundred degrees colder!). As a 
                                bonus, you get striking views of the Rings of Saturn.
                            </StarInfo>
                            : ""}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}