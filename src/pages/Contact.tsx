import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            We'd love to hear from you. Let's discuss how we can help transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
          >
            <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600 dark:text-gray-300">
              123 AI Street, Tech Valley
              <br />
              San Francisco, CA 94105
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
          >
            <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600 dark:text-gray-300">
              +1 (555) 123-4567
              <br />
              Mon-Fri 9am-6pm PST
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
          >
            <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 dark:text-gray-300">
              info@aitech.com
              <br />
              support@aitech.com
            </p>
          </motion.div>
        </div>

        <ContactForm />
      </div>
    </motion.div>
  );
};

export default Contact;