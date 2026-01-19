import Link from "next/link";
import { Badge } from "lucide-react"; // Note: lucide-react doesn't export Badge, we'll need to create a simple badge or use div
// Actually, let's build the card using standard Tailwind classes first.

interface ProductCardProps {
    title: string;
    category: string;

    builtFor: string;
    description: string;
    status: "Active" | "Beta" | "Alpha" | "Deprecated" | "Disponível" | "Em Desenvolvimento"; // Expanded status types

    slug: string; // Added slug prop
}

export function ProductCard({
    title,
    category,

    builtFor,
    description,
    status,

    slug,
}: ProductCardProps) {
    return (
        <Link href={`/produtos/${slug}`} className="block h-full">
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-blue-500/50">
                <div>
                    <div>
                        <div className="flex items-start justify-between gap-4">
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600">
                                {title}
                            </h3>
                            <span
                                className={`shrink-0 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${status === "Active" || status === "Disponível"
                                    ? "bg-emerald-50 text-emerald-700"
                                    : "bg-slate-100 text-slate-600"
                                    }`}
                            >
                                {status}
                            </span>
                        </div>

                        <div className="mt-2">
                            <p className="text-sm leading-6 text-slate-600 line-clamp-3">
                                {description}
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                            <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                                {category}
                            </span>
                            <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                                {builtFor}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

