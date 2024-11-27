export default function Reviews() {
  const cardData = [
    {
      title: "Card 1",
      description: "This is the description for Card 1.",
      image: "https://i.pinimg.com/236x/49/f6/88/49f6885b30a435998eebdad5c13a0f48.jpg",
      name: "Napat Attayoko",
      position: "Director"
    },
    {
      title: "Card 2",
      description: "This is the description for Card 2.",
      image: "https://i.pinimg.com/236x/49/f6/88/49f6885b30a435998eebdad5c13a0f48.jpg",
      name: "Napat Attayoko",
      position: "Director"
    },
    {
      title: "Card 3",
      description: "This is the description for Card 3.",
      image: "https://i.pinimg.com/236x/49/f6/88/49f6885b30a435998eebdad5c13a0f48.jpg",
      name: "Napat Attayoko",
      position: "Director"
    },
  ];

  return (
     <>
      <div className="pt-10 pb-20">
        <p className="text-2xl font-bold">
        clients reviews
        </p>
        <h1 className="text-7xl md:text-8xl font-bold">What they say</h1>
      </div>
    <div className="h-full flex items-center  justify-between">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white mx-auto w-11/12 md:w-96 h-full py-10 shadow-md rounded overflow-hidden"
          >
            <div className="text-black w-11/12 mx-auto flex flex-col">
              <div>

              </div>
              <div className="w-9/12 py-10">
                <p>Lorem ipsum dolor sit amet consectetur. Fames lacus pulvinar venenatis lectus sem. Sagittis lectus quis feugiat ut est id magna quam.</p>
              </div>
              <div className="flex items-center">
                <div>
                  <img className="w-12 h-12 rounded-full" src={card.image} alt="" />
                </div>
                <div className="ml-4">
                  <h1>{card.name}</h1>
                  <h1>{card.position}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div></>
  );
}
