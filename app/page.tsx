import Image from "next/image";
import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MobileNav from "@/components/mobile-nav";
import Footer from "@/components/footer";
import Link from "next/link";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <MobileNav />

      {/* Main Content */}
      <main className="px-4 sm:px-6 py-8 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium  tracking-wide text-[#6a3341]  mb-8">
              GALA DINNER
            </h2>
            <div className="w-24 h-px bg-[#31161d] mx-auto mb-8"></div>
            <p className="text-base lg:text-lg text-[#6a3341] max-w-3xl mx-auto">
              An elegant, high-profile rooftop dinner in Kathmandu co-created by
              international Michelin-starred chefs and top Nepali culinary
              talent. Join us for a night of flavor, culture, and storytelling
              through food.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20 items-stretch">
            <div className="flex">
              <Image
                src="/aloft.jpeg"
                alt="Gala Dinner Rooftop Venue in Kathmandu"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <h3 className="text-xl lg:text-2xl font-medium tracking-wide text-[#6a3341]">
                A Night of Culinary Diplomacy
              </h3>
              <p className="text-base lg:text-lg leading-relaxed text-[#6a3341]">
                Held at one of Kathmandu’s most scenic venue, Aloft Hotel — this
                immersive experience blends Nepal’s cultural richness with
                modern sophistication.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-[#d7a604]" />
                  <span className="text-[#6a3341]">
                    Limited guest list of culinary VIPs
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[#d7a604]" />
                  <span className="text-[#6a3341]">Thamel, Kathmandu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-[#d7a604]" />
                  <span className="text-[#6a3341]">November 9, 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gala Experience Highlights */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-xl lg:text-2xl font-medium tracking-wide text-[#6a3341] mb-6 text-center">
              WHAT TO EXPECT
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-base lg:text-lg font-medium text-[#6a3341] mb-4">
                  DINING EXPERIENCE
                </h4>
                <ul className="space-y-2 text-[#6a3341] list-disc list-inside marker:text-[#d7a604]">
                  <li>
                    Five-course fusion menu (French technique + Nepali
                    ingredients)
                  </li>
                  <li>Wine pairings curated by global sommeliers</li>
                  <li>Rare ingredients: yak cheese, gundruk, truffle</li>
                  <li>Live chef storytelling and presentations</li>
                </ul>
              </div>
              <div>
                <h4 className="text-base lg:text-lg font-medium text-[#6a3341] mb-4">
                  EVENT ATMOSPHERE
                </h4>
                <ul className="space-y-2 text-[#6a3341] list-disc list-inside marker:text-[#d7a604]">
                  <li>Scenic rooftop location</li>
                  <li>Elegant lighting and curated décor</li>
                  <li>Cultural performances and live music</li>
                  <li>
                    Guest list includes hoteliers, food media & cultural icons
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-xl lg:text-2xl font-light tracking-wide text-[#6a3341] mb-6">
              BE PART OF THE EXPERIENCE
            </h3>
            <p className="text-base lg:text-lg text-[#6a3341] mb-8 max-w-2xl mx-auto">
              Celebrate the future of gastronomy and cultural diplomacy. Reserve
              your seat at one of the most talked-about culinary events of 2025.
            </p>
            <Link href="https://www.uddheshyagroup.com/" target="_blank">
              <Button className="bg-[#6a3341] hover:bg-[#582935] text-white px-8 py-3 cursor-pointer">
                INQUIRE TICKETS
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
