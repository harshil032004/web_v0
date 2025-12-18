// API utility functions for backend operations

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export function createSuccessResponse<T>(data: T, message?: string): ApiResponse<T> {
  return {
    success: true,
    data,
    message
  };
}

export function createErrorResponse(error: string): ApiResponse {
  return {
    success: false,
    error
  };
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s-()]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

export function calculateBookingAmount(
  pricePerDay: number,
  startDate: string,
  endDate: string
): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(1, days) * pricePerDay;
}

export function isDateAvailable(
  bookings: any[],
  vehicleId: string,
  startDate: string,
  endDate: string
): boolean {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  return !bookings.some(booking => {
    if (booking.vehicleId !== vehicleId || booking.status === 'cancelled') {
      return false;
    }
    
    const bookingStart = new Date(booking.pickupDate);
    const bookingEnd = new Date(booking.returnDate);
    
    return (start <= bookingEnd && end >= bookingStart);
  });
}