import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const Icon = product.icon;

    return (
        <Link
            href={`/produtos/${product.slug}`}
            className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
        >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                <Icon className="h-6 w-6" />
            </div>

            <div className="mb-2 flex items-center gap-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {product.name}
                </h3>
                <span
                    className={cn(
                        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                        product.status === "Disponível" && "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400",
                        product.status === "Beta" && "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400",
                        product.status === "Em Desenvolvimento" && "bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-slate-400"
                    )}
                >
                    {product.status}
                </span>
            </div>

            <p className="mb-6 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                {product.description}
            </p>

            <div className="mt-auto flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                <span className="group-hover:underline">Ver detalhes</span>
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
        </Link>
    );
}
