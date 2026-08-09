import Link from "next/link";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
}

const CATEGORY_IMAGES: Record<string, string> = {
  "juguetes-montessori": "/images/products/juguetes-montessori.jpg",
  "kits-ciencia": "/images/products/kits-ciencia.jpg",
  "robotica": "/images/products/robotica.jpg",
  "construcciones": "/images/products/construcciones.jpg",
  "juegos-mesa": "/images/products/juegos-mesa.jpg",
  "libros-educativos": "/images/products/libros-educativos.jpg",
  "educacion-temprana": "/images/products/educacion-temprana.jpg",
  "tablets-educativas": "/images/products/tablets-educativas.jpg",
};

export default function ProductCard({ product }: Props) {
  const imgSrc = CATEGORY_IMAGES[product.categorySlug] ?? "/images/products/juguetes-montessori.jpg";
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      <Link href={`/tienda/${product.categorySlug}/${product.slug}`} className="block overflow-hidden bg-gray-50">
        <img src={imgSrc} alt={product.name} className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
      </Link>
      {product.badge && (
        <div className="bg-purple-600 text-white text-xs font-bold px-3 py-1 text-center">
          {product.badge}
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-base leading-tight mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-5 flex-1">{product.shortDescription}</p>

        <div className="space-y-2">
          <Link
            href={`/tienda/${product.categorySlug}/${product.slug}`}
            className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm py-2.5 px-4 rounded-xl text-center transition-colors"
          >
            Ver análisis y precio →
          </Link>
        </div>
      </div>
    </div>
  );
}
