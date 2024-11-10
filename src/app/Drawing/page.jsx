"use client";
import { motion } from "framer-motion";
import 'aos/dist/aos.css';
import AOS from 'aos';
import CategoryFilter from "@/app/components/Categories/page";
import { useEffect, useState } from "react";
import ReadmoreBtn from "@/app/components/readmoreBtn/page";
import Image from "next/image";
import Link from "next/link";

// Fetch data from JSON file
const getData = async () => {
    const res = await fetch("/data/sourceProject.json");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
};

export default function Home() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        AOS.init({ duration: 500, easing: 'ease-in-out', once: true });

        const fetchData = async () => {
            try {
                const data = await getData();
                setProjects(data);
            } catch (error) {
                console.error(error);
                setError("Failed to load projects.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    // Get unique categories from the projects
    const categories = ["All", ...new Set(projects.map((project) => project.type))];

    // Filter projects based on selected category and ID range
    const filteredItems =
        activeCategory === "All"
            ? projects.filter((project) => project.id >= 33 && project.id <= 42)
            : projects
                .filter((project) => project.type === activeCategory)
                .filter((project) => project.id >= 33 && project.id <= 42);

    return (
        <>
            <div className="relative w-full h-screen">
                <Image
                    src="/bannerWeb.png"
                    alt="Banner"
                    fill
                    objectFit="cover"
                    className="absolute"
                />
                <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#070707] to-transparent" />
            </div>

            <div className="w-11/12 mx-auto pt-40">
                <div className="w-10/12 mb-8">
                    <p className="text-white text-3xl">
                        At MuchMedia, we pride ourselves on delivering creative websites that prioritize user interaction. Our team collaborates closely with clients to understand their vision and goals, ensuring user-friendly interfaces and effective functionality.
                    </p>
                </div>
                <div className="pb-8">
                    <h1 className="text-2xl font-bold mb-4">Filterable Items</h1>
                    <CategoryFilter
                        categories={categories}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                    />
                </div>
            </div>

            <div className="w-11/12 mx-auto">
                <div className="relative group grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredItems.map((project, index) => (
                        <Link
                            key={project.id}
                            href={`/CardWorks/${project.id}`}
                            data-aos="fade-up" // AOS animation
                            data-aos-delay={index * 100} // Increment delay by 100ms for each card
                        >
                            <div className=""> {/* Add group class here */}
                                <Image
                                    src={project.banner}
                                    alt={project.title.title1}
                                    width={500}
                                    height={550}
                                    className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:blur-sm hover:!blur-none" // Apply group-hover to the image
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            
            <div className="w-11/12 mx-auto mt-12">
                <h1 className="text-3xl text-white mb-4">Our Works</h1>
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
