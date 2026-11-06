import React, { useState } from "react";
import { MapPin, Navigation, Car, Clock, Phone, Mail, Copy, Check, ExternalLink } from "lucide-react";
import { COMPANY, IMAGES } from "../data/company";

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const wazeUrl = `https://waze.com/ul?ll=${COMPANY.coordinates.lat},${COMPANY.coordinates.lng}&navigate=yes`;

  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-white text-[#343A40] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#B8860B] mb-2 font-heading">
            Presença & Sede Física
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1A2C42] font-heading text-balance">
            Nossa Sede em Uberlândia: Jardim Sul
          </h2>
          <p className="mt-3 text-base text-slate-600 font-sans">
            Um ambiente corporativo acolhedor, moderno e discreto, projetado para discussões estratégicas de alto nível com empresários e sócios.
          </p>
        </div>

        {/* 2-Column Location & Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Details Card (col-span-5) */}
          <div className="lg:col-span-5 bg-[#1A2C42] text-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] font-heading">
                  Ponto de Atendimento Presencial
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
                  {COMPANY.name}
                </h3>
              </div>

              {/* Address details */}
              <div className="space-y-3 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">{COMPANY.address}</div>
                    <div className="text-slate-300 text-xs">
                      {COMPANY.neighborhood} · {COMPANY.city} - {COMPANY.state}
                    </div>
                    <div className="text-slate-400 text-xs mt-0.5">CEP: {COMPANY.zipCode}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-700/80">
                  <Clock className="w-5 h-5 text-[#B8860B] shrink-0" />
                  <div>
                    <span className="font-medium text-white block text-xs">Horário de Atendimento</span>
                    <span className="text-xs text-slate-300">{COMPANY.hours}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-700/80">
                  <Phone className="w-5 h-5 text-[#B8860B] shrink-0" />
                  <div>
                    <span className="font-medium text-white block text-xs">Telefone / WhatsApp</span>
                    <a
                      href={`tel:${COMPANY.phoneRaw}`}
                      className="text-xs text-[#D4AF37] hover:underline font-semibold"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-700/80">
                  <Mail className="w-5 h-5 text-[#B8860B] shrink-0" />
                  <div>
                    <span className="font-medium text-white block text-xs">E-mail Corporativo</span>
                    <span className="text-xs text-slate-300">{COMPANY.email}</span>
                  </div>
                </div>
              </div>

              {/* Parking & Area perks */}
              <div className="p-4 rounded-xl bg-[#253D5B]/70 border border-slate-700 space-y-2 text-xs text-slate-300">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-[#B8860B]" />
                  <span>Comodidade & Acesso:</span>
                </div>
                <p>
                  Estacionamento facilitado na porta. Região nobre de fácil acesso pela Avenida Nicomedes Alves dos Santos e anel viário sul.
                </p>
              </div>
            </div>

            {/* Actions: Copy & Navigate */}
            <div className="mt-8 pt-6 border-t border-slate-700/80 space-y-3">
              <button
                onClick={handleCopyAddress}
                className="w-full py-2.5 px-4 rounded-lg bg-[#253D5B] hover:bg-[#334E73] text-xs font-medium text-slate-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-semibold">Endereço Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copiar Endereço Completo</span>
                  </>
                )}
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={COMPANY.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-[#B8860B] hover:bg-[#D4AF37] text-xs font-semibold text-[#1A2C42] transition-colors flex items-center justify-center gap-1.5 text-center"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>

                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors flex items-center justify-center gap-1.5 text-center"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Rota Waze</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Office Facade Asset + Embedded Map Preview (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Office Facade Visual */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 relative h-64 sm:h-72 shadow-md">
              {!imageError ? (
                <img
                  src={IMAGES.office}
                  alt="Edifício corporativo no Jardim Sul em Uberlândia - Sede da Peron Consultoria"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
                  Sede Peron Consultoria - Jardim Sul, Uberlândia
                </div>
              )}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white flex items-center justify-between text-xs">
                <span className="font-medium">Edifício Corporativo Jardim Sul</span>
                <span className="text-[#D4AF37] font-semibold">Salas Executivas</span>
              </div>
            </div>

            {/* Interactive Embedded OpenStreetMap / Location Frame */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 flex-1 min-h-[280px] shadow-sm relative">
              <iframe
                title="Localização da Peron Consultoria no Jardim Sul em Uberlândia"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-48.305%2C-18.962%2C-48.291%2C-18.951&amp;layer=mapnik&amp;marker=-18.9566%2C-48.2982"
                className="w-full h-full min-h-[280px] border-0"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-[#1A2C42] font-semibold shadow-sm flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>R. Profa. Maria Helena Martins, 163 · Uberlândia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
