import React from "react";
import { Star, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { COMPANY } from "../data/company";

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#121F2F] text-white border-t border-[#253D5B] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Concept (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xl font-bold font-heading text-white tracking-tight">
              {COMPANY.name}
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans max-w-sm">
              Bússola Estratégica Digital. Clareza, direcionamento e resultados mensuráveis para sua empresa em Uberlândia e região.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
              <span className="flex items-center text-[#D4AF37]">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="ml-1 font-bold">5.0</span>
              </span>
              <span>·</span>
              <span>28 avaliações no Google Maps</span>
            </div>
          </div>

          {/* Navigation Links (col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] font-heading">
              Navegação
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => scrollTo("sobre")} className="hover:text-white transition-colors cursor-pointer">
                  Sobre a Peron
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("servicos")} className="hover:text-white transition-colors cursor-pointer">
                  Nossos Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("diagnostico")} className="hover:text-white transition-colors cursor-pointer">
                  Diagnóstico 360°
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("avaliacoes")} className="hover:text-white transition-colors cursor-pointer">
                  Avaliações (5.0★)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("localizacao")} className="hover:text-white transition-colors cursor-pointer">
                  Localização
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] font-heading">
              Áreas de Atuação
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Gestão Financeira & Controladoria</li>
              <li>Planejamento Estratégico & OKRs</li>
              <li>Otimização e Padronização de Processos</li>
              <li>Governança & Acordo de Sócios</li>
              <li>Diagnóstico Empresarial 360°</li>
            </ul>
          </div>

          {/* Direct Address & Contact (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] font-heading">
              Sede em Uberlândia
            </div>
            <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                <span>{COMPANY.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B8860B] shrink-0" />
                <a href={`tel:${COMPANY.phoneRaw}`} className="text-slate-200 hover:text-[#D4AF37]">
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B8860B] shrink-0" />
                <span>{COMPANY.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Quiet Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <a
              href={COMPANY.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors flex items-center gap-1"
            >
              <span>Ficha no Google Maps</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <span>Uberlândia - Minas Gerais</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
