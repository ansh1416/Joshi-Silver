import { motion } from 'framer-motion'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="pt-44 pb-24 overflow-hidden">

      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <p className="uppercase tracking-[0.3em] text-sm text-[#666] mb-6">
              Luxury Silver Jewellery
            </p>

            <h1 className="text-6xl lg:text-8xl leading-[0.95] font-semibold mb-8">
              Handcrafted Silver Jewellery for Timeless Elegance
            </h1>

            <p className="text-[#555] text-lg leading-relaxed max-w-xl mb-10">
              Modern handcrafted silver pieces designed with precision,
              authenticity, and timeless sophistication.
            </p>

            <div className="flex flex-wrap gap-5">

              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="px-8 py-4 bg-[#1f1f1f] text-white rounded-full tracking-[0.15em] text-sm"
              >
                <Link to="/collections">Explore Collections</Link>
              </motion.button>
            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
            }}
            className="relative"
          >

            <div className="absolute -top-10 -left-10 w-40 h-40 border border-[#d8d2c8] rounded-full" />

            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="w-full h-[750px] object-cover rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            />

          </motion.div>

        </div>

      </Container>

    </section>
  )
}

export default Hero