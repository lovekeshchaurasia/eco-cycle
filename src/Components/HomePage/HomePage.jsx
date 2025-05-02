// components/HomePage.jsx
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import image from '../../assets/Images/image.png';
import eco from '../../assets/Images/Eco.jpg';
const HomePage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section with Animation */}
      <section className="relative bg-green-700 text-white h-screen flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Welcome to WasteWise 🌍
          </h1>
          <p className="text-lg mb-6">
            Your sustainable solution for waste management.
          </p>
          <motion.button
            className="px-6 py-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          className="overflow-hidden rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={image}
            alt="Waste Management"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          className="overflow-hidden rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.ysFNmH2m4fLKcIr85Yk0IgHaD4&pid=Api&P=0&h=180"
            alt="Waste Collection"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          className="overflow-hidden rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={eco}
            alt="Eco-Friendly"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-6">
            Why Choose WasteWise?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-green-700 text-white p-6 rounded-lg"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4">Sustainable Solutions</h3>
              <p>We provide eco-friendly solutions for managing waste efficiently.</p>
            </motion.div>
            <motion.div
              className="bg-green-700 text-white p-6 rounded-lg"
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4">Reliable Services</h3>
              <p>Our services are dependable and timely, ensuring waste is handled properly.</p>
            </motion.div>
            <motion.div
              className="bg-green-700 text-white p-6 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4">Community Impact</h3>
              <p>We work with communities to raise awareness about waste reduction.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
