import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-50 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <span className="inline-block text-xs tracking-widest font-semibold uppercase text-blue-700 bg-blue-50 px-3 py-1 rounded" style={{letterSpacing: '0.15em'}}>Wholesale • Retail • B2B</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight text-blue-900" style={{fontFamily: 'var(--font-manrope)'}}>
            Equipment & Professional Safety Gear
          </h1>
          <p className="mt-4 text-blue-700/90 text-lg">
            Wholesale & retail – High-quality protective materials for all professionals.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#products" className="px-6 py-3 rounded-md bg-[#004AAD] text-white shadow hover:bg-blue-800 transition">Browse Products</a>
            <a href="#contact" className="px-6 py-3 rounded-md border border-blue-200 text-[#004AAD] hover:bg-blue-50 transition">Contact Us</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-blue-800/80">
            <div className="flex items-center gap-2">
              <span className="inline-block h-6 w-6 rounded bg-blue-100" style={{maskImage:'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)', WebkitMaskImage:'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)', maskSize:'contain', WebkitMaskSize:'contain', maskRepeat:'no-repeat', WebkitMaskRepeat:'no-repeat', maskPosition:'center', WebkitMaskPosition:'center'}}></span>
              Helmets
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-6 w-6 rounded bg-blue-100" style={{maskImage:'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)', WebkitMaskImage:'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)', maskSize:'contain', WebkitMaskSize:'contain', maskRepeat:'no-repeat', WebkitMaskRepeat:'no-repeat', maskPosition:'center', WebkitMaskPosition:'center'}}></span>
              Vests
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-6 w-6 rounded bg-blue-100" style={{maskImage:'url(https://img.icons8.com/ios-filled/50/000000/protective-glasses.png)', WebkitMaskImage:'url(https://img.icons8.com/ios-filled/50/000000/protective-glasses.png)', maskSize:'contain', WebkitMaskSize:'contain', maskRepeat:'no-repeat', WebkitMaskRepeat:'no-repeat', maskPosition:'center', WebkitMaskPosition:'center'}}></span>
              Gloves & Glasses
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative h-[420px] sm:h-[520px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl ring-1 ring-blue-100 bg-white">
            <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
