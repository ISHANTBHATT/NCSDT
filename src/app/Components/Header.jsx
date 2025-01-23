"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  { title: "Undergraduate", href: "/programmes/undergraduate" },
  { title: "Graduate", href: "/programmes/graduate" },
  { title: "Online Learning", href: "/programmes/online" },
];

const courses = [
  { title: "Computer Science", href: "/courses/computer-science" },
  { title: "Business Administration", href: "/courses/business" },
  { title: "Engineering", href: "/courses/engineering" },
  { title: "Liberal Arts", href: "/courses/liberal-arts" },
];

export function Header() {
  return (
    <header className="w-full bg-white">
      <div className="bg-[#2A2A8F] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between text-sm">
          <a href="mailto:info@hce.com" className="hover:text-gray-200">
            info@hce.com
          </a>
          <div className="flex gap-4">
            <a href="tel:+919999999999" className="hover:text-gray-200">
              +91 9999999999
            </a>
            <span>684 Your Address, India</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img
              src="/images/logo.jpeg"
              alt="College Logo Left"
              className="h-28 w-auto"
            />
            <h1 className="text-[#2A2A8F] text-2xl font-bold">
              National College for Skill Development and Training
            </h1>
          </div>
          {/* <img
            src="/images/logo.jpeg"
            alt="College Logo Right"
            className="h-16 w-auto"
          /> */}
        </div>
        <NavigationMenu>
          <NavigationMenuList>
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
              <NavigationMenuTrigger>Programmes</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px]">
                  {programmes.map((programme) => (
                    <li key={programme.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={programme.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {programme.title}
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[400px]">
                  {courses.map((course) => (
                    <li key={course.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={course.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {course.title}
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Facilities
                </NavigationMenuLink>
              </Link>
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
        {/* <nav className="flex items-center justify-between mt-4">
          <ul className="flex gap-6">
            <li>
              <a href="#" className="hover:text-[#2A2A8F]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2A2A8F]">
                Programmes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2A2A8F]">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2A2A8F]">
                Facilities
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2A2A8F]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2A2A8F]">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2A2A8F]">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Input type="search" placeholder="Search..." className="pl-8" />
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            </div>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav> */}
      </div>
    </header>
  );
}
