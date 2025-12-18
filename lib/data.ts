// Data structures for the application

export interface Vehicle {
  id: string;
  name: string;
  category: string;
  seats: string;
  luggage: string;
  imageSrc: string;
  features: string[];
  available: boolean;
  pricePerDay?: number;
}

export interface Booking {
  id: string;
  vehicleId: string;
  customerName: string;
  email: string;
  phone: string;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  dropoffLocation: string;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  licenseNumber?: string;
  createdAt: string;
}

// Empty data - system starts with no jobs or testimonials
export const jobs: never[] = [];
export const testimonials: never[] = [];

// Sample vehicle data
export const sampleVehicles: Vehicle[] = [
  {
    id: '1',
    name: 'MG ZS EV',
    category: 'SUV',
    seats: '5 Seats',
    luggage: '3 Bags',
    imageSrc: '/MG.jpg',
    features: [
      'GPS Navigation',
      'Climate Control',
      'Bluetooth Audio',
      'USB Charging',
      'Safety Features',
      'Premium Interior'
    ],
    available: true,
    pricePerDay: 120
  },
  {
    id: '2',
    name: 'Tata Nexon EV',
    category: 'Compact SUV',
    seats: '5 Seats',
    luggage: '2 Bags',
    imageSrc: '/Tata.jpg',
    features: [
      'GPS Navigation',
      'Climate Control',
      'Bluetooth Audio',
      'USB Charging',
      'Safety Features',
      'Eco Mode'
    ],
    available: true,
    pricePerDay: 100
  }
];