import { OrderStatus, DocumentType } from './common';

// ==========================================
// A. AUTENTICACIÓN Y SESIÓN
// ==========================================
export interface LoginRequestDto {
  email: string;
  passwordHash: string; // El cliente puede pre-procesar o enviar directo
}

export interface RegisterAdminRequestDto {
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
}

export interface AdminSessionDto {
  id: number;
  email: string;
  fullName: string;
}

// ==========================================
// B. DASHBOARD & MÉTRICAS
// ==========================================
export interface TopProductMetricDto {
  name: string;
  quantitySold: number;
  revenue: number;
}

export interface DashboardMetricsDto {
  totalRevenue: number;
  totalOrdersCount: number;
  pendingOrdersCount: number;
  topProducts: TopProductMetricDto[];
}

// ==========================================
// C. MÓDULO PRODUCTOS (ADMIN)
// ==========================================
export interface AdminProductTableRowDto {
  id: number;
  name: string;
  slug: string;
  price: number;
  totalStock: number; // Suma del stock de todas sus variantes
  isVisible: boolean;
  categoryName: string;
  imageUrl: string | null;
}

export interface AdminProductVariantDto {
  id?: number; // Opcional para distinguir variantes nuevas vs existentes al actualizar
  sku: string;
  stock: number;
  color: string;
  size: string;
}

export interface AdminProductDetailDto {
  id: number;
  name: string;
  description: string;
  slug: string;
  price: number;
  originalPrice: number | null;
  isVisible: boolean;
  isNew: boolean;
  isOnSale: boolean;
  categoryId: number;
  imageUrl: string | null;
  variants: AdminProductVariantDto[];
}

// Payload unificado para guardar (POST/PUT) productos desde el formulario admin
export interface SaveProductRequestDto {
  name: string;
  description: string;
  slug: string;
  price: number;
  originalPrice: number | null;
  isVisible: boolean;
  isNew: boolean;
  isOnSale: boolean;
  categoryId: number;
  imageUrl: string | null;
  variants: {
    sku: string;
    stock: number;
    color: string;
    size: string;
  }[];
}

// ==========================================
// D. MÓDULO CATEGORÍAS (ADMIN)
// ==========================================
export interface AdminCategoryTableRowDto {
  id: number;
  name: string;
  slug: string;
  productsCount: number; // Útil para validar impacto antes de editar
  createdAt: Date;
}

export interface SaveCategoryRequestDto {
  name: string;
  slug: string;
}

// ==========================================
// E. MÓDULO ÓRDENES / PEDIDOS (ADMIN)
// ==========================================
export interface AdminOrderTableRowDto {
  id: number;
  code: string;
  customerFullName: string;
  totalPrice: number;
  status: OrderStatus;
  createdAt: Date;
}

export interface AdminOrderItemDetailDto {
  id: number;
  productName: string;
  sku: string;
  color: string;
  size: string;
  priceAtPurchase: number;
  quantity: number;
  subTotal: number;
}

export interface AdminOrderDetailDto {
  id: number;
  code: string;
  totalPrice: number;
  status: OrderStatus;
  notes: string | null;
  createdAt: Date;
  customer: {
    email: string;
    firstName: string;
    lastName: string;
    docType: DocumentType;
    docNum: string;
    phone: string;
  };
  shippingAddress: {
    addressLine: string;
    department: string;
    province: string;
    district: string;
    reference: string | null;
    contactFirstName: string;
    contactLastName: string;
    contactPhone: string;
  };
  items: AdminOrderItemDetailDto[];
}

export interface UpdateOrderStatusRequestDto {
  status: OrderStatus;
}

// ==========================================
// F. MÓDULO GESTIÓN DE ADMINISTRADORES
// ==========================================
export interface AdminUserTableRowDto {
  id: number;
  email: string;
  firstName: string | null;
  lastName: string | null;
  createdAt: Date;
}
