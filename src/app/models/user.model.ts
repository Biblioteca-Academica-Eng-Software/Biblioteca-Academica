export interface User {
  id: number;
  name: string;
  email: string;
  role?: string; // O "?" indica que é opcional
  createdAt?: Date;
  updatedAt?: Date;
}
