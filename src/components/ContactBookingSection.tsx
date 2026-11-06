import React, { useState, useEffect } from "react";
import { Send, Phone, MessageSquare, CheckCircle2, Calendar, ShieldCheck, ArrowRight, Building, User, Mail } from "lucide-react";
import { COMPANY } from "../data/company";
import { SERVICES } from "../data/services";

interface ContactBookingSectionProps {
  initialService?: string;
  initialNotes?: string;
}

export const ContactBookingSection: React.FC<ContactBookingSectionProps> = ({
  initialService,
  initialNotes,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    companySize: "Pequena (10 a 30 colaboradores)",
    serviceInterest: initialService || SERVICES[0].title,
    modality: "Presencial (Jardim Sul - Uberlândia)",
    shift: "Manhã (08h às 12h)",
    notes: initialNotes || "",
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceInterest: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialNotes) {
      setFormData((prev) => ({ ...prev, notes: initialNotes }));
    }
  }, [initialNotes]);

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.company.trim()) {
      setErrorMsg("Por favor, preencha os campos obrigatórios (Nome, WhatsApp e Empresa).");
      return;
    }
    setErrorMsg("");
    setSubmitted(true);
  };

  // Build formatted WhatsApp link
  const buildWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Olá, Peron Consultoria! Gostaria de agendar um diagnóstico estratégico.\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Empresa:* ${formData.company} (${formData.companySize})\n` +
      `*Interesse:* ${formData.serviceInterest}\n` +
      `*Modalidade:* ${formData.modality}\n` +
      `*Turno preferido:* ${formData.shift}\n` +
      (formData.notes ? `*Observações:* ${formData.notes}\n` : "") +
      `*Contato:* ${formData.phone} | ${formData.email || "Não informado"}`
    );
    return `https://wa.me/${COMPANY.phoneRaw}?text=${text}`;
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#1A2C42] text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Channels & Trust */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-[#D4AF37] mb-2 font-heading">
                Seu Próximo Passo
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-heading text-balance">
                Agende Seu Diagnóstico Estratégico Gratuito
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                Uma conversa franca e objetiva de 45 minutos para entender seu modelo de negócio,
                identificar gargalos e desenhar uma rota de crescimento para sua empresa em Uberlândia.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              <a
                href={`https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent("Olá! Gostaria de conversar com um consultor da Peron Consultoria.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-[#253D5B] hover:bg-[#334E73] border border-slate-600 transition-colors flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Atendimento Imediato via WhatsApp</div>
                    <div className="text-sm font-bold text-white font-heading">{COMPANY.phone}</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="p-5 rounded-xl bg-[#253D5B] hover:bg-[#334E73] border border-slate-600 transition-colors flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#B8860B]/20 text-[#D4AF37] flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Ligação Telefônica Direta</div>
                    <div className="text-sm font-bold text-white font-heading">{COMPANY.phone}</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Trust Checklist */}
            <div className="space-y-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#B8860B] shrink-0" />
                <span>Sigilo contratual absoluto de todas as informações comerciais</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0" />
                <span>Atendimento presencial no Jardim Sul ou online via Google Meet</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0" />
                <span>Retorno e confirmação de horário em até 2 horas úteis</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121F2F] rounded-2xl border border-slate-700/80 p-6 sm:p-10 shadow-2xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-800 pb-4 mb-2">
                    <h3 className="text-lg font-bold text-white font-heading">
                      Formulário de Qualificação & Agendamento
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Preencha os dados abaixo para direcionarmos o consultor especialista ideal.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-rose-950/60 border border-rose-700 text-rose-200 text-xs rounded-lg">
                      {errorMsg}
                    </div>
                  )}

                  {/* 2-Column Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Seu Nome Completo *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ex: João da Silva"
                          className="w-full bg-[#1A2C42] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#B8860B] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        WhatsApp / Celular com DDD *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(34) 99999-9999"
                        className="w-full bg-[#1A2C42] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#B8860B] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        E-mail Corporativo
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="contato@suaempresa.com.br"
                        className="w-full bg-[#1A2C42] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#B8860B] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Nome da Empresa *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Ex: Alfa Logística Uberlândia"
                        className="w-full bg-[#1A2C42] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#B8860B] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Qualification selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Porte da Empresa
                      </label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className="w-full bg-[#1A2C42] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#B8860B] transition-colors"
                      >
                        <option value="Microempresa (1 a 5 colaboradores)">Microempresa (1 a 5 colaboradores)</option>
                        <option value="Pequena (6 a 20 colaboradores)">Pequena (6 a 20 colaboradores)</option>
                        <option value="Pequena (21 a 50 colaboradores)">Pequena (21 a 50 colaboradores)</option>
                        <option value="Média ou Grande (50+ colaboradores)">Média ou Grande (50+ colaboradores)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Serviço de Maior Interesse
                      </label>
                      <select
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full bg-[#1A2C42] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#B8860B] transition-colors"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Modalidade Preferida
                      </label>
                      <select
                        name="modality"
                        value={formData.modality}
                        onChange={handleChange}
                        className="w-full bg-[#1A2C42] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#B8860B] transition-colors"
                      >
                        <option value="Presencial (Jardim Sul - Uberlândia)">Presencial (Jardim Sul - Uberlândia)</option>
                        <option value="Online via Google Meet">Online via Google Meet</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Melhor Turno para Reunião
                      </label>
                      <select
                        name="shift"
                        value={formData.shift}
                        onChange={handleChange}
                        className="w-full bg-[#1A2C42] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#B8860B] transition-colors"
                      >
                        <option value="Manhã (08h às 12h)">Manhã (08h às 12h)</option>
                        <option value="Tarde (13h às 18h)">Tarde (13h às 18h)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Pain */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Qual é o principal desafio ou gargalo do seu negócio hoje?
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Conte brevemente o que você gostaria de resolver ou otimizar na empresa..."
                      className="w-full bg-[#1A2C42] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#B8860B] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-lg text-sm font-semibold uppercase tracking-wider text-[#1A2C42] bg-[#B8860B] hover:bg-[#D4AF37] active:bg-[#9E7309] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Solicitar Agendamento do Diagnóstico</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-center text-slate-500 mt-2">
                      Sem custo inicial. Nossos consultores retornarão para confirmar o dia exato.
                    </p>
                  </div>
                </form>
              ) : (
                /* Submission Confirmation */
                <div className="space-y-6 text-center py-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] font-heading">
                      Solicitação Recebida com Sucesso
                    </span>
                    <h3 className="text-2xl font-bold text-white font-heading">
                      Obrigado, {formData.name.split(" ")[0]}!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Nossa equipe em Uberlândia já recebeu suas informações para a empresa{" "}
                      <strong className="text-white">{formData.company}</strong>. Entraremos em contato pelo WhatsApp{" "}
                      <strong className="text-white">{formData.phone}</strong> para confirmar a data e o horário.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#1A2C42] border border-slate-700 text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="font-semibold text-[#D4AF37]">Resumo do Diagnóstico Solicitado:</div>
                    <div className="text-slate-300"><strong>Serviço:</strong> {formData.serviceInterest}</div>
                    <div className="text-slate-300"><strong>Modalidade:</strong> {formData.modality}</div>
                    <div className="text-slate-300"><strong>Turno:</strong> {formData.shift}</div>
                  </div>

                  {/* Instant WhatsApp Action */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Agilizar Confirmação via WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-4 py-3 rounded-lg text-xs font-medium text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                    >
                      Novo Agendamento
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
