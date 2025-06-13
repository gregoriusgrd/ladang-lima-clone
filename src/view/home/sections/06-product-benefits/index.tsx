"use client"

import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function BenefitSection() {
  return (
    <section className="bg-white px-6 pb-6 font-raleway">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left: Image */}
        <div className="flex justify-center">
          <Image
            src="/home/product-benefits/Image-Gluten-Free.png"
            alt="Why Gluten Free"
            width={400}
            height={400}
            className="h-auto max-w-full"
          />
        </div>

        {/* Right: Accordion */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Why Gluten Free is a Good Choice
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="cursor-pointer">Reduce the Risk of Inflammation</AccordionTrigger>
              <AccordionContent>
                Some of you usually feel bloated and uncomfortable after consuming foods containing gluten.
                By avoiding gluten, you can reduce the risk of inflammation and your body will feel lighter and more comfortable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="cursor-pointer">Better Digestion</AccordionTrigger>
              <AccordionContent>
                Gluten-free foods are generally easier to digest. Good digestion can help your body absorb nutrients more effectively,
                supporting health and a stable weight.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="cursor-pointer">Reduce Excessive Snacking</AccordionTrigger>
              <AccordionContent>
                Gluten-free foods tend to be more satisfying and keep you fuller for longer,
                so you're less tempted to over-snack and gain weight.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="cursor-pointer">Mindful Eating</AccordionTrigger>
              <AccordionContent>
                A gluten-free diet usually makes you more mindful about what you eat.
                This can lead to healthier food choices and better portion control.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="cursor-pointer">Healthier Choices</AccordionTrigger>
              <AccordionContent>
                A gluten-free diet will lead you to consume more real, minimally processed foods,
                such as fruits, vegetables, lean proteins, and healthy fats.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
