'use client'

import Image from 'next/image'
import heroImage from "@/public/hero-banner.png";
import { Instagram } from "lucide-react";

const LandingPage = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#ffd6e4]/80 via-[#ffe9f0] to-[#fff5f8]/80 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

            {/* Background decorative blobs - responsive positioning */}
            <div className="absolute inset-0 opacity-20 z-0">
                <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-[#ffd6e4] rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-24 h-24 sm:w-40 sm:h-40 bg-[#57dbdb] rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-24 h-24 sm:w-36 sm:h-36 bg-[#ffd6e4] rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className='flex flex-col items-center justify-center z-10 w-full max-w-6xl mx-auto'>
                {/* Hero Image - Responsive sizing */}
                <Image
                    src={heroImage}
                    alt="Kassy's Krafts custom hand-painted banner showcasing colorful personalized design work"
                    className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-300 mb-6 sm:mb-8"
                    priority
                />

                <div className='flex flex-col items-center px-4 sm:px-6'>
                    {/* Main Heading - Responsive text sizing */}
                    <h1 className="font-handwritten text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#c47de8] mb-3 sm:mb-4 tracking-wide drop-shadow-lg text-center">
                        Custom Paint Designs
                    </h1>

                    {/* Subtitle - Responsive text sizing */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-[#382442]/80 mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto font-light px-4">
                        Handcrafted with love • Personalized banners • Unique creations
                    </p>

                    {/* CTA Buttons - Stack on mobile, side-by-side on larger screens */}
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto'>
                        <button
                            onClick={scrollToContact}
                            aria-label="Navigate to contact form to place an order"
                            className="w-full sm:w-auto bg-[#c47de8] hover:bg-[#c47de8]/90 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-2 shadow-xl hover:scale-105 transition-transform rounded-full cursor-pointer"
                        >
                            Order Now
                        </button>
                        <button
                            onClick={() => window.open('https://instagram.com/kraftsbykassy_', '_blank', 'noopener,noreferrer')}
                            aria-label="Visit Kassy's Krafts Instagram profile @kraftsbykassy_"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-2 bg-[#57dbdb] hover:bg-[#57dbdb]/90 text-[#382442] rounded-full font-semibold text-base sm:text-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
                        >
                            <Instagram className='w-4 h-4 sm:w-5 sm:h-5' aria-hidden="true"/>
                            <span className="truncate">@kraftsbykassy_</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPage