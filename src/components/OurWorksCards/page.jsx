import Image from "next/image";
export default function CardGrid() {
  const cardsData = [
    {
      id: 1,
      title: "Web App",
      description: "This is a brief description of Card 1.",
      imageUrl: "/images/WebApp.webp",
      link: "/WebApp", // Add link for each card
    },
    {
      id: 2,
      title: "Drawing",
      description: "This is a brief description of Card 2.",
      imageUrl: "/images/Drawing2.webp",
      link: "/Drawing", // Add link for each card
    },
    {
      id: 3,
      title: "Graphic",
      description: "This is a brief description of Card 3.",
      imageUrl: "/images/Graphic.webp",
      link: "/Graphic", // Add link for each card
    },
    {
      id: 4,
      title: "Production",
      description: "This is a brief description of Card 4.",
      imageUrl: "/images/Production2.webp",
      link: "/Production", // Add link for each card
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardsData.map((card) => (
        <a
          key={card.id}
          href={card.link}
          className="relative bg-white shadow-md overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div className="overflow-hidden">
            <Image
              src={card.imageUrl}
              alt="work"
              width={650}
              height={650}
              priority="true"
              className="h-[450px] w-screen object-cover transition-transform duration-500 transform hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl font-bold opacity-0 transition-opacity duration-500 hover:opacity-100">
            {card.title}
          </div>
        </a>
      ))}
    </div>
  );
}
