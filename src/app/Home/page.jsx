import Image from 'next/image';
import drawing from '../assets/svg/drawing.svg';
import graphicdesign from '../assets/svg/graphicdesign.svg';
import motion from '../assets/svg/motion.svg';
import photography from '../assets/svg/photography.svg';
import titleuxui from '../assets/svg/titleuxui.svg';
import web from '../assets/svg/web.svg';
import Marquee from '../../components/Marquee/page';
import MarTeam from '../../components/MarTeam/page';
import WorkCards from '../../components/OurWorksCards/page';
import FAQSection from '../../components/question/FAQSection';
import ReviewsSection from '../../components/question/ReviewsSection';
import Slider2 from '../../components/SliderTwo/page2';
import MaskText from '@/components/text-wrapper/page';
import NumberTicker from '@/components/Counter/page';

// Ready
function HomePage() {
  const HeaderPhrases = [
    "MUCHMEDIA",
  ];
  const customPhrases = [
    "MUCHMEDIA LEVERAGES MULTIMEDIA",
    "TO BUILD A BETTER WORLD, CREATING",
    "NEW OPPORTUNITIES FOR THE NEXT",
    "GENERATION TO SHAPE THE FUTURE"
  ];
  const ProPhrases = [
    "All aspects of the projects were",
    "fully developed by our team. Here",
    "are some of our recent favorites.",
  ];

  const MuchPhrases = [
    "MUCHMEDIA WAS FOUNDED WITH A VISION TO CREATE",
    "QUALITY MEDIA AND BE A LEADER IN DELIVERING",
    "ENGAGING CONTENT FOR DIGITAL AUDIENCES. OUR",
    "SKILLED TEAM IS DEDICATED TO PROVIDING THE BEST",
    "SERVICES TO OUR CLIENTS.",
  ];

  return (
    <>
      <div className="w-full z-10">
        <div className="flex justify-center absolute bottom-20 md:bottom-4 lg:bottom-8 z-20 w-full font-Poppins font-bold">
          <div className="text-5xl md:text-9xl font-Inter lg:text-[200px] text-white"><MaskText phrases={HeaderPhrases} /></div>
        </div>
        <video
          playsInline
          loading="lazy"
          autoPlay
          muted
          loop
          className="relative w-full h-screen object-cover"
        >
          <source src="/video/bgvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-0 w-full h-96 bg-gradient-to-t from-[#040404] to-transparent" />
        <div className="h-96 md:h-screen w-full flex items-center">
          <div className="w-11/12 mx-auto">
            <div className="w-[370px] md:w-[1400px]">
              <div className="hidden md:block text-white text-md px-2 md:text-5xl leading-[2rem] font-semibold xl:leading-[6rem] xl:text-6xl">
                <MaskText phrases={customPhrases} />
              </div>
              <p className="block md:hidden text-white text-xl px-2 md:text-5xl leading-[2rem] font-semibold xl:leading-[6rem] xl:text-6xl">
                MUCHMEDIA LEVERAGES MULTIMEDIA
                TO BUILD A BETTER WORLD, CREATING
                NEW OPPORTUNITIES FOR THE NEXT
                GENERATION TO SHAPE THE FUTURE
              </p>
            </div>
          </div>
        </div>
        <div className="w-11/12 py-20 mx-auto">
          <div className='px-4 md:px-0'>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-600 font-">OUR <span className="text-white font-">SERVICE</span></h1>
            <ul className="text-xl md:text-3xl xl:text-5xl pt-7 list-disc pb-20">
              <p className='w-full text-white text-xl md:text-xl xl:text-2xl font-Poppins'>
                • We deliver comprehensive solutions designed to drive your business forward
              </p>
            </ul>
          </div>
          <div className="h-full flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full rounded-xl p-4">
              {/* UX/UI */}
              <div className="bg-white text-white py-6 px-4 sm:px-6 rounded-xl h-auto">
                <Image
                  src={titleuxui}
                  alt="UX/UI Icon"
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                />
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold py-4 text-black">
                  UX/UI Design
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-black">
                  User experience is the key to successful digital platforms. Our UX/UI design services
                  prioritize usability and aesthetics to craft interfaces that are both intuitive and
                  visually appealing, ensuring your audience stays engaged.
                </p>
              </div>

              {/* Graphic Design */}
              <div className="bg-white text-white py-6 px-4 sm:px-6 rounded-xl h-auto">
                <Image
                  src={graphicdesign}
                  alt="Graphic Design Icon"
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                />
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold py-4 text-black">
                  Graphic Design
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-black">
                  Visual communication is at the heart of what we do. Our graphic design services bring
                  your ideas to life with innovative designs that inspire, engage, and connect with your
                  audience, leaving a lasting impression.
                </p>
              </div>

              {/* Web & App Development */}
              <div className="bg-white text-white py-6 px-4 sm:px-6 xl:px-9 rounded-xl">
                <Image
                  src={web}
                  alt="Web & App Development Icon"
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                />
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold py-4 text-black">
                  Web & App Development
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-black">
                  In today’s digital age, your online presence matters more than ever. We create modern,
                  responsive websites and intuitive apps that combine functionality with stunning aesthetics,
                  ensuring an exceptional user experience.
                </p>
              </div>

              {/* Photography */}
              <div className="bg-white text-white py-6 px-4 sm:px-6 rounded-xl h-auto">
                <Image
                  src={photography}
                  alt="Photography Icon"
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                />
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold py-4 text-black">
                  Photography
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-black">
                  Whether it’s capturing the essence of a brand, showcasing products, or preserving precious
                  moments, our photography services are designed to tell stories through stunning visuals.
                </p>
              </div>

              {/* Drawing */}
              <div className="bg-white text-white py-6 px-4 sm:px-6 rounded-xl h-auto">
                <Image
                  src={drawing}
                  alt="Drawing Icon"
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                />
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold py-4 text-black">
                  Drawing
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-black">
                  From traditional sketches to digital illustrations, our drawing services focus on creativity
                  and detail. We create unique visuals that enhance your brand, tell compelling stories, or
                  simply add an artistic touch to your projects.
                </p>
              </div>

              {/* Motion Graphic */}
              <div className="bg-white text-white py-6 px-4 sm:px-6 rounded-xl h-500 w-500">
                <Image
                  src={motion}
                  alt="Motion Graphic Icon"
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                />
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold py-4 text-black">
                  Motion Graphic
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-black">
                  Transform ideas into dynamic visuals with our motion services. Whether it’s animated
                  videos, motion graphics, or cinematic storytelling, we breathe life into concepts,
                  ensuring every frame captures attention and delivers your message effectively.
                </p>
              </div>
            </div>
          </div>


        </div>

        {/* Plan */}
        <div className="w-11/12 mx-auto">
          <div className="text-white font-sans flex flex-col min-h-screen">
            <section className="flex flex-col md:flex-row justify-between items-start gap-10 py-5 w-full">
              <div className="flex gap-8 px-2 md:gap-20">

                <div className="text-center">
                  <div className="count font-semibold text-7xl bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text" data-target="10">
                    <NumberTicker className="font-Poppins text-7xl md:text-8xl text-purple-700" value="2" />
                  </div>
                  <p className="text-white text-xl text-left">Years of<br /> Experience</p>
                </div>
                <div className="text-center">
                  <div className="count font-semibold text-7xl bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text" data-target="100">
                    <NumberTicker className="font-Poppins text-7xl md:text-8xl text-purple-700" value="47" /><span>+</span>
                  </div>
                  <p className="text-white text-xl text-left" >Completed<br /> Project</p>
                </div>
              </div>
              <div className="w-full md:w-5/12 ">
                <div className='hidden md:block font-semibold text-4xl text-left'>
                  <MaskText phrases={ProPhrases} />
                </div>
                <p className='block md:hidden font-semibold text-4xl text-left'>
                  All aspects of the projects were
                  fully developed by our team. Here
                  are some of our recent favorites.
                </p>
              </div>
            </section>

            <div className="flex flex-col justify-between py-10 ">
              <div className="w-full">
                <h2 className="text-5xl md:text-7xl font-bold pt-10 text-gray-300">
                  <span className="text-gray-500">OUR</span> <span className="text-white">PROJECTS</span>
                </h2>
                <p className="text-xl md:text-2xl py-2 text-white mt-2">Each project we undertake blends creativity and functionality to deliver impactful, user-centered solutions.</p>
              </div>
              <Slider2 />
            </div>

            <div className="flex flex-col items-start justify-between py-10 gap-5 w-full">
              <div className="w-full text-left">
                <h2 className="text-5xl md:text-7xl font-bold text-gray-300">
                  <span className="text-gray-500">OUR</span> <span className="text-white">WORKS</span>
                </h2>
                <p className="text-xl md:text-2xl py-2 text-white mt-2">Our work is driven by innovation, creating designs that inspire and solutions that elevate experiences.</p>
              </div>
              <WorkCards />

            </div>

            <div className="w-full flex flex-col md:flex-row justify-between text-white gap-10 py-24">
              <div className="pr-4">
                <p className="text-2xl font-mid text-gray-300 mb-2">
                  Develop Friendships
                </p>
                <h1 className="text-3xl md:text-4xl font-bold leading-snug mt-2">
                  Creative activities to <br />
                  strengthen friendships
                </h1>
              </div>
              <div className="w-full md:w-[600px]">
                <p className="text-xl md:text-2xl font-semibold leading-loose ">
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
        <div className="py-20 flex justify-center items-center">
          <div className="hidden md:block text-sm md:text-5xl font-semibold  w-[400px] md:w-[1300px] leading-[3rem] xl:leading-[5rem]">
            <MaskText phrases={MuchPhrases} />
          </div>
          <div className='block md:hidden'>
            <p className="text-xl md:text-5xl font-semibold px-2 w-[350px] md:w-[1300px] leading-[2.5rem] xl:leading-[5rem]">
              MUCHMEDIA WAS FOUNDED WITH A VISION TO CREATE
              QUALITY MEDIA AND BE A LEADER IN DELIVERING
              ENGAGING CONTENT FOR DIGITAL AUDIENCES. OUR
              SKILLED TEAM IS DEDICATED TO PROVIDING THE BEST
              SERVICES TO OUR CLIENTS.
            </p>
          </div>
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
