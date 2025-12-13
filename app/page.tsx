"use client";

import MobileNav from "@/components/mobile-nav";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Contact from "@/components/Contact";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import Slider from "react-slick"; // add react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  // Popover opens automatically on page load
  useEffect(() => {
    setOpen(true);
  }, []);

  const heroImages = [
    { src: "/gg.jpg", alt: "Dining Hall" },
    { src: "/cc.jpg", alt: "Fine Dining Dish" },
    { src: "/jj.jpg", alt: "Chef Creation" },
    { src: "/ff.jpg", alt: "Seasonal Ingredients" },
    { src: "/nn.jpg", alt: "Table Setup" },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Popover */}
      {/* <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 max-w-lg rounded-2xl overflow-hidden">
          <img
            src="/101.jpeg"
            alt="Promotion"
            className="w-full h-auto object-cover"
          />
        </DialogContent>
      </Dialog> */}
      <MobileNav />
      {/* Hero Section with Slider */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
        <Slider {...sliderSettings} className="h-full">
          {heroImages.map((img, idx) => (
            <div key={idx} className="h-[60vh] sm:h-[70vh] lg:h-[80vh]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute inset-0 bg-black/20" />
      </section>
      {/* Welcome Sections */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide text-[#6a3341] mb-8 lg:mb-12">
            WELCOME TO US NEPAL GASTRONOMY 2025
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#6a3341] leading-relaxed mb-8 lg:mb-12">
            Nestled between the cultural richness of Kathmandu and the
            breathtaking heights of Everest, the US–Nepal Gastronomy 2025 is a
            once-in-a-lifetime celebration of culinary excellence. Led by Chef
            Arjun Ranabhat and a team of Michelin-starred chefs from around the
            globe, the event blends French technique with Nepali ingredients,
            creating a dining experience that honors tradition while redefining
            innovation on the world stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link href="http://eleven11np.com/" target="_blank">
              <Button className="w-full sm:w-auto px-8 py-3 bg-[#6a3341] text-white hover:bg-[#582935] transition-colors text-sm lg:text-base cursor-pointer">
                ENQUIRE TICKETS
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="w-full sm:w-auto px-8 py-3 border-[#6a3341] text-[#6a3341] hover:bg-[#6a3341] hover:text-white transition-colors text-sm lg:text-base bg-transparent cursor-pointer"
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-[#6a3341] mb-6 lg:mb-8">
                A NEW CHAPTER IN FINE DINING
              </h2>
              <p className="text-base sm:text-lg text-[#6a3341] leading-relaxed mb-6">
                In 2025, the US–Nepal Gastronomy is setting a bold new standard
                for global cuisine. This is more than an event — it’s a
                reimagining of what fine dining can be when cultures,
                techniques, and ingredients converge at the highest level.
              </p>
              <p className="text-base sm:text-lg text-[#6a3341] leading-relaxed mb-8">
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
                  className="px-6 py-3 border-[#6a3341] text-[#6a3341] hover:bg-[#6a3341] hover:text-white transition-colors text-sm lg:text-base bg-transparent cursor-pointer"
                >
                  OUR STORY
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/16.jpg?height=500&width=600"
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-[#6a3341] mb-6">
              THE US–NEPAL GASTRONOMY EXPERIENCE
            </h2>
            <p className="text-base sm:text-lg text-[#6a3341] max-w-3xl mx-auto leading-relaxed">
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
                <h3 className="text-xl sm:text-2xl font-light tracking-wide text-[#6a3341] mb-4">
                  KATHMANDU GALA DINNER
                </h3>
                <p className="text-sm sm:text-base text-[#6a3341] leading-relaxed">
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
                <h3 className="text-xl sm:text-2xl font-light tracking-wide text-[#6a3341] mb-4">
                  EVEREST COOKOUT
                </h3>
                <p className="text-sm sm:text-base text-[#6a3341] leading-relaxed">
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
                <h3 className="text-xl sm:text-2xl font-light tracking-wide text-[#6a3341] mb-4">
                  INGREDIENTS & PAIRINGS
                </h3>
                <p className="text-sm sm:text-base text-[#6a3341] leading-relaxed">
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
                src="/arjun.jpeg?height=500&width=600"
                alt="Chef Daniel Humm"
                className="w-full h-64 sm:h-80 lg:h-96 object-scale-down "
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-[#6a3341] mb-6 lg:mb-8">
                CHEF ARJUN RANABHAT
              </h2>
              <p className="text-base sm:text-lg text-[#6a3341] leading-relaxed mb-6">
                Chef Arjun Ranabhat, President of the US–Nepal Gastronomy Chefs
                Association, is a visionary culinary leader celebrated for
                blending refined French techniques with the soulful flavors of
                Nepal. With extensive global experience and deep cultural roots,
                he leads the mission to elevate Nepali cuisine on the world
                stage through innovation, education, and cross-cultural
                collaboration.
              </p>
              <p className="text-base sm:text-lg text-[#6a3341] leading-relaxed mb-8">
                His dedication to cultural diplomacy, sustainable sourcing, and
                culinary excellence has inspired chefs worldwide to explore
                Nepal’s rich ingredients and traditions in new and creative
                ways.
              </p>
              <Link href="/chefs">
                <Button
                  variant="outline"
                  className="px-6 py-3 border-[#6a3341] text-[#6a3341] hover:bg-[#6a3341] cursor-pointer hover:text-white transition-colors text-sm lg:text-base bg-transparent"
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-[#6a3341] mb-6 lg:mb-8">
            RESERVE YOUR TABLE
          </h2>
          <p className="text-base sm:text-lg text-[#6a3341] leading-relaxed mb-8 lg:mb-12">
            Join us for an unforgettable dining experience that celebrates the
            artistry of Nepali cuisine. Reservations are available for the
            Kathmandu Gala Dinner on November 8 and the Everest Cookout on
            November 10, 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link href="#contact">
              <Button className="w-full sm:w-auto px-8 py-4 bg-[#6a3341] text-white hover:bg-[#6a3341] cursor-pointer transition-colors text-base lg:text-lg">
                CONTACT US{" "}
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="w-full sm:w-auto px-8 py-4 border-[#6a3341] text-[#6a3341] hover:bg-[#6a3341] hover:text-white transition-colors text-base lg:text-lg bg-transparent cursor-pointer"
              >
                GALA DINNER{" "}
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Founding Members Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-[#6a3341] mb-12">
            OUR PARTNERS{" "}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Member 1 */}
            <div className="flex flex-col items-center">
              <img
                src="/cuisine.webp"
                alt="Founding Member 1"
                className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/111.png"
                alt="Founding Member 1"
                className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
              />
            </div>

            {/* Member 2 */}

            {/* Member 2 */}
            <div className="flex flex-col items-center">
              <img
                src="/wow.jpg"
                alt="Founding Member 2"
                className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
              />
            </div>

            {/* Member 3 */}
            <div className="flex flex-col items-center">
              <img
                src="/esewa.jpg"
                alt="Founding Member 3"
                className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
              />
            </div>
            {/* Member 4 */}
            <div className="flex flex-col items-center">
              <img
                src="/everyday.jpeg"
                alt="Founding Member 4"
                className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/fortessa.jpeg"
                alt="Founding Member 4"
                className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
              />
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/aloft.png"
                alt="Founding Member 4"
                className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/prime.jpeg"
                alt="Founding Member 2"
                className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Founding Members Section */}
      <br />
      <hr /> <br />
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-[#6a3341] mb-12">
            FOUNDING MEMBERS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Member 1 */}
            <div className="flex flex-col items-center">
              <img
                src="/arjun.jpeg"
                alt="Founding Member 1"
                className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
              />
              <h3 className="text-lg font-medium text-[#6a3341]">
                Arjun Ranabhat
              </h3>
            </div>

            {/* Member 2 */}
            <div className="flex flex-col items-center">
              <img
                src="/bruno.jpg"
                alt="Founding Member 2"
                className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
              />
              <h3 className="text-lg font-medium text-[#6a3341]">
                Bruno Bertin
              </h3>
            </div>

            {/* Member 2 */}
            <div className="flex flex-col items-center">
              <img
                src="/ram.jpg"
                alt="Founding Member 2"
                className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
              />
              <h3 className="text-lg font-medium text-[#6a3341]">Ram Thapa </h3>
            </div>

            {/* Member 3 */}
            <div className="flex flex-col items-center">
              <img
                src="/spandan.png"
                alt="Founding Member 3"
                className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
              />
              <h3 className="text-lg font-medium text-[#6a3341]">
                Spandan Lama Mocktan{" "}
              </h3>
            </div>
            {/* Member 4 */}
            <div className="flex flex-col items-center">
              <img
                src="/nisha.jpeg"
                alt="Founding Member 4"
                className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
              />
              <h3 className="text-lg font-medium text-[#6a3341]">
                Nisha Karki{" "}
              </h3>
            </div>
          </div>
        </div>
      </section>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
