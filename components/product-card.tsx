import Image from "next/image";
import Link from "next/link";
import { Badge } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/types";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({product}: ProductCardProps) {
return(
    <div className="group relative flex flex-col overflow-hidden rounded-lg border">
        <Link href={`/productos/${product.id}`} className="aspect-square overflow-hidden bg-muted">
            <Image
                src={product.images[0] ||"/placeholder.svg" }
                alt={product.name}
                width={300}
                height={300}
                className="object-cover transition-transform group-hover:scale-105 h-full w-full"
            />
            {product.isNew && (
                <Badge className="absolute top-2 right-2">Nuevo</Badge> 
            )}
        </Link>
        <div className="flex flex-1 flex-col p-4">
            <h3 className="font-medium">
                <Link href={`/productos/${product.slug}`}> 
                    {product.name}
                </Link>
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4 mt-1">
                {product.description}.
            </p>

            <div className="mt-auto flex items items-center justify-between">
                <div className="fkex items-center gap-2">
                    <span className="font-bold">{product.price.toFixed(2)}</span>
                    {product.oldPrice && (
                        <span className="text-sm text-muted-foreground line-through">${product.oldPrice.toFixed(2)}</span>
                    )}
                </div>
                {/* AddToCartButton component*/}
                <ShoppingCart className="h-4 w-4" />
                <span className="sr-only">Añadir a carrito</span>
            </div>
        </div>

    </div>
)
}