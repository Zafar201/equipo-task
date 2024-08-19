import { motion } from 'framer-motion';
import { brandLogos } from '../../contants';

const Brands = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-extra-bold text-gray-900  mb-12 text-2xl font-medium text-center"
        >
          Trusted by over 50 thousand restaurants in 10+ countries
        </motion.h2>
        <div className="grid grid-cols-3 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {brandLogos.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.1 }}
              className="col-span-1 flex justify-center items-center"
            >
              <img
                className="h-12"
                src={brand.src}
                alt={brand.name}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;