import Image from "next/image";
import Link from "next/link";
import { Category } from "@/lib/types";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categorias/${category.slug}`}
      className="group relative overflow-hidden rounded-lg border"
    >
      <div className="aspect-square overflow-hidden bg-muted">
        <Image
          src={category.image || "placeholder.svg"}
          alt={category.name}
          width={300}
          height={300}
          className="objetc-cover transition-transform group-hover:scale-105 h-full w-full"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h3 className="text-white font-bold text-xl">{category.name}</h3>
        </div>
      </div>
    </Link>
  );
}