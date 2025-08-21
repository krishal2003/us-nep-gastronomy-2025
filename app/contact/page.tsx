import { MapPin, Phone, Mail, Clock } from "lucide-react";
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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <MobileNav />

      {/* Main Content */}
      <main className="px-4 sm:px-6 py-8 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-[#6a3341] mb-8">
              CONTACT
            </h2>
            <div className="w-24 h-px bg-gray-400 mx-auto mb-8"></div>
            <p className="text-base lg:text-lg text-[#6a3341] max-w-3xl mx-auto">
              Have questions about the US–Nepal Gastronomy 2025? Whether you're
              a guest, sponsor, journalist, or chef — we'd love to hear from
              you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-[#6a3341]">
                <CardHeader>
                  <CardTitle className="text-xl lg:text-2xl font-light tracking-wide flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-[#6a3341]" />
                    LOCATION
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6a3341] leading-relaxed">
                    US–Nepal Gastronomy Secretariat
                    <br />
                    Bakhundhole Heights, Lalitpur
                    <br />
                    Nepal
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#6a3341]">
                <CardHeader>
                  <CardTitle className="text-xl lg:text-2xl font-light tracking-wide flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-[#6a3341]" />
                    PHONE
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6a3341]">
                    General Inquiries: +977 1 543 2100
                    <br />
                    Chef Participation: +977 980 0000000
                    <br />
                    Sponsorship: +977 980 1111111
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#6a3341]">
                <CardHeader>
                  <CardTitle className="text-xl lg:text-2xl font-light tracking-wide flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-gray-600" />
                    EMAIL
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6a3341]">
                    info@usnepalchefs.org
                    <br />
                    events@usnepalchefs.org
                    <br />
                    press@usnepalchefs.org
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#6a3341]">
                <CardHeader>
                  <CardTitle className="text-xl lg:text-2xl font-light tracking-wide flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-gray-600" />
                    AVAILABILITY
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-[#6a3341]">
                    <p>Monday – Friday: 9:00 AM – 6:00 PM (NPT)</p>
                    <p>Saturday – Sunday: Email Only</p>
                    <p>Event Dates: November 8 & 10, 2025</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-[#6a3341]">
                <CardHeader>
                  <CardTitle className="text-xl lg:text-2xl font-light tracking-wide text-[#6a3341]">
                    GET IN TOUCH
                  </CardTitle>
                  <CardDescription className="text-[#6a3341]">
                    Reach out — we typically respond within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#6a3341] mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-[#6a3341] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6a3341]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#6a3341] mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-[#6a3341] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6a3341]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#6a3341] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-[#6a3341] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6a3341]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#6a3341] mb-2">
                      Subject
                    </label>
                    <select className="w-full px-3 py-2 border border-[#6a3341] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6a3341]">
                      <option>General Inquiry</option>
                      <option>Sponsorship</option>
                      <option>Chef Participation</option>
                      <option>Media / Press</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#6a3341] mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-3 py-2 border border-[#6a3341] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6a3341]"
                      placeholder="Please share your message or inquiry..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-[#6a3341] hover:bg-[#582935] text-white cursor-pointer">
                    SEND MESSAGE
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
