'use client'
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/data/teams.json');
                const data = await res.json();
                setTeams(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();

        AOS.init({
            duration: 400, // กำหนดระยะเวลาของอนิเมชัน
            once: true, // เล่นอนิเมชันครั้งเดียว
        });
    }, []);

    return (
        <>
            <div className=''>

                <div className="w-11/12 mx-auto">
                    <div className=" mt-40 bg-red-00">
                        <div className="header w-11/12 mx-auto text-white">
                            <h1 className="text-7xl font-Inter font-bold">Team</h1>
                            <p className="text-2xl leading-snug my-10 font-Inter">
                                Much Media has a team consisting of website developers, video editors, graphic designers, and illustrators who work together to create engaging content and media. The team focuses on developing user-friendly websites, producing high-quality videos, designing beautiful graphics, and creating unique illustrations, all of which effectively enhance the brand's image and communication.
                            </p>
                        </div>
                    </div>

                    <hr className="my-20 w-full  bg-gray-200" />

                    <div className="w-11/12 mx-auto min-h-screen grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {teams.map((team, index) => (
                            <div
                                key={team.id}
                                className="pb-14 relative"
                                data-aos="fade-up"
                                data-aos-delay={(index * 100)}
                            >
                                <div className="relative group aspect-[2/3] w-full max-w-[1366px] overflow-hidden rounded-sm">
                                    <img
                                        src={team.img}
                                        alt={team.name}
                                        className="absolute rounded-md scale-[160%] inset-0 w-full h-full object-contain transition-opacity duration-500 "
                                    />
                                </div>
                                <h2 className="mt-4 font-Inter text-xl text-white font-bold">{team.name}</h2>
                                <p className="mt-2 font-Inter text-xl font-medium text-[#999999]">{team.role}</p>
                                <a
                                    href={team.contact_facebook}
                                    className="hidden lg:block absolute bottom-[92px] right-5 transition-all duration-500 fill-[#4e4e4e] hover:fill-white"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


        </>

    );
};

export default Teams;
