import type { Employee } from './employee';

const EMPLOYEE_FILTER_KEYS: Array<keyof Employee> = ['name', 'job', 'phone'];

export { EMPLOYEE_FILTER_KEYS };
