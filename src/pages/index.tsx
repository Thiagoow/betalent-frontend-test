import { useEmployees } from '@/hooks/useEmployee';
import { ApiService } from '@/services/api';
import { useMemo } from 'react';

export default function HomePage() {
  const apiService = useMemo(() => new ApiService(), []);
  const { employees, isLoading, error } = useEmployees(apiService);

  console.log({ isLoading, error });
  console.table(employees);

  return <h1>Hello world</h1>;
}
