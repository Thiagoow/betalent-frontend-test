import { MainLayout } from '@/components/layout';
import { useEmployees } from '@/hooks/useEmployee';
import { ApiService } from '@/services/api';
import { useMemo } from 'react';

export default function HomePage() {
  const apiService = useMemo(() => new ApiService(), []);
  const { employees } = useEmployees(apiService);
  console.table(employees);

  return (
    <MainLayout>
      <h1>Home Page</h1>
    </MainLayout>
  );
}
