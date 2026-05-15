import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#efe9df] pt-24 pb-36 md:pb-16 border-t border-[#dcc79c] overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* TOP */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
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

            <h2 className="text-5xl md:text-6xl leading-none font-semibold mb-8">
              Joshi's Silver
            </h2>

            <p className="text-[#5f584e] text-lg leading-relaxed max-w-xl">
              Handcrafted silver jewelry and divine silver art
              designed with timeless elegance, artisan precision,
              and modern luxury craftsmanship.
            </p>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
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
              delay: 0.1,
            }}
            className="grid grid-cols-2 gap-10 lg:justify-self-end"
          >

            {/* NAVIGATION */}
            <div>

              <p className="uppercase tracking-[0.25em] text-[11px] text-[#8b7552] mb-6">
                Navigation
              </p>

              <div className="flex flex-col gap-4 text-lg">

                <Link
                  to="/"
                  className="hover:translate-x-1 transition duration-300"
                >
                  Home
                </Link>

                <Link
                  to="/collections/rings"
                  className="hover:translate-x-1 transition duration-300"
                >
                  Collections
                </Link>

                <Link
                  to="/custom-jewelry"
                  className="hover:translate-x-1 transition duration-300"
                >
                  Custom Order
                </Link>

              </div>

            </div>

            {/* CONTACT */}
            <div>

              <p className="uppercase tracking-[0.25em] text-[11px] text-[#8b7552] mb-6">
                Contact
              </p>

              <div className="flex flex-col gap-4 text-lg">

                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  className="hover:translate-x-1 transition duration-300"
                >
                  WhatsApp
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="hover:translate-x-1 transition duration-300"
                >
                  Instagram
                </a>

              </div>

            </div>

          </motion.div>

        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-[#d9ccb6] flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm tracking-[0.12em] uppercase text-[#8b7d6b]">
            © 2025 Joshi's Silver
          </p>

          <p className="text-sm text-[#8b7d6b]">
            Crafted with timeless elegance.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer