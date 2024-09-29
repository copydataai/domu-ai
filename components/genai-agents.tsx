"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Laptop, Phone, Speech } from "lucide-react";

export default function GenAIAgents() {
  const [isHovered, setIsHovered] = useState(false);
  const [waveform, setWaveform] = useState<number[]>([]);

  useEffect(() => {
    // Generate random waveform data
    setWaveform(Array.from({ length: 30 }, () => Math.random()));
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="flex justify-between items-center mb-16">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Grow your revenue with GenAI
            <br />
            Agents that convert and engage
          </motion.h1>
          <a href="https://calendly.com/isabela-domu/discovery-call-domu">
            <motion.button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a call
            </motion.button>
          </a>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Capacity to A/B test with voices, gender, and data
            </h2>
            <p className="text-gray-400 mb-4">
              +100 experiments per client per month to find new ways to close
              more sales or collect more money.
            </p>
            <a href="https://calendly.com/isabela-domu/discovery-call-domu">
              <motion.button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a call
              </motion.button>
            </a>
            <div className="mt-6">
              <Speech className="w-full h-32 text-blue-400" />
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Capacity to trigger calls in real-time
            </h2>
            <p className="text-gray-400 mb-4">
              Increase your revenue by reaching out to our leads right after
              they get a quote and show interest in getting a policy.
            </p>
            <div className="flex justify-between items-center mt-6">
              <Laptop className="w-16 h-16 text-blue-400" />
              <div className="border-t-2 border-dashed border-blue-400 flex-grow mx-4"></div>
              <Laptop className="w-16 h-16 text-blue-400" />
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg md:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Call your clients at the right time
            </h2>
            <p className="text-gray-400 mb-4">
              Boost your contractibility rates by calling your customers after
              they interact with your website, email, texts, or ads.
            </p>
            <div className="flex items-center justify-center mt-6">
              <Phone className="w-12 h-12 text-blue-400 mr-4" />
              <div className="relative w-64 h-16">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 256 64"
                  preserveAspectRatio="none"
                >
                  {waveform.map((value, index) => (
                    <motion.rect
                      key={index}
                      x={index * 8}
                      y={32 - value * 16}
                      width="4"
                      height={value * 32}
                      fill="#3B82F6"
                      initial={{ opacity: 0.5, scaleY: 0.5 }}
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        scaleY: [0.5, 1, 0.5],
                        transition: {
                          repeat: Infinity,
                          duration: 1.5,
                          delay: index * 0.05,
                        },
                      }}
                    />
                  ))}
                </svg>
              </div>
              <Phone className="w-12 h-12 text-gray-600 ml-4" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-5"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
