import { motion } from 'framer-motion'

import Container from '../components/Container'

const AboutSection = () => {
  return (
    <section className="py-24 md:py-40 bg-[#efe9df] overflow-hidden">

      <Container>

        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">

          {/* IMAGE */}
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
            className="relative"
          >

            <div className="overflow-hidden rounded-[32px] md:rounded-[42px]">

              <img
                src="https://content.jdmagicbox.com/comp/def_content/silversmiths/18cdfb2cda-silversmiths-3-71zlx.jpg?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="w-full h-[420px] md:h-[750px] object-cover"
              />

            </div>

            {/* FLOATING CARD */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white/90 backdrop-blur-sm p-5 md:p-8 rounded-[24px] md:rounded-[28px] border border-[#d8d2c8] shadow-[0_10px_40px_rgba(0,0,0,0.04)] max-w-[200px] md:max-w-[260px]"
            >

              <p className="text-3xl md:text-5xl font-semibold mb-2">
                925
              </p>

              <p className="uppercase tracking-[0.2em] text-[10px] md:text-xs text-[#666] leading-relaxed">
                Premium Sterling Silver
              </p>

            </motion.div>

          </motion.div>

          {/* CONTENT */}
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
              delay: 0.1,
            }}
          >

            <p className="uppercase tracking-[0.3em] text-[11px] md:text-sm text-[#777] mb-5 md:mb-6">
              About Joshi's Silver
            </p>

            <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] font-semibold mb-8 md:mb-10">
              Crafted with Heritage, Designed for Elegance
            </h2>

            <p className="text-[#666] text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl">
              At Joshi’s Silver, every piece reflects a balance
              between timeless Indian craftsmanship and modern luxury.
              Our handcrafted creations are designed to preserve
              heritage artistry while embracing refined elegance.
            </p>

            <p className="text-[#666] text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-xl">
              From premium sterling silver jewelry to spiritual silver
              collectibles and artistic heritage pieces, every creation
              is crafted with authenticity, precision, and trust.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

              <div className="border border-[#d8d2c8] rounded-[24px] md:rounded-[28px] p-5 md:p-6 bg-white/50 min-h-[180px] md:min-h-[220px]">

                <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                  Handcrafted
                </h3>

                <p className="text-[#666] leading-relaxed text-sm md:text-base">
                  Artisan-made silver creations with timeless detailing.
                </p>

              </div>

              <div className="border border-[#d8d2c8] rounded-[24px] md:rounded-[28px] p-5 md:p-6 bg-white/50 min-h-[180px] md:min-h-[220px]">

                <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                  Authentic
                </h3>

                <p className="text-[#666] leading-relaxed text-sm md:text-base">
                  Premium silver quality designed to last generations.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  )
}

export default AboutSection