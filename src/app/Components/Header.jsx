// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Search, Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import Image from "next/image";

// const programmes = [
//   { title: "Undergraduate", href: "/programmes/undergraduate" },
//   { title: "Graduate", href: "/programmes/graduate" },
//   { title: "Online Learning", href: "/programmes/online" },
// ];

// const courses = [
//   { title: "Undergraduate Course", href: "/courses/Undergraduate-Course" },
//   { title: "Graduate Courses", href: "/courses/Graduate-Courses" },
// ];

// export function Header() {
//   return (
//     <header className="w-full bg-white">
//       <div className="bg-[#2A2A8F] text-white py-2 px-4">
//         <div className="container mx-auto flex justify-between text-sm">
//           <a href="mailto:info@hce.com" className="hover:text-gray-200">
//             info@hce.com
//           </a>
//           <div className="flex gap-4">
//             <a href="tel:+919999999999" className="hover:text-gray-200">
//               +91 9999999999
//             </a>
//             <span>
//               National College for Skill Development and Training Sector 20,
//               Purkhas Road, Near Sugar Mill, Sonipat, Haryana 131001
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="container mx-auto py-4 px-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-8">
//             {/* <Image
//               src="/images/logo.jpeg"
//               width={2000}
//               height={1000}
//               alt="College Logo Left"
//               className="h-32 w-auto"
//             /> */}
//             <img
//               src="/images/logo.jpeg"
//               alt="College Logo Left"
//               className="h-32 w-auto"
//             />
//             <h1 className="text-[#2A2A8F] text-base sm:text-2xl font-bold">
//               National College for Skill Development and Training
//             </h1>
//           </div>
//           {/* <img
//             src="/images/logo.jpeg"
//             alt="College Logo Right"
//             className="h-16 w-auto"
//           /> */}
//         </div>
//         <NavigationMenu className="hidden sm:block">
//           <NavigationMenuList>
//             <NavigationMenuItem>
//               <Link href="/" legacyBehavior passHref>
//                 <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                   Home
//                 </NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <Link href="/About" legacyBehavior passHref>
//                 <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                   About
//                 </NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger>Programmes</NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <ul className="grid w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px]">
//                   {programmes.map((programme) => (
//                     <li key={programme.title}>
//                       <NavigationMenuLink asChild>
//                         <a
//                           href={programme.href}
//                           className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                         >
//                           <div className="text-sm font-medium leading-none">
//                             {programme.title}
//                           </div>
//                         </a>
//                       </NavigationMenuLink>
//                     </li>
//                   ))}
//                 </ul>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-row-2 lg:w-[400px]">
//                   {courses.map((course) => (
//                     <li key={course.title}>
//                       <NavigationMenuLink asChild>
//                         <a
//                           href={course.href}
//                           className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                         >
//                           <div className="text-sm font-medium leading-none">
//                             {course.title}
//                           </div>
//                         </a>
//                       </NavigationMenuLink>
//                     </li>
//                   ))}
//                 </ul>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <Link href="/" legacyBehavior passHref>
//                 <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                   Facilities
//                 </NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem>

