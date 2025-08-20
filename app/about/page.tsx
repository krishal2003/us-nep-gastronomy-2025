import MobileNav from "@/components/mobile-nav";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <MobileNav />

      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
        <img
          src="/3.jpg"
          alt="Chef Daniel Humm in the kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* Welcome Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-gray-800 mb-8 lg:mb-12">
            WELCOME TO US NEPAL GASTRONOMY 2025
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 lg:mb-12">
            Nestled between the cultural richness of Kathmandu and the
            breathtaking heights of Everest , the US–Nepal Gastronomy Exchange
            2025 is a once-in-a-lifetime celebration of culinary excellence. Led
            by Chef Arjun Ranabhat and a team of Michelin-starred chefs from
            around the globe, the event blends French technique with Nepali
            ingredients, creating a dining experience that honors tradition
            while redefining innovation on the world stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link href="http://uddheshyagroup.com/" target="_blank">
              <Button className="w-full sm:w-auto px-8 py-3 bg-gray-800 text-white hover:bg-gray-900 transition-colors text-sm lg:text-base">
                MAKE A RESERVATION
              </Button>
            </Link>
            <Link href="/events">
              <Button
                variant="outline"
                className="w-full sm:w-auto px-8 py-3 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors text-sm lg:text-base bg-transparent"
              >
                LEARN MORE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-gray-800 mb-6 lg:mb-8">
                A NEW CHAPTER IN FINE DINING
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                In 2025, the US–Nepal Gastronomy Exchange is setting a bold new
                standard for global cuisine. This is more than an event — it’s a
                reimagining of what fine dining can be when cultures,
                techniques, and ingredients converge at the highest level.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                Our commitment to cultural diplomacy, sustainability, and
                culinary innovation drives everything we do. Each dish tells the
                story of Nepal’s rich heritage, from indigenous flavors like
                jimbu and yak cheese to world-class techniques and luxury
                pairings, creating an unforgettable journey of taste, tradition,
                and creativity.
              </p>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="px-6 py-3 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors text-sm lg:text-base bg-transparent"
                >
                  OUR STORY
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/2.jpg?height=500&width=600"
                alt="Plant-based fine dining"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-gray-800 mb-6">
              THE US–NEPAL GASTRONOMY EXCHANGE EXPERIENCE
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Two extraordinary culinary journeys: an elegant Gala Dinner in
              Kathmandu and a once-in-a-lifetime Everest Cookout, blending
              Nepali heritage with global technique and premium ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-500">
              <CardContent className="p-8 text-center">
                <img
                  src="/aloft.jpeg?height=200&width=300"
                  alt="Kathmandu Gala Dinner"
                  className="w-full h-32 sm:h-40 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl sm:text-2xl font-light tracking-wide text-gray-800 mb-4">
                  KATHMANDU GALA DINNER
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  An intimate five-course evening at a historic or rooftop
                  venue, where Michelin-starred and Nepali chefs co-create
                  dishes that tell the story of cultural fusion, accompanied by
                  live storytelling and curated wine pairings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-500">
              <CardContent className="p-8 text-center">
                <img
                  src="/everest.jpg?height=200&width=300"
                  alt="Everest Cookout"
                  className="w-full h-32 sm:h-40 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl sm:text-2xl font-light tracking-wide text-gray-800 mb-4">
                  EVEREST COOKOUT
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  A groundbreaking high-altitude cookout showcasing Nepali
                  cuisine on the world’s highest stage, combining indigenous
                  ingredients with international chef expertise to create
                  powerful media and cultural moments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-500">
              <CardContent className="p-8 text-center">
                <img
                  src="/ing.avif?height=200&width=300"
                  alt="Ingredients & Pairings"
                  className="w-full h-32 sm:h-40 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl sm:text-2xl font-light tracking-wide text-gray-800 mb-4">
                  INGREDIENTS & PAIRINGS
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  A curated tasting journey featuring rare Nepali ingredients
                  like jimbu, gundruk, yak cheese alongside luxury elements such
                  as truffles and fine wines, with chefs presenting the stories
                  and techniques behind each course.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <img
                src="/4.jpg?height=500&width=600"
                alt="Chef Daniel Humm"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-gray-800 mb-6 lg:mb-8">
                CHEF ARJUN RANABHAT
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                Chef Arjun Ranabhat, President of the US–Nepal Gastronomy Chefs
                Association, is a visionary culinary leader celebrated for
                blending refined French techniques with the soulful flavors of
                Nepal. With extensive global experience and deep cultural roots,
                he leads the mission to elevate Nepali cuisine on the world
                stage through innovation, education, and cross-cultural
                collaboration.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                His dedication to cultural diplomacy, sustainable sourcing, and
                culinary excellence has inspired chefs worldwide to explore
                Nepal’s rich ingredients and traditions in new and creative
                ways.
              </p>
              <Link href="/chefs">
                <Button
                  variant="outline"
                  className="px-6 py-3 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors text-sm lg:text-base bg-transparent"
                >
                  MEET THE TEAM
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-gray-800 mb-6 lg:mb-8">
            RESERVE YOUR TABLE
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 lg:mb-12">
            Join us for an unforgettable dining experience that celebrates the
            artistry of Nepali cuisine. Reservations are available for the
            Kathmandu Gala Dinner on November 8 and the Everest Cookout on
            November 10, 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link href="https://www.uddheshyagroup.com/">
              <Button className="w-full sm:w-auto px-8 py-4 bg-gray-800 text-white hover:bg-gray-900 transition-colors text-base lg:text-lg">
                DINNER RESERVATIONS
              </Button>
            </Link>
            <Link href="/events">
              <Button
                variant="outline"
                className="w-full sm:w-auto px-8 py-4 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors text-base lg:text-lg bg-transparent"
              >
                GALA DINNER{" "}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
