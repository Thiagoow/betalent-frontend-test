import { useState, useEffect, useCallback } from 'react';
import type { ApiService } from '@/services/api';
import type { Employee } from '@/types/employee';

export function useEmployees(apiService: ApiService) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEmployees = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await apiService.fetchEmployees();
      setEmployees(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Unknown error');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [apiService]);

  // Initial fetch:
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return {
    employees,
    isLoading,
    error,
    refetch: fetchEmployees
  };
}
