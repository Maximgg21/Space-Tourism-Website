import {useState} from 'react'

export default function Technology() {
    const [selected, setSelected] = useState("1")
    
    function NavBtn({index}) {
        return <button className={`h-12 w-12 rounded-full border ${selected === index ? "bg-white border-none text-black" : "bg-transparent text-white border border-white/50 hover:border-white"}`} onClick={() => setSelected(index)}>{index}</button>
    }

    function TechnologyInfo({technology, children, img, alt=""}) {
        return (
            <>
                <div className=''>
                    <div className='uppercase text-white/50 text-2xl font-bellefair'>the terminology...</div>
                    <h1 className='uppercase text-4xl font-bellefair'>{technology}</h1>
                    <p className='text-blue-300'>{children}</p>
                </div>
                <img className='object-cover size-full' src={img} alt={alt} />
            </>
        )
    }

    return (
        <>
            <img className="fixed -z-50" src="src\assets\technology\background-technology-desktop.jpg" alt="" />
            <div className="h-screen flex flex-col pl-32 pt-24">
                <div className="flex gap-5 uppercase tracking-widest text-xl font-barlowCondensed mb-10"><span className="opacity-25 font-bold tracking-widest">03</span>Space launch 101</div>
                <div className="h-full pb-20 grid grid-cols-[auto,1fr,1fr] items-center gap-10">
                    <div className='flex flex-col gap-7'>
                        <NavBtn index="1" />
                        <NavBtn index="2" />
                        <NavBtn index="3" />
                    </div>
                    {selected === "1" ?
                    <TechnologyInfo technology="Launch Vehicle" img="src\assets\technology\image-launch-vehicle-landscape.jpg">
                        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to 
                        carry a payload from Earth's surface to space, usually to Earth orbit or 
                        beyond. Our WEB-X carrier rocket is the most powerful in operation. 
                        Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
                    </TechnologyInfo>
                    : selected === "2" ?
                    <TechnologyInfo technology="Spaceport" img="src\assets\technology\image-spaceport-landscape.jpg">
                        A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                        by analogy to the seaport for ships or airport for aircraft. Based in the 
                        famous Cape Canaveral, our spaceport is ideally situated to take advantage 
                        of the Earth’s rotation for launch.
                    </TechnologyInfo>
                    : selected === "3" ?
                    <TechnologyInfo technology="Space Capsule" img="src\assets\technology\image-space-capsule-landscape.jpg">
                        A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                        capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                        you'll spend your time during the flight. It includes a space gym, cinema, and 
                        plenty of other activities to keep you entertained.
                    </TechnologyInfo>
                    : ""}
                </div>
            </div>
        </>
    )
}

