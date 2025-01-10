import {useState} from 'react'

export default function Crew() {
    const [selected, setSelected] = useState("1");

    const crew = {
        "1": {
            "imgSrc": "src\\assets\\crew\\image-douglas-hurley.png",
            "imgAlt": "Douglas Hurley",
            "name": "Douglas Hurley",
            "role": "Commander",
            "description": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        "2": {
            "imgSrc": "src\\assets\\crew\\image-mark-shuttleworth.png",
            "imgAlt": "Mark ShuttleWorth",
            "name": "Mark ShuttleWorth",
            "role": "Mission Specialst",
            "description": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        "3": {
            "imgSrc": "src\\assets\\crew\\image-victor-glover.png",
            "imgAlt": "Victor Glover",
            "name": "Victor Glover",
            "role": "Pilot",
            "description": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        "4": {
            "imgSrc": "src\\assets\\crew\\image-anousheh-ansari.png",
            "imgAlt": "Anousheh Ansari",
            "name": "Anousheh Ansari",
            "role": "Flight Engineer",
            "description": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
        }
    }

    function NavBtn({index}) {
        return (
            <button className={`h-3 w-3 rounded-full ${selected === index ? 'bg-white' : 'bg-white/15 hover:bg-white/50'}`} onClick={() => setSelected(index)}></button>
        )
    }

    const selectedCrew = crew[selected];

    return (
        <>
            <img className="absolute -z-50" src="src\assets\crew\background-crew-desktop.jpg" alt="" />
            <div className="flex flex-col px-32 pt-24 pb-12">
                <div className="flex gap-3 uppercase tracking-widest text-xl font-barlowCondensed mb-10"><span className="opacity-25 font-bold tracking-widest">02</span>meet your crew</div>
                <div className='flex gap-24'>
                    <div className='flex flex-col justify-between max-w-lg'>
                        <div className='my-auto pb-12 flex flex-col gap-3'>
                            <span className='uppercase font-bellefair opacity-50 text-2xl'>{selectedCrew.role}</span>
                            <h1 className='uppercase text-4xl font-bellefair'>{selectedCrew.name}</h1>
                            <p className='text-blue-300 font-barlow'>{selectedCrew.description}</p>
                        </div>
                        <nav className='flex gap-6'>
                            <NavBtn index="1" />
                            <NavBtn index="2" />
                            <NavBtn index="3" />
                            <NavBtn index="4" />
                        </nav>
                    </div>
                    <img className='max-h-96' src={selectedCrew.imgSrc} alt={selectedCrew.imgAlt} />
                </div>
            </div>
        </>
    )
}