import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  message: yup
    .string()
    .min(10, "Message should be at least 10 characters")
    .required("Please write a message"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Submitted:", data);
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact – NovaTech Solutions</title>
        <meta
          name="description"
          content="Get in touch with NovaTech for your digital transformation."
        />
      </Helmet>

      <motion.section
        className="max-w-5xl mx-auto px-6 py-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Let’s Work Together
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Whether you’re looking to innovate, scale or secure — we’re here to
          help. Send us a message and we’ll get back to you within 1–2 business
          days.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
          <div>
            <label className="block mb-1 font-medium text-sm">Name</label>
            <input
              {...register("name")}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm">Email</label>
            <input
              {...register("email")}
              type="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm">Message</label>
            <textarea
              {...register("message")}
              rows={5}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder="Tell us about your project or challenge..."
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-brand text-white py-3 px-6 rounded-md font-medium hover:bg-brand-dark transition"
          >
            Send Message
          </button>

          {isSubmitSuccessful && (
            <motion.p
              className="text-green-600 text-sm font-medium mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              Message sent successfully!
            </motion.p>
          )}
        </form>
      </motion.section>

      <motion.div
        className="mt-20 mb-24 max-w-5xl mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Our Location
          </h2>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            NovaTech Solutions is headquartered in San Francisco, serving
            clients worldwide. Find us on the map below.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <iframe
            title="NovaTech HQ"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.252247179882!2d-122.40085018468143!3d37.787998979756824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064dbfc701f%3A0x92a282d82b9fd342!2sStripe!5e0!3m2!1sen!2sus!4v1679522034563!5m2!1sen!2sus"
            width="100%"
            height="380"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
      </motion.div>
    </>
  );
}
