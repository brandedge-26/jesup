import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductBySlug, ALL_PRODUCTS } from "@/lib/products";
import ProductDetail from "./ProductDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found | Jesup Wireless" };

  return {
    title: `${product.name} – Buy Online | Jesup Wireless`,
    description: product.desc,
    openGraph: {
      title: `${product.name} | Jesup Wireless`,
      description: product.desc,
      images: [{ url: product.img, width: 800, height: 800, alt: product.name }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.desc,
      images: [product.img],
    },
    keywords: [product.brand, product.category, product.name, "buy online", "Jesup Wireless"],
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
