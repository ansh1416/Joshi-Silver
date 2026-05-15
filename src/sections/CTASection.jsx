import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import Container from '../components/Container'

const CTASection = () => {
  return (
    <section className="py-36 bg-[#f8f6f2] overflow-hidden">

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
          className="relative overflow-hidden rounded-[52px] border border-[#dcc79c] bg-[#efe9df] px-8 py-20 md:px-16 md:py-24 lg:px-24"
        >

          {/* LUXURY GLOW */}
          <div className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-[#e6d3aa]/20 blur-3xl" />

          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#d9c18f]/10 blur-3xl" />

          {/* TOP LABEL */}
          <div className="flex items-center gap-4 mb-12">

            <div className="w-14 h-[1px] bg-[#b89d68]" />

            <p className="uppercase tracking-[0.35em] text-[11px] text-[#8b7552]">
              Personalized Luxury
            </p>

          </div>

          {/* CONTENT */}
          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-16 items-end">

            {/* LEFT */}
            <div>

              <h2 className="text-5xl md:text-7xl leading-[0.92] font-semibold mb-8 max-w-4xl">
                Create Your Personalized Silver Piece
              </h2>

              <p className="text-[#5f584e] text-lg md:text-xl leading-relaxed max-w-2xl">
                Handcrafted jewelry, divine silver art,
                and bespoke luxury creations designed
                with timeless elegance and artisan precision.
              </p>

            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-5 lg:items-end">

              {/* WHATSAPP */}
              <motion.a
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                href="https://wa.me/919999999999"
                target="_blank"
                className="w-full lg:w-auto px-10 py-5 rounded-full bg-[#1f1f1f] text-white tracking-[0.18em] text-sm uppercase text-center shadow-[0_10px_30px_rgba(0,0,0,0.10)]"
              >
                WhatsApp Inquiry
              </motion.a>

              {/* CUSTOM ORDER */}
              <Link
                to="/custom-jewelry"
                className="w-full lg:w-auto"
              >

                <motion.button
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="w-full px-10 py-5 rounded-full border border-[#cfb98d] bg-white/40 tracking-[0.18em] text-sm uppercase hover:bg-white/70 transition"
                >
                  Custom Order
                </motion.button>

              </Link>

            </div>

          </div>

        </motion.div>

      </Container>

    </section>
  )
}

export default CTASection