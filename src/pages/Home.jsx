import {Link} from 'react-router-dom'

export default function Home({setCurrPath}) {   
    return (
        <>
            <img className="absolute -z-50 inset-0 max-md:hidden" src="src\assets\home\background-home-desktop.jpg" alt="" />
            <img className="absolute -z-50 inset-0 hidden sm:max-md:block" src="src\assets\home\background-home-tablet.jpg" alt="" />
            <img className="absolute -z-50 inset-0 hidden max-sm:block" src="src\assets\home\background-home-mobile.jpg" alt="" />
            <div className="h-screen flex items-end w-4/5 mx-auto pb-20 pt-24">
                <div className="w-full flex justify-between items-center max-md:flex-col">
                    <div className="max-w-lg">
                        <div className="uppercase text-2xl font-barlowCondensed text-blue-300 tracking-widest">so, you want to travel to</div>
                        <div className="uppercase text-9xl my-3 font-bellefair">space</div>
                        <p className="font-barlow text-blue-300 text-sm tracking-wider">
                            Let's face it: if you want to go to space, you might as well genuinely
                            go to outer space and not hover kind of on the edge of it. Well sit back, 
                            and relax because we'll give you a truly out of this world experience!
                        </p>
                    </div>
                    <div className='h-80 w-80 rounded-full grid place-content-center has-[:hover]:bg-white/10 ease-in'>
                        <Link onClick={() => setCurrPath("/destination")} className="grid place-content-center pt-1 h-48 w-48 rounded-full bg-white text-blue-900 text-2xl font-bellefair uppercase" to="/destination">explore</Link>
                    </div>
                </div>
            </div>
        </>
    )
}