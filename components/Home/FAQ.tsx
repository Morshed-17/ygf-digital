import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Lottie from "lottie-react";
import { faqs } from "@/data/faq";
import FAQLottie from "./FAQLottie";

const FAQ = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-blue-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-extrabold text-white">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Most Asked Questions
          </span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 ">
          <div className="flex-1 flex justify-center">
            <FAQLottie />
          </div>
          <div className="flex-1">
            <Accordion type="single" collapsible className="space-y-6 w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={faq.value}>
                  <AccordionTrigger className="text-gray-300 text-left text-xl hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-400 text-left">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
