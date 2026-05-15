import { motion } from 'framer-motion'

const MobileTopBar = () => {
  return (
    <div className="fixed top-4 left-0 w-full z-50 px-4 md:hidden">

      <motion.div
        initial={{
          opacity: 0,
          y: -30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="backdrop-blur-xl bg-[#f8f6f2]/90 border border-[#dcc79c] rounded-full px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
      >

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <h1 className="text-xl tracking-wide font-semibold">
            Joshi's Silver
          </h1>

          {/* WHATSAPP */}
          <motion.a
            whileTap={{
              scale: 0.95,
            }}
            href="https://wa.me/919999999999"
            target="_blank"
            className="px-4 py-2 rounded-full bg-[#1f1f1f] text-white text-[10px] tracking-[0.18em] uppercase"
          >
            WhatsApp
          </motion.a>

        </div>

      </motion.div>

    </div>
  )
}

export default MobileTopBar