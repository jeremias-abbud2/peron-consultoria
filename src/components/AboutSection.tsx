import React, { useState } from "react";
import { Compass, CheckCircle2, TrendingUp, Users, Building2, MapPin } from "lucide-react";
import { COMPANY, IMAGES } from "../data/company";

export const AboutSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#F8F9FA] text-[#343A40]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#B8860B] mb-2 font-heading">
            Nossa História & Propósito Local
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1A2C42] font-heading text-balance">
            Sobre a Peron: A Bússola Estratégica Para Empresas em Uberlândia.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Nascemos com a convicção de que consultoria de verdade não é um relatório teórico que fica esquecido na gaveta.
            É um direcionamento prático, com método comprovado e presença próxima no dia a dia do empresário.
          </p>
        </div>

        {/* 2-Column Split: Image + Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">
              {!imageError ? (
                <img
                  src={IMAGES.meeting}
                  alt="Reunião de alinhamento estratégico da Peron Consultoria com empresários em Uberlândia"
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-[400px] bg-slate-100 flex items-center justify-center p-6 text-center">
                  <div className="text-slate-500 text-sm">
                    Reunião de alinhamento com clientes da Peron Consultoria
                  </div>
                </div>
              )}
              {/* Regional anchor tag */}
              <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-medium text-[#1A2C42]">
                  <Building2 className="w-4 h-4 text-[#B8860B]" />
                  <span>Sede Própria: Jardim Sul</span>
                </span>
                <span className="text-[#B8860B] font-semibold">Triângulo Mineiro</span>
              </div>
            </div>
          </div>

          {/* Right Column: Strategic Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Em um polo econômico dinâmico e competitivo como Uberlândia, empreendedores enfrentam desafios diários
                de crescimento acelerado: caixa pressionado, gargalos operacionais e dificuldade em delegar tarefas.
              </p>
              <p>
                A <strong className="text-[#1A2C42] font-semibold">Peron Consultoria</strong> atua como um braço estratégico do negócio.
                Sentamos à mesa com os sócios, analisamos os números reais e construímos planos com metas claras e acompanhamento contínuo.
              </p>
            </div>

            {/* 3 Core Pillars specified in PRD */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-[#B8860B]/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#1A2C42] text-[#D4AF37] flex items-center justify-center mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base text-[#1A2C42] font-heading mb-1.5">
                  Clareza Estratégica
                </h3>
                <p className="text-xs text-slate-600 leading-normal">
                  Traduzimos a complexidade do mercado em planos de ação focados no seu crescimento sustentável.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-[#B8860B]/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#1A2C42] text-[#D4AF37] flex items-center justify-center mb-3">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base text-[#1A2C42] font-heading mb-1.5">
                  Resultados Comprovados
                </h3>
                <p className="text-xs text-slate-600 leading-normal">
                  Sua confiança é prioridade: nota máxima 5.0 no Google com 28 avaliações reais de empresários.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-[#B8860B]/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#1A2C42] text-[#D4AF37] flex items-center justify-center mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base text-[#1A2C42] font-heading mb-1.5">
                  Parceria Local
                </h3>
                <p className="text-xs text-slate-600 leading-normal">
                  Compreendemos a fundo a cultura e o ecossistema de Uberlândia. Soluções feitas para a sua realidade.
                </p>
              </div>
            </div>

            {/* Direct quote */}
            <div className="p-5 rounded-xl bg-[#1A2C42] text-white border border-slate-700 mt-6">
              <p className="italic text-sm text-slate-200 leading-relaxed">
                "Não vendemos fórmulas prontas. Nosso trabalho é dar a você a clareza necessária para tomar as decisões certas
                no momento certo, transformando esforço em lucro real."
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-[#D4AF37]">
                <span className="font-medium">— Diretoria Executiva Peron Consultoria</span>
                <span>R. Profa. Maria Helena Martins, 163 · Uberlândia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
