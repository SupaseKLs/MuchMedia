import Star from '@/app/assets/svg/star.svg'
import Image from 'next/image';
export default function Reviews() {
  const cardData = [
    {
      title: "Card 1",
      description: "The work looks very professional! The photos are stunning and communicate the message clearly. Great attention to detail in every step!",
      image: "https://i.pinimg.com/736x/43/71/0f/43710f32c6fc09258dc246870064ace3.jpg",
      name: "Somchai Jeera",
      position: "UI/UX Designer"
    },
    {
      title: "Card 2",
      description: "I really admire the concept and presentation of the team. It’s unique and truly inspires the audience!",
      image: "https://i.pinimg.com/736x/e7/a6/e6/e7a6e61df9e68472017ce735f6380d92.jpg",
      name: "Chanin Teenaajan",
      position: "Creative Director"
    },
    {
      title: "Card 3",
      description: "This project showcases outstanding creativity and problem-solving skills. The results are fantastic!",
      image: "https://i.pinimg.com/736x/99/df/26/99df26209c2a3e54964c8b4b2575409f.jpg",
      name: "Phakphum Sarawee",
      position: "Project Manager"
    },

  ];

  return (
    <>
        <div className="pt-10 pb-20">
          <p className="text-xl md:text-2xl font-bold">
            clients reviews
          </p>
          <h1 className="text-5xl md:text-8xl font-bold">What they say</h1>
        </div>
        <div className="h-full mx-6 md:mx-0 flex items-center flex-col md:flex-row justify-center gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative bg-white w-full sm:w-72 md:w-80 h-80 shadow-md rounded overflow-hidden"
            >
              <div className="text-black w-11/12 mx-auto flex flex-col">
                <div className="flex py-4">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src={Star}
                      width={20}
                      height={20}
                      className="object-cover"
                      alt="star"
                    />
                  ))}
                </div>
                <div className="w-full py-6">
                  <p>{card.description}</p>
                </div>
                <div className="flex items-center absolute bottom-0 py-4">
                  <img
                    className="bg-contain w-12 h-12 rounded-full"
                    src={card.image}
                    alt="card"
                  />
                  <div className="ml-4">
                    <h1>{card.name}</h1>
                    <h1 className="font-semibold">{card.position}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  );
}
