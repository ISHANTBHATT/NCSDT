"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Jessica",
    role: "Artist and Instructor",
    image: "/images/students.jpg",
    rating: 5,
    reviewCount: 112,
    text: "Lorem ipsum dolor sit amet consectetur. Aenean pulvinar risus vivamus interdum. Nulla risus consectetur risus fermentum mauris ac felis. Aenean suspendisse nascetur morbi dolor.",
  },
  {
    name: "Michael",
    role: "Software Developer",
    image: "/images/students.jpg",
    rating: 4,
    reviewCount: 89,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Sarah",
    role: "Marketing Specialist",
    image: "/images/students.jpg",
    rating: 5,
    reviewCount: 134,
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Students Feedback
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <img
                  src={
                    testimonials[currentTestimonial].image || "/placeholder.svg"
                  }
                  alt={`${testimonials[currentTestimonial].name} Testimonial`}
                  className="rounded-xl w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonials[currentTestimonial].rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">
                    {testimonials[currentTestimonial].rating.toFixed(1)} (
                    {testimonials[currentTestimonial].reviewCount} Reviews)
                  </span>
                </div>

                <p className="text-gray-600 mb-6">
                  {testimonials[currentTestimonial].text}
                </p>

                <div>
                  <h4 className="font-semibold">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentTestimonial ? "bg-[#3F3D8C]" : "bg-gray-300"
                }`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
