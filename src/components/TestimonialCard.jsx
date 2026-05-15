import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const TestimonialCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        w-[260px]
        sm:w-[320px]
        lg:w-[420px]
        shrink-0
      "
    >

      <div className="
          h-[420px]
            md:h-[460px]
            flex
            flex-col
            justify-between

        bg-gradient-to-b from-[#fffaf6] to-[#f3eadb]
        border border-[#d4b06a]
        rounded-[32px]
        md:rounded-[38px]
        p-6 md:p-10
        shadow-[0_12px_40px_rgba(180,140,60,0.10)]">

        {/* STARS */}
        <div className="flex items-center gap-1 mb-6 text-[#c6a769]">

          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              fill="currentColor"
              strokeWidth={1.5}
            />
          ))}

        </div>

        {/* QUOTE */}
        <div className="text-5xl md:text-6xl leading-none mb-6 text-[#cdbb9b]">
          ”
        </div>

        {/* TEXT */}
        <p className="text-[#4f4a42] text-base md:text-xl leading-relaxed mb-10 md:mb-14">
          {item.text}
        </p>

        {/* USER */}
        <div>

          <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-[#1f1f1f]">
            {item.name}
          </h3>

          <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] text-[#8b7d6b]">
            Verified Client
          </p>

        </div>

      </div>

    </motion.div>
  )
}

export default TestimonialCard