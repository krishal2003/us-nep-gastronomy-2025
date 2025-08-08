import Link from "next/link";
import {
  Leaf,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6"></div>
          <h3 className="text-2xl lg:text-3xl font-light tracking-wide text-gray-800 mb-4">
            STAY CONNECTED
          </h3>
          <p className="text-base lg:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Subscribe for updates on the US–Nepal Gastronomy Exchange 2025, chef
            announcements, exclusive experiences, and sponsorship opportunities.
          </p>

          <div className="flex justify-center items-center px-4">
            <form className="w-full max-w-md">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-sm lg:text-base text-center sm:text-left"
                  required
                />
                <Button
                  type="submit"
                  className="px-6 py-3 w-full sm:w-auto bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm lg:text-base font-medium"
                >
                  SUBSCRIBE
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <h4 className="text-lg font-medium text-gray-800 mb-6 tracking-wide">
                US–NEPAL GASTRONOMY CHEFS ASSOCIATION
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                  <div className="text-gray-700 text-sm lg:text-base">
                    <p>Kathmandu, Nepal</p>
                    <p>Global Culinary Exchange</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  <span className="text-gray-700 text-sm lg:text-base">
                    +977 1 4444444
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  <a
                    href="mailto:info@usnepalgastronomyexchange.org"
                    className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base break-all"
                  >
                    info@usnepalgastronomyexchange.org
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-6 tracking-wide">
                NAVIGATION
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/events"
                    className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chefs"
                    className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base"
                  >
                    Chefs
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-6 tracking-wide">
                KEY DATES
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-800 font-medium mb-1 text-sm lg:text-base">
                    Kathmandu Gala Dinner
                  </p>
                  <p className="text-gray-700 text-xs lg:text-sm">
                    November 9, 2025
                  </p>
                </div>
                <div>
                  <p className="text-gray-800 font-medium mb-1 text-sm lg:text-base">
                    Everest Cookout
                  </p>
                  <p className="text-gray-700 text-xs lg:text-sm">
                    November 11, 2025
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="https://www.uddheshyagroup.com/"
                    className="text-gray-700 hover:text-gray-900 transition-colors text-xs lg:text-sm"
                    target="_blank"
                  >
                    Attend / Register
                  </Link>
                </div>
              </div>
            </div>

            {/* Recognition & Social */}
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-6 tracking-wide">
                RECOGNITION
              </h4>
              <div className="space-y-3 mb-6">
                <p className="text-gray-700 text-xs lg:text-sm">
                  Cultural Diplomacy Platform
                </p>
                <p className="text-gray-700 text-xs lg:text-sm">
                  Global Culinary Collaboration
                </p>
                <p className="text-gray-700 text-xs lg:text-sm">
                  Elevating Nepali Cuisine
                </p>
              </div>

              <h5 className="text-base font-medium text-gray-800 mb-4 tracking-wide">
                FOLLOW US
              </h5>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/us_nepal_gastronomy/?igsh=MTZsZ2JzbTdieW4wZw%3D%3D#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  target="_blank"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/people/US-Nepal-Gastronomy/pfbid02BKCuFwUir2cchmuiM4E8uTqFVDTK3Ax89v5tEthbKBBgqcm2nuXTXyM2HWf3riiEl/?mibextid=wwXIfr&rdid=hq0TWBUi2KIkWxOE&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Az1yCvjAq%2F%3Fmibextid%3DwwXIfr"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  target="_blank"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/us-nepal-gastronomy-a91888375/"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  target="_blank"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">Linkedin</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-6 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-xs text-gray-600 tracking-wide text-center md:text-left">
                © 2025 US–NEPAL GASTRONOMY EXCHANGE. ALL RIGHTS RESERVED.
              </p>
              <div className="flex space-x-4 text-xs">
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="text-xs text-gray-600">
              <Link
                href="https://uddheshyagroup.com/"
                className="hover:text-gray-900 transition-colors"
                target="_blank"
              >
                Made by Uddheshya Group{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
