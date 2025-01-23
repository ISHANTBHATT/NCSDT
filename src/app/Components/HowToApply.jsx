// import { GraduationCap, FileText, ClipboardList } from "lucide-react";
// import Image from "next/image";

// export default function HowToApply() {
//   const steps = [
//     {
//       id: "01",
//       title: "Create an Account",
//       description:
//         "Lorem ipsum dolor sit amet consectetur. Sodales id id nunc adipiscing.",
//       icon: GraduationCap,
//     },
//     {
//       id: "02",
//       title: "Online Application",
//       description:
//         "Lorem ipsum dolor sit amet consectetur. Eu tristique sed vivamus morbi.",
//       icon: FileText,
//     },
//     {
//       id: "03",
//       title: "Programs & Requirements",
//       description:
//         "Lorem ipsum dolor sit amet consectetur. Lacus mi ultrices commodo dignissim.",
//       icon: ClipboardList,
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50 ">
//       <div className="container mx-auto px-4 relative">
//         {/* <div className="absolute top-0 left-0 w-full h-full">
//           <Image
//             src="/images/dots.svg"
//             width={200}
//             height={200}
//             className="w-full"
//           />
//         </div> */}

//         <h2 className="text-4xl font-bold text-center mb-12">
//           How to Apply to National College for Skill Development and Training
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {steps.map((step) => (
//             <div
//               key={step.id}
//               className="bg-[#3F3D8C] text-white p-8 rounded-xl relative overflow-hidden"
//             >
//               <step.icon className="w-12 h-12 mb-4" />
//               <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
//               <p className="text-white/80">{step.description}</p>
//               <div className="absolute top-6 right-6 text-4xl font-bold opacity-20">
//                 {step.id}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { GraduationCap, FileText, ClipboardList } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HowToApply() {
  const steps = [
    {
      id: "01",
      title: "Create an Account",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sodales id id nunc adipiscing.",
      icon: GraduationCap,
    },
    {
      id: "02",
      title: "Online Application",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eu tristique sed vivamus morbi.",
      icon: FileText,
    },
    {
      id: "03",
      title: "Programs & Requirements",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lacus mi ultrices commodo dignissim.",
      icon: ClipboardList,
    },
  ];

  return (
    <section className="py-16 bg-gray-50 ">
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          How to Apply to National College for Skill Development and Training
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
              className="bg-[#3F3D8C] text-white p-8 rounded-xl relative overflow-hidden"
            >
              <step.icon className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-white/80">{step.description}</p>
              <div className="absolute top-6 right-6 text-4xl font-bold opacity-20">
                {step.id}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
