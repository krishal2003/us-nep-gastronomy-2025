import Image from "next/image";
import MobileNav from "@/components/mobile-nav";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Mobile Navigation */}
      <MobileNav />

      {/* Main Content */}
      <main className="px-4 sm:px-6 py-8 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-gray-800 mb-6 lg:mb-8">
              OUR STORY
            </h2>
            <div className="w-24 h-px bg-gray-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">
            <div className="order-2 lg:order-1">
              <Image
                src="/gallery/chef-team.jpg"
                alt="US-Nepal Gastronomy Chefs Association"
                width={400}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-4 lg:space-y-6 order-1 lg:order-2">
              <p className="text-base lg:text-lg leading-relaxed text-gray-700">
                The US–Nepal Gastronomy Chefs Association is a collaborative
                platform connecting culinary leaders from Nepal and the United
                States.
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-gray-700">
                Our goal is to promote cultural diplomacy through food, support
                local farmers and producers, and elevate Nepali cuisine on the
                global stage. The association unites Michelin-starred chefs,
                culinary educators, food scientists, and food entrepreneurs
                dedicated to innovation and storytelling through flavor.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-xl lg:text-2xl font-light tracking-wide text-gray-800">
                CHEF ARJUN RANABHAT
              </h3>
              <p className="text-base lg:text-lg leading-relaxed text-gray-700">
                Chef Arjun Ranabhat is the President of the US–Nepal Gastronomy
                Chefs Association and a visionary culinary leader known for his
                innovative fusion of French technique with Nepali tradition.
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-gray-700">
                With global experience and deep cultural roots, Chef Arjun leads
                the movement to bring Nepali flavors into the spotlight through
                collaboration, education, and culinary excellence.
              </p>
            </div>
            <div>
              <Image
                src="/chefs/arjun.jpg"
                alt="Chef Arjun Ranabhat"
                width={400}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl lg:text-2xl font-light tracking-wide text-gray-800 mb-6 lg:mb-8">
              OUR PHILOSOPHY
            </h3>
            <div className="max-w-3xl mx-auto space-y-4 lg:space-y-6">
              <p className="text-base lg:text-lg leading-relaxed text-gray-700">
                We believe that food is a bridge — connecting people, cultures,
                and generations. Through our events, we fuse French culinary
                technique with indigenous Nepali ingredients to tell stories of
                heritage, identity, and innovation.
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-gray-700">
                Our mission is to inspire the next generation of chefs, support
                sustainable local food systems, and celebrate Nepal’s rich
                culinary diversity on every world stage — even the highest one.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
