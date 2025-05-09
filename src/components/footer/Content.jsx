import React from 'react'
import Image from 'next/image';

export default function Content() {
    return (
        <div className='bg-background lg:py-8 px-12 h-full w-full flex flex-col md:justify-center  lg:justify-between'>
            <Section1 />
            <Section2 />
        </div>
    )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end mt-5'>
            <p>©copyright</p>
        </div>
    )
}

const Nav = () => {
    const links1 = [
        { text: 'Home', href: '/' },
        { text: 'Graphic', href: '/Graphic' },
        { text: 'Production', href: '/Production' },
        { text: 'Website', href: '/WebApp' },
        { text: 'Drawing', href: '/Drawing' },
        { text: 'Our Team', href: '/We' },
        { text: 'Contact', href: '/Contact' },
    ];
    const links2 = [
        { text: 'LinkedIn', href: '/' },
        { text: 'Facebook', href: '/' },
        { text: 'Instragram', href: '/' },
    ];
    return (
        <div className='flex flex-col  md:flex-row  lg:justify-between md:items-center pt-10 '>

            {/* start logo */}
            <div className="logo ml-0 lg:ml-36 w-full">
                <div className="Logo-img  flex flex-col items-start">
                    <div className="flex flex-col items-center">
                        <img src='/images/logo.svg' width={250} height={250} className='max-w-[150px]' alt="" />
                        <span className='hidden text-center mt-3 text-2xl lg:block'>MuchMedia</span>
                    </div>
                </div>

                <p className='text-5xl md:text-5xl lg:text-6xl font-semibold my-8 whitespace-nowrap font-Gotham'>Get in touch</p>


                <div className="contact flex">
                    <div className="email flex items-center md:items-start  w-full flex-col">
                        <div className="">
                            <div className="flex">
                                <div className="group w-full relative cursor-pointer p-2 border bg-[#1B1B1D] rounded-full overflow-hidden text-while text-center font-semibold" aria-label="Copy Email button" onClick={() => navigator.clipboard.writeText('muchmedia@gmail.com')}>
                                    <span className="text-2xl md:text-2xl px-5 py-5 translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
                                        muchmedia@gmail.com
                                    </span>
                                    <div className="flex gap-2 text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none">
                                        <span className='text-2xl md:text-2xl'>Click to copy email !</span>
                                    </div>
                                </div>

                                {/* <a type="button" className="text-white bg-gradient-to-r  from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-full text-sm w-14 h-14 text-center me-2 mb-2 inline-block"></a> */}
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            {/* end logo */}

            <div className="content flex md:justify-end justify-center w-full md:mt-0 mt-10">
                <div className='flex flex-col  gap-2 pr-20'>
                    <h3 className='mb-2  font-Poppins text-2xl uppercase font-medium text-[#ffffff80]'>Pages</h3>

                    <div className="flex flex-col gap-2">
                    {links1.map((link) => (
                        <a
                            key={link.text}
                            href={link.href}
                            className="text-xl text-blue-500 hover:underline"
                        >
                            {link.text}
                        </a>
                    ))}
                </div>
                </div>

                <div className='flex flex-col gap-2 lg:pr-20'>
                    <h3 className='mb-2  font-Poppins text-2xl uppercase font-medium text-[#ffffff80]'>Contact</h3>
                    <div className="flex flex-col gap-2">
                    {links2.map((link) => (
                        <a
                            key={link.text}
                            href={link.href}
                            className="text-xl text-blue-500 hover:underline"
                        >
                            {link.text}
                        </a>
                    ))}
                </div>

                </div>

            </div>

            {/* end content */}
        </div>
    )
}