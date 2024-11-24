"use client";
import { useEffect, useState, useRef } from "react";
import 'aos/dist/aos.css';
import Cursor from "@/components/Cursor/cursor_core/page";
import { AnimatePresence, motion } from "framer-motion";
import AOS from 'aos';
import CategoryFilter from "@/components/Categories/page";
import ReadmoreBtn from "@/components/readmoreBtn/page";
import Image from "next/image";
import Link from "next/link";

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
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredId, setHoveredId] = useState(null);
    const [isHovering, setIsHovering] = useState(false);

    const targetRef = useRef(null);
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

    const allowedCategories = ["All", "Poster", "Logo"];

    const filteredItems =
        activeCategory === "All"
            ? projects.filter((project) => project.id >= 8 && project.id <= 32)
            : projects
                .filter((project) => project.type === activeCategory)
                .filter((project) => project.id >= 8 && project.id <= 32);

    const categories = ["All", ...new Set(projects.map((project) => project.type))];

    const filteredCategories = categories.filter((category) =>
        allowedCategories.includes(category)
    );

    const handlePositionChange = (x, y) => {
        if (targetRef.current) {
            const rect = targetRef.current.getBoundingClientRect();
            const isInside =
                x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
            setIsHovering(isInside);
        }
    };
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
                <div className="w-10/12 mb-8">
                    <p className="text-white text-3xl">
                        At MuchMedia, we pride ourselves on delivering creative websites that prioritize user interaction. Our team collaborates closely with clients to understand their vision and goals, ensuring user-friendly interfaces and effective functionality.
                    </p>
                </div>
                <div className="pb-8">
                    <h1 className="text-2xl font-bold mb-4">Filterable Items</h1>
                    <CategoryFilter
                        categories={filteredCategories}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                    />
                </div>
            </div>

            <div className="w-11/12 mx-auto">
                <div className="flex h-full w-full items-center justify-center">
                    <Cursor
                        attachToParent
                        variants={{
                            initial: { scale: 0.3, opacity: 0 },
                            animate: { scale: 1, opacity: 1 },
                            exit: { scale: 0.3, opacity: 0 },
                        }}
                        springConfig={{
                            bounce: 0.001,
                        }}
                        transition={{
                            ease: "easeInOut",
                            duration: 0.15,
                        }}
                        onPositionChange={handlePositionChange}
                    >
                        <motion.div
                            animate={{
                                width: isHovering ? 80 : 16,
                                height: isHovering ? 32 : 16,
                            }}
                            className="flex items-center justify-center rounded-[24px] bg-gray-500/40 backdrop-blur-md dark:bg-gray-300/40"
                        >
                            <AnimatePresence>
                                {isHovering && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.6 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.6 }}
                                        className="inline-flex w-full items-center justify-center"
                                    >
                                        <div className="inline-flex items-center text-sm text-white dark:text-black">
                                            More +
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </Cursor>
                    <div ref={targetRef} className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                        {filteredItems.map((project, index) => (
                            <Link
                                key={project.id}
                                href={`/CardWorks/${project.id}`}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                data-aos-anchor-placement="top-bottom"
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
