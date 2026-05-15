import { motion } from 'framer-motion'

const SectionDivider = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scaleX: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scaleX: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
      }}
      className="py-4"
    >

      <div className=" mx-auto px-5 md:px-8">

        <div className="relative h-[1px] overflow-hidden">

          {/* MAIN LINE */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c0a368] to-transparent" />

          {/* SOFT GLOW */}
          <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-[#e5d3a2]/40 to-transparent" />

        </div>

      </div>

    </motion.div>
  )
}

export default SectionDivider