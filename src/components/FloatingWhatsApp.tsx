import React, { useState } from "react";
import { MessageSquare, X, ArrowUpRight } from "lucide-react";
import { COMPANY } from "../data/company";

export const FloatingWhatsApp: React.FC = () => {
  const [open, setOpen] = useState(false);

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Quick Popover */}
      {open && (
        <div className="mb-3 w-80 bg-[#121F2F] text-white rounded-2xl border border-slate-700 p-5 shadow-2xl animate-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white font-heading">Peron Consultoria</div>
                <div className="text-[10px] text-emerald-400 font-medium">Atendimento em Uberlândia</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-md"
              aria-label="Fechar popover do WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 mt-3 leading-relaxed">
            Olá! Como podemos apoiar a estratégia da sua empresa hoje? Escolha uma opção rápida:
          </p>

          <div className="mt-3 space-y-2 text-xs">
            <a
              href={getWhatsAppLink("Olá! Gostaria de agendar o Diagnóstico Estratégico Gratuito para minha empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2.5 rounded-lg bg-[#1A2C42] hover:bg-[#253D5B] text-slate-200 hover:text-white transition-colors border border-slate-700/60"
            >
              🎯 Agendar Diagnóstico Gratuito
            </a>
            <a
              href={getWhatsAppLink("Olá! Gostaria de saber mais sobre a Consultoria em Gestão Financeira.")}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2.5 rounded-lg bg-[#1A2C42] hover:bg-[#253D5B] text-slate-200 hover:text-white transition-colors border border-slate-700/60"
            >
              📊 Consultoria em Gestão Financeira
            </a>
            <a
              href={getWhatsAppLink("Olá! Gostaria de falar diretamente com um consultor da Peron.")}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2.5 rounded-lg bg-[#1A2C42] hover:bg-[#253D5B] text-slate-200 hover:text-white transition-colors border border-slate-700/60"
            >
              💬 Falar com um Consultor Agora
            </a>
          </div>

          <div className="mt-3 pt-2 text-[10px] text-center text-slate-400 border-t border-slate-800">
            Telefone: {COMPANY.phone}
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-105 cursor-pointer relative"
        aria-label="Abrir conversa no WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="sr-only">WhatsApp da Peron Consultoria</span>
      </button>
    </div>
  );
};
