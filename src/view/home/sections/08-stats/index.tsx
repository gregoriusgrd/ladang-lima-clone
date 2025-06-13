"use client";

export default function StatsSection() {
  return (
    <section className="bg-white py-20 px-6 font-raleway">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2">

        {/* Left */}
        <div>
          <h2 className="mb-12 text-3xl text-gray-900 md:text-4xl">
            Well-established and experienced in many fields.
          </h2>
        </div>

        {/* Right */}
        <div className="grid grid-cols-1 gap-x-4 gap-y-12 md:grid-cols-2 text-center">
          <div>
            <div className="text-5xl font-light text-gray-900">11</div>
            <div className="mx-auto my-2 w-10 border border-gray-400"></div>
            <p className="text-gray-700">Years of experience</p>
          </div>

          <div>
            <div className="text-5xl font-light text-gray-900">250</div>
            <div className="mx-auto my-2 w-10 border-t-2 border-gray-400"></div>
            <p className="text-gray-700">Team members</p>
          </div>

          <div>
            <div className="text-5xl font-light text-gray-900">28</div>
            <div className="mx-auto my-2 w-10 border-t-2 border-gray-400"></div>
            <p className="text-gray-700">Products SKU</p>
          </div>

          <div>
            <div className="text-5xl font-light text-gray-900">5</div>
            <div className="mx-auto my-2 w-10 border-t-2 border-gray-400"></div>
            <p className="text-gray-700">Regional offices</p>
          </div>
        </div>
      </div>
    </section>
  );
}
