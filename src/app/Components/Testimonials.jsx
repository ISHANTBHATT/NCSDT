"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Jessica",
    role: "Artist and Instructor",
    image: "/images/student2.jpg",
    rating: 5,
    reviewCount: 112,
    text: "The programs at this college transformed my creative journey completely. The instructors provided personalized guidance that helped me develop both technical skills and artistic vision. The hands-on approach and supportive community made learning enjoyable and effective. I gained confidence in my abilities and built a strong foundation for my career in the arts.",
  },
  {
    name: "Michael",
    role: "Software Developer",
    image: "/images/student3.jpg",
    rating: 4,
    reviewCount: 89,
    text: "The technical curriculum here is outstanding and truly industry-relevant. The coding bootcamps and project-based learning approach gave me real-world experience that employers value. The career support team helped me land my dream job at a top tech company. The skills I learned here continue to serve me well in my professional development.",
  },
  {
    name: "Sarah",
    role: "Marketing Specialist",
    image: "/images/person2.jpg",
    rating: 5,
    reviewCount: 134,
    text: "This college's marketing program perfectly blends creativity with analytical thinking. The professors are industry experts who bring real case studies into the classroom. The internship opportunities and networking events opened doors I never expected. I graduated with confidence and a portfolio that impressed every employer I interviewed with.",
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
