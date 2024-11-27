import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

const reviews = [
  {
    img: "/team.png",
  },
  {
    img: "/team.png",
  },
  {
    img: "/team.png",
  },
  {
    img: "/team.png",
  },
  {
    img: "/team.png",
  },
  {
    img: "/team.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }) => {
  return (
    <figure
      className={cn(
        "relative w-[568px] h-[287px] cursor-pointer overflow-hidden"
      )}
    >
      <div className="flex flex-row items-center">
        <img className="rounded-sm w-full h-full" width="32" height="32" alt="" src={img} />
      </div>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
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
