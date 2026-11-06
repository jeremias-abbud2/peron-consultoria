/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { MaturityAssessment } from "./components/MaturityAssessment";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { LocationSection } from "./components/LocationSection";
import { ContactBookingSection } from "./components/ContactBookingSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [assessmentNotes, setAssessmentNotes] = useState<string>("");

  const scrollToContact = () => {
    const el = document.getElementById("contato");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById("servicos");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToContact();
  };

  const handleTransferAssessmentToBooking = (summary: string) => {
    setAssessmentNotes(summary);
    scrollToContact();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#343A40] selection:bg-[#B8860B]/20 selection:text-[#1A2C42]">
      {/* Top Bar Navigation */}
      <Header onOpenBooking={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Início: Direcionamento Estratégico */}
        <Hero
          onScheduleClick={scrollToContact}
          onExploreServices={scrollToServices}
        />

        {/* Sobre a Peron: Sua Parceria Local */}
        <AboutSection />

        {/* Nossos Serviços: Soluções Para Seu Negócio */}
        <ServicesSection onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* Bússola Estratégica Interativa: Diagnóstico 360° */}
        <MaturityAssessment onTransferToBooking={handleTransferAssessmentToBooking} />

        {/* Resultados e Depoimentos: A Prova da Nossa Direção */}
        <TestimonialsSection />

        {/* Localização & Sede Presencial em Uberlândia */}
        <LocationSection />

        {/* Contato Inteligente & Agendamento Inicial */}
        <ContactBookingSection
          initialService={selectedService}
          initialNotes={assessmentNotes}
        />

        {/* Perguntas Frequentes & Esclarecimentos */}
        <FaqSection />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* WhatsApp Conversion Floating Action */}
      <FloatingWhatsApp />
    </div>
  );
}
