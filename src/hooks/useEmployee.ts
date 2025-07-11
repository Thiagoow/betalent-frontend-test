import { useState, useEffect, useCallback, useMemo } from 'react';
import type { ApiService } from '@/services/api';
import type { Employee } from '@/types/employee';
import { filterEmployees } from '@/utils/filterEmployees';

interface UseEmployeesTypes {
  employees: Employee[];
  filteredEmployees: Employee[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
  handleSearch: (term: string) => void;
}

export function useEmployees(apiService: ApiService): UseEmployeesTypes {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchEmployees = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await apiService.get<Employee[]>('/employees');
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

  const filteredEmployees = useMemo(
    () => filterEmployees(employees, searchTerm),
    [employees, searchTerm]
  );

  return {
    employees,
    filteredEmployees,
    isLoading,
    error,
    refetch: fetchEmployees,
    handleSearch: setSearchTerm
  };
}
