import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  color: string;
  href?: string;
}

export function ServiceCard({ icon: Icon, title, description, buttonText, color, href }: ServiceCardProps) {
  return (
    <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <CardContent className="p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-10 translate-x-10 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
        {Icon && (
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color === 'text-blue-600' ? 'from-blue-500 to-blue-600' : color === 'text-green-600' ? 'from-green-500 to-green-600' : 'from-purple-500 to-purple-600'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
            <Icon className="h-8 w-8 text-white" />
          </div>
        )}
        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        {href ? (
          <Button asChild className={`w-full bg-gradient-to-r ${color === 'text-blue-600' ? 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' : color === 'text-green-600' ? 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' : 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'} text-white border-0 shadow-md hover:shadow-lg transition-all duration-300`}>
            <Link href={href}>{buttonText}</Link>
          </Button>
        ) : (
          <Button className={`w-full bg-gradient-to-r ${color === 'text-blue-600' ? 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' : color === 'text-green-600' ? 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' : 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'} text-white border-0 shadow-md hover:shadow-lg transition-all duration-300`}>
            {buttonText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}