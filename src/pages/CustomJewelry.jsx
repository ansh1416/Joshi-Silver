import { useState } from 'react'

import Navbar from '../components/Navbar'
import Container from '../components/Container'

const CustomJewelry = () => {
  const [form, setForm] = useState({
    name: '',
    jewelry: '',
    budget: '',
    details: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const whatsappMessage = `
Name: ${form.name}

Jewelry Type: ${form.jewelry}

Budget: ${form.budget}

Details: ${form.details}
`

  const whatsappURL = `https://wa.me/917877253802?text=${encodeURIComponent(
    whatsappMessage
  )}`

  return (
    <div className="min-h-screen bg-[#f8f6f2]">

      <Navbar />

      <section className="pt-44 pb-24">

        <Container>

          <div className="max-w-3xl mx-auto">

            <p className="uppercase tracking-[0.3em] text-sm text-[#777] mb-5">
              Personalized Luxury
            </p>

            <h1 className="text-6xl leading-none font-semibold mb-10">
              Create Your Custom Jewelry
            </h1>

            <div className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full p-5 rounded-2xl border border-[#d8d2c8] bg-white outline-none"
              />

              <input
                type="text"
                name="jewelry"
                placeholder="Jewelry Type"
                onChange={handleChange}
                className="w-full p-5 rounded-2xl border border-[#d8d2c8] bg-white outline-none"
              />

              <input
                type="text"
                name="budget"
                placeholder="Budget"
                onChange={handleChange}
                className="w-full p-5 rounded-2xl border border-[#d8d2c8] bg-white outline-none"
              />

              <textarea
                rows="6"
                name="details"
                placeholder="Describe your custom jewelry..."
                onChange={handleChange}
                className="w-full p-5 rounded-2xl border border-[#d8d2c8] bg-white outline-none resize-none"
              />

              <a
                href={whatsappURL}
                target="_blank"
                className="inline-block px-8 py-4 rounded-full bg-[#1f1f1f] text-white tracking-[0.15em] text-sm"
              >
                Order on WhatsApp
              </a>

            </div>

          </div>

        </Container>

      </section>

    </div>
  )
}

export default CustomJewelry