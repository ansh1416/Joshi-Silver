import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'

import { useParams, Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Container from '../components/Container'

import { client, urlFor } from '../sanity/client'

import { singleProductQuery } from '../sanity/queries'

const ProductDetail = () => {
  const { slug } = useParams()

  const [product, setProduct] = useState(null)

  useEffect(() => {
    client
      .fetch(singleProductQuery, { slug })
      .then((res) => {
        setProduct(res)
      })
  }, [slug])

  if (!product) {
    return (
      <div className="pt-40 text-center text-5xl">
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f8f6f2]">

      <Navbar />

      <section className="pt-44 pb-28">

        <Container>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* IMAGE */}
            <motion.div
              initial={{
                opacity: 0,
                y: 80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
              }}
            >

              <div className="overflow-hidden rounded-[40px] bg-white border border-[#d8d2c8] shadow-[0_20px_60px_rgba(0,0,0,0.04)]">

                <img
                  src={urlFor(product.image).url()}
                  alt={product.title}
                  className="w-full h-[700px] object-cover hover:scale-105 transition duration-700"
                />

              </div>

            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
            >

              <p className="uppercase tracking-[0.3em] text-xs text-[#777] mb-6">
                {product.category}
              </p>

              <h1 className="text-6xl lg:text-7xl leading-[0.95] font-semibold mb-8">
                {product.title}
              </h1>

              <p className="text-3xl mb-10">
                ₹{product.price}
              </p>

              <p className="text-[#666] text-lg leading-relaxed max-w-xl mb-12">
                {product.description}
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-5">

                <motion.a
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
href={`https://wa.me/917877253802?text=${encodeURIComponent(
`✨ Joshi's Silver Inquiry ✨

Product: ${product.title}

Category: ${product.category}

Price: ₹${product.price}

Description:
${product.description}

━━━━━━━━━━━━━━━

Product Link:
${window.location.href}

━━━━━━━━━━━━━━━

Hello,
I'm interested in this silver piece.
Please share more details.`
)}`}
                  target="_blank"
                  className="px-8 py-4 rounded-full bg-[#1f1f1f] text-white tracking-[0.15em] text-sm"
                >
                  WhatsApp Inquiry
                </motion.a>

                <Link to="/custom-jewelry">

                  <motion.button
                    whileHover={{
                      scale: 1.03,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="px-8 py-4 rounded-full border border-[#d8d2c8] hover:bg-[#efe9df] transition tracking-[0.15em] text-sm"
                  >
                    Custom Order
                  </motion.button>

                </Link>

              </div>

            </motion.div>

          </div>

        </Container>

      </section>

    </div>
  )
}

export default ProductDetail