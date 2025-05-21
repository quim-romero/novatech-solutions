import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="border-t border-gray-200 bg-white px-6 py-10 text-sm text-gray-600"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-semibold text-gray-900">
          © {year} NovaTech Solutions
        </div>

        <nav className="flex gap-6">
          <Link to="/privacy" className="hover:text-gray-900 transition-colors">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-gray-900 transition-colors">
            Terms
          </Link>
          <a
            href="mailto:hello@novatech.com"
            className="hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </motion.footer>
  );
}
