"use client";
import { GraduationCap, Building2, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "University Life",
    description: "Transformative journey filled with learning, exploration",
    icon: Building2,
    color: "bg-[#2A2A8F]",
  },
  {
    title: "Postgraduate",
    description: "Future filled with boundless opportunities and success",
    icon: GraduationCap,
    color: "bg-green-500",
  },
  {
    title: "Undergraduate",
    description:
      "Transformative chapter filled with academic growth and personal exploration",
    icon: Users,
    color: "bg-[#2A2A8F]",
  },
  {
    title: "Scholarship",
    description: "Pursue higher education and become a leader",
    icon: Globe,
    color: "bg-green-500",
  },
];

export function Features() {
  return (
    <div className="container mx-auto px-4 -mt-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            className={`${feature.color} p-6 rounded-lg text-white`}
          >
            <feature.icon className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm opacity-90">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
