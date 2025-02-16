"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import Link from 'next/link';
import {useWindowScroll} from 'react-use';

const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact'];
const Navbar = () => {

    const [isAudioPlaying, setIsAudioPlaying] = useState(false)
    const [isIndicatorActive, setisIndicatorActive] = useState(false)
    const navContainerRef = useRef(null);
    const audioElementRef = useRef(null);
    const {y: currentScrollY  } = useWindowScroll();
    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev);
        setisIndicatorActive((prev) => !prev);
    }
    useEffect(() => {
        if (isAudioPlaying) {
            audioElementRef.current.play();
        } else {
            audioElementRef.current.pause();
        }
    }, [isAudioPlaying])

    useEffect(()=>{
       
    },[currentScrollY])
    return (
        <div ref={navContainerRef} className='  fixed inset-x-0 top-4 h-16 border-none transition-all duration-700 sm:inset-x-6 z-50'   >
            <header className='absolute top-1/2 w-full -translate-y-1/2 ' >
                <nav className='flex size-full items-center justify-between p-4' >
                    <div className='flex items-center gap-7' >
                        <Image src="/img/logo.png" alt="logo" width={40} height={40} />
                        <Button
                            id="product-button"
                            title="Products"
                            rightIcon={<TiLocationArrow />}
                            containerClass="bg-blue-50 md:flex hidden items-center justify-center  gap-1"
                        />
                    </div>
                    <div className='flex h-full items-center' >
                        <div className='hidden md:block ' >
                            {navItems.map((item, index) => (
                                <Link key={index}
                                    href={`#${item.toLowerCase()}`}
                                    className='nav-hover-btn'
                                >{item}</Link>
                            ))}
                        </div>
                        <button
                            className='ml-10 flex items-center space-x-0.5'
                            onClick={toggleAudioIndicator}
                        >
                            <audio ref={audioElementRef} className='hidden' src="/audio/loop.mp3" loop />
                            {[1, 2, 3, 4].map((bar) => (
                                <div key={bar} className={`indicator-line  ${isIndicatorActive ? 'active' : ''}`} style={{ animationDelay: `${bar * 0.1}` }} />
                            ))}
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar