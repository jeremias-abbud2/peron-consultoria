import React, { useState } from "react";
import { CheckCircle2, ArrowRight, Clock, Target, Layers, FileText, X } from "lucide-react";
import { SERVICES, ServiceItem } from "../data/services";
import { IMAGES } from "../data/company";

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-white text-[#343A40] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#B8860B] mb-2 font-heading">
              Metodologia Aplicada & Soluções
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1A2C42] font-heading text-balance">
              Nossos Serviços: Soluções Para Seu Negócio
            </h2>
            <p className="mt-3 text-base text-slate-600 font-sans">
              Cada empresa passa por um estágio diferente. Nossos programas combinam diagnóstico prático,
              estruturação e acompanhamento direto para gerar impacto imediato.
            </p>
          </div>

          <div className="shrink-0 text-sm font-medium text-slate-500">
            <span>5 soluções corporativas estruturadas</span>
          </div>
        </div>

        {/* Featured Service Spotlight + Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Spotlight Card: Gestão Financeira (col-span-7) */}
          <div className="lg:col-span-7 bg-[#1A2C42] text-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-wider text-[#D4AF37] font-heading">
                  01. Solução Principal
                </span>
                <span className="text-xs text-slate-300">Alta Demanda em Uberlândia</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  {SERVICES[0].title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                  {SERVICES[0].shortDescription}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#253D5B]/70 border border-slate-700 space-y-2 text-xs sm:text-sm text-slate-200">
                <div className="font-semibold text-[#D4AF37] flex items-center gap-1.5">
                  <Target className="w-4 h-4" />
                  <span>Problema que Resolve:</span>
                </div>
                <p className="text-slate-300">{SERVICES[0].targetPain}</p>
              </div>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Entregas Centrais do Projeto:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                  {SERVICES[0].deliverables.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <button
                onClick={() => onSelectServiceForBooking(SERVICES[0].title)}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1A2C42] bg-[#B8860B] hover:bg-[#D4AF37] rounded-md transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Solicitar Proposta deste Serviço</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setSelectedServiceForModal(SERVICES[0])}
                className="text-xs text-slate-300 hover:text-white underline underline-offset-4 cursor-pointer"
              >
                Ver todos os detalhes
              </button>
            </div>
          </div>

          {/* Visual Asset Card (col-span-5) */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 bg-[#F8F9FA] relative flex flex-col">
            <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden bg-slate-100">
              {!imageError ? (
                <img
                  src={IMAGES.analytics}
                  alt="Relatórios e métricas de desempenho estratégico da Peron Consultoria"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-6 bg-slate-200 text-slate-600 text-xs">
                  Análise gerencial e estratégia financeira
                </div>
              )}
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between bg-white">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B8860B] font-heading">
                  Rigor Analítico
                </span>
                <h4 className="font-bold text-lg text-[#1A2C42] font-heading">
                  Decisões baseadas em dados reais, não em intuição
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Construímos indicadores financeiros e operacionais para que a diretoria tenha segurança em cada contratação, investimento ou ajuste de rota.
                </p>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Relatórios claros e objetivos</span>
                <span className="font-semibold text-[#1A2C42]">Diagnósticos em Uberlândia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Services Cards Grid (Remaining 4 services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.slice(1).map((service) => (
            <div
              key={service.id}
              className="bg-[#F8F9FA] rounded-xl p-6 border border-slate-200 hover:border-[#B8860B]/60 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#B8860B] font-heading">
                    {service.number}.
                  </span>
                  <span className="text-[11px] text-slate-600 flex items-center gap-1 font-medium">
                    <Clock className="w-3 h-3 text-[#B8860B]" />
                    <span className="truncate max-w-[120px]">{service.duration}</span>
                  </span>
                </div>

                <h3 className="font-bold text-base text-[#1A2C42] font-heading leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="pt-2 border-t border-slate-200/70 space-y-1.5">
                  <div className="text-[11px] font-semibold text-[#1A2C42]">
                    Entregáveis-chave:
                  </div>
                  {service.deliverables.slice(0, 3).map((del, i) => (
                    <div key={i} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-[#B8860B] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-200 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectServiceForBooking(service.title)}
                  className="text-xs font-semibold text-[#1A2C42] hover:text-[#B8860B] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Solicitar</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <button
                  onClick={() => setSelectedServiceForModal(service)}
                  className="text-xs text-slate-600 hover:text-slate-900 underline underline-offset-2 cursor-pointer font-medium"
                >
                  Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedServiceForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121F2F]/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedServiceForModal(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Fechar detalhes do serviço"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B8860B] font-heading">
                  {selectedServiceForModal.number}. Serviço Peron
                </span>
                <h3 className="text-2xl font-bold text-[#1A2C42] font-heading mt-1">
                  {selectedServiceForModal.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedServiceForModal.fullDescription}
              </p>

              <div className="p-4 rounded-xl bg-[#F8F9FA] border border-slate-200 space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#1A2C42]">
                  Dores e Gargalos que Eliminamos:
                </div>
                <p className="text-xs sm:text-sm text-slate-700">
                  {selectedServiceForModal.targetPain}
                </p>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#1A2C42] mb-3">
                  Lista Completa de Entregáveis:
                </div>
                <div className="space-y-2">
                  {selectedServiceForModal.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div>
                  <span className="font-semibold text-[#1A2C42] block">Prazo Típico:</span>
                  <span className="text-slate-600">{selectedServiceForModal.duration}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#1A2C42] block">Perfil Ideal:</span>
                  <span className="text-slate-600">{selectedServiceForModal.idealFor}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedServiceForModal(null)}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-300 rounded-md transition-colors"
                >
                  Voltar
                </button>
                <button
                  onClick={() => {
                    const title = selectedServiceForModal.title;
                    setSelectedServiceForModal(null);
                    onSelectServiceForBooking(title);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1A2C42] bg-[#B8860B] hover:bg-[#D4AF37] rounded-md transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Solicitar Proposta deste Serviço</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
