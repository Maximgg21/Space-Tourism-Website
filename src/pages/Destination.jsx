import {useState} from "react"

export default function Destination() {
    const [selected, setSelected] = useState("moon");

    const stars = {
        "moon": {
            "imgSrc": "src\\assets\\destination\\image-moon.png",
            "imgAlt": "moon",
            "distance": "384,400 km",
            "travelTime": "3 days",
            "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
        },
        "mars": {
            "imgSrc": "src\\assets\\destination\\image-mars.png",
            "imgAlt": "mars",
            "distance": "225 mil. km",
            "travelTime": "9 months",
            "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
        },
        "europa": {
            "imgSrc": "src\\assets\\destination\\image-europa.png",
            "imgAlt": "europa",
            "distance": "628 mil. km",
            "travelTime": "3 years",
            "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
        },
        "titan": {
            "imgSrc": "src\\assets\\destination\\image-titan.png",
            "imgAlt": "titan",
            "distance": "1.6 bil. km",
            "travelTime": "7 years",
            "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
        }
    }

    function NavBtn({children}) {
        return (
            <button onClick={() => setSelected(children)} className={`pb-2 hover:border-b-2 uppercase text-blue-300 ${selected === children ? "border-b-2 border-b-white text-white hover:border-b-white" : "hover:border-b-blue-300"}`}>{children}</button>
        )
    }

    function StarInfo() {
        return (
            <div className="flex flex-col gap-10 mt-7">
                <h1 className="uppercase text-8xl font-bellefair -mb-7">{selected}</h1>
                <p className="text-blue-300 font-barlow">{selectedStars.description}</p>
                <hr />
                <div className="flex gap-24">
                    <div>
                        <div className="text-blue-300 font-barlowCondensed uppercase text-sm">avg. distance</div>
                        <div className="text-2xl font-bellefair uppercase">{selectedStars.distance} km</div>
                    </div>
                    <div>
                        <div className="text-blue-300 font-barlowCondensed uppercase text-sm">est. travel time</div>
                        <div className="text-2xl font-bellefair uppercase">{selectedStars.travelTime}</div>
                    </div>
                </div>
            </div>
        )
    }

    const selectedStars = stars[selected];

    return (
        <>
            <img className="absolute -z-50 inset-0" src="src\assets\destination\background-destination-desktop.jpg" alt="" />
            <div className="flex flex-col px-32 pt-24 pb-12">
                <div className="flex gap-3 uppercase tracking-widest text-xl font-barlowCondensed mb-10"><span className="opacity-25 font-bold tracking-widest">01</span>pick your destination</div>
                <div className="flex justify-center gap-24">
                    <img className="size-128" src={selectedStars.imgSrc} alt={selectedStars.imgAlt} />
                    <div className="max-w-sm">
                        <nav className="flex gap-7 font-barlowCondensed tracking-wide">
                            <NavBtn>moon</NavBtn>
                            <NavBtn>mars</NavBtn>
                            <NavBtn>europa</NavBtn>
                            <NavBtn>titan</NavBtn>
                        </nav>
                        <StarInfo />
                    </div>
                </div>
            </div>
        </>
    )

    
}