
"use client";

export default function SendMessageSection() {
  return (
    <section className="font-raleway bg-white py-20 px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 items-start">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold ml-2">
            Offering an array of products in the fields <br /> of
            Gluten-Free and Healthy foods.
          </h3>
        </div>

        <form className="space-y-6 w-full max-w-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 w-full border-b border-gray-300 bg-transparent py-2 px-1 outline-none focus:border-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full border-b border-gray-300 bg-transparent py-2 px-1 outline-none focus:border-black"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1 w-full border-b border-gray-300 bg-transparent py-2 px-1 outline-none focus:border-black"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#e35f3c] hover:bg-[black] text-white py-3 px-8 transition cursor-pointer"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
