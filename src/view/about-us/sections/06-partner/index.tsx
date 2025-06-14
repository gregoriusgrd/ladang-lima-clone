import Image from "next/image";

export default function PartnerSection() {
  return (
    <section className="font-raleway bg-white px-12 pb-16">
      <div className="mx-auto max-w-7xl pl-2">
        <h2 className="mb-6 text-3xl md:text-4xl font-semibold text-gray-900 leading-relaxed">
          Available At Our Retail Partners
        </h2>
      </div>

      <div className="grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 md:grid-cols-4">
        <div className="cursor-pointer">
          <Image
            src="/about-us/partner/1-Ranch-Market.png"
            alt="Ranch Market Logo"
            width={180}
            height={80}
            className="h-auto max-w-[160px] object-contain"
          />
        </div>

        <div className="cursor-pointer">
          <Image
            src="/about-us/partner/2-Farmers-Market.png"
            alt="Farmers Market Logo"
            width={180}
            height={80}
            className="h-auto max-w-[160px] object-contain"
          />
        </div>

        <div className="cursor-pointer">
          <Image
            src="/about-us/partner/3-Grand-Lucky-Superstore.png"
            alt="Grand Lucky Logo"
            width={180}
            height={80}
            className="h-auto max-w-[160px] object-contain"
          />
        </div>

        <div className="cursor-pointer">
          <Image
            src="/about-us/partner/4-Pepito-Supermarket.png"
            alt="Pepito Supermarket Logo"
            width={180}
            height={80}
            className="h-auto max-w-[160px] object-contain"
          />
        </div>

        <div className="cursor-pointer">
          <Image
            src="/about-us/partner/5-Hokky-Store.png"
            alt="Hokky Store Logo"
            width={180}
            height={80}
            className="h-auto max-w-[160px] object-contain"
          />
        </div>

        <div className="cursor-pointer">
          <Image
            src="/about-us/partner/6-Diamond-Supermarket.png"
            alt="Diamond Supermarket Logo"
            width={180}
            height={80}
            className="h-auto max-w-[160px] object-contain"
          />
        </div>

        <div className="cursor-pointer">
          <Image
            src="/about-us/partner/7-AEONSupermarket.png"
            alt="AEON Supermarket Logo"
            width={180}
            height={80}
            className="h-auto max-w-[160px] object-contain"
          />
        </div>

        <div className="cursor-pointer">
          <Image
            src="/about-us/partner/8-BORMA-Toserba.png"
            alt="Borma Toserba Logo"
            width={180}
            height={80}
            className="h-auto max-w-[160px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
