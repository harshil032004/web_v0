// CMS Integration Layer
export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  features: string[];
  image: string;
  slug: string;
}

export interface Vehicle {
  id: string;
  name: string;
  type: 'sedan' | 'suv' | 'hatchback' | 'luxury';
  capacity: number;
  features: string[];
  images: string[];
  pricePerKm: number;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
}

// Mock data - replace with actual CMS calls
export const getServices = async (): Promise<Service[]> => {
  return [
    {
      id: '1',
      title: 'Airport Transfer',
      description: 'Reliable airport pickup and drop services',
      price: 15,
      features: ['24/7 Available', 'Flight Tracking', 'Meet & Greet'],
      image: '/services/airport.jpg',
      slug: 'airport-transfer'
    },
    {
      id: '2', 
      title: 'Local City Rides',
      description: 'Quick and comfortable city mobility',
      price: 8,
      features: ['GPS Tracking', 'AC Vehicles', 'Professional Drivers'],
      image: '/services/local.jpg',
      slug: 'local-rides'
    },
    {
      id: '3',
      title: 'Outstation Travel',
      description: 'Long distance travel with experienced drivers',
      price: 12,
      features: ['Multi-day Trips', 'Fuel Included', 'Rest Stops'],
      image: '/services/outstation.jpg', 
      slug: 'outstation-travel'
    }
  ];
};

export const getVehicles = async (): Promise<Vehicle[]> => {
  return [
    {
      id: '1',
      name: 'Maruti Swift',
      type: 'hatchback',
      capacity: 4,
      features: ['AC', 'Music System', 'GPS'],
      images: ['/fleet/swift.jpg'],
      pricePerKm: 8
    },
    {
      id: '2',
      name: 'Honda City',
      type: 'sedan', 
      capacity: 4,
      features: ['AC', 'Leather Seats', 'GPS', 'USB Charging'],
      images: ['/fleet/city.jpg'],
      pricePerKm: 12
    },
    {
      id: '3',
      name: 'Toyota Innova',
      type: 'suv',
      capacity: 7,
      features: ['AC', 'Spacious', 'GPS', 'Entertainment System'],
      images: ['/fleet/innova.jpg'],
      pricePerKm: 15
    }
  ];
};

export const getTestimonials = async (): Promise<Testimonial[]> => {
  return [
    {
      id: '1',
      name: 'Rajesh Kumar',
      rating: 5,
      comment: 'Excellent service! Driver was punctual and vehicle was clean.',
      service: 'Airport Transfer',
      date: '2024-01-15'
    },
    {
      id: '2',
      name: 'Priya Sharma',
      rating: 5,
      comment: 'Very professional service. Highly recommended for outstation trips.',
      service: 'Outstation Travel', 
      date: '2024-01-10'
    }
  ];
};