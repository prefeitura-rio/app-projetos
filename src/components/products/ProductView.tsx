"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import { ProductChart } from "./ProductChart";
import {
    Users,
    DollarSign,
    Zap,
    Smile,
    HelpCircle,
    Activity,
    ExternalLink,
    CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

function capitalizeFirst(text: string): string {
    if (!text) return text;
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function Tooltip({ content, children }: { content: string; children: React.ReactNode }) {
    return (
        <div className="group relative flex items-center">
            {children}
            <div className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 group-hover:block z-50">
                <div className="relative">
                    <div className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white shadow-lg whitespace-normal w-max max-w-[300px] text-left">
                        {content}
                    </div>
                    <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                </div>
            </div>
        </div>
    );
}

interface ProductViewProps {
    product: Product;
}

export function ProductView({ product }: ProductViewProps) {
    const [activeTab, setActiveTab] = useState<"overview" | "metrics" | "updates">("overview");
    const [showCostBreakdown, setShowCostBreakdown] = useState(false);

    return (
        <div>
            {/* Tabs Navigation */}
            <div className="border-b border-slate-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {["Visão Geral", "Métricas", "Atualizações"].map((tab) => {
                        const tabKey = (tab === "Visão Geral" ? "overview" : tab === "Métricas" ? "metrics" : "updates") as typeof activeTab;
                        return (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tabKey)}
                                className={cn(
                                    "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors",
                                    activeTab === tabKey
                                        ? "border-blue-600 text-blue-600"
                                        : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"
                                )}
                            >
                                {tab}
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* Tab Content */}
            <div className="mt-8">
                {activeTab === "overview" && (
                    <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12">
                        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
                            {/* Main Content */}
                            <div className="space-y-10">
                                {/* Introduction */}
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-2">Sobre o produto</h2>
                                    <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
                                        {product.longDescription}
                                    </p>
                                </div>

                                {/* Why We Built This */}
                                {product.overview?.whyBuilt && (
                                    <div className="space-y-4">
                                        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#4F46E5]">
                                            {capitalizeFirst(product.overview.whyBuilt.label)}
                                        </span>
                                        <h3 className="text-2xl font-bold text-slate-900">
                                            {product.overview.whyBuilt.title}
                                        </h3>
                                        <p className="text-base text-slate-600 leading-relaxed max-w-3xl font-medium">
                                            {product.overview.whyBuilt.content}
                                        </p>
                                    </div>
                                )}

                                {/* What We've Built */}
                                {product.overview?.whatBuilt && (
                                    <div className="space-y-8">
                                        <div className="space-y-4">
                                            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#4F46E5]">
                                                {capitalizeFirst(product.overview.whatBuilt.label)}
                                            </span>
                                            <h3 className="text-2xl font-bold text-slate-900">
                                                {product.overview.whatBuilt.title}
                                            </h3>
                                            <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
                                                {product.overview.whatBuilt.content}
                                            </p>
                                        </div>

                                        {/* Features List */}
                                        <div className="grid gap-8 pl-4">
                                            {product.overview.whatBuilt.features.map((feature, idx) => (
                                                <div key={idx} className="relative space-y-3">
                                                    <div className="absolute -left-4 top-2 h-1.5 w-1.5 rounded-full bg-[#4F46E5]" />
                                                    <h4 className="text-lg font-bold text-slate-900">
                                                        {feature.title}
                                                    </h4>
                                                    <p className="text-slate-600 leading-relaxed max-w-2xl">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Testimonials */}
                                {product.overview?.testimonials && product.overview.testimonials.length > 0 && (
                                    <div className="space-y-4">
                                        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#4F46E5]">
                                            {capitalizeFirst("O QUE NOSSOS USUÁRIOS DIZEM")}
                                        </span>
                                        <div className="relative border-l-4 border-[#4F46E5] bg-slate-50 p-8 rounded-r-2xl">
                                            {product.overview.testimonials.map((t, idx) => (
                                                <p key={idx} className="text-lg font-medium italic text-slate-900 leading-relaxed">
                                                    "{t.quote}"
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                )}


                            </div>

                            {/* Sidebar */}
                            <aside className="relative">
                                <div className="sticky top-32 space-y-6">
                                    {/* Vision Card */}
                                    <div className="rounded-3xl bg-blue-50/50 p-8 border border-blue-100">
                                        <div className="space-y-8">
                                            {product.overview?.vision && (
                                                <div className="space-y-4">
                                                    <span className="text-xs font-bold tracking-widest text-[#4F46E5] uppercase">
                                                        NOSSA VISÃO
                                                    </span>
                                                    <p className="text-base font-medium text-slate-900 leading-relaxed">
                                                        {product.overview.vision}
                                                    </p>
                                                </div>
                                            )}

                                            {/* Key Metrics at a Glance */}
                                            <div className="space-y-6 pt-4">
                                                <span className="text-xs font-bold tracking-widest text-[#4F46E5] uppercase">
                                                    ONDE ESTAMOS
                                                </span>
                                                {product.detailedMetrics && (
                                                    <div className="space-y-8">
                                                        <div>
                                                            <div className="text-3xl font-black text-[#4F46E5]">
                                                                {product.detailedMetrics.usage.totalUsers}
                                                            </div>
                                                            <div className="mt-1 text-sm font-semibold text-slate-600">
                                                                usuários únicos no último trimestre
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="text-3xl font-black text-[#4F46E5]">
                                                                {product.detailedMetrics.usage.totalHours}
                                                            </div>
                                                            <div className="mt-1 text-sm font-semibold text-slate-600">
                                                                horas de atividade registradas
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                )}

                {activeTab === "metrics" && (
                    <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12">
                        <div className="mb-8 flex items-center gap-4">
                            <h2 className="text-xl font-bold text-slate-900">Métricas</h2>
                            <div className="relative">
                                <select className="appearance-none rounded-md border border-slate-200 bg-white py-1.5 pl-3 pr-8 text-sm font-medium text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                                    <option>2025 T3</option>
                                    <option>2025 T2</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </div>
                        </div>

                        {product.detailedMetrics ? (
                            <div className="divide-y divide-slate-100">
                                {/* Team Members */}
                                <div className="grid gap-8 py-8 md:grid-cols-[240px_1fr]">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                            <Users className="h-4 w-4" />
                                        </div>
                                        <span className="font-semibold text-blue-600">Membros da Equipe</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-6">
                                            {/* Total Number */}
                                            <span className="text-3xl font-bold text-slate-900">
                                                {product.detailedMetrics.teamMembers.total}
                                            </span>

                                            {/* Team Member Avatars */}
                                            <div className="flex -space-x-2">
                                                {[1, 2, 3, 4, 5, 6, 7].slice(0, product.detailedMetrics.teamMembers.total).map((num) => (
                                                    <div
                                                        key={num}
                                                        className="relative h-10 w-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden"
                                                    >
                                                        {num <= 6 ? (
                                                            <img
                                                                src={`/team/member-${num}.png`}
                                                                alt={`Team member ${num}`}
                                                                className="h-full w-full object-cover"
                                                                onError={(e) => {
                                                                    // Fallback to initials if image fails to load
                                                                    e.currentTarget.style.display = 'none';
                                                                }}
                                                            />
                                                        ) : (
                                                            <div className="flex h-full w-full items-center justify-center bg-blue-100 text-xs font-semibold text-blue-600">
                                                                +
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Badges */}
                                            <div className="flex flex-wrap gap-2 text-slate-600">
                                                {product.detailedMetrics.teamMembers.breakdown.map((area, idx) => (
                                                    <span key={idx} className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                                                        {area}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Cost Per Quarter */}
                                <div className="grid gap-8 py-8 md:grid-cols-[240px_1fr]">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                            <DollarSign className="h-4 w-4" />
                                        </div>
                                        <span className="font-semibold text-blue-600">Custo por Trimestre</span>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900">
                                            {product.detailedMetrics?.costPerQuarter?.value}
                                        </div>
                                        <button
                                            onClick={() => setShowCostBreakdown(!showCostBreakdown)}
                                            className="mt-2 flex items-center text-sm font-medium text-slate-500 hover:text-slate-900"
                                        >
                                            {showCostBreakdown ? 'Ocultar detalhes' : 'Ver detalhes'}
                                            <svg
                                                className={cn("ml-1 h-4 w-4 transition-transform", showCostBreakdown && "rotate-180")}
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {showCostBreakdown && product.detailedMetrics?.costPerQuarter?.breakdown && (
                                            <div className="mt-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                                                {/* Progressive Bar */}
                                                <div className="flex h-2 w-full overflow-hidden rounded-full bg-slate-100">
                                                    {product.detailedMetrics.costPerQuarter.breakdown.map((item, idx) => {
                                                        const total = product.detailedMetrics!.costPerQuarter.breakdown!.reduce((acc, curr) => acc + curr.amount, 0);
                                                        const percentage = (item.amount / total) * 100;
                                                        return (
                                                            <div
                                                                key={idx}
                                                                style={{ width: `${percentage}%`, backgroundColor: item.color }}
                                                                className="h-full"
                                                            />
                                                        );
                                                    })}
                                                </div>

                                                {/* Legend Grid */}
                                                <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
                                                    {product.detailedMetrics.costPerQuarter.breakdown.map((item, idx) => (
                                                        <div key={idx} className="space-y-1">
                                                            <div className="flex items-center gap-2">
                                                                <div
                                                                    className="h-3 w-3 rounded-sm"
                                                                    style={{ backgroundColor: item.color }}
                                                                />
                                                                <span className="text-sm font-bold text-slate-900">{item.value}</span>
                                                            </div>
                                                            <div className="text-xs text-slate-500 leading-tight">
                                                                {item.label}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>



                                {/* Overall Satisfaction */}
                                <div className="grid gap-8 py-8 md:grid-cols-[240px_1fr]">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                            <Smile className="h-4 w-4" />
                                        </div>
                                        <span className="font-semibold text-blue-600">Satisfação Geral (CSAT)</span>
                                    </div>
                                    <div className="grid gap-12 sm:grid-cols-3">
                                        <div>
                                            <div className="mt-1 text-2xl font-bold text-slate-900">
                                                {product.detailedMetrics.satisfaction.userScore}
                                            </div>
                                            <div className="mt-1 flex items-center text-sm text-slate-500">
                                                usuários
                                                <div className="ml-1.5">
                                                    <Tooltip content={product.detailedMetrics.satisfaction.userTooltip || ""}>
                                                        <HelpCircle className="h-4 w-4 text-slate-400 hover:text-slate-600 transition-colors cursor-help" />
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mt-1 text-2xl font-bold text-slate-900">
                                                {product.detailedMetrics.satisfaction.adminScore}
                                            </div>
                                            <div className="mt-1 flex items-center text-sm text-slate-500">
                                                administradores
                                                <div className="ml-1.5">
                                                    <Tooltip content={product.detailedMetrics.satisfaction.adminTooltip || ""}>
                                                        <HelpCircle className="h-4 w-4 text-slate-400 hover:text-slate-600 transition-colors cursor-help" />
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-12 text-slate-500">
                                Métricas detalhadas não disponíveis para este produto.
                            </div>
                        )}
                    </div>
                )}

                {activeTab === "updates" && (
                    <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12">
                        <div className="mb-8 flex items-center gap-4">
                            <h2 className="text-xl font-bold text-slate-900">Atualizações</h2>
                        </div>

                        {product.updates && product.updates.length > 0 ? (
                            <div className="relative max-w-4xl">
                                {/* Vertical Line */}
                                <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-blue-600 opacity-20" />

                                <div className="space-y-12">
                                    {product.updates.map((update, idx) => (
                                        <div key={idx} className="relative pl-10">
                                            {/* Dot on timeline */}
                                            <div className="absolute left-[-5px] top-1.5 flex h-[12px] w-[12px] items-center justify-center">
                                                <div className="h-3 w-3 rounded-full bg-blue-600 ring-4 ring-white" />
                                            </div>

                                            {/* Quarter Header */}
                                            <h3 className="mb-8 text-sm font-bold uppercase tracking-widest text-blue-600">
                                                {update.period}
                                            </h3>

                                            {/* Update Items */}
                                            <div className="space-y-8 text-slate-700">
                                                {update.items.map((item, itemIdx) => (
                                                    <div key={itemIdx} className="relative">
                                                        <div>
                                                            <p className="text-[17px] font-medium leading-relaxed text-slate-900">
                                                                {item.title}
                                                            </p>
                                                            {item.details && (
                                                                <ul className="mt-4 space-y-3 pl-1">
                                                                    {item.details.map((detail, detailIdx) => (
                                                                        <li key={detailIdx} className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-600">
                                                                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-300" />
                                                                            {detail}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-12 text-slate-500">
                                Nenhuma atualização recente disponível para este produto.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div >
    );
}
