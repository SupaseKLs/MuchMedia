import { cn } from "@/lib/utils";
import Marquee from "../ui/marqueeTeam";

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
        "relative w-[300px] h-full overflow-hidden"
      )}
    >
      <div className="flex flex-row items-center">
        <img
          className="rounded-sm w-full h-full"
          width="32"
          height="32"
          alt=""
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
      <div className="absolute flex flex-col items-center top-0 z-10 pt-44">
        <h1 className="text-6xl font-bold">Our Team</h1>
        <div>
          <button className="mt-6 py-2 px-8 text-2xl bg-gray-900 rounded-full text-white">
            Discover Team
          </button>
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
