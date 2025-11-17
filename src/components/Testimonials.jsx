export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-8">Client Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
              <p className="text-blue-900 font-semibold">Construction Co. {i}</p>
              <p className="mt-2 text-sm text-blue-800/80">“Reliable supplier with fast delivery and solid quality. Perfect for our teams on site.”</p>
              <div className="mt-4 text-xs text-blue-700">Algiers • Facilities Manager</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
