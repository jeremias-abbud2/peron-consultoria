import React, { useState } from "react";
import { Star, ArrowRight, Phone, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";
import { COMPANY, IMAGES } from "../data/company";

interface HeroProps {
  onScheduleClick: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScheduleClick, onExploreServices }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative bg-[#1A2C42] text-white overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[#253D5B]">
      {/* Subtle architectural grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed proof kicker - strictly no pill enclosures */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-300">
              <span className="flex items-center gap-1 text-[#D4AF37] font-semibold">
                <Star className="w-4 h-4 fill-current" />
                <span>5.0 no Google Maps</span>
              </span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span className="text-slate-300">28 avaliações reais</span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>Jardim Sul, Uberlândia - MG</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] text-balance font-heading">
              Peron Consultoria: Seu Próximo Salto Estratégico em Uberlândia.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-pretty font-sans">
              Transforme desafios operacionais e financeiros em planos de ação claros.
              Mais de 28 empresas já confiam na nossa bússola estratégica para acelerar margens,
              organizar processos e gerar resultados mensuráveis.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onScheduleClick}
                className="px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#1A2C42] bg-[#B8860B] hover:bg-[#D4AF37] active:bg-[#9E7309] rounded-md transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Agendar Diagnóstico Gratuito</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-[#253D5B]/60 hover:bg-[#253D5B] border border-slate-600/50 rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Conhecer Nossos Serviços</span>
              </button>
            </div>

            {/* Direct Quick Contact Trust Note */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-700/60">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B8860B]" />
                <span>Sessão 100% personalizada e sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B8860B]" />
                <span>
                  Atendimento direto:{" "}
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="text-slate-200 hover:text-[#B8860B] font-semibold underline decoration-slate-600 underline-offset-2"
                  >
                    {COMPANY.phone}
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-slate-700/80 bg-[#121F2F] shadow-2xl">
              {!imageError ? (
                <img
                  src={IMAGES.hero}
                  alt="Sessão de consultoria executiva no escritório da Peron Consultoria com vista panorâmica"
                  className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-[400px] flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#1A2C42] to-[#121F2F] text-center">
                  <div className="w-16 h-16 rounded-full bg-[#B8860B]/20 flex items-center justify-center text-[#B8860B] mb-4">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white mb-2">Bússola Estratégica Digital</h3>
                  <p className="text-sm text-slate-300 max-w-xs">
                    Clareza e direcionamento para sua empresa em Uberlândia.
                  </p>
                </div>
              )}

              {/* Verified Badge Overlay at bottom of image */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#121F2F] via-[#121F2F]/80 to-transparent flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span className="font-medium text-slate-200">Consultoria Presencial & Online</span>
                </div>
                <span className="text-[#D4AF37] font-semibold">Nota 5.0 no Maps</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Quantitative KPI Strip */}
        <div className="mt-14 pt-10 border-t border-[#253D5B] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] font-heading tabular-nums">
              5.0 ★
            </div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
              Google Maps Oficial
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              28 avaliações reais e verificadas
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-heading tabular-nums">
              +140%
            </div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
              Clareza Operacional
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Média de controle financeiro pós-plano
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-heading tabular-nums">
              100%
            </div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
              Parceria em Uberlândia
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Sede física no Jardim Sul
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37] font-heading tabular-nums">
              R$ 0,00
            </div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
              Diagnóstico Estratégico
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Sessão inicial de qualificação
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
