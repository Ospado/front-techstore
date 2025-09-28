import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "lucide-react";
import { getFeaturedProducts, getCategories } from "@/lib/data";
import CategoryCard from "@/components/category-card";
import ProductCard from "@/components/product-card";

export default function Home() {
  const categories = getCategories();
  const feactureProducts = getFeaturedProducts();
  return (
    <div className="px-4 py-6 md:py-10">
      <HeroSection />

      <section className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Categorías</h2>
          <Button variant="link" className="text-primary" asChild>
            <Link href="/categorias">Ver todas</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* map de categorias */}
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Productos destacados</h2>
        </div>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="laptops">Laptops</TabsTrigger>
            <TabsTrigger value="smartphones">Celulares</TabsTrigger>
            <TabsTrigger value="tablets">Tablets</TabsTrigger>
            <TabsTrigger value="accesorios">Accesorios</TabsTrigger>
          </TabsList>
          <TabsContent value="all"
           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
           >
            {feactureProducts.map((product) => (
              // componente ProductCard
              <ProductCard key={product.id} product={product} />
            ))}
          </TabsContent>

          <TabsContent value="laptops"
           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
           >
            {feactureProducts.filter((product) =>  product.category == "laptops").map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}   
          </TabsContent>

          <TabsContent value="smartphones"
           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
           >
            {feactureProducts.filter((product) =>  product.category == "smartphones").map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}   
          </TabsContent>

          <TabsContent value="tableps"
           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
           >
            {feactureProducts.filter((product) =>  product.category == "tableps").map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}   
          </TabsContent>

          <TabsContent value="accessories"
           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
           >
            {feactureProducts.filter((product) =>  product.category == "accessories").map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}   
          </TabsContent>
          
        </Tabs>
      </section>
    </div>
  );
}