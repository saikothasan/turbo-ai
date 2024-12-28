import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timelineEvents = [
  {
    year: '2018',
    title: 'Company Founded',
    description: 'Started with a vision to democratize AI technology',
  },
  {
    year: '2019',
    title: 'First Major Client',
    description: 'Successfully implemented AI solutions for Fortune 500 company',
  },
  {
    year: '2020',
    title: 'Global Expansion',
    description: 'Opened offices in Europe and Asia',
  },
  {
    year: '2021',
    title: 'AI Innovation Award',
    description: 'Recognized for breakthrough in machine learning',
  },
  {
    year: '2022',
    title: 'Cloud AI Platform',
    description: 'Launched revolutionary cloud-based AI platform',
  },
];

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } items-center mb-8`}
            >
              <div className="w-1/2 px-6">
                <div className={`text-right ${index % 2 === 0 ? '' : 'text-left'}`}>
                  <h3 className="text-2xl font-bold text-blue-600">{event.year}</h3>
                  <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                </div>
              </div>
              <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10">
                <div className="absolute w-1 h-full bg-blue-200 left-1/2 transform -translate-x-1/2" />
              </div>
              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;