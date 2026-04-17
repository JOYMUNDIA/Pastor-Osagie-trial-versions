export type UserRole = 'admin' | 'editor' | 'user';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  created_at: string;
}

export interface JWTPayload {
  sub: string;
  email: string;
  name: string;
  role: UserRole;
  iat: number;
  exp: number;
}

export interface MinistryLink {
  id: string;
  category: 'prayer' | 'service' | 'podcast' | 'article';
  title: string;
  description?: string;
  url: string;
  date?: string;
  thumbnail?: string;
  is_published: boolean;
  created_at: string;
  created_by: string;
}

export interface Appointment {
  id: string;
  name: string;
  email: string;
  phone?: string;
  purpose: string;
  preferred_date: string;
  preferred_time: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at: string;
}

export interface PrayerRequest {
  id: string;
  name: string;
  email: string;
  is_anonymous: boolean;
  request: string;
  is_private: boolean;
  created_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

export type ApiResponse<T> = {
  data?: T;
  error?: string;
};
