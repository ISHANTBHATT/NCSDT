import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function PlacementPartners() {
  const partners = [
    { name: "Air India", logo: "/images/client-1.png" },
    { name: "Axis Bank", logo: "/images/client-2.png" },
    { name: "HDFC Bank", logo: "/images/client-3.png" },
    { name: "HCL", logo: "/images/client-4.png" },
    { name: "NIIT", logo: "/images/client-5.png" },
    { name: "WIPRO", logo: "/images/client-6.png" },
    { name: "Indigo", logo: "/images/client-7.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Placement Partners
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We've built strong partnerships with industry-leading companies to
            ensure our graduates have access to the best career opportunities.
            Our placement partners actively recruit from our programs and value
            the skills our students bring.
          </p>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-slate-600">Placement Rate</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-slate-600">Companies Hiring</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                ₹12L
              </div>
              <div className="text-slate-600">Average Package</div>
            </CardContent>
          </Card>
        </div> */}

        {/* Partners Logo Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-slate-800 mb-12">
            Trusted by Industry Leaders
          </h2>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300 w-full max-w-[200px] aspect-[2/1] flex items-center justify-center bg-slate-50 hover:bg-white"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  width={160}
                  height={80}
                  className="object-contain "
                />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                Why Companies Choose Our Graduates
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Industry-relevant curriculum designed with partner input
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Hands-on project experience with real-world applications
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Strong technical and soft skills development
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Continuous mentorship and career guidance
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                Partnership Benefits
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  Direct access to top talent pool
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  Customized recruitment drives
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  Pre-screening and skill assessment
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  Ongoing support and relationship management
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        {/* <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Interested in Partnering With Us?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Join our network of placement partners and get access to
                skilled, job-ready graduates who can contribute to your
                organization from day one.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                Become a Partner
              </button>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </div>
  );
}

// "use client";
// import Image from "next/image";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import { useEffect, useState } from "react";

// export default function PlacementPartners() {
//   const partners = [
//     { name: "Air India", logo: "/images/client-1.png" },
//     { name: "Axis Bank", logo: "/images/client-2.png" },
//     { name: "HDFC Bank", logo: "/images/client-3.png" },
//     { name: "HCL", logo: "/images/client-4.png" },
//     { name: "NIIT", logo: "/images/client-5.png" },
//     { name: "WIPRO", logo: "/images/client-6.png" },
//     { name: "Indigo", logo: "/images/client-7.png" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
//       {/* Floating elements for visual interest */}
//       <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//       <div className="absolute top-1/3 right-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//       <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

//       <div className="container mx-auto px-4 py-16 relative z-10">
//         {/* Animated Header */}
//         <div className="text-center mb-16 animate-fade-in-up">
//           <div className="inline-flex items-center justify-center px-6 py-2 bg-blue-100 text-blue-600 rounded-full mb-6">
//             <span className="mr-2">🌟</span> Trusted by 500+ Companies
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
//             Our Placement Partners
//           </h1>
//           <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//             We've built strong partnerships with industry-leading companies to
//             ensure our graduates have access to the best career opportunities.
//           </p>
//         </div>

//         {/* Stats Section with animated counters */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           {[
//             {
//               value: 95,
//               suffix: "%",
//               label: "Placement Rate",
//               color: "text-blue-600",
//             },
//             {
//               value: 500,
//               suffix: "+",
//               label: "Companies Hiring",
//               color: "text-green-600",
//             },
//             {
//               value: 12,
//               suffix: "LPA",
//               label: "Average Package",
//               color: "text-purple-600",
//             },
//           ].map((stat, index) => (
//             <Card
//               key={index}
//               className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm bg-white/80 overflow-hidden"
//             >
//               <div
//                 className={`absolute inset-x-0 top-0 h-1 ${stat.color.replace(
//                   "text",
//                   "bg"
//                 )}`}
//               ></div>
//               <CardContent className="p-8">
//                 <div className="text-5xl font-bold mb-2 flex items-center justify-center">
//                   <span className={stat.color}>
//                     <CountUp end={stat.value} duration={2} />
//                   </span>
//                   <span>{stat.suffix}</span>
//                 </div>
//                 <div className="text-slate-600 text-lg">{stat.label}</div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Partners Logo Section with 3D effect */}
//         <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white">
//           <h2 className="text-2xl md:text-3xl font-semibold text-center text-slate-800 mb-12">
//             Trusted by{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//               Industry Leaders
//             </span>
//           </h2>

//           {/* Animated Logo Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center">
//             {partners.map((partner, index) => (
//               <div
//                 key={index}
//                 className="group relative p-6 rounded-2xl border border-slate-200 transition-all duration-500 w-full max-w-[200px] aspect-[2/1] flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 hover:from-white hover:to-white shadow-md hover:shadow-xl transform hover:-translate-y-1"
//                 style={{
//                   transformStyle: "preserve-3d",
//                   perspective: "1000px",
//                 }}
//               >
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
//                 <Image
//                   src={partner.logo || "/placeholder.svg"}
//                   alt={`${partner.name} logo`}
//                   width={160}
//                   height={80}
//                   className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute bottom-0 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-900 text-white text-sm px-3 py-1 rounded-md mt-2">
//                   {partner.name}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Feature Cards with staggered animation */}
//         <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
//             <CardHeader>
//               <CardTitle className="text-2xl text-slate-800 flex items-center">
//                 <div className="mr-3 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
//                   <GraduationCapIcon className="text-blue-600" />
//                 </div>
//                 Why Companies Choose Our Graduates
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-6">
//               <ul className="space-y-4">
//                 {[
//                   "Industry-relevant curriculum designed with partner input",
//                   "Hands-on project experience with real-world applications",
//                   "Strong technical and soft skills development",
//                   "Continuous mentorship and career guidance",
//                 ].map((item, i) => (
//                   <li
//                     key={i}
//                     className="flex items-start animate-fade-in-up"
//                     style={{ animationDelay: `${i * 100}ms` }}
//                   >
//                     <span className="text-green-500 mr-3 mt-1">
//                       <CheckCircleIcon className="w-5 h-5" />
//                     </span>
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </CardContent>
//           </Card>

//           <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
//             <CardHeader>
//               <CardTitle className="text-2xl text-slate-800 flex items-center">
//                 <div className="mr-3 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
//                   <HandshakeIcon className="text-purple-600" />
//                 </div>
//                 Partnership Benefits
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-6">
//               <ul className="space-y-4">
//                 {[
//                   "Direct access to top talent pool",
//                   "Customized recruitment drives",
//                   "Pre-screening and skill assessment",
//                   "Ongoing support and relationship management",
//                 ].map((item, i) => (
//                   <li
//                     key={i}
//                     className="flex items-start animate-fade-in-up"
//                     style={{ animationDelay: `${i * 100 + 200}ms` }}
//                   >
//                     <span className="text-blue-500 mr-3 mt-1">
//                       <StarIcon className="w-5 h-5" />
//                     </span>
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Animated CTA Section */}
//         <div className="mt-16 text-center animate-pulse-slow">
//           <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden border-0 shadow-2xl relative">
//             <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:50px] opacity-20"></div>
//             <CardContent className="p-12 relative">
//               <h3 className="text-2xl md:text-3xl font-bold mb-4">
//                 Interested in Partnering With Us?
//               </h3>
//               <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
//                 Join our network of placement partners and get access to
//                 skilled, job-ready graduates who can contribute to your
//                 organization from day one.
//               </p>
//               <button className="relative bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg group">
//                 <span className="relative z-10">Become a Partner</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
//                 <div className="absolute inset-0 rounded-full bg-white z-0"></div>
//               </button>
//             </CardContent>
//           </Card>
//         </div>
//       </div>

//       {/* Animation keyframes */}
//       <style jsx global>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes blob {
//           0% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//         }
//         @keyframes pulseSlow {
//           0% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.02);
//           }
//           100% {
//             transform: scale(1);
//           }
//         }
//         .animate-fade-in-up {
//           animation: fadeInUp 0.6s ease-out forwards;
//         }
//         .animate-blob {
//           animation: blob 7s infinite ease-in-out;
//         }
//         .animate-pulse-slow {
//           animation: pulseSlow 4s infinite ease-in-out;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </div>
//   );
// }

// // Icon components
// function GraduationCapIcon(props) {
//   return (
//     <svg {...props} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M21 10.5V18H3V10.5L12 5L21 10.5Z" />
//       <path d="M12 12.5L3 7V18H21V7L12 12.5Z" />
//       <path
//         d="M12 12.5L21 7M12 12.5L3 7M12 12.5V19.5"
//         stroke="currentColor"
//         strokeWidth="1.5"
//       />
//     </svg>
//   );
// }

// function HandshakeIcon(props) {
//   return (
//     <svg {...props} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M10 9H14V11H10V9Z" />
//       <path d="M21 12V15C21 16.6569 19.6569 18 18 18H16.5V15.5H18C18.8284 15.5 19.5 14.8284 19.5 14V12H21Z" />
//       <path d="M3 12V15C3 16.6569 4.34315 18 6 18H7.5V15.5H6C5.17157 15.5 4.5 14.8284 4.5 14V12H3Z" />
//       <path
//         d="M14.25 15.75L12 18L9.75 15.75"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M16.5 15.5H7.5V18H16.5V15.5Z"
//         stroke="currentColor"
//         strokeWidth="1.5"
//       />
//       <path
//         d="M12 9L9 6H15L12 9Z"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function StarIcon(props) {
//   return (
//     <svg {...props} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
//     </svg>
//   );
// }

// function CheckCircleIcon(props) {
//   return (
//     <svg {...props} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
//     </svg>
//   );
// }

// // Counter animation component
// function CountUp({ end, duration = 2 }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const increment = end / (duration * 60); // 60fps

//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(Math.ceil(start));
//       }
//     }, 1000 / 60);

//     return () => clearInterval(timer);
//   }, [end, duration]);

//   return <>{count}</>;
// }
