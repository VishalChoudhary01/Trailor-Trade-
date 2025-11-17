export default function MotorcycleMosaic() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="px-8 py-12">
        <p className="text-sm font-semibold text-gray-600 mb-6">NO LIMITS</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              LOREM IPSUM DOLOR SIT AMET
            </h1>
            <p className="text-gray-700 text-lg mb-8 max-w-lg">
              Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded flex items-center gap-2 transition-colors">
              Loerum Ipsum
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-end">
            <img
              src="https://images.unsplash.com/photo-1558981852-426c6c22a060?w=400&h=500&fit=crop"
              alt="Motorcyclists riding"
              className="w-full max-w-sm h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">
          {/* Bottom Left Small Image */}
          <div className="col-span-3 row-span-2">
            <img
              src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&h=400&fit=crop"
              alt="Urban motorcyclists"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Bottom Center Large Image */}
          <div className="col-span-6 row-span-2">
            <img
              src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=400&fit=crop"
              alt="Motorcycle group ride"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Top Right Small Images */}
          <div className="col-span-3 row-span-1">
            <img
              src="https://images.unsplash.com/photo-1609371433480-2530a27c0d5e?w=400&h=200&fit=crop"
              alt="Night riders"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="col-span-3 row-span-1">
            <img
              src="https://images.unsplash.com/photo-1623033684847-5c4b6c3b0c1c?w=400&h=200&fit=crop"
              alt="City motorcycle riders"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Large Sunset Image */}
          <div className="col-span-9 row-span-3">
            <img
              src="https://images.unsplash.com/photo-1591214658676-45b4c6b99636?w=1200&h=600&fit=crop"
              alt="Sunset motorcycle ride"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Bottom Right Small Images */}
          <div className="col-span-3 row-span-1">
            <img
              src="https://images.unsplash.com/photo-1558980664-769d59546b3d?w=400&h=200&fit=crop"
              alt="Parked motorcycles"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="col-span-3 row-span-2">
            <img
              src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=400&fit=crop"
              alt="Motorcycle detail"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}