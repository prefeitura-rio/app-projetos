"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { CategoryFilter } from "@/components/CategoryFilter";


// Mock data for products
const products = [
  {
    id: 1,
    slug: "activesg",
    title: "ActiveSG",
    category: "Comunidade",
    year: "2024",
    builtFor: "Cidadãos",
    description: "ActiveSG é uma plataforma para o público reservar instalações esportivas, participar de programas de fitness e acessar academias e piscinas.",
    status: "Active" as const,

    categoryId: "community",
  },
  {
    id: 2,
    slug: "armoury",
    title: "Armoury",
    category: "Produtividade",
    year: "2023",
    builtFor: "Servidores Públicos",
    description: "Armoury substitui checklists de papel por digitais para aumentar a transparência, reduzir custos operacionais e gerar insights acionáveis.",
    status: "Active" as const,

    categoryId: "productivity",
  },
  {
    id: 3,
    slug: "care360",
    title: "Care360",
    category: "Saúde",
    year: "2023",
    builtFor: "Servidores Públicos",
    description: "Care360 é um sistema de gestão de pacientes que ajuda Assistentes Sociais a gerenciar os cuidados financeiros e psicossociais de seus pacientes.",
    status: "Active" as const,

    categoryId: "healthcare",
  },
  {
    id: 4,
    slug: "data-rio",
    title: "Data.rio",
    category: "Informação",
    year: "2011",
    builtFor: "Cidadãos & Servidores",
    description: "Data.rio é o repositório central de dados públicos da cidade, promovendo transparência e inovação através do acesso aberto à informação.",
    status: "Active" as const,

    categoryId: "information",
  },
  {
    id: 5,
    slug: "mapas-rio",
    title: "Mapas Rio",
    category: "Informação",
    year: "2025",
    builtFor: "Cidadãos & Servidores",
    description: "Plataforma de georreferenciamento que fornece mapas detalhados e dados espaciais para planejamento urbano e consulta pública.",
    status: "Active" as const,

    categoryId: "information",
  },
  {
    id: 6,
    slug: "pair",
    title: "Pair",
    category: "Inteligência Artificial",
    year: "2023",
    builtFor: "Servidores Públicos",
    description: "Pair é uma ferramenta de IA assistiva que ajuda servidores a redigir documentos, resumir textos e melhorar a produtividade diária.",
    status: "Active" as const,

    categoryId: "ai",
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.categoryId === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-50">
      <div className="mx-auto max-w-[1280px] px-4 py-24">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Catálogo de Produtos
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-600">
            Conheça as soluções digitais que modernizam a gestão pública e transformam a experiência do cidadão carioca.
          </p>


          {/* Search Bar */}
          <div className="mt-8 w-full max-w-xl relative">
            <div className="relative rounded-full shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Search className="h-5 w-5 text-slate-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-full rounded-full border-0 py-4 pl-12 pr-4 text-slate-900 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 shadow-sm transition-shadow hover:shadow-md"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filters */}
          <div className="mt-12 w-full">
            <CategoryFilter
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              slug={product.slug}
              title={product.title}
              category={product.category}

              builtFor={product.builtFor}
              description={product.description}
              status={product.status}

            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="mt-10 text-center text-slate-500">
            Nenhum produto encontrado para sua busca.
          </div>
        )}
      </div>
    </main>
  );
}
