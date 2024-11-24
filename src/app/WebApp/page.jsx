"use client";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import Link from "next/link";
import CategoryFilter from "@/components/Categories/page";
import ReadmoreBtn from "@/components/readmoreBtn/page";

// Fetch data from a JSON file
const getData = async () => {
    const res = await fetch("/data/sourceProject.json");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return await res.json();
};

export default function Home() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredId, setHoveredId] = useState(null);

    useEffect(() => {
        // Initialize AOS for animations
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

    // Allowed categories for filtering
    const allowedCategories = ["All", "Front-End", "UX/UI"];
    
    // Get unique categories from the projects data
    const categories = ["All", ...new Set(projects.map((project) => project.type))];
    const filteredCategories = categories.filter((category) =>
        allowedCategories.includes(category)
    );

    // Apply the filtering logic based on `activeCategory` and `id` between 34 and 37
    const filteredItems =
        activeCategory === "All"
            ? projects.filter((project) => project.id >= 1 && project.id <= 7)
            : projects
                .filter((project) => project.type === activeCategory)
                .filter((project) => project.id >= 1 && project.id <= 7);

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
                <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#040404] to-transparent" />
            </div>

            <div className="w-11/12 mx-auto pt-40">
                <div className="w-11/12 mb-8">
                    <h1 className='text-white text-2xl lg:text-4xl'>
                        At MuchMedia, we pride ourselves on delivering creative websites that prioritize user interaction. Our team collaborates closely with clients to understand their vision and goals, ensuring user-friendly interfaces and effective functionality.
                    </h1>
                </div>

                <div className="pb-8">
                    <CategoryFilter
                        categories={filteredCategories} 
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                    />
                </div>
            </div>

            <div className="w-11/12 mx-auto">
                <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredItems.map((project, index) => (
                        <Link
                            key={project.id}
                            href={`/CardWorks/${project.id}`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="w-full h-96 relative">
                                <Image
                                    src={project.cards}
                                    alt={project.title.title1}
                                    layout="fill"
                                    objectFit="cover"
                                    className={`rounded-sm w-full h-full transition-all duration-300 ease-in-out 
                                        ${hoveredId && hoveredId !== project.id ? 'blur-sm' : 'blur-none'}`}
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
