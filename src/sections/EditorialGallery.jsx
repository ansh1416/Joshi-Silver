import { motion } from 'framer-motion'

import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'

const galleryImages = [
  'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop',

  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop',

  'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop',

  'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1200&auto=format&fit=crop',

  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',

  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',

  'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=1200&auto=format&fit=crop',

  'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1200&auto=format&fit=crop',
]

const EditorialGallery = () => {
  return (
    <section className="py-40 bg-[#efe9df] overflow-hidden">

      <Container>

        {/* HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
          }}
        >

          <SectionHeading
            subtitle="Editorial Gallery"
            title="Moments Crafted in Silver"
          />

        </motion.div>

        {/* TOP GRID */}
        <div className="grid lg:grid-cols-12 gap-6 mb-6">

          {/* BIG IMAGE */}
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
            className="lg:col-span-7 group"
          >

            {/* PREMIUM FRAME */}
            <div className="relative p-[10px] rounded-[46px] bg-gradient-to-br from-[#e5d3a2] via-[#f8f3ea] to-[#d4b06a] shadow-[0_20px_60px_rgba(180,140,60,0.12)]">

              {/* INNER FRAME */}
              <div className="overflow-hidden rounded-[38px] border border-white/70 bg-white">

                <img
                  src={galleryImages[0]}
                  alt=""
                  className="w-full h-[820px] object-cover group-hover:scale-105 transition duration-700"
                />

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* TOP IMAGE */}
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
              className="group"
            >

              <div className="relative p-[10px] rounded-[46px] bg-gradient-to-br from-[#e5d3a2] via-[#f8f3ea] to-[#d4b06a] shadow-[0_20px_60px_rgba(180,140,60,0.12)]">

                <div className="overflow-hidden rounded-[38px] border border-white/70 bg-white">

                  <img
                    src={galleryImages[1]}
                    alt=""
                    className="w-full h-[390px] object-cover group-hover:scale-105 transition duration-700"
                  />

                </div>

              </div>

            </motion.div>

            {/* SMALL GRID */}
            <div className="grid grid-cols-2 gap-6">

              {[galleryImages[2], galleryImages[3]].map(
                (img, index) => (

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
                      duration: 1,
                      delay: 0.2 + index * 0.1,
                    }}
                    className="group"
                  >

                    <div className="relative p-[8px] rounded-[38px] bg-gradient-to-br from-[#e5d3a2] via-[#f8f3ea] to-[#d4b06a] shadow-[0_20px_60px_rgba(180,140,60,0.10)]">

                      <div className="overflow-hidden rounded-[30px] border border-white/70 bg-white">

                        <img
                          src={img}
                          alt=""
                          className="w-full h-[390px] object-cover group-hover:scale-105 transition duration-700"
                        />

                      </div>

                    </div>

                  </motion.div>

                )
              )}

            </div>

          </div>

        </div>

        {/* BOTTOM GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {galleryImages.slice(4).map((img, index) => (

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
                duration: 0.9,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="group"
            >

              {/* PREMIUM FRAME */}
              <div className="relative p-[8px] rounded-[38px] bg-gradient-to-br from-[#e5d3a2] via-[#f8f3ea] to-[#d4b06a] shadow-[0_20px_60px_rgba(180,140,60,0.10)]">

                {/* INNER FRAME */}
                <div className="overflow-hidden rounded-[30px] border border-white/70 bg-white">

                  <img
                    src={img}
                    alt=""
                    className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                  />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  )
}

export default EditorialGallery