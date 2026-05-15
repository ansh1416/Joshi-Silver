import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'

const collections = [
  {
    title: 'Rings',
    slug: 'rings',
    image:
      'https://paksha.in/cdn/shop/files/PMCZ0018FW_3a2dab96-7ea1-49f6-81c8-e3068dbbe78c.jpg?v=1745300344&width=533',
  },

  {
    title: 'Earrings',
    slug: 'earrings',
    image:
      'https://karatcart.com/cdn/shop/files/partnerimages_2F24fdbe88_33027737_1.jpg?v=1726052249',
  },

  {
    title: 'Chains',
    slug: 'chains',
    image:
      'https://modernseries.in/cdn/shop/files/IMG_COM_20240212_1416_26_2452.jpg?v=1707821031',
  },

  {
    title: 'God Statues',
    slug: 'god-statues',
    image:
      'https://servdharm.com/cdn/shop/files/SilverPlatedShrinathJiIdol_1_800x.jpg?v=1770617565',
  },

    {
    title: 'Silver Cows',
    slug: 'silver-cows',
    image:
      'https://rankajewellers.in/cdn/shop/files/MUB15154.webp?v=1712141235',
  },


  {
    title: 'Mini Divine Jewelry',
    slug: 'mini-divine-jewelry',
    image:
      'https://m.media-amazon.com/images/I/91pE1Sje4yL._AC_UY1100_.jpg',
  },

    {
    title: 'Pichwai Art',
    slug: 'pichwai-art',
    image:
      'https://lifencolors.in/cdn/shop/files/Pichwai-Shrinathji-Yellow-001.webp?v=1767686274',
  },

  {
    title: 'Custom Silver',
    slug: 'custom-silver',
    image:
      'https://libasaa.com/cdn/shop/files/14EA-301-1001158-2.jpg?v=1758180162',
  },
]

const FeaturedCollections = () => {
  return (
    <section className="py-32 bg-[#efe9df] overflow-hidden">

      <Container>

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <SectionHeading
            subtitle="Collections"
            title="Curated Silver Collections"
          />

        </motion.div>

                {/* MOBILE SCROLL INDICATOR */}
<motion.div
  initial={{
    
    x: -10,
  }}
  animate={{
    
    x: [0, 10, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
  }}
  className="flex items-center gap-3 mb-6 md:hidden"
>

  <span className="text-[13px] uppercase tracking-[0.25em] text-[#111]">
    Swipe
  </span>

  <div className="w-10 h-[1px] bg-[#111]" />

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4 text-[#111]"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>

</motion.div>



        {/* HORIZONTAL SCROLL */}
        <div className="overflow-x-auto scrollbar-hide">

          <div className="flex gap-8 w-max pr-10">

            {collections.map((item, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 100,
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
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                }}
                className="group min-w-[240px] md:min-w-[340px]"
              >

                <Link to={`/collections/${item.slug}`}>

                

                  {/* IMAGE */}
                  <div className="overflow-hidden rounded-[34px] mb-5 bg-white border border-[#d8d2c8] shadow-[0_10px_40px_rgba(0,0,0,0.03)]">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[300px] md:h-[420px] w-full object-cover group-hover:scale-105 transition duration-700"
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="flex items-center justify-between gap-6">

                    <h3 className="text-2xl md:text-3xl font-semibold whitespace-nowrap">
                      {item.title}
                    </h3>

                    <div className="relative overflow-hidden">

                      <span className="text-sm tracking-[0.2em] uppercase text-[#666] group-hover:text-black transition duration-300 whitespace-nowrap">
                        Explore
                      </span>

                      <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-500" />

                    </div>

                  </div>

                </Link>

              </motion.div>

            ))}

            

          </div>

        </div>

      </Container>
      

    </section>
    
  )
}

export default FeaturedCollections