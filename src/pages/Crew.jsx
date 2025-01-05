import {useState} from 'react'

export default function Crew() {
    const [selected, setSelected] = useState("1");

    function Crew({role, name, children, img, alt=""}) {
        return (
            <div className='grid grid-cols-2 gap-28 h-full'>
                <div className='my-auto pb-12 flex flex-col gap-3'>
                    <span className='uppercase font-bellefair opacity-50 text-2xl'>{role}</span>
                    <h1 className='uppercase text-4xl font-bellefair'>{name}</h1>
                    <p className='text-blue-300 font-barlow'>{children}</p>
                </div>
                <div className='relative'>
                    <img className='absolute h-full' src={img} alt={alt} />
                </div>
            </div>
        )
    }

    function NavBtn({index}) {
        return (
            <button className={`h-3 w-3 rounded-full ${selected === index ? 'bg-white' : 'bg-white/15 hover:bg-white/50'}`} onClick={() => setSelected(index)}></button>
        )
    }

    return (
        <>
            <img className="fixed -z-50" src="src\assets\crew\background-crew-desktop.jpg" alt="" />
            <div className="h-screen flex flex-col px-32 pt-24 pb-12">
                <div className="flex gap-3 uppercase tracking-widest text-xl font-barlowCondensed mb-10"><span className="opacity-25 font-bold tracking-widest">02</span>meet your crew</div>
                {selected === "1" ?
                <Crew role='Commander' name='Douglas Hurley' img="src\assets\crew\image-douglas-hurley.png">
                    Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and 
                    former NASA astronaut. He launched into space for the third time as commander 
                    of Crew Dragon Demo-2.
                </Crew>
                : selected === "2" ?
                <Crew role='Mission Specialist' name='Mark ShuttleWorth' img="src\assets\crew\image-mark-shuttleworth.png">
                    Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the 
                    Linux-based Ubuntu operating system. Shuttleworth became the first South African to 
                    travel to space as a space tourist.
                </Crew>
                : selected === "3" ?
                <Crew role='Pilot' name='Victor Glover' img="src\assets\crew\image-victor-glover.png">
                    Pilot on the first operational flight of the SpaceX Crew Dragon to the International 
                    Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was 
                    a crew member of Expedition 64, and served as a station systems flight engineer. 
                </Crew>
                : selected === "4" ?
                <Crew role='Flight Engineer' name='Anousheh Ansari' img="src\assets\crew\image-anousheh-ansari.png">
                    Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                    Ansari was the fourth self-funded space tourist, the first self-funded woman to fly 
                    to the ISS, and the first Iranian in space. 
                </Crew>
                : ""}
                <nav className='flex gap-6'>
                    <NavBtn index="1" />
                    <NavBtn index="2" />
                    <NavBtn index="3" />
                    <NavBtn index="4" />
                </nav>
            </div>
        </>
    )
}