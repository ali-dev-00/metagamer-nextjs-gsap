"use client"
import React, { useRef, useState } from 'react'

const Hero = () => {

    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);

    const [loading, setLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVdRef = useRef(null);

    const handleVideoLoad = (prev) => {
        setLoadedVideos(prev + 1);
    }
    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
    const handleMiniVdClick = () => {
        setHasClicked(true);
        setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
    };

    const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;

    return (
        <div className='relative h-dvh w-screen overflow-x-hidden '>
            <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
                <div>
                    <div className='mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg ' >
                        <div className='origin-center' onClick={handleMiniVdClick}>
                            <video
                                ref={nextVdRef}
                                src={getVideoSrc((currentIndex % totalVideos) + 1)}
                                loop
                                muted
                                id='current-video'
                                onLoadedData={handleVideoLoad}
                                className='size-64 origin-center scale 150 object-cover object-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'
                            />
                        </div>
                    </div>
                    <video
                        ref={nextVdRef}
                        src={getVideoSrc(currentIndex)}
                        loop
                        muted
                        id='next-video'
                        className='absolute-center invisible absolute z-20 size-64 ovject-center object-cover '
                        onLoadedData={handleVideoLoad}
                    />
                    <video
                        src={getVideoSrc(
                            currentIndex === totalVideos - 1 ? 1 : currentIndex
                        )}
                        autoPlay
                        loop
                        muted
                        className='absolute left-0 top-0 siz-full object-cover object-center '
                        onLoadedData={handleVideoLoad}
                    />
                </div>
                <h1 className='special-font hero-heading absolute bottom-5 right-5 text-blue-75' >
                    G<b>a</b>ming
                </h1>
                <div className='absolute left-0 top-0 z-40 size-full' >
                    <div className='mt-24 px-5 sm:px-10'>
                        <h1 className='special-font hero-heading text-blue-100'>redefi<b >n</b>e</h1>
                        <p className='mb-5 max-w-64 font-robert=regular text-blue-100' >Enter the Metagame Layer <br /> Unleash the Play Economy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero