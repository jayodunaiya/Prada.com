import Link from "next/link";

interface ProductCardProps {
  title: string;
  path: string;
  slug: string; // We'll pass this for the dynamic URL
}

export default function ProductCard({ title, path, slug }: ProductCardProps) {
  return (
    <Link href={`/products/${slug}`} className="block group border-b border-r border-neutral-100 last:border-r-0 lg:border-b-0 cursor-pointer">
      <div className="p-3 md:p-6">
        <div className="overflow-hidden bg-neutral-50 mb-4">
          <img 
            className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500" 
            src={`https://www.prada.com/content/dam/pradabkg_products/2/${path}/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg`} 
            alt={title} 
          />
        </div>
        <p className="pl-1 font-medium text-[13px] md:text-[14px] tracking-wide leading-snug text-black">
          {title}
        </p>
      </div>
    </Link>
  );
}