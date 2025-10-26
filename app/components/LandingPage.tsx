'use client'

import Image from 'next/image'
import heroImage from "@/public/hero-banner.png";
import { Instagram } from "lucide-react";

const LandingPage = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#ffd6e4]/80 via-[#ffe9f0] to-[#fff5f8]/80">

            <div className="absolute inset-0 opacity-20 z-0">
                <div className="absolute top-10 left-10 w-32 h-32 bg-[#ffd6e4] rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#57dbdb] rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-[#ffd6e4] rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className='flex flex-col items-center justify-center z-10'>
                <Image
                    src={heroImage}
                    alt='banner'
                    className="w-full max-w-3xl mx-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 mb-8"
                />

                <div className='flex flex-col items-center'>
                    <h1 className="font-handwritten text-6xl md:text-8xl text-[#c47de8] mb-4 tracking-wide drop-shadow-lg">
                        Custom Paint Designs
                    </h1>
                    <p className="text-xl text-center md:text-2xl text-[#382442]/80 mb-8 max-w-2xl mx-auto font-light">
                        Handcrafted with love • Personalized banners • Unique creations
                    </p>

                    <div className='flex flex-row gap-6'>
                        <button
                            onClick={scrollToContact}
                            className="bg-[#c47de8] hover:bg-[#c47de8]/90 text-[#ffd6e4] font-semibold text-lg px-8 py-2 shadow-xl hover:scale-105 transition-transform rounded-full cursor-pointer"
                        >
                            Order Now
                        </button>
                        <button
                            onClick={() => window.open('https://instagram.com/kraftsbykassy_', '_blank', 'noopener,noreferrer')}
                            className="inline-flex items-center gap-2 px-8 py-2 bg-[#57dbdb] hover:bg-[#57dbdb]/90 text-[#382442] rounded-full font-semibold shadow-lg hover:scale-105 transition-transform cursor-pointer"
                        >
                            <Instagram className='w-5 h-5'/>
                            @kraftsbykassy_
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPage