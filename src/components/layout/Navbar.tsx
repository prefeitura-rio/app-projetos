import Link from "next/link";


export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white h-[72px] flex items-center justify-center">
            <div className="max-w-[1280px] w-full flex items-center justify-between px-4">
                {/* Left: IPLANRIO Logo */}
                <Link href="/" className="flex items-center">
                    <img
                        src="https://cdn.prod.website-files.com/6790179a751ec6690f79e8cc/67b48f3bab0086f50ca57fc4_DIGITANDO_4%20(1).gif"
                        alt="IPLANRIO Logo"
                        className="w-[120px] h-auto object-contain"
                    />
                </Link>

                {/* Center: Navigation Links */}
                <nav className="hidden xl:flex items-center gap-[24px]">
                    {[
                        { name: "Home", href: "/" },
                        { name: "Sobre", href: "#" },
                        { name: "Institucional", href: "#" },
                        { name: "Notícias", href: "#" },
                        { name: "Dataviz", href: "#" },
                    ].map((link) => {
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[14px] leading-[21px] font-[400] text-[#000000] hover:opacity-70 transition-all font-sans"
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right: Prefeitura Rio Logo */}
                <div className="flex items-center">
                    <img
                        src="/logo-prefeitura.png"
                        alt="Prefeitura RIO Logo"
                        className="w-[89px] h-auto object-contain"
                    />
                </div>
            </div>
        </header>
    );
}
