import Container from './Container'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const navLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Collections',
      path: '/collections',
    },
      {
      name: 'Custom',
      path: '/custom-jewelry',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ]

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed top-5 left-0 w-full z-50 hidden md:block"
    >
      <Container>

        <div className="bg-white/85 border border-[#d8d2c8] rounded-full px-8 py-4 flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm">

          {/* LOGO */}
          <motion.h1
            transition={{ duration: 0.3 }}
            className="text-3xl tracking-wide font-semibold cursor-pointer"
          >
            Joshi's Silver
          </motion.h1>

          {/* NAV LINKS */}
          <div className="flex gap-10 text-[15px] tracking-wide">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `group relative pb-1 transition duration-300 ${
                    isActive
                      ? 'text-black'
                      : 'text-[#555] hover:text-black'
                  }`
                }
              >
                {({ isActive }) => (
                  <motion.div
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                  >
                    {link.name}

                    <span
                      className={`absolute left-0 -bottom-0.5 h-[1px] bg-black transition-all duration-300 ${
                        isActive
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </motion.div>
                )}
              </NavLink>
            ))}

          </div>

          {/* WHATSAPP BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.04,
              y: -1,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
            }}
            className="px-6 py-2.5 rounded-full bg-[#1f1f1f] text-white text-sm tracking-[0.12em] border border-[#1f1f1f] hover:bg-[#efe9df] hover:text-[#1f1f1f] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
          >
            WhatsApp
          </motion.button>

        </div>

      </Container>
    </motion.div>
  )
}

export default Navbar