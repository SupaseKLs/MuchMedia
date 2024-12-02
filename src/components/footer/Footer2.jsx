'use client'
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Content from './Content'

export default function Footer() {
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
    { text: 'LinkedIn', href: 'https://www.linkedin.com/feed/' },
    { text: 'Facebook', href: 'https://www.facebook.com/supasek.laobutsa' },
    { text: 'Instragram', href: 'https://www.instagram.com/sucsek.studio/' },
  ];
  return (
    <div
      className='relative h-[700px] lg:h-[450px] bg-background'
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className='fixed bottom-14 h-[700px] lg:h-[450px]'>
        <div className="relative bg-primary-color h-[700px] lg:h-[450px]">
          <div className="flex">
            <div className="absolute bottom-0 sm:p-10 sm:top-16 top-24 ">
              <div className='flex flex-col md:flex-row justify-between w-screen'>

                <div className="logo ml-0 lg:ml-36 w-full text-white">
                  <div className="Logo-img flex flex-col items-start">
                    <div className="flex flex-col justify-center w-full mt-7 items-center md:items-start pl-0 md:pl-20">
                      <div>
                        <img src='/images/logo.svg' width={250} height={250} className='max-w-[150px]' alt="" />
                      </div>
                      <div>
                        <h1 className='hidden text-center mt-3 text-xl lg:text-2xl lg:block'>MuchMedia</h1>
                      </div>
                    </div>
                  </div>

                  <div className="contact lg:flex">
                    <div className="flex flex-col">
                      <div className='w-full flex justify-center'>
                        <p className='text-5xl md:text-5xl lg:text-6xl font-bold my-8 whitespace-nowrap text-center font-Inter '>Get in touch</p>
                      </div>
                      <div className='p-5 lg:p-0'>
                        <div className="group w-full relative cursor-pointer p-2 border bg-[#1B1B1D] rounded-full overflow-hidden text-while text-center font-semibold" aria-label="Copy Email button" onClick={() => navigator.clipboard.writeText('muchmedia@gmail.com')}>
                          <span className="text-2xl lg:text-2xl md:text-xl  px-5 py-5 translate-y-0 group-active:-translate-y-12 group-active:opacity-0 transition-all duration-300 inline-block">
                          muchmedia@gmail.com
                          </span>
                          <div className="flex gap-2 text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-active:translate-y-0 group-active:opacity-100 transition-all duration-300 rounded-full group-active:rounded-none">
                            <span className='text-2xl lg:text-2xl md:text-xl '>Copy email Succesfully!</span>
                          </div>
                        </div>
                      </div>

                    </div>


                  </div>

                </div>

                {/* end logo */}

                <div className="flex w-full justify-center md:mt-0 mt-4 text-white ">
                  <div className='flex flex-col items-center mr-7 lg:w-full gap-2'>
                    <div className='flex flex-col'>
                      <h3 className='mb-2 font-Poppins text-xl lg:text-2xl uppercase font-medium text-[#ffffff80]'>Pages</h3>
                      {links1.map((link) => (
                        <a
                          key={link.text}
                          href={link.href}
                          className="relative text-xl lg:text-2xl after:absolute after:bottom-0 after:left-0 after:h-[3px] pb-1 after:w-full after:origin-bottom-right after:scale-x-0  
                        after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 font-Poppins"
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className='flex flex-col gap-2 lg:pr-20'>
                    <h3 className='mb-2  font-Poppins text-xl lg:text-2xl uppercase font-medium text-[#ffffff80]'>Contact</h3>
                    <div className='flex flex-col'>
                      {links2.map((link) => (
                        <a
                          key={link.text}
                          href={link.href}
                          className="relative text-xl lg:text-2xl after:absolute after:bottom-0 after:left-0 after:h-[3px] pb-1 after:w-full after:origin-bottom-right after:scale-x-0  
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 font-Poppins"
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>

                  </div>

                </div>

                {/* end content */}
              </div>
            </div>

          </div>
          <div className="absolute bottom-10 xl:max-w-2xl sm:max-w-md max-w-6xl m-auto">
          </div>
        </div>
      </div>

    </div>
  )
}