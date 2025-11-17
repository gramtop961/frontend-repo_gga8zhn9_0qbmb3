import { Menu, Shield } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-[#004AAD] text-white grid place-items-center shadow-sm">
              <Shield className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-sm tracking-wider text-blue-800 uppercase">EURL Medjaldi Top</p>
              <p className="text-xs text-blue-600">Workwear & Safety Equipment</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-blue-900">
            <a href="#categories" className="hover:text-[#004AAD]">Categories</a>
            <a href="#why" className="hover:text-[#004AAD]">Why Us</a>
            <a href="#products" className="hover:text-[#004AAD]">Products</a>
            <a href="#brands" className="hover:text-[#004AAD]">Brands</a>
            <a href="#testimonials" className="hover:text-[#004AAD]">Testimonials</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-[#004AAD] text-white hover:bg-blue-800 transition">Contact</a>
          </nav>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-blue-100 text-blue-800">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
