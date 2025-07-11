import { Fragment, useEffect, useState } from 'react';
import type { Employee } from '@/types/employee';
import { formatDate, formatPhone } from '@/utils/formatters';
import chevronIcon from '@/assets/icons/chevron.svg';
import {
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableCell,
  UserImage,
  ChevronIcon,
  ExpandedRow,
  ExpandedCell,
  ExpandedContent,
  ExpandedLabel,
  ExpandedValue,
  LoadingContainer,
  Dot
} from './Table.styles';

interface EmployeeTableProps {
  employees: Employee[];
  isLoading?: boolean;
  error?: string | null;
}

function EmployeeTable({ employees, isLoading, error }: EmployeeTableProps) {
  const [expandedRowId, setExpandedRowId] = useState<number | null>(null);

  const toggleRow = (id: number) => {
    if (window.innerWidth < 768) {
      setExpandedRowId((prevId) => (prevId === id ? null : id));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && expandedRowId !== null) {
        setExpandedRowId(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [expandedRowId]);

  if (error || isLoading) {
    return (
      <TableContainer>
        <LoadingContainer>
          {error || 'Carregando funcionários...'}
        </LoadingContainer>
      </TableContainer>
    );
  }

  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Foto</TableHeaderCell>
            <TableHeaderCell>Nome</TableHeaderCell>
            <TableHeaderCell $hideOnMobile>Cargo</TableHeaderCell>
            <TableHeaderCell $hideOnMobile>Data de admissão</TableHeaderCell>
            <TableHeaderCell $hideOnMobile>Telefone</TableHeaderCell>
            <TableHeaderCell $hideOnDesktop>
              <Dot />
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <tbody>
          {employees.map((employee) => (
            <Fragment key={employee.id}>
              <TableRow
                key={employee.id}
                onClick={() => toggleRow(employee.id)}
                $isClickable
              >
                <TableCell>
                  <UserImage src={employee.image} alt={employee.name} />
                </TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell $hideOnMobile>{employee.job}</TableCell>

                <TableCell $hideOnMobile>
                  {formatDate(employee.admission_date)}
                </TableCell>
                <TableCell $hideOnMobile>
                  {formatPhone(employee.phone)}
                </TableCell>

                <TableCell $hideOnDesktop $alignCenter>
                  <ChevronIcon
                    src={chevronIcon}
                    alt="Toggle row"
                    $isExpanded={expandedRowId === employee.id}
                  />
                </TableCell>
              </TableRow>
              {expandedRowId === employee.id && (
                <ExpandedRow>
                  <ExpandedCell colSpan={6}>
                    <ExpandedContent>
                      <ExpandedLabel>Cargo</ExpandedLabel>
                      <ExpandedValue>{employee.job}</ExpandedValue>
                    </ExpandedContent>

                    <ExpandedContent>
                      <ExpandedLabel>Data de admissão</ExpandedLabel>
                      <ExpandedValue>
                        {formatDate(employee.admission_date)}
                      </ExpandedValue>
                    </ExpandedContent>

                    <ExpandedContent>
                      <ExpandedLabel>Telefone</ExpandedLabel>
                      <ExpandedValue>
                        {formatPhone(employee.phone)}
                      </ExpandedValue>
                    </ExpandedContent>
                  </ExpandedCell>
                </ExpandedRow>
              )}
            </Fragment>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default EmployeeTable;
