import type { Product, Category, Order } from "./types"

// Datos de productos
const products: Product[] = [
  {
    id: "1",
    name: "Laptop Pro X1",
    slug: "laptop-pro-x1",
    description: "Potente laptop con procesador de última generación, 16GB de RAM y 512GB SSD.",
    price: 1299.99,
    oldPrice: 1499.99,
    images: [
      "/placeholder.svg?key=i7sx3",
      "/placeholder.svg?key=dthsa",
      "/placeholder.svg?key=idt89",
      "/placeholder.svg?key=9j36h",
    ],
    category: "laptops",
    stock: 15,
    features: [
      "Procesador Intel Core i7 de 12ª generación",
      "16GB RAM DDR4",
      "512GB SSD NVMe",
      'Pantalla 15.6" 4K UHD',
      "Tarjeta gráfica NVIDIA RTX 3060",
      "Windows 11 Pro",
    ],
    isNew: true,
  },
  {
    id: "2",
    name: "Smartphone Galaxy Ultra",
    slug: "smartphone-galaxy-ultra",
    description: "Smartphone de gama alta con cámara profesional, pantalla AMOLED y batería de larga duración.",
    price: 999.99,
    images: [
      "/placeholder.svg?key=7ssih",
      "/placeholder.svg?key=6ge6n",
      "/smartphone-side-view.png",
      "/placeholder.svg?key=aisyd",
    ],
    category: "smartphones",
    stock: 25,
    features: [
      'Pantalla AMOLED 6.8" 120Hz',
      "Procesador Snapdragon 8 Gen 2",
      "12GB RAM",
      "256GB Almacenamiento",
      "Cámara principal 108MP",
      "Batería 5000mAh",
    ],
  },
  {
    id: "3",
    name: "Auriculares NoiseCancel Pro",
    slug: "auriculares-noisecancel-pro",
    description: "Auriculares inalámbricos con cancelación de ruido activa y 30 horas de batería.",
    price: 249.99,
    oldPrice: 299.99,
    images: [
      "/placeholder.svg?key=gppus",
      "/placeholder.svg?key=ufsfm",
      "/placeholder.svg?height=500&width=500&query=headphones+ear+cushion",
      "/placeholder.svg?height=500&width=500&query=headphones+controls+buttons",
    ],
    category: "accesorios",
    stock: 50,
    features: [
      "Cancelación de ruido activa",
      "30 horas de batería",
      "Conexión Bluetooth 5.2",
      "Micrófono integrado",
      "Control táctil",
      "Estuche de carga incluido",
    ],
  },
  {
    id: "4",
    name: "Tablet Pro 11",
    slug: "tablet-pro-11",
    description: "Tablet de alto rendimiento con pantalla Retina, ideal para creativos y profesionales.",
    price: 799.99,
    images: [
      "/placeholder.svg?height=500&width=500&query=tablet+modern+display",
      "/placeholder.svg?height=500&width=500&query=tablet+with+stylus",
      "/placeholder.svg?height=500&width=500&query=tablet+side+view",
      "/placeholder.svg?height=500&width=500&query=tablet+keyboard+attachment",
    ],
    category: "tablets",
    stock: 20,
    features: [
      'Pantalla Retina 11"',
      "Chip M1",
      "8GB RAM",
      "128GB Almacenamiento",
      "Compatibilidad con lápiz digital",
      "iPadOS 16",
    ],
    isNew: true,
  },
  {
    id: "5",
    name: "Smartwatch Fitness Pro",
    slug: "smartwatch-fitness-pro",
    description: "Reloj inteligente con monitorización avanzada de salud y batería de 7 días.",
    price: 199.99,
    oldPrice: 249.99,
    images: [
      "/placeholder.svg?height=500&width=500&query=smartwatch+on+wrist",
      "/placeholder.svg?height=500&width=500&query=smartwatch+fitness+tracking",
      "/placeholder.svg?height=500&width=500&query=smartwatch+charging+dock",
      "/placeholder.svg?height=500&width=500&query=smartwatch+screen+display",
    ],
    category: "accesorios",
    stock: 35,
    features: [
      'Pantalla AMOLED 1.4"',
      "Monitorización cardíaca 24/7",
      "GPS integrado",
      "Resistente al agua 5ATM",
      "Batería de 7 días",
      "Compatible con Android e iOS",
    ],
  },
  {
    id: "6",
    name: 'Monitor UltraWide 34"',
    slug: "monitor-ultrawide-34",
    description: "Monitor curvo ultrawide para una experiencia inmersiva de trabajo y gaming.",
    price: 499.99,
    images: [
      "/placeholder.svg?height=500&width=500&query=ultrawide+monitor+curved",
      "/placeholder.svg?height=500&width=500&query=monitor+back+ports",
      "/placeholder.svg?height=500&width=500&query=monitor+side+profile",
      "/placeholder.svg?height=500&width=500&query=monitor+stand+adjustable",
    ],
    category: "accesorios",
    stock: 10,
    features: [
      'Panel IPS 34" UltraWide',
      "Resolución 3440x1440",
      "144Hz de refresco",
      "1ms de tiempo de respuesta",
      "HDR10",
      "Puertos HDMI 2.1 y DisplayPort 1.4",
    ],
  },
  {
    id: "7",
    name: "Laptop Ultrabook Air",
    slug: "laptop-ultrabook-air",
    description: "Laptop ultraligera con gran autonomía, perfecta para profesionales en movimiento.",
    price: 899.99,
    images: [
      "/placeholder.svg?height=500&width=500&query=thin+laptop+ultrabook",
      "/placeholder.svg?height=500&width=500&query=laptop+keyboard+backlit",
      "/placeholder.svg?height=500&width=500&query=laptop+profile+thin",
      "/placeholder.svg?height=500&width=500&query=laptop+screen+bezel+thin",
    ],
    category: "laptops",
    stock: 18,
    features: [
      "Procesador Intel Core i5 de 11ª generación",
      "8GB RAM LPDDR4X",
      "256GB SSD",
      'Pantalla 13.3" Full HD',
      "Batería de 18 horas",
      "Windows 11 Home",
    ],
  },
  {
    id: "8",
    name: "Smartphone Pixel Pro",
    slug: "smartphone-pixel-pro",
    description: "Smartphone con la mejor cámara del mercado y experiencia Android pura.",
    price: 899.99,
    oldPrice: 999.99,
    images: [
      "/placeholder.svg?height=500&width=500&query=pixel+smartphone+front",
      "/placeholder.svg?height=500&width=500&query=pixel+smartphone+camera+back",
      "/placeholder.svg?height=500&width=500&query=pixel+smartphone+side",
      "/placeholder.svg?height=500&width=500&query=pixel+smartphone+screen",
    ],
    category: "smartphones",
    stock: 22,
    features: [
      'Pantalla OLED 6.7" 120Hz',
      "Procesador Google Tensor",
      "12GB RAM",
      "128GB Almacenamiento",
      "Cámara principal 50MP",
      "Batería 4500mAh",
    ],
    isNew: true,
  },
  {
    id: "9",
    name: "Laptop Gaming Beast",
    slug: "laptop-gaming-beast",
    description: "Laptop gaming de alto rendimiento con refrigeración avanzada y teclado RGB.",
    price: 1599.99,
    images: [
      "/placeholder.svg?height=500&width=500&query=gaming+laptop+rgb",
      "/placeholder.svg?height=500&width=500&query=gaming+laptop+keyboard",
      "/placeholder.svg?height=500&width=500&query=gaming+laptop+cooling+vents",
      "/placeholder.svg?height=500&width=500&query=gaming+laptop+screen",
    ],
    category: "laptops",
    stock: 8,
    features: [
      "Procesador Intel Core i9 de 12ª generación",
      "32GB RAM DDR5",
      "1TB SSD NVMe",
      'Pantalla 17.3" 240Hz',
      "Tarjeta gráfica NVIDIA RTX 4080",
      "Windows 11 Pro",
    ],
    isNew: true,
  },
  {
    id: "10",
    name: "Smartphone Fold Ultra",
    slug: "smartphone-fold-ultra",
    description: "Smartphone plegable con pantalla flexible y cámara de última generación.",
    price: 1799.99,
    oldPrice: 1999.99,
    images: [
      "/placeholder.svg?height=500&width=500&query=foldable+smartphone+open",
      "/placeholder.svg?height=500&width=500&query=foldable+smartphone+folded",
      "/placeholder.svg?height=500&width=500&query=foldable+smartphone+side",
      "/placeholder.svg?height=500&width=500&query=foldable+smartphone+camera",
    ],
    category: "smartphones",
    stock: 5,
    features: [
      'Pantalla plegable 7.6" 120Hz',
      'Pantalla externa 6.2"',
      "Procesador Snapdragon 8 Gen 2",
      "12GB RAM",
      "512GB Almacenamiento",
      "Cámara principal 50MP",
    ],
    isNew: true,
  },
  {
    id: "11",
    name: "Tablet Lite 10",
    slug: "tablet-lite-10",
    description: "Tablet económica perfecta para consumo de contenido y navegación web.",
    price: 299.99,
    images: [
      "/placeholder.svg?height=500&width=500&query=budget+tablet+front",
      "/placeholder.svg?height=500&width=500&query=tablet+back+camera",
      "/placeholder.svg?height=500&width=500&query=tablet+side+thin",
      "/placeholder.svg?height=500&width=500&query=tablet+with+case",
    ],
    category: "tablets",
    stock: 30,
    features: [
      'Pantalla 10.1" HD',
      "Procesador Octa-core",
      "4GB RAM",
      "64GB Almacenamiento",
      "Batería 6000mAh",
      "Android 13",
    ],
  },
  {
    id: "12",
    name: "Auriculares TWS Mini",
    slug: "auriculares-tws-mini",
    description: "Auriculares inalámbricos compactos con gran calidad de sonido y estuche de carga.",
    price: 89.99,
    images: [
      "/placeholder.svg?height=500&width=500&query=wireless+earbuds+case",
      "/placeholder.svg?height=500&width=500&query=wireless+earbuds+in+ear",
      "/placeholder.svg?height=500&width=500&query=wireless+earbuds+charging",
      "/placeholder.svg?height=500&width=500&query=wireless+earbuds+controls",
    ],
    category: "accesorios",
    stock: 45,
    features: [
      "Bluetooth 5.3",
      "Cancelación de ruido pasiva",
      "Resistentes al agua IPX4",
      "20 horas de batería con estuche",
      "Control táctil",
      "Micrófono integrado",
    ],
  },
]

