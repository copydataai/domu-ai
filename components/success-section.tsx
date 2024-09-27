"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { label: "Consumer debt resolved", value: "$500M" },
  { label: "Insurance policies sold", value: "+$1M USD" },
  { label: "Automated resolutions", value: "+$875k USD" },
];

const testimonials = [
  {
    company: "Skandia",
    logo: "/images/Skandia.png",
    text: "Brought back +1M USD in money collected by implementing automated collections calls.",
  },
  {
    company: "BNP Paribas Cardiff",
    logo: "/images/Cardiff.png",
    text: "Increased by 5x their calls capacity, bringing more than 500k in new sales.",
  },
  {
    company: "SBS Insurance",
    logo: "/images/d.png",
    text: "Improved conversion rates by 3% after the first 2 months of implementation.",
  },
];

export default function SuccessSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold sm:text-4xl">Our Impact</h2>
          <p className="mt-4 text-xl text-gray-600">
            Driving success for our clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
            >
              <dt className="text-sm font-medium text-gray-500 truncate">
                {stat.label}
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={testimonial.logo}
                  alt={`${testimonial.company} logo`}
                  className="h-8 w-auto mr-3"
                />
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to automate your sales and debt collection calls?
          </h2>
          <a
            href="https://calendly.com/isabela-domu/discovery-call-domu"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800"
          >
            Schedule a call
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