//             <NavigationMenuItem>
//               <Link href="/" legacyBehavior passHref>
//                 <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                   Placement
//                 </NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <Link href="/Gallery" legacyBehavior passHref>
//                 <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                   Gallery
//                 </NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <Link href="/Contact" legacyBehavior passHref>
//                 <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                   Contact
//                 </NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem>
//           </NavigationMenuList>
//         </NavigationMenu>
//         {/* <nav className="flex items-center justify-between mt-4">
//           <ul className="flex gap-6">
//             <li>
//               <a href="#" className="hover:text-[#2A2A8F]">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-[#2A2A8F]">
//                 Programmes
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-[#2A2A8F]">
//                 Courses
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-[#2A2A8F]">
//                 Facilities
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-[#2A2A8F]">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-[#2A2A8F]">
//                 Gallery
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-[#2A2A8F]">
//                 Contact
//               </a>
//             </li>
//           </ul>
//           <div className="flex items-center gap-4">
//             <div className="relative">
//               <Input type="search" placeholder="Search..." className="pl-8" />
//               <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
//             </div>
//             <Button variant="ghost" size="icon">
//               <Menu className="h-6 w-6" />
//             </Button>
//           </div>
//         </nav> */}
//       </div>
//     </header>
//   );
// }

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { ChevronRight, ChevronDown } from "lucide-react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";

// const programmes = [
//   {
//     title: "Business",
//     href: "/programmes/business",
//     items: [
//       { title: "BBA", href: "/programmes/business/bba" },
//       { title: "MBA", href: "/programmes/business/mba" },
//     ],
//   },
//   {
//     title: "Computers",
//     href: "/programmes/computers",
//     items: [
//       { title: "BCA", href: "/programmes/computers/bca" },
//       { title: "MCA", href: "/programmes/computers/mca" },
//     ],
//   },
// ];

// const courses = [
//   {
//     title: "Undergraduate Course",
//     href: "/courses/undergraduate",
//     items: [
//       { title: "BA Pass", href: "/courses/undergraduate/ba-pass" },
//       { title: "B.Sc Medical", href: "/courses/undergraduate/bsc-medical" },
//       {
//         title: "B.Sc Non-Medical",
//         href: "/courses/undergraduate/bsc-non-medical",
//       },
//       { title: "B.Com Pass", href: "/courses/undergraduate/bcom-pass" },
//       { title: "B.Com Hons", href: "/courses/undergraduate/bcom-hons" },
//       { title: "BBA", href: "/courses/undergraduate/bba" },
//     ],
//   },
//   {
//     title: "Graduate Courses",
//     href: "/courses/graduate",
//     items: [
//       { title: "M.Sc Chemistry", href: "/courses/graduate/msc-chemistry" },
//       { title: "M.Sc Physics", href: "/courses/graduate/msc-physics" },
//       { title: "M.Sc Math", href: "/courses/graduate/msc-math" },
//       { title: "M.Com", href: "/courses/graduate/mcom" },
//       { title: "M.A English", href: "/courses/graduate/ma-english" },
//       { title: "M.A Hindi", href: "/courses/graduate/ma-hindi" },
//       { title: "M.A History", href: "/courses/graduate/ma-history" },
//     ],
//   },
// ];

// function MultiLevelDropdown({ items, title }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSubmenu, setActiveSubmenu] = useState(null);

//   return (
//     <div
//       className="relative"
//       onMouseLeave={() => {
//         setIsOpen(false);
//         setActiveSubmenu(null);
//       }}
//     >
//       <button
//         className={navigationMenuTriggerStyle()}
//         onMouseEnter={() => setIsOpen(true)}
//       >
//         {title}
//         <ChevronDown className="ml-1 h-3 w-3" />
//       </button>

//       {isOpen && (
//         <div className="absolute left-0 top-7 z-50 mt-2 min-w-[220px] rounded-md border bg-popover p-1 shadow-md">
//           {items.map((item) => (
//             <div
//               key={item.title}
//               className="relative"
//               onMouseEnter={() => setActiveSubmenu(item.title)}
//             >
//               <div className="flex items-center justify-between rounded-sm px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
//                 <span>{item.title}</span>
//                 <ChevronRight className="h-4 w-4" />
//               </div>
//               {activeSubmenu === item.title && (
//                 <div className="absolute left-full top-0 z-50 min-w-[220px] rounded-md border bg-popover p-1 shadow-md">
//                   {item.items.map((subItem) => (
//                     <Link
//                       key={subItem.title}
//                       href={subItem.href}
//                       className="block rounded-sm px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
//                     >
//                       {subItem.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export function Header() {
//   return (
//     <header className="w-full bg-white">
//       <div className="bg-[#2A2A8F] text-white py-2 px-4">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between text-sm text-center">
//           <a href="mailto:info@ncsdt.com" className="hover:text-gray-200">
//             info@ncsdt.com
//           </a>
//           <div className="flex flex-col md:flex-row gap-4">
//             <a href="tel:+919896507237" className="hover:text-gray-200">
//               +91 9896507237
//             </a>
//             <span>
//               National College for Skill Development and Training Sector 20,
//               Purkhas Road, Near Sugar Mill, Sonipat, Haryana 131001
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="container mx-auto py-4 px-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-8">
//             <Link href="/">
//               <img
//                 src="/images/logo.jpeg"
//                 alt="College Logo Left"
//                 className="h-32 w-auto"
//               />
//             </Link>
//             <h1 className="text-[#2A2A8F] text-base sm:text-2xl font-bold">
//               National College for Skill Development and Training
//             </h1>
//           </div>
//         </div>
//         <NavigationMenu className="hidden sm:block">
//           <NavigationMenuList className="gap-6">
//             <NavigationMenuItem>
//               <Link href="/" legacyBehavior passHref>
//                 <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                   Home
//                 </NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <Link href="/About" legacyBehavior passHref>
//                 <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                   About
//                 </NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <MultiLevelDropdown items={programmes} title="Programmes" />
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <MultiLevelDropdown items={courses} title="Courses" />
//             </NavigationMenuItem>
//             {/* <NavigationMenuItem>
//               <Link href="/" legacyBehavior passHref>
//                 <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                   Placement
//                 </NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem> */}
//             <NavigationMenuItem>
//               <Link href="/Gallery" legacyBehavior passHref>
//                 <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                   Gallery
//                 </NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <Link href="/Contact" legacyBehavior passHref>
//                 <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                   Contact
//                 </NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem>
//           </NavigationMenuList>
//         </NavigationMenu>
//       </div>
//     </header>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const programmes = [
  {
    title: "Business",
    href: "/programmes/business",
    items: [
      { title: "BBA", href: "/programmes/business/bba" },
      { title: "MBA", href: "/programmes/business/mba" },
    ],
  },
  {
    title: "Computers",
    href: "/programmes/computers",
    items: [
      { title: "BCA", href: "/programmes/computers/bca" },
      { title: "MCA", href: "/programmes/computers/mca" },
    ],
  },
];

const courses = [
  {
    title: "Undergraduate Course",
    href: "/courses/undergraduate",
    items: [
      { title: "BA Pass", href: "/courses/undergraduate/ba-pass" },
      { title: "B.Sc Medical", href: "/courses/undergraduate/bsc-medical" },
      {
        title: "B.Sc Non-Medical",
        href: "/courses/undergraduate/bsc-non-medical",
      },
      { title: "B.Com Pass", href: "/courses/undergraduate/bcom-pass" },
      { title: "B.Com Hons", href: "/courses/undergraduate/bcom-hons" },
      { title: "BBA", href: "/courses/undergraduate/bba" },
    ],
  },
  {
    title: "Graduate Courses",
    href: "/courses/graduate",
    items: [
      { title: "M.Sc Chemistry", href: "/courses/graduate/msc-chemistry" },
      { title: "M.Sc Physics", href: "/courses/graduate/msc-physics" },
      { title: "M.Sc Math", href: "/courses/graduate/msc-math" },
      { title: "M.Com", href: "/courses/graduate/mcom" },
      { title: "M.A English", href: "/courses/graduate/ma-english" },
      { title: "M.A Hindi", href: "/courses/graduate/ma-hindi" },
      { title: "M.A History", href: "/courses/graduate/ma-history" },
    ],
  },
];

function MultiLevelDropdown({ items, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  return (
    <div
      className="relative"
      onMouseLeave={() => {
        setIsOpen(false);
        setActiveSubmenu(null);
      }}
    >
      <button
        className={navigationMenuTriggerStyle()}
        onMouseEnter={() => setIsOpen(true)}
      >
        {title}
        <ChevronDown className="ml-1 h-3 w-3" />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-7 z-50 mt-2 min-w-[220px] rounded-md border bg-popover p-1 shadow-md">
          {items.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setActiveSubmenu(item.title)}
            >
              <div className="flex items-center justify-between rounded-sm px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
                <span>{item.title}</span>
                <ChevronRight className="h-4 w-4" />
              </div>
              {activeSubmenu === item.title && (
                <div className="absolute left-full top-0 z-50 min-w-[220px] rounded-md border bg-popover p-1 shadow-md">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className="block rounded-sm px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileDropdown({ items, title, onItemClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  return (
    <div className="w-full">
      <button
        className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-[#3A3A9F] transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white font-medium">{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-white transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#3A3A9F] px-2">
          {items.map((item) => (
            <div key={item.title} className="border-l-2 border-white/20 ml-4">
              <button
                className="flex items-center justify-between w-full px-4 py-2 text-left hover:bg-[#4A4AAF] transition-colors duration-200"
                onClick={() =>
                  setActiveSubmenu(
                    activeSubmenu === item.title ? null : item.title
                  )
                }
              >
                <span className="text-white text-sm">{item.title}</span>
                <ChevronRight
                  className={`h-3 w-3 text-white transition-transform duration-200 ${
                    activeSubmenu === item.title ? "rotate-90" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeSubmenu === item.title
                    ? "max-h-64 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-[#4A4AAF] ml-4">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className="block px-4 py-2 text-white text-sm hover:bg-[#5A5ABF] transition-colors duration-200 border-l-2 border-white/10"
                      onClick={onItemClick}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-white relative">
      {/* Top Contact Bar */}
      <div className="bg-[#2A2A8F] text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between text-sm text-center">
          <a
            href="mailto:info@ncsdt.com"
            className="hover:text-gray-200 flex items-center justify-center gap-1"
          >
            <Mail className="h-3 w-3" />
            info@ncsdt.com
          </a>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <a
              href="tel:+919896507237"
              className="hover:text-gray-200 flex items-center gap-1"
            >
              <Phone className="h-3 w-3" />
              +91 9896507237
            </a>
            <span className="text-xs md:text-sm">
              National College for Skill Development and Training Sector 20,
              Purkhas Road, Near Sugar Mill, Sonipat, Haryana 131001
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            <Link href="/">
              <img
                src="/images/logo.jpeg"
                alt="College Logo Left"
                className="h-20 md:h-32 w-auto"
              />
            </Link>
            <h1 className="text-[#2A2A8F] text-sm md:text-base lg:text-2xl font-bold leading-tight">
              National College for Skill Development and Training
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden z-50 relative p-2 rounded-lg bg-[#2A2A8F] text-white hover:bg-[#3A3A9F] transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div
              className={`transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-180" : ""
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden sm:block mt-4">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/About" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <MultiLevelDropdown items={programmes} title="Programmes" />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <MultiLevelDropdown items={courses} title="Courses" />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/Gallery" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Gallery
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/Contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 sm:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#2A2A8F] z-50 transform transition-transform duration-300 ease-in-out sm:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <h2 className="text-white font-bold text-lg">Menu</h2>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto">
            <nav className="py-4">
              <Link
                href="/"
                className="block px-4 py-3 text-white font-medium hover:bg-[#3A3A9F] transition-colors duration-200 border-b border-white/10"
                onClick={closeMobileMenu}
              >
                Home
              </Link>

              <Link
                href="/About"
                className="block px-4 py-3 text-white font-medium hover:bg-[#3A3A9F] transition-colors duration-200 border-b border-white/10"
                onClick={closeMobileMenu}
              >
                About
              </Link>

              <div className="border-b border-white/10">
                <MobileDropdown
                  items={programmes}
                  title="Programmes"
                  onItemClick={closeMobileMenu}
                />
              </div>

              <div className="border-b border-white/10">
                <MobileDropdown
                  items={courses}
                  title="Courses"
                  onItemClick={closeMobileMenu}
                />
              </div>

              <Link
                href="/Gallery"
                className="block px-4 py-3 text-white font-medium hover:bg-[#3A3A9F] transition-colors duration-200 border-b border-white/10"
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>

              <Link
                href="/Contact"
                className="block px-4 py-3 text-white font-medium hover:bg-[#3A3A9F] transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-white/20">
            <div className="space-y-2">
              <a
                href="tel:+919896507237"
                className="flex items-center gap-2 text-white text-sm hover:text-gray-200"
              >
                <Phone className="h-4 w-4" />
                +91 9896507237
              </a>
              <a
                href="mailto:info@ncsdt.com"
                className="flex items-center gap-2 text-white text-sm hover:text-gray-200"
              >
                <Mail className="h-4 w-4" />
                info@ncsdt.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
