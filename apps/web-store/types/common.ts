// Tipos compartidos basados en el diseño de la base de datos
export type OrderStatus = 'PENDIENTE' | 'CONFIRMADO' | 'ENVIADO' | 'ENTREGADO' | 'CANCELADO';
export type DocumentType = 'DNI' | 'RUC' | 'CE';

// Envoltura estándar para todas las Server Actions (Backend -> Frontend)
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Estructura para transportar metadatos de paginación
export interface PaginationMeta {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

// DTO genérico para respuestas paginadas
export interface PaginatedResponse<T> {
  items: T[];
  meta: PaginationMeta;
}

// Tipo útil para las páginas de Next.js (App Router)
export interface SearchParamsProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
