import Image from "next/image";
import Code from "../assets/img/code.jpg";
import Graphic from "../assets/img/design.jpg";
import Drawing from "../assets/img/drawing.jpg";
import Production from "../assets/img/production.jpg";



function HomePage() {
    return (
        <div className="w-full z-10">
            <div className="flex justify-center absolute bottom-10 z-20 w-full">
                <h1 className="text-6xl md:text-[120px] xl:text-[200px]  text-white ">MUCHMEDIA</h1>
            </div>
            <video
                autoPlay
                muted
                loop
                className="w-full h-screen object-cover"
            >
                <source src="/header.mp4" type="video/mp4" />
            </video>


            {/* ข้อความด้านบนวิดีโอ */}
            <div className="h-screen flex items-center">
                <div className="w-11/12 mx-auto">
                    <div className="max-w-[1200px]">
                        <p className="text-4xl md:text-5xl xl:text-6xl">
                            MUCHMEDIA LEVERAGES MULTIMEDIA
                            TO BUILD A BETTER WORLD, CREATING
                            NEW OPPORTUNITIES FOR THE NEXT
                            GENERATION TO SHAPE THE FUTURE
                        </p>
                    </div>
                </div>
            </div>



            <div className="w-11/12 mx-auto">
                <h1 className="text-5xl md:text-7xl xl:text-9xl text-gray-600">OUR <span className="text-white">SERVICE</span></h1>
                <ul className="text-1xl md:text-3xl xl:text-5xl pt-7 list-disc pb-20">
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam excepturi ex<br />
                        esse veniam tempore nostrum voluptas perferendis nam sit eaque.</li>
                </ul>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
                    <div className="relative col-span-1 sm:col-span-1 lg:col-span-7 row-span-1">
                        <Image src={Drawing} width="761" height="500" alt="Drawing" className="h-[500px]  w-full rounded-xl object-cover" />
                        <h1 className="absolute top-1 left-4 text-6xl lg:text-8xl font-bold">Drawing</h1>
                        <h1 className="absolute bottom-2 right-6 px-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">เริ่มต้น 999.-</h1>
                    </div>

                    <div className="relative col-span-1 sm:col-span-1 lg:col-span-5 row-span-1">
                        <Image src={Graphic} width="761" height="500" alt="Graphic" className="h-[500px] w-full rounded-xl object-cover" />
                        <h1 className="absolute top-2 left-4 text-3xl lg:text-6xl font-bold">Graphic design</h1>
                        <h1 className="absolute bottom-2 right-2 px-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">เริ่มต้น 999.-</h1>
                    </div>

                    <div className="relative col-span-1 sm:col-span-1 lg:col-span-5 row-span-1">
                        <Image src={Production} width="761" height="500" alt="Production" className="h-[500px] w-full rounded-xl object-cover" />
                        <h1 className="absolute top-1 left-4 text-3xl lg:text-6xl font-bold">Production</h1>
                        <h1 className="absolute bottom-2 right-2 px-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">เริ่มต้น 999.-</h1>
                    </div>

                    <div className="relative col-span-1 sm:col-span-1 lg:col-span-7 row-span-1">
                        <Image src={Code} width="761" height="500" alt="Code" className="h-[500px] w-full rounded-xl object-cover" />
                        <h1 className="absolute top-2 left-4 text-6xl lg:text-8xl font-bold">Website</h1>
                        <h1 className="absolute bottom-2 right-2 px-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">เริ่มต้น 999.-</h1>
                    </div>
                </div>
            </div>

            {/* Plan */}

            <h1>Test</h1>
        </div>
    );
}

export default HomePage;
