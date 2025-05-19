import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>NovaTech Solutions – Cloud, AI & Security Services</title>
        <meta name="description" content="Empowering your business through cloud, AI and cybersecurity solutions." />
      </Helmet>

      <motion.section
        className="flex flex-col justify-center items-center text-center px-6 py-24 md:py-32"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Digital Solutions for the Future
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-6">
          NovaTech empowers businesses with cloud infrastructure, artificial intelligence, and cybersecurity services.
        </p>
        <a
          href="#services"
          className="inline-block bg-brand text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-dark transition-colors"
        >
          Explore our services
        </a>
      </motion.section>
    </>
  );
}
