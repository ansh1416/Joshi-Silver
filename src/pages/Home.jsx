import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import FeaturedCollections from '../sections/FeaturedCollections'
import NewArrivals from '../sections/NewArrivals'
import AboutSection from '../sections/AboutSection'
import WhyChooseUs from '../sections/WhyChooseUs'
import EditorialGallery from '../sections/EditorialGallery'
import Testimonials from '../sections/Testimonials'
import CTASection from '../sections/CTASection'
import Footer from '../components/Footer'
import SectionDivider from '../components/SectionDivider'

const Home = () => {
  return (
    <div>

      <Navbar />

      <Hero />
      <SectionDivider />

      <FeaturedCollections />
      <SectionDivider />

      <NewArrivals />
      <SectionDivider />

      <AboutSection />
      <SectionDivider />

      <WhyChooseUs />
      <SectionDivider />

      <EditorialGallery />
      <SectionDivider />

      <Testimonials />
      <SectionDivider />

      <CTASection />

      <Footer />

    </div>
  )
}

export default Home