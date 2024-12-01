import React from 'react';
import MaskText from '@/components/text-wrapper/page';
const Page = () => {
    const ContentPhrases1 = [
        "SAMUTPRAKARN",
      ];
    const ContentPhrases2 = [
        "547 , 10290P.O.",
      ];
    const ContentPhrases3 = [
        "SUKSAWAT",
      ];
    return (
        <div className="relative min-h-screen">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/video/bgboard.MP4" type="video/mp4" />
                </video>
                <div className="absolute bottom-0 w-full h-96 bg-gradient-to-t from-[#070707] to-transparent" />
            </div>

            {/* Content */}
            <div className="w-11/12 mx-auto relative z-10 text-white">
                <div className="flex flex-col items-center justify-center h-screen text-center">
                    <div>
                        <div className='text-5xl lg:text-9xl font-bold'> <MaskText phrases={ContentPhrases1} /></div>
                    </div>
                    <div className='flex lg:pl-12 items-center'>
                        <div>
                        <svg className='animate-spinslow w-20 lg:w-32' viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M165.963 134.037C160.496 139.504 151.631 139.504 146.164 134.037L122.027 109.899C116.559 104.432 116.559 95.5678 122.027 90.1005L146.164 65.9631C151.631 60.4957 160.496 60.4957 165.963 65.9631L190.101 90.1004C195.568 95.5678 195.568 104.432 190.101 109.899L165.963 134.037ZM53.8359 134.037C48.3686 139.504 39.5042 139.504 34.0369 134.037L9.89952 109.899C4.43218 104.432 4.43217 95.5678 9.89951 90.1005L34.0369 65.9631C39.5042 60.4957 48.3686 60.4957 53.8359 65.9631L77.9733 90.1004C83.4406 95.5678 83.4406 104.432 77.9733 109.899L53.8359 134.037ZM109.9 190.1C104.432 195.568 95.5679 195.568 90.1005 190.1L65.9631 165.963C60.4958 160.496 60.4958 151.631 65.9631 146.164L90.1005 122.027C95.5679 116.559 104.432 116.559 109.9 122.027L134.037 146.164C139.504 151.631 139.504 160.496 134.037 165.963L109.9 190.1ZM109.9 77.9732C104.432 83.4405 95.5679 83.4406 90.1005 77.9732L65.9631 53.8358C60.4958 48.3685 60.4958 39.5042 65.9631 34.0368L90.1005 9.89946C95.5679 4.43212 104.432 4.43211 109.9 9.89945L134.037 34.0368C139.504 39.5042 139.504 48.3685 134.037 53.8358L109.9 77.9732Z" fill="url(#paint0_linear_105_379)"/> <defs> <linearGradient id="paint0_linear_105_379" x1="154.166" y1="35.9433" x2="47.2475" y2="144.745" gradientUnits="userSpaceOnUse"> <stop offset="0.0509862" stop-color="#FFB6E1"/> <stop offset="1" stop-color="#FBE3EA"/> </linearGradient> </defs> </svg>
                        </div>
                        <div>
                            <div className='text-4xl pl-4 lg:text-9xl font-bold'> <MaskText phrases={ContentPhrases2} /></div>
                        </div>
                    </div>
                    <div>
                        <div className='text-5xl lg:text-9xl font-bold '> <MaskText phrases={ContentPhrases3} /></div>
                    </div>
                </div>


                <div className='absolute bottom-0 flex flex-col w-full'>
                    <div>
                        <h1 className='py-4 text-white font-bold text-6xl'>[ Contact ]</h1>
                        <h1 className='text-3xl'>muchmedia@gmail.com</h1>
                        <h1 className='text-3xl py-4'>+02 564 7854</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
