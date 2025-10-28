'use client'

import React from 'react'
import { Check } from 'lucide-react'

interface PriceCardProps {
    title: string
    size: string
    price: string
    features: string[]
    popular?: boolean
    colorScheme: 'pink' | 'purple' | 'teal'
}

const PricingCards = ({ title, size, price, features, popular = false, colorScheme }: PriceCardProps) => {
    const colorClasses = {
        pink: {
            bg: 'bg-gradient-to-br from-[#ffd6e4] to-[#ffe9f0]',
            border: 'border-[#ffd6e4]',
            text: 'text-[#c47de8]',
            button: 'bg-[#c47de8] hover:bg-[#c47de8]/90 text-white',
            badge: 'bg-[#c47de8] text-white'
        },
        purple: {
            bg: 'bg-gradient-to-br from-[#c47de8]/20 to-[#c47de8]/5',
            border: 'border-[#c47de8]',
            text: 'text-[#c47de8]',
            button: 'bg-[#c47de8] hover:bg-[#c47de8]/90 text-white',
            badge: 'bg-[#c47de8] text-white'
        },
        teal: {
            bg: 'bg-gradient-to-br from-[#57dbdb]/20 to-[#57dbdb]/5',
            border: 'border-[#57dbdb]',
            text: 'text-[#57dbdb]',
            button: 'bg-[#57dbdb] hover:bg-[#57dbdb]/90 text-[#382442]',
            badge: 'bg-[#57dbdb] text-[#382442]'
        }
    }

    const colors = colorClasses[colorScheme]

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className={`relative rounded-3xl p-8 shadow-xl ${colors.bg} border-2 ${colors.border}
            ${popular ? 'scale-105 shadow-2xl' : ''}
            hover:scale-105 transition-transform duration-300`}>

            {popular && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${colors.badge}
                    px-6 py-1 rounded-full text-sm font-semibold shadow-lg`}>
                    Most Popular
                </div>
            )}

            <div className="text-center mb-6">
                <h3 className={`font-handwritten text-4xl ${colors.text} mb-2`}>
                    {title}
                </h3>
                <p className="text-[#382442]/70 text-lg font-light">{size}</p>
            </div>

            <div className="text-center mb-8">
                <div className={`text-5xl font-bold ${colors.text} mb-2`}>
                    {price}
                </div>
                <p className="text-[#382442]/60 text-sm">per banner</p>
            </div>

            <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                        <span className="text-[#382442]/80">{feature}</span>
                    </li>
                ))}
            </ul>

            <button
                onClick={scrollToContact}
                className={`w-full ${colors.button} font-semibold py-3 rounded-full
                    shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}>
                Order Now
            </button>
        </div>
    )
}

export default PricingCards