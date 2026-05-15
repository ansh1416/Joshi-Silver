import { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'

import Navbar from '../components/Navbar'
import MobileTopBar from '../components/MobileTopBar'
import Container from '../components/Container'
import ProductCard from '../components/ProductCard'

import useSanityData from '../hooks/useSanityData'

import { productsQuery } from '../sanity/queries'

const categories = [
  'All',
  'rings',
  'chains',
  'earrings',
  'god-statues',
  'silver-cows',
  'pichwai-art',
]

const Collections = () => {
const { category } = useParams()

const [activeCategory, setActiveCategory] =
  useState(category || 'All')

  const products = useSanityData(productsQuery)

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter(
          (item) =>
            item.category === activeCategory
        )

  return (
    <div className="min-h-screen bg-[#f8f6f2] overflow-hidden">

      <Navbar />
      <MobileTopBar />

      {/* HERO */}
      <section className="pt-40 pb-20">

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
              duration: 0.9,
            }}
            className="max-w-5xl"
          >

            <p className="uppercase tracking-[0.35em] text-[11px] text-[#8b7552] mb-7">
              Luxury Collections
            </p>

            <h1 className="text-6xl md:text-8xl leading-[0.92] font-semibold mb-8">
              Crafted in Silver,
              Designed with Elegance
            </h1>

            <p className="text-[#5f584e] text-lg md:text-xl leading-relaxed max-w-2xl">
              Explore handcrafted silver jewelry,
              divine collectibles, and timeless
              artisan creations curated with modern luxury.
            </p>

          </motion.div>

        </Container>

      </section>

      {/* FILTERS */}
      <section className="pb-14">

        <Container>

          <div className="flex gap-4 overflow-x-auto scrollbar-hide">

            {categories.map((item, index) => (

              <button
                key={index}
                onClick={() =>
                  setActiveCategory(item)
                }
                className={`px-7 py-3 rounded-full border whitespace-nowrap transition duration-300 text-sm tracking-[0.15em] uppercase ${
                  activeCategory === item
                    ? 'bg-[#1f1f1f] text-white border-[#1f1f1f]'
                    : 'bg-white border-[#dcc79c] hover:bg-[#efe9df]'
                }`}
              >
                {item.replace('-', ' ')}
              </button>

            ))}

          </div>

        </Container>

      </section>

      {/* PRODUCTS */}
      <section className="pb-32">

        <Container>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredProducts.map((product, index) => (

              <ProductCard
                key={product._id}
                product={product}
                index={index}
              />

            ))}

          </div>

        </Container>

      </section>

    </div>
  )
}

export default Collections