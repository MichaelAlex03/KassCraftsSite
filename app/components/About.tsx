import React from 'react'
import { Heart, Paintbrush, Sparkles, Package } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className='min-h-screen w-full bg-gradient-to-br from-[#ffe9f0] via-white to-[#fff5f8] py-20 px-4'>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="font-handwritten text-6xl md:text-7xl text-center text-[#c47de8] mb-4 tracking-wide drop-shadow-lg">
          About Kassy&apos;s Krafts
        </h2>
        <p className="text-center text-lg text-[#382442]/80 mb-12 max-w-2xl mx-auto font-light">
          Creating custom pieces that bring joy and personality to your space
        </p>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Custom Designs Card */}
          <div className="p-6 text-center bg-white rounded-3xl border-2 border-[#c47de8]/30 hover:border-[#c47de8] shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#c47de8]/20 rounded-full flex items-center justify-center group-hover:bg-[#c47de8]/30 transition-colors">
              <Paintbrush className="w-8 h-8 text-[#c47de8]" />
            </div>
            <h3 className="font-handwritten text-2xl text-[#c47de8] mb-2">
              Custom Designs
            </h3>
            <p className="text-[#382442]/80 text-sm">
              Every piece is uniquely crafted to match your vision
            </p>
          </div>

          {/* Made with Love Card */}
          <div className="p-6 text-center bg-white rounded-3xl border-2 border-[#ffd6e4]/30 hover:border-[#ffd6e4] shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#ffd6e4]/30 rounded-full flex items-center justify-center group-hover:bg-[#ffd6e4]/50 transition-colors">
              <Heart className="w-8 h-8 text-[#c47de8]" />
            </div>
            <h3 className="font-handwritten text-2xl text-[#c47de8] mb-2">
              Made with Love
            </h3>
            <p className="text-[#382442]/80 text-sm">
              Each creation is handled with care and attention to detail
            </p>
          </div>

          {/* Quality Materials Card */}
          <div className="p-6 text-center bg-white rounded-3xl border-2 border-[#57dbdb]/30 hover:border-[#57dbdb] shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#57dbdb]/20 rounded-full flex items-center justify-center group-hover:bg-[#57dbdb]/30 transition-colors">
              <Sparkles className="w-8 h-8 text-[#57dbdb]" />
            </div>
            <h3 className="font-handwritten text-2xl text-[#57dbdb] mb-2">
              Quality Materials
            </h3>
            <p className="text-[#382442]/80 text-sm">
              Using premium supplies for lasting, beautiful results
            </p>
          </div>

          {/* Fast Delivery Card */}
          <div className="p-6 text-center bg-white rounded-3xl border-2 border-[#c47de8]/30 hover:border-[#c47de8] shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#c47de8]/20 rounded-full flex items-center justify-center group-hover:bg-[#c47de8]/30 transition-colors">
              <Package className="w-8 h-8 text-[#c47de8]" />
            </div>
            <h3 className="font-handwritten text-2xl text-[#c47de8] mb-2">
              Fast Delivery
            </h3>
            <p className="text-[#382442]/80 text-sm">
              Quick turnaround with careful packaging and shipping
            </p>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="p-8 md:p-12 bg-gradient-to-br from-[#ffd6e4]/30 via-[#c47de8]/10 to-[#57dbdb]/20 border-2 border-[#c47de8]/20 rounded-3xl shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-handwritten text-4xl md:text-5xl text-[#c47de8] mb-6">
              Why Choose Kassy&apos;s Krafts?
            </h3>
            <p className="text-[#382442]/90 leading-relaxed mb-4 text-lg">
              Your order truly means so much to me! Thank you for supporting my small business
              and enabling me to do what I love. Each piece is created with passion and dedication
              to bring your vision to life.
            </p>
            <p className="text-[#382442]/90 leading-relaxed text-lg">
              From custom banners to personalized paint designs, I work closely with you to ensure
              every detail is perfect. Let&apos;s create something beautiful together!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About