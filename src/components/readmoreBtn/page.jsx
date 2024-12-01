import Image from "next/image";
import Arrow from "@/app/assets/arrow.svg";

const ReadMoreButton = ({ href = "#", text = "Read more" }) => {
  return (
    <a href={href} className="py-3 px-6 bg-[#2B2B2B] rounded-full inline-flex items-center space-x-2 hover:bg-[#3A3A3A] transition-colors">
      <span className="text-white font-bold">{text}</span>
      <Image src={Arrow} alt="Arrow" width={16} height={16} />
    </a>
  );
};

export default ReadMoreButton;