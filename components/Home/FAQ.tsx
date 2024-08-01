"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import animationData from "../../public/lotties/faq-animation.json";
import Lottie from "lottie-react";

const faqs = [
  {
    value: "item-1",
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    value: "item-2",
    question: "How can I customize the animation?",
    answer:
      "You can customize the animation by adjusting the props passed to the Lottie component, such as loop, autoplay, and style.",
  },
  {
    value: "item-3",
    question: "Can I use my own animation files?",
    answer:
      "Yes, you can use your own Lottie animation JSON files. Just place them in the public directory and import them into your component.",
  },
  {
    value: "item-4",
    question: "Does it support server-side rendering (SSR)?",
    answer:
      "Yes, Next.js supports server-side rendering, and you can use Lottie animations within your SSR components.",
  },
  {
    value: "item-5",
    question: "What is the best way to optimize Lottie animations?",
    answer:
      "To optimize Lottie animations, use compressed JSON files, minimize the number of layers, and optimize animation settings.",
  },
  {
    value: "item-6",
    question: "Are Lottie animations supported on all browsers?",
    answer:
      "Most modern browsers support Lottie animations. However, it’s a good practice to test across different browsers to ensure compatibility.",
  },
];

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
          <div className="flex-1 flex w-full">
            <Lottie
              animationData={animationData}
              loop={true} // Set to true to loop the animation
              autoplay={true} // Set to true to play the animation automatically
              className="max-w-[500px] max-h-[500px] " // Customize the size of the animation
            />
          </div>
          <div className="flex-1">
            <Accordion type="single" collapsible className="space-y-6 w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.value} value={faq.value}>
                  <AccordionTrigger className="text-gray-300 text-left text-xl">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-300">
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
