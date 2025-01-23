// import React from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// function Scholarship() {
//   return (
//     <div>
//       <section className="relative h-[500px] flex items-center justify-center text-white">
//         <Image
//           src="/images/about.jpg"
//           alt="Students studying"
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-4">
//             Scholarships and Financial Aid
//           </h2>
//           <p className="mb-8">
//             Lorem ipsum dolor sit amet consectetur. Et pharetra netus purus
//             pretium lobortis. Laoreet congue consectetur magna et ipsum aliquam
//             arch. Elit fames aliquam at ut urna malesuada bibendum.
//           </p>
//           <Button variant="secondary">Read More →</Button>
//         </div>
//       </section>

//       {/* B Tech Specialization Section */}
//       <section className="py-16 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <div className="relative">
//             <div className="absolute -right-4 -top-4 w-32 h-32 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm text-center p-2 z-[2]">
//               National College for Skill Development and Training
//             </div>
//             <div className="absolute left-0 bottom-0 bg-indigo-800 text-white px-4 py-2 rounded-lg z-[2]">
//               <div className="flex items-center gap-2">
//                 <span className="text-2xl font-bold">25+</span>
//                 <span className="text-xs">Years of Experience</span>
//               </div>
//             </div>
//             <div className="absolute -left-20 -top-10 z-0">
//               <Image
//                 src="/images/dots.svg"
//                 alt="Student with books"
//                 width={300}
//                 height={600}
//                 className="w-56 h-80"
//               />
//             </div>
//             <div className="relative z-[1]">
//               <Image
//                 src="/images/students.jpg"
//                 alt="Student with books"
//                 width={500}
//                 height={600}
//                 className="rounded-lg"
//               />
//             </div>
//           </div>
//           <div className="space-y-6">
//             <h2 className="text-3xl font-bold">
//               B Tech Specialization in India
//             </h2>
//             <p className="text-gray-600">
//               Lorem ipsum dolor sit amet consectetur. Aenean pulvinar risus
//               vivamus interdum. Nulla risus consectetur risus fermentum mauris
//               ac felis. Aenean suspendisse nascetur morbi dolor.
//             </p>
//             <ul className="space-y-2">
//               {["Lorem ipsum dolor sit", "Lorem ipsum dolor sit"].map(
//                 (item) => (
//                   <li key={item} className="flex items-center gap-2">
//                     <span className="w-2 h-2 bg-emerald-600 rounded-full" />
//                     {item}
//                   </li>
//                 )
//               )}
//             </ul>
//             <Button className="bg-emerald-600 hover:bg-emerald-700">
//               Read More →
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Scholarship;
"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function Scholarship() {
  return (
    <div>
      <section className="relative h-[500px] flex items-center justify-center text-white">
        <Image
          src="/images/21.jpg"
          alt="Students studying"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center max-w-3xl mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-4">
            Scholarships and Financial Aid
          </h2>
          <p className="mb-8">
            Lorem ipsum dolor sit amet consectetur. Et pharetra netus purus
            pretium lobortis. Laoreet congue consectetur magna et ipsum aliquam
            arch. Elit fames aliquam at ut urna malesuada bibendum.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="secondary">Read More →</Button>
          </motion.div>
        </motion.div>
      </section>

      {/* B Tech Specialization Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm text-center p-2 z-[2]">
              National College for Skill Development and Training
            </div>
            <div className="absolute left-0 bottom-0 bg-indigo-800 text-white px-4 py-2 rounded-lg z-[2]">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">25+</span>
                <span className="text-xs">Years of Experience</span>
              </div>
            </div>
            <div className="absolute -left-20 -top-10 z-0">
              <Image
                src="/images/dots.svg"
                alt="Student with books"
                width={300}
                height={600}
                className="w-56 h-80"
              />
            </div>
            <div className="relative z-[1]">
              <Image
                src="/images/14.jpg"
                alt="Student with books"
                width={500}
                height={600}
                className="rounded-lg"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">
              B Tech Specialization in India
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Aenean pulvinar risus
              vivamus interdum. Nulla risus consectetur risus fermentum mauris
              ac felis. Aenean suspendisse nascetur morbi dolor.
            </p>
            <ul className="space-y-2">
              {["Lorem ipsum dolor sit", "Lorem ipsum dolor sit"].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-emerald-600 rounded-full" />
                    {item}
                  </motion.li>
                )
              )}
            </ul>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Read More →
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Scholarship;
