import { motion } from 'framer-motion'

import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'

const features = [
  {
    title: 'Handcrafted Silver',
    description:
      'Every piece is carefully handcrafted with timeless artisan detailing.',
  },

  {
    title: 'Premium Quality',
    description:
      'Crafted using authentic sterling silver with refined finishing.',
  },

  {
    title: 'Trusted Craftsmanship',
    description:
      'A blend of heritage artistry and modern luxury precision.',
  },

  {
    title: 'Personalized Designs',
    description:
      'Custom silver creations tailored to your personal elegance.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="py-40 overflow-hidden">

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
            subtitle="Why Choose Us"
            title="Luxury Rooted in Craftsmanship"
          />

        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (

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
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="group"
            >

              <div className="h-full rounded-[34px] border border-[#d8d2c8] bg-white p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">

                {/* NUMBER */}
                <div className="w-14 h-14 rounded-full border border-[#d8d2c8] flex items-center justify-center mb-10 text-sm tracking-[0.2em]">

                  0{index + 1}

                </div>

                {/* TITLE */}
                <h3 className="text-4xl leading-none font-semibold mb-6">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="text-[#666] leading-relaxed text-lg">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  )
}

export default WhyChooseUs