// components/CardGrid.jsx
export default function CardGrid() {
    const cardsData = [
      {
        id: 1,
        title: "Card Title 1",
        description: "This is a brief description of Card 1.",
        imageUrl: "/images/WebApp.JPG",
      },
      {
        id: 2,
        title: "Card Title 2",
        description: "This is a brief description of Card 2.",
        imageUrl: "/images/Drawing2.JPG",
      },
      {
        id: 3,
        title: "Card Title 3",
        description: "This is a brief description of Card 3.",
        imageUrl: "/images/Graphic.JPG",
      },
      {
        id: 4,
        title: "Card Title 4",
        description: "This is a brief description of Card 4.",
        imageUrl: "/images/Production2.JPG",
      },
    ];
  
    return (
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="h-96 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  