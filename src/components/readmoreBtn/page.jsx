export default function Readmore() {
  const works = [
    { title: "Graphic Design", href: "/Graphic", img: "Graphicdesign.png" },
    { title: "Production", href: "/Production", img: "Camera.png" },
    { title: "Drawing", href: "/Drawing", img: "Drawing.png" },
    { title: "Web Development", href: "/WebApp", img: "Coding.png" },
  ];

  return (
    <div className="w-11/12 mx-auto my-12">
      <h1 className="text-5xl text-white mb-4">Our Works</h1>
      <div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
        {works.map((work, index) => (
          <div
            key={index}
            className="relative rounded-sm flex flex-col justify-center items-start pl-10 h-80 bg-[#222222]"
          >
            <h1 className="text-3xl z-10 font-bold text-white pb-2">{work.title}</h1>
            <a
              href={work.href}
              className="z-10 py-3 px-6 bg-[#2B2B2B] rounded-full inline-flex items-center space-x-2 hover:bg-[#3A3A3A] transition-colors text-white font-bold"
            >
              Read more
            </a>
            <div className="absolute z-0 bottom-0 right-0">
            <img src={work.img} className="object-cover w-96 lg:w-full  h-80" width="100" height="100" alt="" />
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}


