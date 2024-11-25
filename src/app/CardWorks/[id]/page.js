"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Play from "@/app/assets/play.svg";
import Pause from "@/app/assets/pause.svg";
import Cursor from "@/components/Cursor/cursor_core/page";
import { AnimatePresence, motion } from "framer-motion";

const getData = async () => {
  const res = await fetch("/data/sourceProject.json");
  if (!res.ok) {
    throw new Error("Failed to fetch product data");
  }
  return await res.json();
};

const ProjectPage = ({ params }) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const videoRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const resolveParams = async () => {
      const { id: resolvedId } = await params;
      setId(resolvedId);
    };

    resolveParams();
  }, [params]);

  useEffect(() => {
    if (id) {
      const fetchProjectData = async () => {
        try {
          const data = await getData();
          const project = data.find((item) => item.id === parseInt(id));
          setProject(project);
        } catch (error) {
          console.error("Error fetching product:", error);
          setProject(null);
        } finally {
          setLoading(false);
        }
      };

      fetchProjectData();
    }
  }, [id]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        videoRef.current.muted = false;
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePositionChange = (x, y) => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const isInside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      setIsHovering(isInside);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!project) return <div>Project not found</div>;

  const isImageFallback = (id >= 8 && id <= 32) || (id >= 37 && id <= 47);

  return (
    <div>
      <div className="relative">
        <div
          className="w-full h-screen bg-center bg-fixed"
          style={{
            backgroundImage: `url(${project.banner})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#040404] to-transparent" />
      </div>

      <div className="w-11/12 mx-auto">

          <div className="md:flex-row md:flex justify-between">
            <div className="py-3 md:pt-10">
                <h1 className="text-white text-5xl">{project.created}</h1>
                <p className="text-gray-600 text-md font-semibold pt-2">Developed by</p>
            </div>
            <div className="text-white py-3 md:pt-10">
                <h1 className="text-5xl">{project.price} Bath</h1>
                <h1 className="text-md font-semibold pt-2">Price</h1>
            </div>
            <div className="text-white py-3 md:pt-10">
                <h1 className="text-5xl">{project.developed} Days</h1>
                <h1 className="text-md font-semibold pt-2">Development</h1>
            </div>
          </div>

        <div className="w-9/12">
          <h1 className="font-bold text-7xl py-10 text-white">
            {project.header.header1}
          </h1>
          <p className="pb-10 text-xl text-white">{project.title.title1}</p>
        </div>

        <div>
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
            {isImageFallback ? (
              <div ref={targetRef}>
                <img
                  className="w-11/12 mx-auto h-auto rounded-lg"
                  src={project.banner}
                  alt={project.title.title1}
                  onClick={handleImageClick}
                />
              </div>
            ) : (
              <div
              ref={targetRef}
                className="relative"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
              >
                <video
                  ref={videoRef}
                  className="w-11/12 mx-auto h-auto rounded-lg"
                  loop
                  muted
                  autoPlay
                >
                  <source src={project.video} type="video/mp4" />
                </video>
                {showControls && (
                  <div className="absolute flex justify-center items-center h-full w-full top-0">
                    <button
                      className="bg-white opacity-70 p-10 rounded-full"
                      onClick={togglePlayPause}
                    >
                      <Image
                        className="w-12"
                        src={isPlaying ? Pause : Play}
                        alt={isPlaying ? "Pause" : "Play"}
                      />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="w-9/12">
            <h1 className="pt-10 font-bold text-7xl text-white">
              {project.header.header2}
            </h1>
            <p className="py-10 text-xl text-white">{project.title.title2}</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 animate-fadeIn">
          <div className="relative animate-scaleUp">
            <img
              src={project.banner}
              alt={project.title.title1}
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black py-2 px-3 rounded-full"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
