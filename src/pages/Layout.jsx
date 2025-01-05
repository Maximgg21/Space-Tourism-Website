import {useState} from 'react'
import {Outlet, Link} from 'react-router-dom'

export default function Layout() {
    const [currPath, setCurrPath] = useState(window.location.pathname);

    function CustomLink({to, number, children}) {
        const selected = currPath === to;
        return (
            <Link onClick={() => setCurrPath(to)} className={`h-auto flex items-center border-t-transparent hover:border-y-2 ${selected ? 'border-y-2 border-white' : 'border-white/50'}`} to={to}>
                <div className='flex gap-2'>
                    <span className=' font-bold'>{number}</span>
                    {children}
                </div>
            </Link>
        )
    }

    return (
        <>
            <header className='flex justify-between items-center absolute w-full mt-3'>
                <div className='flex items-center gap-5 ml-10 w-full'>
                    <div className='overflow-hidden relative bg-white w-10 h-10 rounded-full flex items-center justify-center'>
                        <div className='absolute w-8 h-8 bg-black clip-star'></div>
                    </div>
                    <hr className='border-gray-500 h-1 w-full translate-x-5' />
                </div>
                <nav className='font-barlowCondensed tracking-widest flex gap-14 h-12 bg-white pl-32 pr-10 bg-opacity-5 backdrop-filter'>
                    <CustomLink to="/" number="00">Home</CustomLink>
                    <CustomLink to="/destination" number="01">Destination</CustomLink>
                    <CustomLink to="/crew" number="02">Crew</CustomLink>
                    <CustomLink to="/technology" number="03">Technology</CustomLink>
                </nav>
            </header>
            
            <Outlet setCurrPath={setCurrPath}/>
        </>
    )
}