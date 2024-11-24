"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Play from "@/app/assets/play.svg";
import Pause from "@/app/assets/pause.svg";

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

  const videoRef = useRef(null);

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
        <div className="w-9/12">
          <h1 className="font-bold text-7xl py-10 text-white">
            {project.header.header1}
          </h1>
          <p className="pb-10 text-xl text-white">{project.title.title1}</p>
        </div>

        <div>
          {isImageFallback ? (
            <img
              className="w-11/12 mx-auto h-auto rounded-lg"
              src={project.banner}
              alt={project.title.title1}
            />
          ) : (
            <div
              className="relative"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              <div>
                <video
                  ref={videoRef}
                  className="w-11/12 mx-auto h-auto rounded-lg"
                  loop
                  muted
                  autoPlay
                >
                  <source src={project.video} type="video/mp4" />
                </video>
              </div>
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
  );
};

export default ProjectPage;
