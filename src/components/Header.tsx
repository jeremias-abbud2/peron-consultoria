import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { COMPANY } from "../data/company";

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#1A2C42]/95 backdrop-blur-md border-b border-[#253D5B] text-white transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face) */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-white hover:text-[#B8860B] transition-colors whitespace-nowrap shrink-0 font-heading"
        >
          {COMPANY.name}
        </a>

        {/* Zone 2: Nav Links (4-5 single-line clean text links) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-200">
          <button
            onClick={() => scrollToSection("sobre")}
            className="hover:text-[#B8860B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("servicos")}
            className="hover:text-[#B8860B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("diagnostico")}
            className="hover:text-[#B8860B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Diagnóstico 360°
          </button>
          <button
            onClick={() => scrollToSection("avaliacoes")}
            className="hover:text-[#B8860B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Avaliações (5.0★)
          </button>
          <button
            onClick={() => scrollToSection("localizacao")}
            className="hover:text-[#B8860B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Localização
          </button>
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1A2C42] bg-[#B8860B] hover:bg-[#D4AF37] active:bg-[#9E7309] rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <span>Agendar Diagnóstico</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-200 hover:text-white hover:bg-[#253D5B] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
            aria-label="Alternar menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121F2F] border-b border-[#253D5B] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 text-base font-medium text-slate-200">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-left py-2 hover:text-[#B8860B] transition-colors"
            >
              Sobre a Peron
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-left py-2 hover:text-[#B8860B] transition-colors"
            >
              Serviços Corporativos
            </button>
            <button
              onClick={() => scrollToSection("diagnostico")}
              className="text-left py-2 hover:text-[#B8860B] transition-colors"
            >
              Diagnóstico Empresarial 360°
            </button>
            <button
              onClick={() => scrollToSection("avaliacoes")}
              className="text-left py-2 hover:text-[#B8860B] transition-colors"
            >
              Avaliações Google Maps (5.0 ★)
            </button>
            <button
              onClick={() => scrollToSection("localizacao")}
              className="text-left py-2 hover:text-[#B8860B] transition-colors"
            >
              Endereço no Jardim Sul, Uberlândia
            </button>
          </div>
          <div className="pt-4 border-t border-[#253D5B]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-center text-sm font-semibold uppercase tracking-wider text-[#1A2C42] bg-[#B8860B] hover:bg-[#D4AF37] rounded-md transition-colors"
            >
              Agendar Diagnóstico Gratuito
            </button>
            <div className="mt-3 text-center text-xs text-slate-400">
              Ou ligue direto:{" "}
              <a href={`tel:${COMPANY.phoneRaw}`} className="text-[#B8860B] hover:underline font-semibold">
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
