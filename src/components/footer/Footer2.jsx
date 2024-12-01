'use client'
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Content from './Content'

export default function Footer() {

  return (
    <div
      className='relative h-[700px] lg:h-[450px] bg-background'
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className='fixed bottom-14 h-[700px] lg:h-[450px] w-full '>
        <div className="relative bg-primary-color h-[700px] lg:h-[450px]">
          <div className="">
            <div className="absolute bottom-0 sm:p-10 sm:top-16 top-24  w-full">
              <div className='flex flex-col  md:flex-row  lg:justify-between md:items-center  '>

                {/* start logo */}
                <div className="logo ml-0 lg:ml-36 w-full text-white">
                  <div className="Logo-img flex flex-col items-start">
                    <div className="flex flex-col justify-center w-full items-center md:items-start pl-0 md:pl-20">
                      <div>
                        <img src='/images/logo.svg' width={250} height={250} className='max-w-[150px]' alt="" />
                      </div>
                      <div>
                        <h1 className='hidden text-center mt-3 text-2xl lg:block'>MuchMedia</h1>
                      </div>
                    </div>
                  </div>

                  <p className='text-5xl md:text-5xl lg:text-6xl font-semibold my-8 whitespace-nowrap font-Gotham pl-20 md:pl-0'>Get in touch</p>


                  <div className="contact flex ">
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

                <div className="content flex md:justify-end justify-center w-full md:mt-0 mt-10 text-white">
                  <div className='flex flex-col  gap-2 pr-20'>
                    <h3 className='mb-2  font-Poppins text-2xl uppercase font-medium text-[#ffffff80]'>Pages</h3>

                    {["Home", "Work", "Project", "Our Team", "Review", "FAQs"].map((page) => (
                      <a
                        key={page}
                        className="relative text-xl after:absolute after:bottom-0 after:left-0 after:h-[3px] pb-1 after:w-full after:origin-bottom-right after:scale-x-0  after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] dark:after:bg-white hover:after:origin-bottom-left hover:after:scale-x-100 font-Poppins"
                        href="">
                        {page}
                      </a>
                    ))}

                  </div>

                  <div className='flex flex-col gap-2 lg:pr-20'>
                    <h3 className='mb-2  font-Poppins text-2xl uppercase font-medium text-[#ffffff80]'>Contact</h3>
                    {['LinkedIN', 'Facebook', 'Instagram', 'line'].map((Contact) => (
                      <a
                        key={Contact}
                        className="relative text-xl after:absolute after:bottom-0 after:left-0 after:h-[3px] pb-1 after:w-full after:origin-bottom-right after:scale-x-0  after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] dark:after:bg-white hover:after:origin-bottom-left hover:after:scale-x-100 font-Poppins"
                        href="">
                        {Contact}
                      </a>
                    ))}

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