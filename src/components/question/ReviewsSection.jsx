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
    {
      title: "Card 4",
      description: "The quality of the work speaks volumes about the team’s dedication. Everything feels polished and impressive!",
      image: "https://i.pinimg.com/736x/bc/8e/31/bc8e31140a5c1e1fd4ef51ea61e91386.jpg",
      name: "Kritsada Jaknara",
      position: "Art Director"
    },
  ];

  return (
    <>
    <div className="w-11/12 mx-auto">
    <div className="pt-10 pb-20">
        <p className="text-xl md:text-2xl font-bold">
          clients reviews
        </p>
        <h1 className="text-5xl md:text-8xl font-bold">What they say</h1>
      </div>
      <div className="mx-auto w-11/12 h-full flex items-center justify-between">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white h-full py-10 shadow-md rounded overflow-hidden"
            >
              <div className="text-black w-11/12 mx-auto flex flex-col">
                <div className='flex'>
                  <Image src={Star} width={20} height={20} className='object-cover' alt='star' />
                  <Image src={Star} width={20} height={20} className='object-cover' alt='star' />
                  <Image src={Star} width={20} height={20} className='object-cover' alt='star' />
                  <Image src={Star} width={20} height={20} className='object-cover' alt='star' />
                  <Image src={Star} width={20} height={20} className='object-cover' alt='star' />
                </div>
                <div className="w-9/12 py-10">
                  <p>{card.description}</p>
                </div>
                <div className="flex items-center">
                  <div>
                    <img className="bg-contain w-12 h-12 rounded-full" src={card.image} alt="card" />
                  </div>
                  <div className="ml-4">
                    <h1>{card.name}</h1>
                    <h1 className='font-semibold'>{card.position}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div></div>
      </>
  );
}
