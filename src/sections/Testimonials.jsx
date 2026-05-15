import { motion } from 'framer-motion'

import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import TestimonialCard from '../components/TestimonialCard'

const testimonials = [
  {
    name: 'Aarav Mehta',
    text:
      'The craftsmanship feels truly premium. Every detail reflects elegance and authenticity.',
  },

  {
    name: 'Priyanshi Shah',
    text:
      'Beautiful handcrafted silver pieces with a timeless luxury aesthetic.',
  },

  {
    name: 'Rohan Joshi',
    text:
      'The custom silver experience felt personal, refined, and incredibly premium.',
  },

  {
    name: 'Devansh Patel',
    text:
      'The silver detailing and finishing quality exceeded my expectations completely.',
  },

  {
    name: 'Ishita Jain',
    text:
      'Joshi’s Silver feels like modern luxury rooted deeply in Indian craftsmanship.',
  },

  {
    name: 'Krish Mehra',
    text:
      'The custom jewelry experience felt personal, elegant, and highly premium.',
  },
]

const Testimonials = () => {
  return (
    <section className="py-40 overflow-hidden bg-[#f8f6f2]">

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
            subtitle="Testimonials"
            title="Trusted by Silver Collectors"
          />

        </motion.div>

      </Container>

      {/* MARQUEE */}
      <div className="relative mt-16">

        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 md:w-28 bg-gradient-to-r from-[#f8f6f2] to-transparent pointer-events-none" />

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 z-10 h-full w-20 md:w-28 bg-gradient-to-l from-[#f8f6f2] to-transparent pointer-events-none" />

        <motion.div
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 18,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex gap-5 md:gap-8 w-max"
        >

          {[...testimonials, ...testimonials].map(
            (item, index) => (

              <div
                key={index}
                className="shrink-0"
              >

                <TestimonialCard item={item} />

              </div>

            )
          )}

        </motion.div>

      </div>

    </section>
  )
}

export default Testimonials