
import { Button } from "@/components/ui/button";
import { CircleIcon, StarIcon, TextIcon } from "lucide-react";

export default function IntroComponent() {
  return (
    <div className="min-h-screen bg-white px-8 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div>
            <h1 className="text-3xl font-bold">Welcome Sunil Gawai</h1>
            <p className="mt-4 text-2xl font-light">
              You're just one step ahead from enhancing your hiring process.
            </p>
            <p className="mt-4 mb-8 text-xl font-light">
              Unlock the future of work!
            </p>
            <Button className="bg-blue-600 text-white">Get Started</Button>
          </div>
          <div className="flex flex-col items-center space-y-12">
            <img
              alt="Customization"
              className="h-48 w-48 bg-yellow-400"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <img
              alt="Video Interview"
              className="h-48 w-48 bg-green-400"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="relative">
              <img
                alt="Zia Matching"
                className="h-48 w-48 bg-blue-600"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="absolute -top-4 -right-4">
                <StarIcon className="h-6 w-6 text-yellow-300" />
              </div>
              <div className="absolute -bottom-4 -left-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white">
                  <span className="text-sm font-semibold text-green-600">
                    75%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-0 w-full border-t">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
          <div className="flex items-center space-x-4">
            <TextIcon className="h-6 w-6 text-gray-600" />
            <span className="text-sm">
              Here is your Smart Chat (Ctrl+Space)
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <CircleIcon className="h-6 w-6 text-gray-600" />
            <span className="text-sm">Need Help</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
