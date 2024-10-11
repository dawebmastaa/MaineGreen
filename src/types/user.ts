export type UserRole = 'admin' | 'consumer' | 'business';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}