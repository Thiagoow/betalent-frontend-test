import type { Employee } from '@/types/employee';

export class ApiService {
  private readonly API_URL = import.meta.env.VITE_API_URL;

  async fetchEmployees(): Promise<Employee[]> {
    const response = await fetch(this.API_URL);
    if (!response.ok) throw new Error('API request failed');
    return response.json();
  }
}
