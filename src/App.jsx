import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import WhyUs from './components/WhyUs'
import FeaturedProducts from './components/FeaturedProducts'
import Brands from './components/Brands'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-blue-900">
      <Header />
      <Hero />
      <Categories />
      <WhyUs />
      <FeaturedProducts />
      <Brands />
      <Testimonials />
      <Contact />
      <footer className="border-t border-blue-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-800/80">© {new Date().getFullYear()} EURL Medjaldi Top. All rights reserved.</p>
          <div className="text-sm text-blue-800/80">Safety • Quality • Reliability</div>
        </div>
      </footer>
    </div>
  )
}

export default App
