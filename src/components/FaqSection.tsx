import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Como a Peron pode ajudar minha empresa a crescer em Uberlândia?",
    answer:
      "Identificamos gargalos financeiros e operacionais que drenam seu capital e desenhamos rotas claras para otimização e expansão, sempre focando no retorno tangível do seu investimento. Nosso conhecimento profundo da dinâmica comercial e das oportunidades do mercado de Uberlândia e do Triângulo Mineiro é um diferencial estratégico para acelerar sua tomada de decisão.",
  },
  {
    question: "Qual o diferencial da consultoria da Peron em relação a outras opções?",
    answer:
      "Nosso foco absoluto é a implementação prática e resultados mensuráveis, com acompanhamento próximo, ético e transparente. Não entregamos relatórios burocráticos para a gaveta; construímos a rotina junto com você. A nota 5.0 no Google Maps com 28 avaliações reais reflete a satisfação comprovada de empresários locais.",
  },
  {
    question: "Como funciona a sessão de diagnóstico inicial gratuito?",
    answer:
      "É uma imersão preliminar de 45 a 60 minutos, presencial em nosso escritório no Jardim Sul ou online via Google Meet. Avaliamos a estrutura atual de finanças, processos e metas da sua empresa. Ao final, apresentamos um parecer executivo com os 3 principais pontos de alavancagem imediatos, sem nenhum compromisso financeiro.",
  },
  {
    question: "Qual é o perfil e porte de empresas que a Peron atende?",
    answer:
      "Atendemos desde pequenos negócios estruturados (comércios, clínicas, escritórios técnicos, prestadores de serviços) até indústrias, distribuidoras e empresas em expansão regional com faturamento a partir de R$ 30 mil/mês ou equipes a partir de 3 colaboradores.",
  },
  {
    question: "A consultoria atende outras cidades do Triângulo Mineiro e Alto Paranaíba?",
    answer:
      "Sim. Embora nossa sede física esteja no Jardim Sul em Uberlândia, atendemos empresas em Araguari, Patos de Minas, Uberaba, Ituiutaba e demais cidades da região, combinando encontros presenciais estratégicos com rituais semanais via videoconferência.",
  },
  {
    question: "Quanto tempo dura um projeto de consultoria empresarial?",
    answer:
      "Projetos pontuais de diagnóstico e mapeamento duram entre 2 e 4 semanas. Programas completos de reestruturação financeira, controladoria e padronização operacional costumam durar de 3 a 6 meses para garantir a consolidação cultural da equipe.",
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F8F9FA] text-[#343A40] border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#B8860B] mb-2 font-heading">
            <HelpCircle className="w-4 h-4" />
            <span>Perguntas Frequentes & Esclarecimentos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1A2C42] font-heading text-balance">
            Dúvidas Comuns Sobre Nossos Serviços
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans">
            Transparência desde o primeiro contato. Entenda como trabalhamos antes de dar o próximo passo.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm sm:text-base text-[#1A2C42] font-heading">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#1A2C42] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
