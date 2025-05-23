import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Services() {
  const services = [
    {
      category: "Cloud Infrastructure",
      description:
        "Scalable, secure and cost-efficient cloud solutions using AWS, Azure and more.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      category: "Artificial Intelligence",
      description:
        "Custom AI models and automation workflows to optimize your operations.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      category: "Cybersecurity",
      description:
        "Enterprise-grade protection with audits, encryption, threat detection and more.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services – NovaTech Solutions</title>
        <meta
          name="description"
          content="Discover our core services in cloud, AI and cybersecurity."
        />
      </Helmet>

      <motion.section
        className="max-w-7xl mx-auto px-6 py-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We design and deliver tailored technology solutions across cloud,
            AI, and cybersecurity.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition hover:scale-[1.02]"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-brand mb-2">
                {service.category}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
