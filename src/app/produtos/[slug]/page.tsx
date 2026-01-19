import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ProductView } from "@/components/products/ProductView";
import { cn } from "@/lib/utils";

interface ProductPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata(props: ProductPageProps) {
    const params = await props.params;
    const product = products.find((p) => p.slug === params.slug);
    if (!product) return { title: "Produto não encontrado" };

    return {
        title: `${product.name} | Catálogo IPLANRIO`,
        description: product.description,
    };
}

export default async function ProductPage(props: ProductPageProps) {
    const params = await props.params;
    const product = products.find((p) => p.slug === params.slug);

    if (!product) {
        notFound();
    }

    const Icon = product.icon;

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-50">
            {/* Breadcrumbs */}
            <div className="mx-auto max-w-[1280px] px-4 py-12">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                        <div className="flex items-start gap-6">
                            <div>
                                <div className="flex items-center gap-4">
                                    <h1 className="text-2xl font-bold text-slate-900">
                                        {product.name}
                                    </h1>
                                    {product.websiteUrl && (
                                        <a
                                            href={`https://${product.websiteUrl}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-sm text-slate-500 hover:text-blue-600 transition-colors"
                                        >
                                            <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                            </svg>
                                            {product.websiteUrl}
                                        </a>
                                    )}
                                </div>
                                <div className="mt-2 max-w-2xl">
                                    <p className="text-base text-slate-600 leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                                        {product.category}
                                    </span>
                                    {product.year && (
                                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                                            Desde {product.year}
                                        </span>
                                    )}
                                    {product.builtFor && (
                                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                                            Feito para {product.builtFor}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-2 text-right">
                            <span
                                className={cn(
                                    "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
                                    product.status === "Disponível" && "bg-emerald-50 text-emerald-700",
                                    product.status === "Beta" && "bg-amber-100 text-amber-700",
                                    product.status === "Em Desenvolvimento" && "bg-slate-100 text-slate-700",
                                    product.status === "Active" && "bg-emerald-50 text-emerald-700"
                                )}
                            >
                                {product.status}
                            </span>
                        </div>
                    </div>
                </div>

                <ProductView product={{ ...product, icon: null }} />
            </div>
        </div>
    );
}
