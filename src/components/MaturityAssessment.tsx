import React, { useState } from "react";
import { Compass, CheckCircle2, ChevronRight, RotateCcw, ArrowRight, Sparkles } from "lucide-react";

interface AssessmentQuestion {
  id: string;
  category: string;
  question: string;
  options: {
    text: string;
    score: number;
    feedback: string;
  }[];
}

const QUESTIONS: AssessmentQuestion[] = [
  {
    id: "financeiro",
    category: "Gestão Financeira & Caixa",
    question: "Como está o controle de caixa e lucratividade da sua empresa hoje?",
    options: [
      {
        text: "Temos faturamento, mas o caixa é imprevisível e não sabemos a margem líquida exata.",
        score: 1,
        feedback: "Prioridade: Implantação urgente de fluxo de caixa diário e DRE gerencial para estancar vazamentos.",
      },
      {
        text: "Controlamos entradas e saídas em planilhas básicas, mas sem projeção futura nem centro de custos.",
        score: 2,
        feedback: "Prioridade: Engenharia de precificação e planejamento de capital de giro.",
      },
      {
        text: "Temos DRE estruturado, ponto de equilíbrio calculado e métricas financeiras atualizadas semanalmente.",
        score: 3,
        feedback: "Excelente maturidade financeira. Próximo passo: modelagem para expansão e novos investimentos.",
      },
    ],
  },
  {
    id: "processos",
    category: "Processos & Operação",
    question: "A operação da empresa funciona sem a presença direta dos sócios?",
    options: [
      {
        text: "Não, quase todas as decisões e resolução de problemas operacionais dependem dos sócios.",
        score: 1,
        feedback: "Prioridade: Mapeamento de gargalos e documentação dos primeiros Procedimentos Operacionais Padrão (POPs).",
      },
      {
        text: "Parte da equipe executa rotinas, mas ocorrem erros frequentes, retrabalho e ruídos de comunicação.",
        score: 2,
        feedback: "Prioridade: Padronização de fluxos e indicadores de produtividade por área.",
      },
      {
        text: "Processos mapeados, manuais documentados e lideranças intermediárias autônomas.",
        score: 3,
        feedback: "Operação madura e escalável. Foco em automação e ganho de eficiência contínua.",
      },
    ],
  },
  {
    id: "estrategia",
    category: "Planejamento Estratégico & Metas",
    question: "A empresa possui metas claras e compartilhadas com o time para os próximos 12 meses?",
    options: [
      {
        text: "Trabalhamos focados no mês a mês, sem plano formal nem metas desdobradas.",
        score: 1,
        feedback: "Prioridade: Definição de objetivos centrais (OKRs) e plano de ação tático trimestral.",
      },
      {
        text: "Temos meta de faturamento geral, mas falta método de acompanhamento e responsáveis claros.",
        score: 2,
        feedback: "Prioridade: Rituais mensais de governança e alinhamento de metas por setor.",
      },
      {
        text: "Plano estratégico estruturado, metas em cascata com KPIs e reuniões mensais de governança.",
        score: 3,
        feedback: "Alta clareza de direção. O foco deve ser na disciplina de execução e expansão de mercado.",
      },
    ],
  },
  {
    id: "vendas",
    category: "Vendas, Clientes & Canais",
    question: "Como funciona a aquisição de novos clientes e previsibilidade de receita?",
    options: [
      {
        text: "Dependemos quase que exclusivamente de indicações passivas de conhecidos.",
        score: 1,
        feedback: "Prioridade: Estruturação de canais ativos de prospecção e presença digital profissional.",
      },
      {
        text: "Temos canais de venda ativos, mas com oscilações sazonais fortes e taxa de conversão incerta.",
        score: 2,
        feedback: "Prioridade: Funil de vendas previsível e métricas de Custo de Aquisição (CAC) e LTV.",
      },
      {
        text: "Processo comercial estruturado, funil previsível e carteira de clientes fidelizada.",
        score: 3,
        feedback: "Motor comercial ativo. Oportunidade de cross-selling e expansão de ticket médio.",
      },
    ],
  },
];

interface MaturityAssessmentProps {
  onTransferToBooking: (assessmentSummary: string) => void;
}

