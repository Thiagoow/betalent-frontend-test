import type { Employee } from '@/types/employee';
import { EMPLOYEE_FILTER_KEYS } from '@/types/filterKeys';

function filterEmployees(employees: Employee[], term: string): Employee[] {
  if (!term.trim()) return employees;

  const searchTerm = term.toLowerCase();
  return employees.filter((employee) =>
    EMPLOYEE_FILTER_KEYS.some((key) => {
      const value = employee[key]?.toString().toLowerCase() || '';
      return value.includes(searchTerm);
    })
  );
}

export { filterEmployees };
