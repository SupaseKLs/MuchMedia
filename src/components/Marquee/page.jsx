import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import Image from "next/image";
const reviews = [
  {
    img: "/images/p1.webp",
  },
  {
    img: "/images/p2.webp",
  },
  {
    img: "/images/p3.webp",
  },
  {
    img: "/images/p4.webp",
  },
  {
    img: "/images/p5.webp",
  },
  {
    img: "/images/p6.webp",
  },
  {
    img: "/images/p7.webp",
  },
  {
    img: "/images/p8.webp",
  },
  {
    img: "/images/p9.webp",
  },
  {
    img: "/images/p10.webp",
  },
  {
    img: "/images/p11.webp",
  },
  {
    img: "/images/p12.webp",
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
