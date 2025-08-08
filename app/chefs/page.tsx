import MobileNav from "@/components/mobile-nav";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function ChefsPage() {
  const chefs = [
    {
      name: "Chef Arjun Ranabhat",
      position: "President, US-Nepal Gastronomy Chefs Association",
      image: "/arjun.jpg", // Replace with real image path
      featured: true,
    },
    {
      name: "Chef Florian Bellanger",
      position: "International Chef",
      image: "/florian.png",
    },
    {
      name: "Chef Bertrand Bouquin",
      position: "International Chef",
      image: "/bertand.png",
    },
    {
      name: "Chef Alexandre Seinee",
      position: "International Chef",
      image: "/seine.png",
    },
    {
      name: "Chef Pierre Weller",
      position: "International Chef",
      image: "/chefs/pierre.jpg",
    },
    {
      name: "Chef Taylor Fernandes",
      position: "International Chef",
      image: "/chefs/taylor.jpg",
    },
    {
      name: "Chef Robin Ferraro",
      position: "International Chef",
      image: "/chefs/robin.jpg",
    },
    {
      name: "Dr. Bruno Goussault",
      position: "Food Scientist & Culinary Innovator",
      image: "/chefs/bruno_goussault.jpg",
    },
    {
      name: "Chef Ram Thapa",
      position: "Nepali Culinary Expert",
      image: "/chefs/ram.jpg",
    },
    {
      name: "Chef Bruno Bertin",
      position: "International Chef",
      image: "/chefs/bruno_bertin.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <MobileNav />

      <main className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-gray-800 mb-6">
              OUR CULINARY TEAM
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Meet the visionary talents bringing excellence, creativity, and
              cultural pride to the US-Nepal Gastronomy Exchange 2025.
            </p>
          </div>

          {/* Featured Chef */}
          <div className="mb-16 lg:mb-20">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                  <img
                    src={chefs[0].image}
                    alt={chefs[0].name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-gray-50">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-gray-800 mb-4">
                    {chefs[0].name}
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-600 mb-6 tracking-wide">
                    {chefs[0].position}
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
                    Chef Arjun Ranabhat is a visionary culinary leader known for
                    blending French technique with Nepali flavors. With global
                    experience and deep cultural roots, he leads the
                    association’s mission to elevate Nepali cuisine on the world
                    stage through innovation, education, and cross-cultural
                    collaboration.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Chef Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20">
            {chefs.slice(1).map((chef, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardContent className="p-6 text-center bg-white">
                  <h3 className="text-lg sm:text-xl font-medium tracking-wide text-gray-800 mb-2">
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
          <div className="bg-gray-50 rounded-lg p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-gray-800 mb-6 lg:mb-8">
              OUR PHILOSOPHY
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
              We are a collaborative community of global chefs united by our
              commitment to culinary innovation, cultural diplomacy, and the
              global elevation of Nepali cuisine.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Through this event, we celebrate the fusion of French technique
              and Nepali tradition, showcase indigenous ingredients, and create
              unforgettable experiences rooted in hospitality, storytelling, and
              taste.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
