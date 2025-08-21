"use client";

import type React from "react";
import { useState } from "react";
import MobileNav from "@/components/mobile-nav";
import Footer from "@/components/footer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/gallery/gala-dinner-1.jpg",
      alt: "Kathmandu Gala Dinner - Rooftop Ambiance",
      category: "Event",
    },
    {
      src: "/gallery/everest-cookout.jpg",
      alt: "Everest Cookout",
      category: "Adventure",
    },
    {
      src: "/gallery/chef-action.jpg",
      alt: "Chefs Collaborating in the Kitchen",
      category: "Culinary Team",
    },
    {
      src: "/gallery/nepali-ingredients.jpg",
      alt: "Showcase of Indigenous Nepali Ingredients",
      category: "Cuisine",
    },
    {
      src: "/gallery/wine-pairing.jpg",
      alt: "Wine Pairing with Himalayan Dishes",
      category: "Cuisine",
    },
    {
      src: "/gallery/live-demo.jpg",
      alt: "Live Culinary Presentation by Michelin Chef",
      category: "Experience",
    },
    {
      src: "/gallery/guest-experience.jpg",
      alt: "Guest Immersion at the Gala",
      category: "Audience",
    },
    {
      src: "/gallery/momo-innovation.jpg",
      alt: "Modern Twist on Buff Momo",
      category: "Cuisine",
    },
    {
      src: "/gallery/chefs-rooftop.jpg",
      alt: "Chef Team on the Kathmandu Rooftop Venue",
      category: "Culinary Team",
    },
    {
      src: "/gallery/landscape.jpg",
      alt: "Culinary Setup at Everest ",
      category: "Adventure",
    },
    {
      src: "/gallery/kitchen-presentation.jpg",
      alt: "Michelin Chef Presenting His Creation",
      category: "Experience",
    },
    {
      src: "/gallery/cultural-moment.jpg",
      alt: "Celebration of Culture and Food",
      category: "Culture",
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  return (
    <div className="min-h-screen bg-white">
      <MobileNav />

      <main className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-[#6a3341] mb-6">
              GALLERY
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#6a3341] max-w-3xl mx-auto leading-relaxed">
              Experience the spirit, flavor, and cultural elegance of the
              US–Nepal Gastronomy 2025 through our gallery.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 mb-16 lg:mb-20">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-48 sm:h-56 lg:h-64 xl:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-lg sm:text-xl font-medium mb-2">
                      {image.alt}
                    </p>
                    <p className="text-xs sm:text-sm tracking-wide opacity-90">
                      {image.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div className="bg-gray-50 rounded-lg p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-[#6a3341] mb-6 lg:mb-8">
              THE EXPERIENCE
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#6a3341] max-w-4xl mx-auto leading-relaxed mb-6">
              From a glamorous rooftop gala to a historic cookout at Everest,
              this event celebrates cultural diplomacy, food innovation, and the
              elevation of Nepali cuisine.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-[#6a3341] max-w-4xl mx-auto leading-relaxed">
              Guests are immersed in hands-on culinary stories, rare
              ingredients, and Michelin-level excellence — blending tradition
              and technique at the highest level, both literally and
              figuratively.
            </p>
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:bg-white/20 p-2"
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="sm"
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 p-2"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 p-2"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-center text-white">
              <p className="text-lg sm:text-xl font-medium mb-1">
                {galleryImages[selectedImage].alt}
              </p>
              <p className="text-sm opacity-90">
                {galleryImages[selectedImage].category}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
