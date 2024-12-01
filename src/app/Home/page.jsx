import Marquee from '../Components/Marquee/page';
import MarTeam from '../Components/MarTeam/page';

import Image from "next/image";
import Code from "../assets/img/code.jpg";
import Graphic from "../assets/img/design.jpg";
import Drawing from "../assets/img/drawing.jpg";
import Production from "../assets/img/production.jpg";
import WorkCards from '../Components/OurWorksCards/page';
import FAQSection from '../Components/question/FAQSection';
import ReviewsSection from '../Components/question/ReviewsSection';
import Slider2 from '../Components/SliderTwo/page2';


function HomePage() {
    return (
        <>
            <div className="w-full z-10">
                <div className="flex justify-center absolute bottom-20 md:bottom-4 lg:bottom-8 z-20 w-full">
                    <h1 className="text-6xl md:text-9xl lg:text-[200px] text-white">MUCHMEDIA</h1>
                </div>
                <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-screen object-cover"
                >
                    <source src="/video/bgvideo.mp4" type="video/mp4" />
                </video>
                <div className="absolute bottom-0 w-full h-96 bg-gradient-to-t from-[#040404] to-transparent" />
                <div className="h-screen w-full flex items-center">
                    <div className="w-11/12 mx-auto">
                        <div className="w-[370px] md:w-[1400px]">
                            <p className="text-white text-2xl px-2 md:text-5xl leading-[4rem] xl:leading-[6rem] xl:text-6xl">
                                MUCHMEDIA LEVERAGES MULTIMEDIA
                                TO BUILD A BETTER WORLD, CREATING
                                NEW OPPORTUNITIES FOR THE NEXT
                                GENERATION TO SHAPE THE FUTURE
                            </p>
                        </div>

                    </div>
                </div>
                {/* test */}
                <div className="w-11/12 py-20 mx-auto">
                    <h1 className="text-5xl lg:text-7xl font-bold text-gray-600">OUR <span className="text-white">SERVICE</span></h1>
                    <ul className="text-xl md:text-3xl xl:text-5xl pt-7 list-disc pb-20">
                        <p className='w-full text-white text-2xl md:text-xl xl:text-2xl'>
                        • We deliver comprehensive solutions designed to drive your business forward
                        </p>
                    </ul>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
                        <div className="relative col-span-1 sm:col-span-1 lg:col-span-7 row-span-1">
                            <Image src={Drawing} width="761" height="500" alt="Drawing" className="h-[500px] w-full rounded-xl object-cover" />
                            <h1 className="absolute top-1 left-4 text-6xl lg:text-8xl font-bold">Drawing</h1>
                            <h1 className="absolute bottom-2 right-6 px-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">เริ่มต้น 999.-</h1>
                        </div>

                        <div className="relative col-span-1 sm:col-span-1 lg:col-span-5 row-span-1">
                            <Image src={Graphic} width="761" height="500" alt="Graphic" className="h-[500px] w-full rounded-xl object-cover" />
                            <h1 className="absolute top-2 left-4 text-3xl lg:text-6xl font-bold">Graphic design</h1>
                            <h1 className="absolute bottom-2 right-2 px-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">เริ่มต้น 999.-</h1>
                        </div>

                        <div className="relative col-span-1 sm:col-span-1 lg:col-span-5 row-span-1">
                            <Image src={Production} width="761" height="500" alt="Production" className="h-[500px] w-full rounded-xl object-cover" />
                            <h1 className="absolute top-1 left-4 text-3xl lg:text-6xl font-bold">Production</h1>
                            <h1 className="absolute bottom-2 right-2 px-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">เริ่มต้น 999.-</h1>
                        </div>

                        <div className="relative col-span-1 sm:col-span-1 lg:col-span-7 row-span-1">
                            <Image src={Code} width="761" height="500" alt="Code" className="h-[500px] w-full rounded-xl object-cover" />
                            <h1 className="absolute top-2 left-4 text-6xl lg:text-8xl font-bold">Website</h1>
                            <h1 className="absolute bottom-2 right-2 px-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">เริ่มต้น 999.-</h1>
                        </div>
                    </div>
                </div>

                {/* Plan */}
                <div className="w-11/12 mx-auto">
                    <div className="text-white font-sans flex flex-col min-h-screen">
                        <section className="flex flex-col md:flex-row justify-between items-start gap-10 py-5 w-full">
                            <div className="flex gap-8 px-2 md:gap-20">
                                <div className="text-center">
                                    <h2 className="count font-semibold text-7xl bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text" data-target="10">
                                        10
                                    </h2>
                                    <p className="text-white text-xl text-left">Years of<br /> Experience</p>
                                </div>
                                <div className="text-center">
                                    <h2 className="count font-semibold text-7xl bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text" data-target="10">
                                        10
                                    </h2>
                                    <p className="text-white text-xl text-left">Years of<br /> Experience</p>
                                </div>
                                <div className="text-center">
                                    <h2 className="count font-semibold text-7xl bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text" data-target="100">
                                        100+
                                    </h2>
                                    <p className="text-white text-xl text-left" >Completed<br /> Project</p>
                                </div>
                            </div>
                            <div className="w-full md:w-4/12 font-semibold text-4xl text-left">
                                <p>
                                    All aspects of the projects were fully developed by our team. Here are some of our recent favorites.
                                </p>
                            </div>
                        </section>

                        <div className="flex flex-col justify-between py-10 ">
                            <div className="w-full">
                                <h2 className="text-5xl md:text-7xl font-bold pt-10 text-gray-300">
                                    <span className="text-gray-500">OUR</span> <span className="text-white">PROJECTS</span>
                                </h2>
                                <p className="text-2xl py-2 text-white mt-2">Each project we undertake blends creativity and functionality to deliver impactful, user-centered solutions.</p>
                            </div>
                            <Slider2 />
                        </div>

                        <div className="flex flex-col items-start justify-between py-10 gap-5 w-full">
                            <div className="w-full text-left">
                                <h2 className="text-7xl font-bold text-gray-300">
                                    <span className="text-gray-500">OUR</span> <span className="text-white">WORKS</span>
                                </h2>
                                <p className="text-2xl py-2 text-white mt-2">Our work is driven by innovation, creating designs that inspire and solutions that elevate experiences.</p>
                            </div>
                            <WorkCards />

                        </div>

                        <div className="w-full flex flex-col md:flex-row justify-between text-white gap-10 py-24">
                            <div className="w-[500px] md:w-2/3 pr-4">
                                <p className="text-2xl font-mid text-gray-300 mb-2">
                                    Develop Friendships
                                </p>
                                <h1 className="text-3xl md:text-4xl font-bold leading-snug mt-2">
                                    Creative activities to <br />
                                    strengthen friendships
                                </h1>
                            </div>
                            <div className="w-full md:w-[600px]">
                                <p className="text-xl md:text-2xl font-semibold leading-loose gap-11">
                                    Creative activities help strengthen friendships by
                                    creating opportunities to make friends, share
                                    experiences, and support each other and learn to
                                    support each other, creating meaningful relationships.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <Marquee />
                </div>

            </div>

            {/* FOOTER  FAMMOZY */}
            <div className="w-full flex flex-col justify-start items-center text-white py-10">

                {/* Text Section */}
                <div className="py-20 w-full flex justify-center items-center">
                    <p className="text-2xl md:text-5xl font-semibold px-2 w-[400px] md:w-[1300px] leading-[3rem] xl:leading-[5rem]">
                        MUCHMEDIA WAS FOUNDED WITH A VISION TO CREATE QUALITY MEDIA AND BE A LEADER IN DELIVERING ENGAGING CONTENT FOR DIGITAL AUDIENCES. OUR SKILLED TEAM IS DEDICATED TO PROVIDING THE BEST SERVICES TO OUR CLIENTS.
                    </p>
                </div>

                <div className="w-full flex justify-center items-center py-10">

                    {/* Team Section */}
                    <MarTeam />
                </div>

                <div>
                    <ReviewsSection />
                </div>
            </div>



            {/* ส่วน FAQ */}
            <div style={{
                background: `radial-gradient(circle at bottom, rgba(196, 255, 255, 0.4), transparent),linear-gradient(to top, #ffffff, #ffffff)`,
            }}
            ><FAQSection />
            </div>
            <div>

            </div>

        </>
    );
}

export default HomePage;
