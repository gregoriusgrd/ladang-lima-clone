"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="font-raleway bg-white px-6 pb-6">
      <div className="mx-auto max-w-7xl pl-8">
        {/* Accordion */}
        <div>
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">
            Frequently Asked Questions (FAQ)
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="cursor-pointer md:text-base">
                What products does Ladang Lima offer for export?
              </AccordionTrigger>
              <AccordionContent className="md:text-base">
                <p>
                  Ladang Lima offers a range of gluten-free products made from
                  cassava flour, including:
                </p>
                <ul>
                  <li>- Pasta varieties (Fettuccine, Spaghetti, etc.)</li>
                  <li>- Cookies</li>
                  <li>- Flour products</li>
                  <li>- Ready-to-cook mixes</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="cursor-pointer md:text-base">
                Which countries can I import Ladang Lima products to?
              </AccordionTrigger>
              <AccordionContent className="md:text-base">
                <p>
                  Ladang Lima products can be exported to various countries,
                  subject to:
                </p>
                <ul>
                  <li>- Meeting local food import regulations</li>
                  <li>- Obtaining necessary certifications</li>
                  <li>- Compliance with labeling requirements</li>
                </ul>
                <p>All exports must comply with both Indonesian export regulations and destination country import requirements.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="cursor-pointer md:text-base">
                What certifications does Ladang Lima have?
              </AccordionTrigger>
              <AccordionContent className="md:text-base">
                <p>
Ladang Lima products are certified with:
                </p>
                <ul>
                  <li>- Halal certification</li>
                  <li>- Food safety certification (HACCP)</li>
                  <li>- Good Manufacturing Practice (GMP)</li>
                  <li>- FDA registration</li>
                  <li>- ISO 22000:2018</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="cursor-pointer md:text-base">
                What documents are required for export?
              </AccordionTrigger>
              <AccordionContent className="md:text-base">
                <p>
Required documentation includes:
                </p>
                <ul>
                  <li>1. Commercial Invoice</li>
                  <li>2. Packing List</li>
                  <li>3. Bill of Lading or Airway Bill</li>
                  <li>4. Certificate of Origin</li>
                  <li>5. Health/Sanitary Certificate</li>
                  <li>6. Product Analysis Certificate</li>
                  <li>7. Export Declaration Form</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="cursor-pointer md:text-base">
                What is the minimum order quantity (MOQ)?
              </AccordionTrigger>
              <AccordionContent className="md:text-base">
                <p>
The standard MOQ varies by product:
                </p>
                <ul>
                  <li>- Container loads: 20ft or 40ft containers</li>
                  <li>- LCL (Less than Container Load): Minimum 1 pallet</li>
                </ul>
                <p>Please contact our export team for specific product MOQs.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="cursor-pointer md:text-base">
                What are the payment terms?
              </AccordionTrigger>
              <AccordionContent className="md:text-base">
                <p>
We accept the following payment methods:
                </p>
                <ul>
                  <li>- Letter of Credit (L/C)</li>
                  <li>- Telegraphic Transfer (T/T)</li>
                  <li>- 30% advance payment, 70% before shipment</li>
                </ul>
                <p>Custom payment terms can be discussed for long-term partnerships.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="cursor-pointer md:text-base">
                What is the lead time for orders?
              </AccordionTrigger>
              <AccordionContent className="md:text-base">
                <p>
Typical lead times are:
                </p>
                <ul>
                  <li>- Sample orders: 1-2 weeks</li>
                  <li>- Regular orders: 3-4 weeks</li>
                  <li>- Large volume orders: 4-6 weeks</li>
                </ul>
                <p>Lead times may vary based on order volume and destination.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="cursor-pointer md:text-base">
                What is the shelf life of Ladang Lima products?
              </AccordionTrigger>
              <AccordionContent className="md:text-base">
                <p>
Shelf life varies by product category:
                </p>
                <ul>
                  <li>- Dry pasta: 18 months</li>
                  <li>- Cookies and biscuits: 15 months</li>
                  <li>- Flour products: 18 months</li>
                </ul>
                <p>Products must be stored in cool, dry conditions.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="cursor-pointer md:text-base">
                Do products require special storage conditions?
              </AccordionTrigger>
              <AccordionContent className="md:text-base">
                <p>
General storage requirements:
                </p>
                <ul>
                  <li>- Keep in cool, dry place</li>
                  <li>- Temperature: 15-25°C</li>
                  <li>- Humidity: Below 75%</li>
                  <li>- Away from direct sunlight</li>
                  <li>- Original packaging must remain sealed</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="cursor-pointer md:text-base">
                How does Ladang Lima ensure product quality during export?
              </AccordionTrigger>
              <AccordionContent className="md:text-base">
                <p>
We maintain quality through:
                </p>
                <ul>
                  <li>- Pre-shipment inspection</li>
                  <li>- Temperature monitoring during transport</li>
                  <li>- Moisture-controlled packaging</li>
                  <li>- Quality assurance documentation</li>
                  <li>- Third-party testing when required</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
              <AccordionTrigger className="cursor-pointer md:text-base">
                What are the labeling requirements?
              </AccordionTrigger>
              <AccordionContent className="md:text-base">
                <p>
All export products include:
                </p>
                <ul>
                  <li>- Product name and description</li>
                  <li>- Net weight/volume</li>
                  <li>- Ingredients list</li>
                  <li>- Nutritional information</li>
                  <li>- Manufacturing/expiry dates</li>
                  <li>- Batch number</li>
                  <li>- Country of origin</li>
                  <li>- Storage instructions</li>
                </ul>
                <p>Additional labeling requirements vary by destination country.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
              <AccordionTrigger className="cursor-pointer md:text-base">
                How can I request samples?
              </AccordionTrigger>
              <AccordionContent className="md:text-base">
                <p>
To request samples:
                </p>
                <ul>
                  <li>1. Email export@ladanglima.com</li>
                  <li>2. Provide company details and import license</li>
                  <li>3. Specify products of interest</li>
                  <li>4. Indicate destination country</li>
                </ul>
                <p>Sample costs and shipping fees may apply.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13">
              <AccordionTrigger className="cursor-pointer md:text-base">
                Who do I contact for export inquiries?
              </AccordionTrigger>
              <AccordionContent className="md:text-base">
                <p>
Contact our export team:
                </p>
                <ul>
                  <li>- Email: export@ladanglima.com</li>
                  <li>- Phone: (+62) 813 9442 9393</li>
                  <li>- Website: www.ladanglima.com</li>
                </ul>
                <p>Business hours: Monday-Friday, 9:00-17:00 (GMT+7)</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14">
              <AccordionTrigger className="cursor-pointer md:text-base">
                How is pricing calculated for exports?
              </AccordionTrigger>
              <AccordionContent className="md:text-base">
                <p>
Export pricing considers:
                </p>
                <ul>
                  <li>- Order volume</li>
                  <li>- Destination country</li>
                  <li>- Shipping method</li>
                  <li>- Current raw material costs</li>
                  <li>- Exchange rates</li>
                </ul>
                <p>Contact our export team for a detailed quotation.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-15">
              <AccordionTrigger className="cursor-pointer md:text-base">
                Which shipping methods are available?
              </AccordionTrigger>
              <AccordionContent className="md:text-base">
                <p>
We offer:
                </p>
                <ul>
                  <li>- Sea freight (FCL/LCL)</li>
                  <li>- Air freight</li>
                  <li>- Door-to-door service</li>
                  <li>- Port-to-port service</li>
                </ul>
                <p>Shipping method recommendations based on order volume and urgency.</p>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </section>
  );
}
