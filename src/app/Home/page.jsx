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
  const CreativePhrases = [
    "Creative activities help strengthen friendships by",
    "creating opportunities to make friends, share",
    "experiences, and support each other and learn to",
    "support each other, creating meaningful relationships.",
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
        <div className="flex justify-center absolute bottom-20 md:bottom-4 lg:bottom-8 z-20 w-full">
          <div className="text-6xl md:text-9xl lg:text-[200px] text-white"><MaskText phrases={HeaderPhrases} /></div>
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
              <div className="text-white text-2xl px-2 md:text-5xl leading-[4rem] xl:leading-[6rem] xl:text-6xl">
              <MaskText phrases={customPhrases} />
                
                
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
                  <NumberTicker className="font-Poppins text-7xl text-purple-700" value="10" />
                  </div>
                  <p className="text-white text-xl text-left">Years of<br /> Experience</p>
                </div>
                <div className="text-center">
                  <div className="count font-semibold text-7xl bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text" data-target="10">
                  <NumberTicker className="font-Poppins text-7xl text-purple-700" value="10" />
                  </div>
                  <p className="text-white text-xl text-left">Years of<br /> Experience</p>
                </div>
                <div className="text-center">
                  <div className="count font-semibold text-7xl bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text" data-target="100">
                  <NumberTicker className="font-Poppins text-7xl text-purple-700" value="100" /><span>+</span>
                  </div>
                  <p className="text-white text-xl text-left" >Completed<br /> Project</p>
                </div>
              </div>
              <div className="w-full md:w-5/12 font-semibold text-4xl text-left">
                <div>
                <MaskText phrases={ProPhrases} />
                </div>
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
                <div className="text-xl md:text-2xl font-semibold leading-loose gap-11">
                  
                <MaskText phrases={CreativePhrases} />
                </div>
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
          <div className="text-2xl md:text-5xl font-semibold px-2 w-[400px] md:w-[1300px] leading-[3rem] xl:leading-[5rem]">
          <MaskText phrases={MuchPhrases} />
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
