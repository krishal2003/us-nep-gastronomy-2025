import MobileNav from "@/components/mobile-nav";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import Contact from "@/components/Contact";
import { Link } from "lucide-react";

export default function ChefsPage() {
  const chefs = [
    {
      name: "Chef Arjun Ranabhat",
      position: "President, US-Nepal Gastronomy Chefs Association",
      image: "/arjun.jpeg",
      featured: true,
    },
    {
      name: "Chef Ram Thapa",
      position: "Vice President",
      image: "/.png",
    },
    {
      name: "Chef Bruno Bertin",
      position: "Brand Ambassador",
      image: "/.png",
    },
    {
      name: "Chef Rajeev Shrestha",
      position: "Ambassador of Nepal",
      image: "/rajeev.jpeg",
    },
    {
      name: "Chef Florian Bellangaer",
      position: "Renowned Pastry Chef & Food Network Judge",
      image: "/florian.png",
    },
    {
      name: "Chef Bruno Bertin",
      position: "Vice President of Innovation Cuisine Solutions",
      image: "/chefs/pierre.jpg",
    },
    {
      name: "Chef Bertrand Bouquin",
      position: "Culinary Director at Desert Mountain",
      image: "/bertand.png",
    },
    {
      name: "Chef Taylor Fernandes",
      position:
        "Senior Manager of R&D, Food & Beverage Innovation at Starbucks",
      image: "/chefs/robin.pp",
    },
    {
      name: "Chef Sylvie Grucker",
      position: "Culinary Innovator, Le Pressoir de Bacchus",
      image: "/chefs/bruno_goussault.jpg",
    },
    {
      name: "Chef Alexandre Seinee",
      position: "Executive Chef at Ladurée Beverly Hills",
      image: "/chefs/ram.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <MobileNav />
      <main className="px-4 sm:px-6 py-8 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium  tracking-wide text-[#6a3341]  mb-8">
              CHEFS{" "}
            </h2>
            <div className="w-24 h-px bg-[#31161d] mx-auto mb-8"></div>

            <p className="text-lg sm:text-xl lg:text-2xl text-[#6a3341]/90 max-w-3xl mx-auto leading-relaxed">
              Meet the visionary talents bringing excellence, creativity, and
              cultural pride to the US-Nepal Gastronomy 2025.
            </p>
          </div>

          {/* Featured Chef */}
          <div className="mb-20 lg:mb-28">
            <Card className="overflow-hidden border-0 shadow-2xl rounded-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Section */}
                <div className="relative h-80 sm:h-96 lg:h-[34rem] overflow-hidden">
                  <img
                    src={chefs[0].image}
                    alt={chefs[0].name}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-[#6a3341] mb-3">
                    {chefs[0].name}
                  </h2>
                  <p className="text-lg sm:text-xl lg:text-2xl text-[#6a3341]/90 mb-6 font-medium">
                    {chefs[0].position}
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl text-[#6a3341] leading-relaxed mb-8">
                    Chef Arjun Ranabhat, President of the US-Nepal Gastronomy
                    Chefs Association, is a visionary culinary leader known for
                    blending French technique with Nepali flavors. With global
                    experience and deep cultural roots, he leads the
                    association’s mission to elevate Nepali cuisine on the world
                    stage through innovation, education, and cross-cultural
                    collaboration.
                  </p>

                  {/* Example Button */}
                  <div>
                    <button className="px-6 py-3 bg-[#6a3341] text-white rounded-xl shadow hover:bg-[#542832] transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Chef Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20 lg:mb-28">
            {chefs.slice(1).map((chef, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-md rounded-xl"
              >
                <div className="relative overflow-hidden flex justify-center items-center p-4">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-40 h-40 rounded-full object-cover object-center transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-6 text-center bg-white">
                  <h3 className="text-lg sm:text-xl font-semibold tracking-wide text-gray-800 mb-2">
                    {chef.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 tracking-wide">
                    {chef.position}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team Philosophy */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md p-10 sm:p-14 lg:p-20 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-[#6a3341] mb-8">
              OUR PHILOSOPHY
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-[#6a3341]/90 max-w-4xl mx-auto leading-relaxed mb-6">
              We are a collaborative community of global chefs united by our
              commitment to culinary innovation, cultural diplomacy, and the
              global elevation of Nepali cuisine.
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-[#6a3341]/90 max-w-4xl mx-auto leading-relaxed">
              Through this event, we celebrate the fusion of French technique
              and Nepali tradition, showcase indigenous ingredients, and create
              unforgettable experiences rooted in hospitality, storytelling, and
              taste.
            </p>
          </div>
        </div>
      </main>

      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
