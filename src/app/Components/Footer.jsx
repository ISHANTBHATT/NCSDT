import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const items = [
    { title: "BA Pass", href: "/courses/undergraduate/ba-pass" },
    { title: "B.Sc Medical", href: "/courses/undergraduate/bsc-medical" },
    {
      title: "B.Sc Non-Medical",
      href: "/courses/undergraduate/bsc-non-medical",
    },
    { title: "B.Com Pass", href: "/courses/undergraduate/bcom-pass" },
    { title: "B.Com Hons", href: "/courses/undergraduate/bcom-hons" },
    { title: "BBA", href: "/courses/undergraduate/bba" },
  ];

  const graduate = [
    { title: "M.Sc Chemistry", href: "/courses/graduate/msc-chemistry" },
    { title: "M.Sc Physics", href: "/courses/graduate/msc-physics" },
    { title: "M.Sc Math", href: "/courses/graduate/msc-math" },
    { title: "M.Com", href: "/courses/graduate/mcom" },
    { title: "M.A English", href: "/courses/graduate/ma-english" },
    { title: "M.A Hindi", href: "/courses/graduate/ma-hindi" },
    { title: "M.A History", href: "/courses/graduate/ma-history" },
  ];
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <p className="mb-4">
              We are passionate education dedicated to providing high-quality
              resource learners at backgrounds.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-12 h-12" />
              <span>
                National College for Skill Development and Training Sector 20,
                Purkhas Road, Near Sugar Mill, Sonipat, Haryana 131001
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Phone className="w-5 h-5" />
              <span>+91 9896507237</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Menu</h3>
            <ul className=" text-gray-400 flex flex-col gap-2">
              <Link href="/">
                <li className="hover:text-white cursor-pointer">Home</li>
              </Link>
              <Link href="/About">
                <li className="hover:text-white cursor-pointer">About</li>
              </Link>
              <Link href="/Gallery">
                <li className="hover:text-white cursor-pointer">Gallery</li>
              </Link>
              <Link href="/Contact">
                <li className="hover:text-white cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Undergraduate Course</h3>
            <ul className="flex flex-col gap-2 text-gray-400">
              {items.map((item) => (
                <Link key={item.title} href={item.href}>
                  <li className="hover:text-white cursor-pointer">
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Graduate Course</h3>
            <ul className="flex flex-col gap-2 text-gray-400">
              {graduate.map((item) => (
                <Link key={item.title} href={item.href}>
                  <li className="hover:text-white cursor-pointer">
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm border-t border-gray-800 pt-8">
          Copyright © 1987 All Rights Reserved by NCSDT
        </div>
      </div>
    </footer>
  );
}
