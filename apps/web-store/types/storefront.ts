// A. CATEGORÍAS: Contrato simple para el menú de navegación y filtros
export interface CategoryDto {
  id: number;
  name: string;
  slug: string;
}

// B. PRODUCT CARD: Contrato optimizado para renderizar las grillas del catálogo velozmente
export interface ProductCardDto {
  id: number;
  name: string;
  slug: string;
  price: number;
  originalPrice: number | null;
  imageUrl: string | null; // URL directa de la relación 1-a-1
  isNew: boolean;
  isOnSale: boolean;
  categoryName: string; // Evita que el frontend haga 'product.category.name'
}

// C. VARIANTES: Para el selector de stock, talla y color en el detalle
export interface ProductVariantDto {
  id: number;
  sku: string;
  stock: number;
  color: string;
  size: string;
}

// D. PRODUCT DETAIL: Contrato completo para la página de detalle de producto (PDP)
export interface ProductDetailDto {
  id: number;
  name: string;
  description: string;
  slug: string;
  price: number;
  originalPrice: number | null;
  imageUrl: string | null;
  isNew: boolean;
  isOnSale: boolean;
  category: CategoryDto;
  variants: ProductVariantDto[];
}

// E. CARRITO DE COMPRAS: Representación de un producto guardado en el localStorage
export interface CartItemDto {
  variantId: number; // El identificador clave (se compra la variante, no el producto base)
  productId: number;
  name: string;
  color: string;
  size: string;
  price: number;
  imageUrl: string | null;
  quantity: number;
  stockAvailable: number; // Para validar límites en el cliente
}

// F. CHECKOUT REQUEST: El JSON que el frontend enviará al presionar "Confirmar Compra"
export interface CreateOrderRequest {
  customerEmail: string;
  customerFirstName: string;
  customerLastName: string;
  customerDocType: 'DNI' | 'RUC' | 'CE';
  customerDocNum: string;
  customerPhone: string;

  // Datos de envío
  addressLine: string;
  department: string;
  province: string;
  district: string;
  reference?: string;

  // Items seleccionados
  items: {
    variantId: number;
    quantity: number;
  }[];
}

// NUEVO: Contrato completo para la pantalla de éxito de compra (/checkout/success)
export interface OrderSuccessDto {
  orderCode: string;
  totalPrice: number;
  customerEmail: string;
  customerFullName: string;
  shippingAddress: string;
  ubigeoText: string; // Ej: "Lima, Lima, Miraflores"
}
