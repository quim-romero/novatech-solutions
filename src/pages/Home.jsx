import {
  CloudIcon,
  CpuChipIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>NovaTech Solutions – Cloud, AI & Security Services</title>
        <meta
          name="description"
          content="Empowering your business through cloud, AI and cybersecurity solutions."
        />
      </Helmet>

      <motion.section
        className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 pt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Digital Solutions for the Future
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-6">
          NovaTech empowers businesses with cloud infrastructure, artificial
          intelligence, and cybersecurity services.
        </p>
        <a
          href="#services"
          className="inline-block bg-brand text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-dark transition-colors"
        >
          Explore our services
        </a>
      </motion.section>

      <motion.section
        className="max-w-7xl mx-auto px-6 py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We specialize in scalable cloud infrastructure, advanced AI
            solutions and enterprise-grade security.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
            <CloudIcon className="h-10 w-10 text-brand mb-4" />
            <h3 className="text-lg font-semibold mb-2">Cloud Infrastructure</h3>
            <p className="text-sm text-gray-600">
              High-availability and cost-optimized cloud solutions tailored to
              your needs.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
            <CpuChipIcon className="h-10 w-10 text-brand mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              Artificial Intelligence
            </h3>
            <p className="text-sm text-gray-600">
              Smart automation and data-driven insights powered by cutting-edge
              AI.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
            <ShieldCheckIcon className="h-10 w-10 text-brand mb-4" />
            <h3 className="text-lg font-semibold mb-2">Cybersecurity</h3>
            <p className="text-sm text-gray-600">
              End-to-end protection to secure your systems and customer data.
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
}
