const SectionHeading = ({ subtitle, title }) => {
  return (
    <div className="mb-16">

      <p className="uppercase tracking-[0.3em] text-sm text-[#666] mb-4">
        {subtitle}
      </p>

      <h2 className="text-5xl lg:text-6xl leading-none font-semibold">
        {title}
      </h2>

    </div>
  )
}

export default SectionHeading