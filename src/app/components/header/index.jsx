'use client';
import styles from './style.module.scss';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, delay } from 'framer-motion';
import { Slant as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import Logo from '@/app/asset/img/logo.svg';
import Nav from './nav';
import { background } from './anim';



export default function Index() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [open, setOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isDropDown, setDropDown] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const Duray = 0.15;
    const stagger = 0.025;

    // UseEffect for scroll position detection
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollState = window.scrollY;

            if (currentScrollState > scrollPosition && currentScrollState > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setScrollPosition(currentScrollState);
        };


        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }


    }, [scrollPosition]);


    const variants = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const items = {
        hidden: {
            opacity: 0,
            x: -50,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.2,
                ease: 'easeInOut'
            },
        },
    };




    // Toggle Menu for mobile
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        if (open) setDropDown(false);
    };

    const toggleDrop = () => {
        setDropDown(!isDropDown);
    };

    return (
        <>
            <div className="nav-bar relative">
                <div className="fixed w-full top-0 z-50 bg-background">
                    <AnimatePresence mode="wait">
                        {isActive && <Nav />}
                    </AnimatePresence>
                </div>

                {/* Navigation Bar */}
                <motion.div
                    variants={{
                        visible: { y: 0 },
                        hidden: { y: '-100%' },
                    }}
                    initial={{ y: '-100%' }}
                    animate={isVisible ? 'visible' : 'hidden'}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="fixed w-full h-auto top-0 left-0 box-border z-50 transition-transform duration-300"
                >
                    <div className={styles.header}>
                        <div className="mx-auto w-11/12">
                            <div className="flex justify-between items-center font-semibold">
                                {/* Logo */}
                                <div className="img">
                                    <Image
                                        src={Logo}
                                        alt="logo"
                                        width="80"
                                        height="80"
                                        className="cursor-pointer py-2"
                                    />
                                    <a href="Home"></a>
                                </div>

                                {/* Hamburger Menu */}
                                <div className="lg:hidden mt-4">
                                    <button onClick={toggleMenu}>
                                        <Hamburger
                                            color="#ffff"
                                            className="mt-4 z-50"
                                            toggled={open}
                                            size="28"
                                            toggle={setOpen}
                                        />
                                    </button>
                                </div>

                                {/* Desktop Menu */}
                                <ul className="hidden lg:flex">
                                    {['Home'].map((items, i) => (
                                        <motion.li
                                            initial="initial"
                                            whileHover="hovered"
                                            key={i}
                                            className="relative md:px-3 lg:px-6 cursor-pointer text-lg font-semibold font-Gotham overflow-hidden ">

                                            <motion.div
                                            className='text-text_color'
                                                variants={{
                                                    initial: { y: 0 },
                                                    hovered: { y: "-100%" },
                                                    transition : { duration : .2,ease: 'easeInOut'}
                                                }}
                                            >
                                                <a href="Home">{items}</a>
                                            </motion.div>
                                            <motion.div
                                                className='absolute inset-0  md:px-3 lg:px-6'
                                                variants={{
                                                    initial: { y: "100%" },
                                                    hovered: { y : 0 },
                                                    transition : { duration : .2, ease: 'easeInOut'}
                                                }}
                                            >
                                                <a href="Home">{items}</a>
                                            </motion.div>
                                           

                                        </motion.li>

                                    ))}
                                    <li className="md:px-3 lg:px-6 cursor-pointer text-lg font-semibold font-Gotham">
                                        <motion.p
                                            onMouseOver={() => setIsActive(!isActive)}
                                            className={styles.el}
                                        >
                                            Work
                                        </motion.p>
                                    </li>
                                    {['Our team', 'Review', 'FAQs', 'Contact', '|'].map((Menu) => (
                                        <motion.li
                                            initial="initial"
                                            whileHover="hovered"
                                            key={Menu}
                                            className="relative md:px-3 lg:px-6 cursor-pointer text-lg font-semibold overflow-hidden font-Gotham "
                                        >
                                            {/* <div>
                                                <a href="">{Menu.split("").map((l, i) => (
                                                    <motion.span
                                                        variants={{
                                                            initial: { y: 0 },
                                                            hovered: { y: "-100%" }
                                                        }}
                                                        transition={{
                                                            duration: Duray,
                                                            ease: 'easeInOut',
                                                            delay: stagger * i
                                                        }}
                                                        key={i}
                                                        className='inline-block'
                                                    >
                                                        {l}
                                                    </motion.span>
                                                ))}</a>
                                            </div>
                                            <div className='absolute inset-0 md:px-3 lg:px-6'>
                                                <a href="">{Menu.split("").map((l, i) => (
                                                    <motion.span
                                                        variants={{
                                                            initial: { y: "100%" },
                                                            hovered: { y: 0 }
                                                        }}
                                                        transition={{
                                                            duration: Duray,
                                                            ease: 'easeInOut',
                                                            delay: stagger * i
                                                        }}
                                                        key={i}
                                                        className='inline-block'
                                                    >
                                                        {l}
                                                    </motion.span>
                                                ))}</a>
                                            </div> */}



                                            <motion.div
                                            className='text-text_color'
                                            variants = {{
                                                initial : {y : 0},
                                                hovered : {y : "-100%" }
                                            }}
                                            >
                                                <a href="">{Menu}</a>
                                            </motion.div>
                                            <motion.div
                                            className='absolute inset-0 md:px-3 lg:px-6 text-white'
                                            variants = {{
                                                initial : {y : "100%"},
                                                hovered : {y : 0 , }
                                            }}
                                            >
                                                <a href="">{Menu}</a>
                                            </motion.div>
                                        </motion.li>
                                    ))}

                                    <li className="md:px-3 lg:px-6 cursor-pointer">
                                        <a href="Contact">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>

                                {/* Mobile Menu */}
                                <AnimatePresence mode='wait'>
                                    {isMenuOpen ? (
                                        <motion.div
                                            initial={{ height: 0 }} // เมื่อเริ่มแสดง
                                            animate={{ height: "100vh" }} // ขณะปรากฏ
                                            exit={{ height: 0 }} // ขณะปิด
                                            transition={{ ease: [0.76, 0, 0.24, 1], delay: 0.1, duration: 0.5 }}
                                            className="absolute top-0 left-0 -z-40 bg-background h-screen w-full "
                                        >
                                            <ul className="flex flex-col w-full pt-32 font-neue  transition-transform duration-300 lg:hidden">
                                                <motion.li
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ ease: "easeInOut", delay: .2 }}
                                                    whileHover={{ color: '#767676' }}
                                                    className={`px-6 py-3 cursor-pointer text-5xl ${isDropDown ? 'text-[#767676]' : 'text-white'}`}>

                                                    <a href="Home">Home</a>

                                                </motion.li>

                                                <li className="px-6 py-3 cursor-pointer text-5xl">
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ ease: 'easeInOut', delay: .2 }}

                                                        className={`nav-link flex flex-col  transition-transform duration-300 '}`} onClick={toggleDrop}>
                                                        <div className="flex items-center">
                                                            <div>
                                                                <motion.a
                                                                    whileHover={{ color: '#767676' }}
                                                                    href="#">Work</motion.a>
                                                            </div>
                                                            <div>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="35"
                                                                    height="35"
                                                                    viewBox="0 0 24 24"
                                                                    fill="#ffff"
                                                                    className={`ml-2 dropdown-arr transition-transform duration-300 ${isDropDown ? 'rotate-180' : ''}`}
                                                                >
                                                                    <path d="M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414 17.707 10.707z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>

                                                        {/* Dropdown Menu */}
                                                        <AnimatePresence>
                                                            {isDropDown && (

                                                                <motion.ul
                                                                    variants={variants}
                                                                    initial='hidden'
                                                                    animate='show'
                                                                    // initial={{ opacity: 0, height: 0 }}
                                                                    // animate={{ opacity: 1, height: 'auto' }}
                                                                    exit={{ opacity: 0, height: 0 }} // เพิ่ม exit เพื่อสไลด์กลับ
                                                                    transition={{ ease: 'easeInOut', duration: 0.2 }}
                                                                    className={`font-Poppins ${isDropDown ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                                                >
                                                                    <motion.li
                                                                        variants={items}
                                                                        // initial={{ opacity: 0, x: -50 }}
                                                                        // animate={{ opacity: 1, x: 0 }}
                                                                        // exit={{ opacity: 0, x: -50 }} // Exit เมื่อ dropdown ปิด
                                                                        // transition={{ duration: 0.3 }}
                                                                        className="py-4"
                                                                    >
                                                                        <motion.a
                                                                            whileHover={{ color: '#767676' }}
                                                                            href=""
                                                                        >
                                                                            WEBSITE
                                                                        </motion.a>
                                                                    </motion.li>
                                                                    <motion.li
                                                                        variants={items}
                                                                        // initial={{ opacity: 0, x: -50 }}
                                                                        // animate={{ opacity: 1, x: 0 }}
                                                                        // exit={{ opacity: 0, x: -50 }}
                                                                        // transition={{ delay: 0.2, duration: 0.3 }}
                                                                        className="py-4"
                                                                    >
                                                                        <motion.a
                                                                            whileHover={{ color: '#767676' }}
                                                                            href=""
                                                                        >
                                                                            GRAPHIC
                                                                        </motion.a>
                                                                    </motion.li>
                                                                    <motion.li
                                                                        variants={items}
                                                                        // initial={{ opacity: 0, x: -50 }}
                                                                        // animate={{ opacity: 1, x: 0 }}
                                                                        // exit={{ opacity: 0, x: -50 }}
                                                                        // transition={{ delay: 0.3, duration: 0.3 }}  
                                                                        className="py-4"
                                                                    >
                                                                        <motion.a
                                                                            whileHover={{ color: '#767676' }}
                                                                            href=""
                                                                        >
                                                                            PRODUCTION
                                                                        </motion.a>
                                                                    </motion.li>
                                                                    <motion.li
                                                                        variants={items}
                                                                        // initial={{ opacity: 0, x: -50 }}
                                                                        // animate={{ opacity: 1, x: 0 }}
                                                                        // exit={{ opacity: 0, x: -50 }}
                                                                        // transition={{ delay: 0.4, duration: 0.3 }}
                                                                        className="py-4"
                                                                    >
                                                                        <motion.a
                                                                            whileHover={{ color: '#767676' }}
                                                                            href=""
                                                                        >
                                                                            DRAWING
                                                                        </motion.a>
                                                                    </motion.li>
                                                                </motion.ul>
                                                            )}
                                                        </AnimatePresence>
                                                    </motion.div>

                                                </li>

                                                {/* End Marge nav */}
                                                {['Our Team', 'Review', 'FAQs', 'Contact'].map((Drop) => (
                                                    <motion.li
                                                        key={Drop}
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ ease: "easeInOut", delay: .2 }}
                                                        className={`px-6 py-3 cursor-pointer text-5xl ${isDropDown ? 'text-[#767676]' : 'text-white'}`}>

                                                        <motion.a href="Contact"
                                                            whileHover={{ color: '#767676' }}
                                                        >{Drop}</motion.a>

                                                    </motion.li>
                                                ))}

                                                <motion.li
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ ease: 'easeInOut', delay: .2 }}
                                                    className="px-6 py-3 cursor-pointer">

                                                    <motion.a href="Contact"
                                                        whileHover={{ color: '#767676' }}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                                        </svg>
                                                    </motion.a>
                                                </motion.li>
                                            </ul>
                                        </motion.div>
                                    ) : null}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}