"use client";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Campus() {
  return (
    <section className="py-16 bg-[#3F3D8C] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl font-bold mb-6">Campus Life</h2>
            <p className="mb-6 text-white/80">
              College campus life is an exciting and transformative experience
              for many students. It provides opportunities for personal growth,
              academic development, and social engagement. This guide explores
              the various aspects of campus life that contribute to a
              well-rounded college experience.
            </p>
            <p className="mb-8 text-white/80">
              College campus life is a multifaceted experience that offers
              students the chance to grow academically, personally, and
              socially. By taking advantage of the resources and opportunities
              available, students can make the most of their time on campus and
              prepare for their future endeavors.
            </p>
            <Link href="/About">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition flex items-center gap-2"
              >
                Read More
                <span className="text-xl">→</span>
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img src="/images/4.jpg" alt="Campus Life" className="rounded-xl" />
            <motion.button
              // whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition"
            >
              <Play className="w-8 h-8" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
