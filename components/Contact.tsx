import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="flex justify-center items-center py-12 px-4">
      <Card className="w-full max-w-2xl border-[#6a3341] shadow-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-light tracking-wide text-[#6a3341]">
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
  );
}
