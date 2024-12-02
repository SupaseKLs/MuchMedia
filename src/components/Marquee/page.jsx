import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import Image from "next/image";
const reviews = [
  {
    img: "/images/p1.jpg",
  },
  {
    img: "/images/p2.jpg",
  },
  {
    img: "/images/p3.jpg",
  },
  {
    img: "/images/p4.jpg",
  },
  {
    img: "/images/p5.jpg",
  },
  {
    img: "/images/p6.jpg",
  },
  {
    img: "/images/p7.jpg",
  },
  {
    img: "/images/p8.jpg",
  },
  {
    img: "/images/p9.jpg",
  },
  {
    img: "/images/p10.jpg",
  },
  {
    img: "/images/p11.jpg",
  },
  {
    img: "/images/p12.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }) => {
  return (
    <figure
      className={cn(
        "relative w-[450px] h-[287px] cursor-pointer overflow-hidden"
      )}
    >
      <div className="flex flex-row items-center">
        <Image className="rounded-sm w-96 h-full" fill priority alt="work" src={img} />
      </div>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden h-full rounded-lg md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeDemo; // ใช้ export default ที่นี่
