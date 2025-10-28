'use client'

import { Instagram, Mail, MessageCircle, QrCode } from 'lucide-react'

const Contact = () => {
  return (
    <section id='contact' className='min-h-screen w-full bg-gradient-to-br from-[#fff5f8] via-[#ffe9f0] to-white py-20 px-4'>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="font-handwritten text-6xl md:text-7xl text-center text-[#c47de8] mb-4 tracking-wide drop-shadow-lg">
          Get in Touch
        </h2>
        <p className="text-center text-lg text-[#382442]/80 mb-12 max-w-2xl mx-auto font-light">
          Ready to create something special? Let&apos;s bring your vision to life!
        </p>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {/* Instagram Card */}
            <div className="bg-gradient-to-br from-[#c47de8]/20 to-[#c47de8]/5 rounded-3xl p-8 shadow-lg border-2 border-[#c47de8]/30 hover:border-[#c47de8] transition-all hover:scale-105 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#c47de8]/20 rounded-full flex items-center justify-center group-hover:bg-[#c47de8]/30 transition-colors shrink-0">
                  <Instagram className="w-7 h-7 text-[#c47de8]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-handwritten text-2xl text-[#c47de8] mb-2">
                    Instagram
                  </h4>
                  <p className="text-[#382442]/70 mb-3">
                    Follow me for updates and inspiration
                  </p>
                  <button
                    onClick={() => window.open('https://instagram.com/kraftsbykassy_', '_blank', 'noopener,noreferrer')}
                    className="inline-flex items-center gap-2 px-6 py-2 bg-[#c47de8] hover:bg-[#c47de8]/90 text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                    @kraftsbykassy_
                  </button>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-gradient-to-br from-[#ffd6e4]/30 to-white rounded-3xl p-8 shadow-lg border-2 border-[#ffd6e4]/50 hover:border-[#ffd6e4] transition-all hover:scale-105 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#ffd6e4]/40 rounded-full flex items-center justify-center group-hover:bg-[#ffd6e4]/60 transition-colors shrink-0">
                  <Mail className="w-7 h-7 text-[#c47de8]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-handwritten text-2xl text-[#c47de8] mb-2">
                    Email
                  </h4>
                  <p className="text-[#382442]/70 mb-3">
                    Prefer email? Drop me a line
                  </p>
                  <a
                    href="mailto:kraftinginspirations@gmail.com"
                    className="text-[#c47de8] font-semibold hover:underline break-all"
                  >
                    kraftinginspirations@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="bg-gradient-to-br from-[#57dbdb]/20 to-white rounded-3xl p-8 shadow-lg border-2 border-[#57dbdb]/30 hover:border-[#57dbdb] transition-all hover:scale-105 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#57dbdb]/20 rounded-full flex items-center justify-center group-hover:bg-[#57dbdb]/30 transition-colors shrink-0">
                  <MessageCircle className="w-7 h-7 text-[#57dbdb]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-handwritten text-2xl text-[#57dbdb] mb-2">
                    Quick Response
                  </h4>
                  <p className="text-[#382442]/80">
                    I typically respond within 24 hours. Can&apos;t wait to hear about your project!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Form Card */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-br from-[#c47de8]/10 via-[#ffd6e4]/20 to-white rounded-3xl p-8 shadow-xl border-2 border-[#c47de8]/30 flex-1 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#c47de8]/20 rounded-full flex items-center justify-center">
                  <QrCode className="w-10 h-10 text-[#c47de8]" />
                </div>
                <h3 className="font-handwritten text-3xl text-[#c47de8] mb-4">
                  Place an Order
                </h3>
                <p className="text-[#382442]/80 mb-6 leading-relaxed">
                  Ready to order? Fill out our quick order form to get started with your custom design!
                </p>
                <button
                  onClick={() => window.open('YOUR_GOOGLE_FORM_LINK', '_blank', 'noopener,noreferrer')}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#c47de8] hover:bg-[#c47de8]/90 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <QrCode className="w-5 h-5" />
                  Open Order Form
                </button>
                <p className="text-sm text-[#382442]/60 mt-4">
                  Or scan the QR code on my business card
                </p>
              </div>
            </div>

           
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-[#ffd6e4]/30 via-[#c47de8]/20 to-[#57dbdb]/30 rounded-2xl px-8 py-6 shadow-lg">
            <p className="text-[#382442] font-medium text-lg">
              Thank you for supporting small business! 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact