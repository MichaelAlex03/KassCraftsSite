import React from 'react'
import { Check } from 'lucide-react'

const Pricing = () => {
  const bannerSizes = [
    { size: "3x3", price: 35 },
    { size: "4x3", price: 45 },
    { size: "5x3", price: 55, popular: true },
    { size: "6x3", price: 65 },
    { size: "7x3", price: 75 },
  ]

  const addOns = [
    { name: "Characters", price: 5, unit: "each" },
    { name: "Basic Border", price: 5 },
    { name: "Special Border", price: 10, details: "Checkered, Gingham, Scalloped" },
    { name: "Lots of Detail", price: 10 },
  ]

  return (
    <section id="pricing" className='min-h-screen w-full bg-gradient-to-br from-[#fff5f8] via-white to-[#ffe9f0]/90 py-20 px-4'>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="font-handwritten text-6xl md:text-7xl text-center text-[#c47de8] mb-4 tracking-wide drop-shadow-lg">
          Banners & Pricing
        </h2>
        <p className="text-center text-lg text-[#382442]/80 mb-12">
          Krafts by Kassy - Affordable custom designs for every occasion
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Banner Sizes */}
          <div className="space-y-4">
            <h3 className="font-handwritten text-4xl text-[#c47de8] mb-6">Banner Sizes</h3>
            {bannerSizes.map((banner) => (
              <div
                key={banner.size}
                className="relative p-6 bg-white rounded-3xl border-2 border-[#c47de8]/20 hover:border-[#c47de8]/40 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-16 bg-gradient-to-br from-[#c47de8]/20 to-[#57dbdb]/20 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-xl text-[#c47de8]">{banner.size}</span>
                    </div>
                    <span className="text-lg text-[#382442] font-medium">{banner.size} Banner</span>
                  </div>
                  <span className="font-handwritten text-4xl text-[#c47de8]">${banner.price}</span>
                </div>
              </div>
            ))}
            <p className="text-sm text-[#382442]/60 italic text-center pt-4">
              Smaller or larger banner lengths available upon request
            </p>
          </div>

          {/* Right Column - Add-Ons & Info */}
          <div className="space-y-6">
            {/* Add-Ons Card */}
            <div className="p-8 bg-[#c47de8] text-white rounded-3xl shadow-xl">
              <h3 className="font-handwritten text-4xl mb-6">Add-Ons</h3>
              <ul className="space-y-4">
                {addOns.map((addon) => (
                  <li key={addon.name} className="flex items-start gap-3">
                    <Check className="w-6 h-6 mt-1 shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-lg">{addon.name}</span>
                        <span className="font-handwritten text-2xl whitespace-nowrap">
                          ${addon.price}{addon.unit && `/${addon.unit}`}
                        </span>
                      </div>
                      {addon.details && (
                        <p className="text-sm text-white/80 mt-1">{addon.details}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Included Card */}
            <div className="p-6 bg-[#57dbdb]/20 border-2 border-[#57dbdb] rounded-3xl shadow-lg">
              <h4 className="font-handwritten text-2xl text-[#57dbdb] mb-4">What&apos;s Included</h4>
              <ul className="space-y-2 text-[#382442]/80">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#57dbdb]" />
                  Digital mock-up for design approval
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#57dbdb]" />
                  Premium quality materials
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#57dbdb]" />
                  Careful packaging for shipping
                </li>
              </ul>
            </div>

            {/* Payment Methods Card */}
            <div className="p-6 bg-white border-2 border-[#c47de8]/20 rounded-3xl shadow-lg">
              <h4 className="font-handwritten text-2xl text-[#c47de8] mb-4">Payment Methods</h4>
              <div className="flex flex-wrap gap-3">
                <span className="bg-[#ffd6e4] text-[#382442] text-base px-4 py-2 rounded-full font-medium">CashApp</span>
                <span className="bg-[#ffd6e4] text-[#382442] text-base px-4 py-2 rounded-full font-medium">Venmo</span>
                <span className="bg-[#ffd6e4] text-[#382442] text-base px-4 py-2 rounded-full font-medium">Cash</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing