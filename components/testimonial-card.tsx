import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar?: string;
}

export function TestimonialCard({ name, location, rating, comment }: TestimonialCardProps) {
  return (
    <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group bg-white/90 backdrop-blur-sm border-0 shadow-lg relative overflow-hidden">
      <CardContent className="p-8 relative">
        <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Quote className="h-12 w-12 text-amber-500" />
        </div>
        
        <div className="flex items-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-400 rounded-full flex items-center justify-center mr-4 shadow-lg">
            <span className="text-white font-bold text-lg">{name.charAt(0)}</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
            <p className="text-sm text-gray-600 font-medium">{location}</p>
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating ? "text-amber-400 fill-current" : "text-gray-300"
              } transition-colors`}
            />
          ))}
        </div>
        
        <div className="relative">
          <div className="absolute -left-2 -top-2 text-amber-400 opacity-50">
            <Quote className="h-6 w-6" />
          </div>
          <p className="text-gray-700 italic leading-relaxed pl-4 font-medium">{comment}</p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </CardContent>
    </Card>
  );
}