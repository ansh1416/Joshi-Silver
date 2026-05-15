import { motion } from 'framer-motion'
import {
  House,
  Grid2X2,
  Sparkles,
  MessageCircle,
} from 'lucide-react'

import { NavLink } from 'react-router-dom'

const MobileBottomNav = () => {
  const navItems = [
    {
      name: 'Home',
      path: '/',
      icon: House,
    },

    {
      name: 'Collections',
      path: '/collections',
      icon: Grid2X2,
    },

    {
      name: 'Custom',
      path: '/custom-jewelry',
      icon: Sparkles,
    },

    {
      name: 'Contact',
      path: '/contact',
      icon: MessageCircle,
    },

  ]

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 md:hidden w-[92%] max-w-md">

      {/* NAV CONTAINER */}
      <div className="backdrop-blur-xl bg-[#f8f6f2]/90 border border-[#dcc79c] rounded-full px-2 py-2 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">

        <div className="grid grid-cols-4 items-center">

          {navItems.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className="relative"
              >
                {({ isActive }) => (
                  <motion.div
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="flex flex-col items-center justify-center gap-1 py-2"
                  >

                    {/* ICON */}
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className={`transition duration-300 ${
                        isActive
                          ? 'text-[#1f1f1f]'
                          : 'text-[#8b7d6b]'
                      }`}
                    />

                    {/* LABEL */}
                    <span
                      className={`text-[10px] tracking-[0.12em] uppercase transition duration-300 ${
                        isActive
                          ? 'text-[#1f1f1f]'
                          : 'text-[#8b7d6b]'
                      }`}
                    >
                      {item.name}
                    </span>

                    {/* ACTIVE DOT */}
                    {isActive && (
                      <motion.div
                        layoutId="activeDot"
                        className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-[#c6a769]"
                      />
                    )}

                  </motion.div>
                )}
              </NavLink>
            )
          })}

        </div>

      </div>

    </div>
  )
}

export default MobileBottomNav