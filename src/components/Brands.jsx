const brands = ['Neo', 'VMax', 'Rangers', 'Magnum', 'Veriflex']

export default function Brands() {
  return (
    <section id="brands" className="bg-gradient-to-b from-blue-50/60 to-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="text-center text-sm font-semibold tracking-widest text-blue-700 uppercase">Brands we carry</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {brands.map((b) => (
              <div key={b} className="h-16 sm:h-20 grid place-items-center rounded-lg bg-blue-50 text-blue-900 font-extrabold text-lg sm:text-xl shadow-sm">
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
