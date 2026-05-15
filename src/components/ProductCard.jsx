import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { urlFor } from '../sanity/client'

const ProductCard = ({ product, index }) => {
  return (
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -6,
      }}
      className="group"
    >

      <div className="bg-white border border-[#d8d2c8] rounded-[36px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.03)]">

        {/* IMAGE */}
        <div className="overflow-hidden">

          <img
            src={urlFor(product.image).url()}
            alt={product.title}
            className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
          />

        </div>

        {/* CONTENT */}
        <div className="p-7">

          <p className="uppercase tracking-[0.25em] text-[11px] text-[#777] mb-4">
            {product.category}
          </p>

          <div className="flex items-start justify-between gap-6 mb-8">

            <h3 className="text-3xl leading-none font-semibold max-w-[220px]">
              {product.title}
            </h3>

            <p className="text-xl whitespace-nowrap">
              ₹{product.price}
            </p>

          </div>

          {/* BUTTON ONLY CLICKABLE */}
          <Link
            to={`/collections/${product.category}/${product.slug}`}
          >

            <button className="group/button relative overflow-hidden w-full py-4 rounded-full border border-[#d8d2c8] tracking-[0.18em] text-sm uppercase">

              <span className="relative z-10 group-hover/button:text-white transition duration-500">
                View Piece
              </span>

              <div className="absolute left-0 top-0 w-0 h-full bg-[#1f1f1f] group-hover/button:w-full transition-all duration-500" />

            </button>

          </Link>

        </div>

      </div>

    </motion.div>
  )
}

export default ProductCard