export const MaturityAssessment: React.FC<MaturityAssessmentProps> = ({ onTransferToBooking }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleSelectOption = (questionId: string, score: number) => {
    const updated = { ...answers, [questionId]: score };
    setAnswers(updated);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetAssessment = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsFinished(false);
  };

  const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr, 0);
  const maxScore = QUESTIONS.length * 3;
  const percentage = Math.round((totalScore / maxScore) * 100);

  let statusLevel = "Fase de Estruturação Inicial";
  let statusColor = "text-amber-600";
  let diagnosticRecommendation =
    "Sua empresa possui grande potencial represado. Os maiores ganhos virão da organização do fluxo de caixa e padronização dos primeiros processos para liberar o tempo dos sócios.";

  if (percentage >= 75) {
    statusLevel = "Fase de Alta Maturidade & Escala";
    statusColor = "text-emerald-600";
    diagnosticRecommendation =
      "Excelente estrutura operacional. A oportunidade estratégica para a Peron apoiar sua empresa está na governança corporativa, planejamento de expansão e proteção patrimonial.";
  } else if (percentage >= 50) {
    statusLevel = "Fase de Transição & Crescimento";
    statusColor = "text-sky-600";
    diagnosticRecommendation =
      "O negócio já conquistou mercado, mas o crescimento começa a pressionar a operação e a margem. É o momento exato para alinhar metas, definir KPIs e blindar o caixa.";
  }

  const handleSendToBooking = () => {
    const summary = `Diagnóstico Rápido: Nível ${statusLevel} (${percentage}% de maturidade). Pontos avaliados: Finanças: ${answers.financeiro || 1}/3, Processos: ${answers.processos || 1}/3, Estratégia: ${answers.estrategia || 1}/3, Vendas: ${answers.vendas || 1}/3.`;
    onTransferToBooking(summary);
  };

  return (
    <section id="diagnostico" className="py-20 lg:py-28 bg-[#1A2C42] text-white border-t border-[#253D5B] relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2 font-heading">
            <Compass className="w-4 h-4" />
            <span>Bússola Estratégica Interativa</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-heading text-balance">
            Diagnóstico Rápido de Maturidade Empresarial
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 font-sans">
            Em 60 segundos, descubra o nível de maturidade da sua operação e onde estão as maiores alavancas de lucro para seu negócio em Uberlândia.
          </p>
        </div>

        {/* Assessment Card */}
        <div className="bg-[#121F2F] rounded-2xl border border-slate-700/80 p-6 sm:p-10 shadow-2xl">
          {!isFinished ? (
            <div>
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-semibold text-[#D4AF37]">
                    Etapa {currentStep + 1} de {QUESTIONS.length}: {QUESTIONS[currentStep].category}
                  </span>
                  <span>{Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}% concluído</span>
                </div>
                <div className="w-full bg-[#1A2C42] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#B8860B] h-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="space-y-6">
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading leading-snug">
                  {QUESTIONS[currentStep].question}
                </h3>

                <div className="space-y-3">
                  {QUESTIONS[currentStep].options.map((option, idx) => {
                    const isSelected = answers[QUESTIONS[currentStep].id] === option.score;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(QUESTIONS[currentStep].id, option.score)}
                        className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                          isSelected
                            ? "bg-[#253D5B] border-[#B8860B] text-white shadow-md"
                            : "bg-[#1A2C42]/70 border-slate-700/70 hover:bg-[#253D5B]/50 hover:border-slate-500 text-slate-200"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                            isSelected
                              ? "border-[#B8860B] bg-[#B8860B] text-[#1A2C42]"
                              : "border-slate-500"
                          }`}
                        >
                          {isSelected && <div className="w-2 h-2 rounded-full bg-[#1A2C42]" />}
                        </div>
                        <span className="text-xs sm:text-sm font-medium leading-relaxed font-sans">
                          {option.text}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Back */}
              <div className="mt-8 pt-6 border-t border-slate-700 flex items-center justify-between">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="text-xs text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 cursor-pointer font-medium"
                >
                  ← Pergunta anterior
                </button>
                <span className="text-xs text-slate-500">Responda com base na sua rotina atual</span>
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="text-center space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] font-heading">
                  Resultado Preliminar do Diagnóstico
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  Índice de Maturidade: {percentage}%
                </h3>
                <div className={`text-base font-bold ${statusColor}`}>{statusLevel}</div>
              </div>

              {/* Score bar */}
              <div className="bg-[#1A2C42] p-6 rounded-xl border border-slate-700 space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  {QUESTIONS.map((q) => {
                    const sc = answers[q.id] || 1;
                    return (
                      <div key={q.id} className="p-3 bg-[#121F2F] rounded-lg border border-slate-800">
                        <div className="text-xs text-slate-400 font-medium">{q.category.split("&")[0]}</div>
                        <div className="text-lg font-bold text-[#D4AF37] font-heading mt-1">
                          {sc === 1 ? "Atenção" : sc === 2 ? "Moderado" : "Maduro"}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 rounded-lg bg-[#253D5B]/70 border border-slate-600/60 text-xs sm:text-sm text-slate-200">
                  <div className="font-semibold text-[#D4AF37] mb-1">Parecer Executivo Recomendado:</div>
                  <p className="leading-relaxed">{diagnosticRecommendation}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={resetAssessment}
                  className="w-full sm:w-auto px-5 py-3 text-xs font-medium text-slate-300 hover:text-white border border-slate-700 rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Refazer Diagnóstico</span>
                </button>

                <button
                  onClick={handleSendToBooking}
                  className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1A2C42] bg-[#B8860B] hover:bg-[#D4AF37] rounded-md transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Agendar Sessão Presencial com esse Diagnóstico</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center text-xs text-slate-400 pt-2 border-t border-slate-800">
                A sessão de diagnóstico inicial no nosso escritório no Jardim Sul não gera qualquer obrigação de contratação.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