// Datos de categorías
const categories: Category[] = [
  {
    id: "1",
    name: "Laptops",
    slug: "laptops",
    image: "/images/image-laptop.jpg",
    bannerImage: "/placeholder.svg?height=400&width=1200&query=laptop+collection+banner",
    description: "Descubre nuestra selección de laptops de última generación para trabajo, gaming y uso diario.",
    featured: true,
  },
  {
    id: "2",
    name: "Smartphones",
    slug: "smartphones",
    image: "/images/image-smartphone.jpg",
    bannerImage: "/placeholder.svg?height=400&width=1200&query=smartphone+collection+banner",
    description: "Explora los smartphones más avanzados con las mejores cámaras y rendimiento excepcional.",
    featured: true,
  },
  {
    id: "3",
    name: "Tablets",
    slug: "tablets",
    image: "/images/image-tablet.jpg",
    bannerImage: "/placeholder.svg?height=400&width=1200&query=tablet+collection+banner",
    description: "Tablets para todos los usos: desde tomar notas hasta diseño profesional y entretenimiento.",
    featured: true,
  },
  {
    id: "4",
    name: "Accesorios",
    slug: "accesorios",
    image: "/images/image-accessories.jpg",
    bannerImage: "/placeholder.svg?height=400&width=1200&query=tech+accessories+collection+banner",
    description: "Complementa tus dispositivos con nuestra amplia gama de accesorios de alta calidad.",
    featured: true,
  },
]

