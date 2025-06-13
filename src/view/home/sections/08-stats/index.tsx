"use client";

export default function StatsSection() {
  return (
    <section className="font-raleway bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-4">
        {/* Left */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
            Well-established and experienced in many fields.
          </h2>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-y-12 text-center">
          <div>
            <div className="text-5xl font-light text-gray-900">11</div>
            <div className="mx-auto my-2 w-10 border-t-2 border-gray-400" />
            <p className="text-base text-gray-700">Years of experience</p>
          </div>

          <div>
            <div className="text-5xl font-light text-gray-900">250</div>
            <div className="mx-auto my-2 w-10 border-t-2 border-gray-400" />
            <p className="text-base text-gray-700">Team members</p>
          </div>

          <div>
            <div className="text-5xl font-light text-gray-900">28</div>
            <div className="mx-auto my-2 w-10 border-t-2 border-gray-400" />
            <p className="text-base text-gray-700">Products SKU</p>
          </div>

          <div>
            <div className="text-5xl font-light text-gray-900">5</div>
            <div className="mx-auto my-2 w-10 border-t-2 border-gray-400" />
            <p className="text-base text-gray-700">Regional offices</p>
          </div>
        </div>
      </div>
    </section>
  );
}
