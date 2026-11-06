import React, { useState } from "react";
import { Star, ExternalLink, Quote, CheckCircle2, MapPin } from "lucide-react";
import { GOOGLE_REVIEWS, GOOGLE_MAPS_METRICS } from "../data/reviews";
import { COMPANY } from "../data/company";

export const TestimonialsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("todos");

  const filteredReviews =
    activeCategory === "todos"
      ? GOOGLE_REVIEWS
      : GOOGLE_REVIEWS.filter((r) => r.category === activeCategory);

  return (
    <section id="avaliacoes" className="py-20 lg:py-28 bg-[#F8F9FA] text-[#343A40] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Block with Google Maps Reputation Anchor */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#B8860B] mb-2 font-heading">
              Resultados e Depoimentos: A Prova da Nossa Direção
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1A2C42] font-heading text-balance">
              Avaliação Máxima 5.0 ★ no Google Maps
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-sans">
              28 empresários e gestores de Uberlândia já comprovaram na prática os resultados da nossa consultoria.
              A transparência e a proximidade são a base de cada projeto.
            </p>
          </div>

          {/* Google Maps Trust Box */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm shrink-0 flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-[#1A2C42] text-[#D4AF37] flex flex-col items-center justify-center font-heading">
              <span className="text-lg font-bold leading-none">5.0</span>
              <div className="flex text-[#D4AF37] text-[10px] mt-1">
                {"★★★★★"}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Classificação Oficial</div>
              <div className="text-sm font-bold text-[#1A2C42] font-heading">
                28 Avaliações Verificadas
              </div>
              <a
                href={COMPANY.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#B8860B] hover:text-[#9E7309] font-medium flex items-center gap-1 mt-0.5"
              >
                <span>Ver no Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Segmented Filter Tabs (functional button tabs with click handlers) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-200/70 rounded-xl max-w-fit mb-10">
          {[
            { id: "todos", label: "Todos os Depoimentos" },
            { id: "financeiro", label: "Gestão Financeira" },
            { id: "processos", label: "Processos & Equipe" },
            { id: "estrategia", label: "Planejamento Estratégico" },
            { id: "governanca", label: "Governança" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === tab.id
                  ? "bg-white text-[#1A2C42] shadow-sm font-heading"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header of Card */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#D4AF37] gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{review.date}</span>
                </div>

                {/* Highlight Quote */}
                <div className="text-xs font-bold text-[#1A2C42] font-heading bg-slate-50 p-2.5 rounded-lg border border-slate-100 flex items-start gap-1.5">
                  <Quote className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                  <span>{review.highlight}</span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  "{review.text}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#1A2C42] font-heading">
                    {review.author}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {review.role} · {review.companyOrSegment}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold" title="Avaliação real postada no perfil do Google Maps">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proof Footer Note */}
        <div className="mt-12 text-center pt-8 border-t border-slate-200">
          <p className="text-xs text-slate-500">
            Todas as avaliações são registradas publicamente na ficha oficial da Peron Consultoria no Google Maps.
          </p>
          <div className="mt-3">
            <a
              href={COMPANY.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A2C42] hover:text-[#B8860B] underline underline-offset-4"
            >
              <span>Abrir página de avaliações no Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
