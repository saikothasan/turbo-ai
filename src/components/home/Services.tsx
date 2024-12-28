import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Cloud, Lock } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Custom ML models tailored to your business needs'
  },
  {
    icon: Cpu,
    title: 'Deep Learning',
    description: 'Advanced neural networks for complex problem-solving'
  },
  {
    icon: Cloud,
    title: 'Cloud AI',
    description: 'Scalable AI solutions powered by cloud infrastructure'
  },
  {
    icon: Lock,
    title: 'AI Security',
    description: 'Robust security measures for AI implementations'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Cutting-edge AI solutions for modern businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                <service.icon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;