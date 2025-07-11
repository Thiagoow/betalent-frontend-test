import { useMemo } from 'react';
import { ApiService } from '@/services/api';
import { useEmployees } from '@/hooks/useEmployee';
import MainLayout from '@/layouts/index';
import EmployeeTable from '@/components/ui/Table';
import SearchBar from '@/components/ui/SearchBar';

export default function HomePage() {
  const apiService = useMemo(() => new ApiService(), []);
  const { handleSearch, filteredEmployees, isLoading, error } =
    useEmployees(apiService);

  return (
    <MainLayout>
      <SearchBar onSearch={(term) => handleSearch(term)} />

      <EmployeeTable
        employees={filteredEmployees}
        isLoading={isLoading}
        error={error}
      />
    </MainLayout>
  );
}
