// import { Play } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export function Banner() {
//   return (
//     <div className="relative h-[600px] overflow-hidden">
//       <div className="absolute inset-0">
//         <img
//           src="/images/1.jpg"
//           alt="Campus Background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40" />
//       </div>
//       <div className="relative container mx-auto px-4 pt-20">
//         <div className="max-w-2xl text-white">
//           <p className="inline-flex items-center gap-2 bg-green-500 px-4 py-2 rounded-full text-sm mb-6">
//             <span className="size-2 bg-white rounded-full" />
//             knowledge meets innovation
//           </p>
//           <h2 className="text-6xl font-bold mb-4">
//             Empowering
//             <br />
//             Vision Crafting
//             <br />
//             Destinies
//           </h2>
//           <p className="text-lg mb-8">
//             Remember to tailor the section names to fit the specific needs and
//             structure of your university website.
//           </p>
//           <div className="flex items-center gap-6">
//             <Button className="bg-green-500 hover:bg-green-600">
//               View Our Program
//             </Button>
//             <Button
//               //   variant="outline"
//               className="text-white border-white bg-transparent hover:bg-white/10"
//             >
//               <Play className="mr-2 h-4 w-4" />
//               Watch Video
//             </Button>
//           </div>
//           <div className="flex gap-2 mt-12">
//             <button className="size-2 bg-white rounded-full" />
//             <button className="size-2 bg-white/50 rounded-full" />
//             <button className="size-2 bg-white/50 rounded-full" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { Play, ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const carouselImages = [
//   {
//     src: "/images/1.jpg",
//     alt: "Campus Background 1",
//   },
//   {
//     src: "/images/2.jpg",
//     alt: "Campus Background 2",
//   },
//   {
//     src: "/images/3.jpg",
//     alt: "Campus Background 3",
//   },
// ];

// export function Banner() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prevCurrent) => (prevCurrent + 1) % carouselImages.length);
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(timer);
//   }, []);

//   const goToSlide = () => {
//     setCurrent(index);
//   };

//   const goToPrevious = () => {
//     setCurrent(
//       (prevCurrent) =>
//         (prevCurrent - 1 + carouselImages.length) % carouselImages.length
//     );
//   };

//   const goToNext = () => {
//     setCurrent((prevCurrent) => (prevCurrent + 1) % carouselImages.length);
//   };

//   return (
//     <div className="relative h-[600px] overflow-hidden">
//       {carouselImages.map((image, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === current ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <img
//             src={image.src || "/placeholder.svg"}
//             alt={image.alt}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/40" />
//         </div>
//       ))}

//       <div className="relative container mx-auto px-4 pt-6 sm:pt-20">
//         <div className="max-w-2xl text-white">
//           <p className="inline-flex items-center gap-2 bg-green-500 px-4 py-2 rounded-full text-sm mb-6">
//             <span className="size-2 bg-white rounded-full" />
//             knowledge meets innovation
//           </p>
//           <h2 className="text-4xl sm:text-6xl font-bold mb-4">
//             Empowering
//             <br />
//             Vision Crafting
//             <br />
//             Destinies
//           </h2>
//           <p className="text-lg mb-8">
//             Remember to tailor the section names to fit the specific needs and
//             structure of your university website.
//           </p>
//           <div className="flex items-center gap-6">
//             <Button className="bg-green-500 hover:bg-green-600">
//               View Our Program
//             </Button>
//             <Button
//               variant="outline"
//               className="bg-transparent text-white border-white hover:bg-white/10"
//             >
//               <Play className="mr-2 h-4 w-4" />
//               Watch Video
//             </Button>
//           </div>
//           <div className="flex gap-2 mt-12">
//             {carouselImages.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`size-2 rounded-full transition-colors ${
//                   current === index ? "bg-white" : "bg-white/50"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-20 right-4 flex gap-2">
//         <Button
//           variant="outline"
//           size="icon"
//           className="bg-white/20 hover:bg-white/30 text-white border-white"
//           onClick={goToPrevious}
//         >
//           <ChevronLeft className="h-4 w-4" />
//         </Button>
//         <Button
//           variant="outline"
//           size="icon"
//           className="bg-white/20 hover:bg-white/30 text-white border-white"
//           onClick={goToNext}
//         >
//           <ChevronRight className="h-4 w-4" />
//         </Button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const carouselImages = [
  {
    src: "/images/7.jpg",
    alt: "Campus Background 1",
  },
  {
    src: "/images/8.jpg",
    alt: "Campus Background 2",
  },
  {
    src: "/images/10.jpg",
    alt: "Campus Background 3",
  },
];

export function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const goToPrevious = () => {
    setCurrent(
      (prevCurrent) =>
        (prevCurrent - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const goToNext = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % carouselImages.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden z-0">
      <AnimatePresence mode="wait">
        {carouselImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === current ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 `}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="relative container mx-auto px-4 pt-6 sm:pt-20 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-white"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-green-500 px-4 py-2 rounded-full text-sm mb-6"
          >
            <span className="size-2 bg-white rounded-full" />
            knowledge meets innovation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-4xl sm:text-6xl font-bold mb-4"
          >
            Empowering
            <br />
            Vision Crafting
            <br />
            Destinies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg mb-8"
          >
            Remember to tailor the section names to fit the specific needs and
            structure of your university website.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center gap-6"
          >
            <Button className="bg-green-500 hover:bg-green-600">
              View Our Program
            </Button>
            {/* <Button
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Video
            </Button> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex gap-2 mt-12"
          >
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`size-2 rounded-full transition-colors ${
                  current === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-20 right-4 flex gap-2 z-20">
        <Button
          variant="outline"
          size="icon"
          className="bg-white/20 hover:bg-white/30 text-white border-white"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-white/20 hover:bg-white/30 text-white border-white"
          onClick={goToNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
