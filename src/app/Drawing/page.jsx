"use client";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from "react";
import CategoryFilter from "@/components/Categories/page";
import ReadmoreBtn from "@/components/readmoreBtn/page";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
    const res = await fetch("/data/sourceProject.json");
    if (!res.ok) throw new Error("Failed to fetch data");
    return await res.json();
};

export default function Home() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredId, setHoveredId] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 500, easing: 'ease-in-out', once: true });

        const fetchData = async () => {
            try {
                const data = await getData();
                setProjects(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;

    const categories = ["All", "Painting", "Drawing"];
    
    const filteredItems = activeCategory === "All"
        ? projects.filter((project) => project.id >= 37 && project.id <= 47)
        : projects
            .filter((project) => project.type === activeCategory)
            .filter((project) => project.id >= 37 && project.id <= 47);

    return (
        <>
            <div className="relative w-full h-screen">
                <Image src="/bannerWeb.png" alt="Banner" fill objectFit="cover" className="absolute" />
                <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#040404] to-transparent" />
            </div>

            <div className="w-11/12 mx-auto pt-40 pb-10">
                <p className="text-white text-3xl mb-8">
                    At MuchMedia, we deliver creative websites with user-friendly interfaces and functionality.
                </p>
                <CategoryFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />
            </div>

            <div className="w-11/12 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredItems.map((project, index) => (
                        <Link
                            key={project.id}
                            href={`/CardWorks/${project.id}`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="group">
                                <Image
                                    src={project.cards}
                                    alt={project.title.title1}
                                    width={500}
                                    height={400}
                                    className={`w-full h-96 object-cover transition-all duration-300 ease-in-out 
                                        ${hoveredId && hoveredId !== project.id ? 'blur-sm' : ''}`}
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="w-11/12 mx-auto mt-12">
                <h1 className="text-5xl text-white mb-4">Our Works</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Graphic Design", "Production", "Drawing"].map((work, index) => (
                        <div key={index} className="rounded-sm flex flex-col justify-center items-start pl-10 h-60 bg-[#222222]">
                            <h1 className="text-3xl text-white pb-2">{work}</h1>
                            <ReadmoreBtn />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
