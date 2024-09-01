import { Check, DollarSign, Lock } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className=" sm:py-16 bg-gradient-to-br from-gray-900 to-blue-900 py-20">
      <div className="container px-4  lg:px-8">
        <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">
                Why
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                Choose us?
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                We've built an API that allows you to scale your podcast
                production workflow.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative">
                  <dt className=" font-semibold  flex items-center gap-2 text-gray-300">
                    <Check className="text-indigo-400" />
                    <p>Template driven</p>
                  </dt>
                  <p className="inline text-gray-400">
                    Inspired by Sendgrid, Mailchimp, and Postmark, we allow you
                    to create and apply templated content to your media.
                  </p>
                </div>
                <div className="relative">
                  <dt className=" font-semibold  flex items-center gap-2 text-gray-300">
                    <Lock className="text-indigo-400" />
                    <p>Template driven</p>
                  </dt>
                  <p className="inline text-gray-400">
                    Inspired by Sendgrid, Mailchimp, and Postmark, we allow you
                    to create and apply templated content to your media.
                  </p>
                </div>
                <div className="relative">
                  <dt className=" font-semibold  flex items-center gap-2 text-gray-300">
                    <DollarSign className="text-indigo-400" />
                    <p>Template driven</p>
                  </dt>
                  <p className="inline text-gray-400">
                    Inspired by Sendgrid, Mailchimp, and Postmark, we allow you
                    to create and apply templated content to your media.
                  </p>
                </div>
              </dl>
            </div>
            <div className="mt-10 flex flex-col md:flex-row md:items-center gap-x-6 gap-y-4">
              <Button className="rounded-full">Contact Now</Button>
              <Button
                variant="ghost"
                className="border border-blue-400 rounded-full text-blue-400"
              >
                Request a quote
              </Button>
            </div>
          </div>
          <Image
            width={1080}
            height={1080}
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wdXRlcnxlbnwwfDB8fHwxNjkxODE2NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Product screenshot"
            className="rounded-lg self-center"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
