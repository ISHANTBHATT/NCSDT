"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const images = [
  { src: "/images/1.jpg", alt: "Campus building" },
  { src: "/images/2.jpg", alt: "Students in class" },
  { src: "/images/3.jpg", alt: "Library" },
  { src: "/images/1.jpg", alt: "Sports field" },
  { src: "/images/2.jpg", alt: "Laboratory" },
  { src: "/images/3.jpg", alt: "Student life" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Our College Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300 hover:opacity-80"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <div className="relative h-[80vh]">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
