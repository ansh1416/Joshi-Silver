import { motion } from 'framer-motion'

import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'

import useSanityData from '../hooks/useSanityData'

import { productsQuery } from '../sanity/queries'

const NewArrivals = () => {
  const products = useSanityData(productsQuery)

  const newArrivals = products.filter(
    (item) => item.newArrival
  )

  return (
    <section className="py-36 overflow-hidden">

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
            duration: 0.8,
          }}
        >

          <SectionHeading
            subtitle="New Arrivals"
            title="Latest Silver Pieces"
          />

        </motion.div>

        {/* PRODUCTS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {newArrivals.map((product, index) => (

            <ProductCard
              key={product._id}
              product={product}
              index={index}
            />

          ))}

        </div>

      </Container>

    </section>
  )
}

export default NewArrivals