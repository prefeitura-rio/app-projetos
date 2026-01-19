import {
    LayoutGrid,
    Users,
    Wallet,
    Heart,
    Info,
    Settings,
    Bus,
    ShieldCheck,
    Brain
} from "lucide-react";

const categories = [
    { name: "Todos", icon: LayoutGrid, id: "all" },
    { name: "Inteligência Artificial", icon: Brain, id: "ai" },
    { name: "Comunidade", icon: Users, id: "community" },
    { name: "Finanças", icon: Wallet, id: "finance" },
    { name: "Saúde", icon: Heart, id: "healthcare" },
    { name: "Informação", icon: Info, id: "information" },
    { name: "Produtividade", icon: Settings, id: "productivity" },
    { name: "Transporte", icon: Bus, id: "transport" },
    { name: "Segurança", icon: ShieldCheck, id: "trust" },
];

interface CategoryFilterProps {
    activeCategory: string;
    onSelectCategory: (id: string) => void;
}

export function CategoryFilter({ activeCategory, onSelectCategory }: CategoryFilterProps) {
    return (
        <div className="flex w-full items-center justify-center gap-8 overflow-x-auto pb-4 pt-2 no-scrollbar">
            {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;

                return (
                    <button
                        key={category.id}
                        onClick={() => onSelectCategory(category.id)}
                        className={`group flex min-w-fit flex-col items-center gap-2 transition-all hover:text-blue-600 ${isActive ? "text-slate-900" : "text-slate-400"
                            }`}
                    >
                        <div className="relative">
                            <Icon
                                className={`h-6 w-6 transition-transform group-hover:scale-110 ${isActive ? "text-slate-900" : "text-slate-400"
                                    }`}
                            />

                        </div>

                        <span className={`text-xs font-medium ${isActive ? "text-slate-900" : "text-slate-500"}`}>
                            {category.name}
                        </span>

                    </button>
                );
            })}
        </div>
    );
}
