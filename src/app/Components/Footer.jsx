import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
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
              <span>485-826-710</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Campus</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Academics</li>
              <li className="hover:text-white cursor-pointer">
                Planning & Admission
              </li>
              <li className="hover:text-white cursor-pointer">Campus Safety</li>
              <li className="hover:text-white cursor-pointer">Faculty</li>
              <li className="hover:text-white cursor-pointer">
                Human Resources
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Campus</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Admission</li>
              <li className="hover:text-white cursor-pointer">Scholarship</li>
              <li className="hover:text-white cursor-pointer">Tuition Fee</li>
              <li className="hover:text-white cursor-pointer">
                Fitness Athletics
              </li>
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
