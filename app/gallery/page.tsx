import { Card, CardContent } from "@/components/ui/card";
import { Construction, Wrench, HardHat } from "lucide-react";

export default function GalleryPage() {
  return (
    <div className="py-12 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Card className="p-8">
          <CardContent className="space-y-6">
            {/* Animated Construction Icons */}
            <div className="relative flex justify-center items-center space-x-4 mb-8">
              <Construction className="h-16 w-16 text-orange-500 animate-bounce" />
              <Wrench className="h-12 w-12 text-gray-600 animate-pulse" />
              <HardHat className="h-14 w-14 text-yellow-600 animate-bounce delay-200" />
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Under Construction
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Our gallery is being built with amazing new features!
            </p>

            {/* Progress Bar Animation */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
              <div
                className="bg-orange-500 h-3 rounded-full animate-pulse"
                style={{ width: "65%" }}
              ></div>
            </div>

            {/* Description */}
            <p className="text-gray-500 max-w-md mx-auto">
              We're working hard to bring you an incredible gallery experience.
              Check back soon to explore our facilities, events, and campus
              life!
            </p>

            {/* Coming Soon Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium animate-pulse">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-orange-400 opacity-75 mr-2"></span>
              <span className="relative">Coming Soon</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
