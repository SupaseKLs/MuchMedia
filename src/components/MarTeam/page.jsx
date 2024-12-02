import { cn } from "@/lib/utils";
import Marquee from "../ui/marqueeTeam";
import Share from '@/app/assets/svg/blank.svg'
import Image from "next/image";
import { motion } from "framer-motion";
import FramerMagnetic from '@/components/FramerMagnetic/page';


const reviews = [
  {
    img: "/images/Omie.avif",
  },
  {
    img: "/images/Bew.avif",
  },
  {
    img: "/images/Nine.avif",
  },
  {
    img: "/images/Mond.avif",
  },
  {
    img: "/images/Fammozy.avif",
  },
  {
    img: "/images/Best.avif",
  },
  {
    img: "/images/S.avif",
  },
  {
    img: "/images/Tun.avif",
  },
  {
    img: "/images/Pan.avif",
  },
];

const ReviewCard = ({ img }) => {
  return (
    <figure
      className={cn(
        "relative w-[500px] h-full overflow-hidden"
      )}
    >
      <div className="flex flex-row items-center">
        <img
          className="rounded-sm w-full h-full"
          width="32"
          height="32"
          alt="img"
          src={img}
        />
      </div>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
      {/* Header Section */}
      <div className="absolute flex flex-col items-center top-0 z-10 pt-72">
        <div>
          <h1 className="text-6xl lg:text-8xl text-center font-bold">Our Team</h1>

        </div>
        <div>
        <FramerMagnetic>
        <a href="/We" className="mt-6 flex items-center px-8 py-4 text-2xl bg-[#2B2B2B] rounded-full text-white">
              Discover Team <span><Image className="ml-4" src={Share} width={20} height={20} alt="Team"/></span>
            </a>
        </FramerMagnetic>
        
          <div>


          </div>
        </div>
      </div>
      {/* Marquee Section */}
      <Marquee>
        {reviews.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeDemo;
