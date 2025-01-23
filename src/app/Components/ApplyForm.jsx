// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// export function ApplyForm() {
//   return (
//     <div className="container mx-auto px-4 py-20 mb-28">
//       <h2 className="text-4xl font-bold text-center mb-16">Apply Now</h2>
//       <div className="relative flex flex-col gap-8 items-center h-screen">
//         {/* <div className="absolute -top-10 bottom-0 w-full h-[600px]">
//           <Image
//             src="/images/star.png"
//             // width={2000}
//             // height={200}
//             fill
//             className="w-full "
//           />
//         </div> */}
//         <div className="relative w-full flex items-center justify-center">
//           <div className="absolute " />
//           <img
//             src="/images/about.jpg"
//             alt="Students"
//             className="relative rounded-lg w-3/4 h-[500px]"
//           />
//         </div>
//         {/* <div className="bg-white p-8 rounded-lg shadow-lg 0"> */}
//         {/* <form className="grid grid-cols-2 gap-6">
//             <Input placeholder="First Name" />
//             <Input placeholder="Last Name" />
//             <Input placeholder="Email" className="col-span-2" />
//             <Input placeholder="Phone" className="col-span-2" />
//             <select className="col-span-2 w-full p-2 rounded-md border border-gray-300">
//               <option>Select Course</option>
//               <option>Computer Science</option>
//               <option>Mechanical Engineering</option>
//               <option>Electrical Engineering</option>
//             </select>
//             <Button className="col-span-2 bg-green-500 hover:bg-green-600">
//               Submit Application
//             </Button>
//           </form> */}
//         <form className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg absolute -bottom-40">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Phone
//               </label>
//               <input
//                 type="tel"
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               />
//             </div>

//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Address
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Date of Birth
//               </label>
//               <input
//                 type="date"
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Course Interest
//               </label>
//               <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
//                 <option>Select Course</option>
//                 <option>Computer Science</option>
//                 <option>Mechanical Engineering</option>
//                 <option>Electrical Engineering</option>
//               </select>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="mt-8 w-full bg-[#3F3D8C] text-white py-3 rounded-lg hover:bg-[#2D2B66] transition"
//           >
//             Apply Now
//           </button>
//         </form>
//         {/* </div> */}
//       </div>
//     </div>
//   );
// }

"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export function ApplyForm() {
  return (
    <div className="container mx-auto px-4 py-20 mb-28">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-16"
      >
        Apply Now
      </motion.h2>
      <div className="relative flex flex-col gap-8 items-center h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full flex items-center justify-center"
        >
          <div className="absolute " />
          <img
            src="/images/about.jpg"
            alt="Students"
            className="relative rounded-lg w-3/4 h-[500px]"
          />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg absolute -bottom-40"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course Interest
              </label>
              <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Select Course</option>
                <option>Computer Science</option>
                <option>Mechanical Engineering</option>
                <option>Electrical Engineering</option>
              </select>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-8 w-full bg-[#3F3D8C] text-white py-3 rounded-lg hover:bg-[#2D2B66] transition"
          >
            Apply Now
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
