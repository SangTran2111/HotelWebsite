
export type Language = 'en' | 'vi' | 'ko';

export interface Room {
  id: string;
  name: { [key in Language]: string };
  description: { [key in Language]: string };
  image: string;
  features: { [key in Language]: string[] };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Booking {
  roomId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}
