export class ApiService {
  private readonly baseUrl: string;

  constructor(baseUrl: string = import.meta.env.VITE_API_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }
    if (response.status === 204) {
      return undefined as T;
    }

    return response.json() as Promise<T>;
  }

  async get<T>(endpoint: string = ''): Promise<T> {
    return this.request<T>(endpoint);
  }

  async post<T>(endpoint: string = '', body: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(body)
    });
  }

  async put<T>(endpoint: string = '', body: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body)
    });
  }

  async delete<T>(endpoint: string = ''): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'DELETE'
    });
  }
}
