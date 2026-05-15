import { motion } from 'framer-motion'
import {
  MessageCircle,
  
  Mail,
} from 'lucide-react'

import Navbar from '../components/Navbar'
import MobileTopBar from '../components/MobileTopBar'
import Container from '../components/Container'
import Footer from '../components/Footer'

const contactCards = [
  {
    title: 'WhatsApp',
    value: '+91 99999 99999',
    icon: MessageCircle,
  },



  {
    title: 'Email',
    value: 'hello@joshissilver.com',
    icon: Mail,
  },
]

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#f8f6f2] overflow-hidden">

      <Navbar />
      <MobileTopBar />

      {/* HERO */}
      <section className="pt-40 pb-24">

        <Container>

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="max-w-5xl"
          >

            <p className="uppercase tracking-[0.35em] text-[11px] text-[#8b7552] mb-8">
              Contact Us
            </p>

            <h1 className="text-6xl md:text-8xl leading-[0.92] font-semibold mb-10">
              Begin Your
              Silver Journey
            </h1>

            <p className="text-[#5f584e] text-lg md:text-xl leading-relaxed max-w-2xl">
              Connect with us for handcrafted silver jewelry,
              custom luxury creations, and personalized inquiries.
            </p>

          </motion.div>

        </Container>

      </section>

      {/* CONTACT CARDS */}
      <section className="pb-24">

        <Container>

          <div className="grid md:grid-cols-3 gap-8">

            {contactCards.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                >

                  <div className="h-full rounded-[38px] border border-[#dcc79c] bg-[#efe9df] p-10 shadow-[0_10px_40px_rgba(180,140,60,0.06)]">

                    <div className="w-14 h-14 rounded-full border border-[#cfb98d] flex items-center justify-center mb-10">

                      <Icon size={20} />

                    </div>

                    <h3 className="text-4xl leading-none font-semibold mb-5">
                      {item.title}
                    </h3>

                    <p className="text-[#5f584e] text-lg break-all">
                      {item.value}
                    </p>

                  </div>

                </motion.div>
              )
            })}

          </div>

        </Container>

      </section>

      {/* FORM */}
      <section className="pb-36">

        <Container>

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            className="rounded-[48px] border border-[#dcc79c] bg-[#efe9df] p-8 md:p-16 shadow-[0_10px_50px_rgba(180,140,60,0.06)]"
          >

            <div className="grid lg:grid-cols-2 gap-16">

              {/* LEFT */}
              <div>

                <p className="uppercase tracking-[0.3em] text-[11px] text-[#8b7552] mb-6">
                  Luxury Inquiry
                </p>

                <h2 className="text-5xl md:text-6xl leading-[0.95] font-semibold mb-8">
                  Let's Craft Something Timeless
                </h2>

                <p className="text-[#5f584e] text-lg leading-relaxed">
                  Share your vision with us and our team
                  will personally connect with you for
                  handcrafted custom silver creations.
                </p>

              </div>

              {/* RIGHT */}
              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white border border-[#d8ccb7] rounded-full px-6 py-5 outline-none"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full bg-white border border-[#d8ccb7] rounded-full px-6 py-5 outline-none"
                />

                <textarea
                  rows="6"
                  placeholder="Tell us about your custom silver piece..."
                  className="w-full bg-white border border-[#d8ccb7] rounded-[30px] px-6 py-5 outline-none resize-none"
                />

                <motion.a
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  href="https://wa.me/919999999999"
                  target="_blank"
                  className="inline-flex px-10 py-5 rounded-full bg-[#1f1f1f] text-white tracking-[0.18em] text-sm uppercase"
                >
                  Send Inquiry
                </motion.a>

              </form>

            </div>

          </motion.div>

        </Container>

      </section>

      <Footer />

    </div>
  )
}

export default Contact