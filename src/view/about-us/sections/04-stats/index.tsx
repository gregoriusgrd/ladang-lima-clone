"use client";

export default function StatsSection() {
  return (
    <section className="font-raleway bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        {/* Left */}
        <div className="pt-4 pl-2">
          <h2 className="md:w-[300px] text-3xl md:text-4xl font-semibold text-gray-900 leading-relaxed">
            Gluten Free Factory in Indonesia.
          </h2>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-y-12 text-center">
          <div>
            <div className="text-6xl md:text-8xl font-light text-gray-900">11</div>
            <div className="mx-auto my-2 w-10 border-t-2 border-gray-400" />
            <p className="text-base text-gray-700">Years of experience</p>
          </div>

          <div>
            <div className="text-6xl md:text-8xl font-light text-gray-900">2013</div>
            <div className="mx-auto my-2 w-10 border-t-2 border-gray-400" />
            <p className="text-base text-gray-700">Established Since</p>
          </div>

          <div>
            <div className="text-6xl md:text-8xl font-light text-gray-900">2</div>
            <div className="mx-auto my-2 w-10 border-t-2 border-gray-400" />
            <p className="text-base text-gray-700">Factory Plant</p>
          </div>

          <div>
            <div className="text-6xl md:text-8xl font-light text-gray-900">250</div>
            <div className="mx-auto my-2 w-10 border-t-2 border-gray-400" />
            <p className="text-base text-gray-700">Team Member</p>
          </div>

          <div>
            <div className="text-6xl md:text-8xl font-light text-gray-900">5</div>
            <div className="mx-auto my-2 w-10 border-t-2 border-gray-400" />
            <p className="text-base text-gray-700">Regional Office</p>
          </div>

          <div>
            <div className="text-6xl md:text-8xl font-light text-gray-900">1500</div>
            <div className="mx-auto my-2 w-10 border-t-2 border-gray-400" />
            <p className="text-base text-gray-700">Loyal Reseller</p>
          </div>
        </div>
      </div>
    </section>
  );
}
