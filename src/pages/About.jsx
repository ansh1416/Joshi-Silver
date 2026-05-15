import { motion } from 'framer-motion'

import Navbar from '../components/Navbar'
import MobileTopBar from '../components/MobileTopBar'
import Container from '../components/Container'
import Footer from '../components/Footer'

const values = [
  {
    title: 'Handcrafted Excellence',
    text:
      'Every creation is handcrafted with refined artisan precision and timeless detailing.',
  },

  {
    title: 'Authentic Silver',
    text:
      'Crafted using premium sterling silver with lasting elegance and trusted quality.',
  },

  {
    title: 'Heritage Luxury',
    text:
      'Inspired by Indian craftsmanship and elevated through modern luxury aesthetics.',
  },
]

const About = () => {
  return (
    <div className="min-h-screen bg-[#f8f6f2] overflow-hidden">

      <Navbar />
      <MobileTopBar />

      {/* HERO */}
      <section className="pt-40 pb-28">

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
            className="max-w-6xl"
          >

            <p className="uppercase tracking-[0.35em] text-[11px] text-[#8b7552] mb-8">
              About Joshi's Silver
            </p>

            <h1 className="text-6xl md:text-8xl leading-[0.92] font-semibold mb-10">
              Crafted with Heritage,
              Designed for Timeless Elegance
            </h1>

            <p className="text-[#5f584e] text-lg md:text-xl leading-relaxed max-w-3xl">
              Joshi’s Silver blends handcrafted Indian artistry
              with refined modern luxury, creating timeless silver
              jewelry and spiritual collectibles designed to last generations.
            </p>

          </motion.div>

        </Container>

      </section>

      {/* STORY */}
      <section className="pb-32">

        <Container>

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT */}
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
            >

              <p className="uppercase tracking-[0.3em] text-[11px] text-[#8b7552] mb-6">
                Our Story
              </p>

              <h2 className="text-5xl md:text-6xl leading-[0.95] font-semibold mb-8">
                Silver Crafted with Soul and Precision
              </h2>

            </motion.div>

            {/* RIGHT */}
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
              className="space-y-8"
            >

              <p className="text-[#5f584e] text-lg leading-relaxed">
                At Joshi’s Silver, every piece reflects a balance
                between timeless heritage and contemporary elegance.
                From handcrafted jewelry to divine silver art,
                our creations are designed with authenticity,
                precision, and emotional craftsmanship.
              </p>

              <p className="text-[#5f584e] text-lg leading-relaxed">
                We believe luxury should feel personal, meaningful,
                and enduring — crafted not just for style,
                but for legacy and timeless beauty.
              </p>

            </motion.div>

          </div>

        </Container>

      </section>

      {/* VALUES */}
      <section className="pb-32">

        <Container>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {values.map((item, index) => (

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

                  <div className="w-14 h-14 rounded-full border border-[#cfb98d] flex items-center justify-center mb-10 text-sm tracking-[0.2em]">

                    0{index + 1}

                  </div>

                  <h3 className="text-4xl leading-none font-semibold mb-6">
                    {item.title}
                  </h3>

                  <p className="text-[#5f584e] text-lg leading-relaxed">
                    {item.text}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </Container>

      </section>

      {/* STATS */}
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
            className="rounded-[48px] border border-[#dcc79c] bg-[#efe9df] px-8 py-20 md:px-16 md:py-24"
          >

            <div className="grid md:grid-cols-3 gap-12 text-center">

              <div>

                <h2 className="text-6xl md:text-7xl font-semibold mb-4">
                  925
                </h2>

                <p className="uppercase tracking-[0.25em] text-[11px] text-[#8b7552]">
                  Sterling Silver
                </p>

              </div>

              <div>

                <h2 className="text-6xl md:text-7xl font-semibold mb-4">
                  100%
                </h2>

                <p className="uppercase tracking-[0.25em] text-[11px] text-[#8b7552]">
                  Handcrafted
                </p>

              </div>

              <div>

                <h2 className="text-6xl md:text-7xl font-semibold mb-4">
                  Timeless
                </h2>

                <p className="uppercase tracking-[0.25em] text-[11px] text-[#8b7552]">
                  Luxury Craftsmanship
                </p>

              </div>

            </div>

          </motion.div>

        </Container>

      </section>

      <Footer />

    </div>
  )
}

export default About