// Datos de pedidos
const orders: Order[] = [
  {
    id: "ORD-001",
    customer: "Juan Pérez",
    date: "2023-05-15T10:30:00",
    status: "completed",
    total: 1299.99,
    items: [
      {
        id: "1",
        name: "Laptop Pro X1",
        quantity: 1,
        price: 1299.99,
      },
    ],
  },
  {
    id: "ORD-002",
    customer: "María García",
    date: "2023-05-18T14:45:00",
    status: "pending",
    total: 1249.98,
    items: [
      {
        id: "2",
        name: "Smartphone Galaxy Ultra",
        quantity: 1,
        price: 999.99,
      },
      {
        id: "3",
        name: "Auriculares NoiseCancel Pro",
        quantity: 1,
        price: 249.99,
      },
    ],
  },
  {
    id: "ORD-003",
    customer: "Carlos Rodríguez",
    date: "2023-05-20T09:15:00",
    status: "completed",
    total: 499.99,
    items: [
      {
        id: "6",
        name: 'Monitor UltraWide 34"',
        quantity: 1,
        price: 499.99,
      },
    ],
  },
  {
    id: "ORD-004",
    customer: "Ana Martínez",
    date: "2023-05-22T16:20:00",
    status: "pending",
    total: 1099.98,
    items: [
      {
        id: "8",
        name: "Smartphone Pixel Pro",
        quantity: 1,
        price: 899.99,
      },
      {
        id: "5",
        name: "Smartwatch Fitness Pro",
        quantity: 1,
        price: 199.99,
      },
    ],
  },
]

// Funciones para obtener datos
export function getFeaturedProducts(): Product[] {
  return products
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getRelatedProducts(category: string, currentProductId: string): Product[] {
  return products.filter((product) => product.category === category && product.id !== currentProductId).slice(0, 4)
}

export function getCategories(): Category[] {
  return categories
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.category === categorySlug)
}

export function getOrders(): Order[] {
  return orders
}