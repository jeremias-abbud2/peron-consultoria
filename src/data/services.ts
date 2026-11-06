export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  targetPain: string;
  deliverables: string[];
  duration: string;
  idealFor: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "gestao-financeira",
    number: "01",
    title: "Gestão Financeira & Controladoria",
    shortDescription: "Estruturação de fluxo de caixa, precificação estratégica, DRE gerencial e controle de margens para decisões seguras.",
    fullDescription: "Transformamos o financeiro da sua empresa de uma rotina burocrática em uma bússola de crescimento. Identificamos vazamentos de capital, otimizamos o capital de giro e desenhamos relatórios gerenciais claros que mostram exatamente onde seu lucro está.",
    targetPain: "Empresas faturando bem, mas com caixa sempre apertado e sem clareza real sobre margens e lucratividade líquida.",
    deliverables: [
      "Fluxo de caixa projetado diário e mensal",
      "DRE Gerencial e apuração de Ponto de Equilíbrio",
      "Engenharia de precificação por produto/serviço",
      "Plano de redução de custos e despesas operacionais",
      "Dashboard executivo em tempo real"
    ],
    duration: "Implantação em 4 a 12 semanas",
    idealFor: "PMEs e comércios de Uberlândia com faturamento acima de R$ 30k/mês"
  },
  {
    id: "planejamento-estrategico",
    number: "02",
    title: "Planejamento Estratégico & Expansão",
    shortDescription: "Definição de metas concretas (OKRs), posicionamento no mercado regional e plano de ação tático trimestral.",
    fullDescription: "Alinhamos a visão dos sócios à execução diária da equipe. Construímos metas desdobradas com responsáveis claros, métricas de acompanhamento (KPIs) e rotinas de alinhamento que garantem que o plano saia do papel e gere receita incremental.",
    targetPain: "Sensação de apagar incêndios todos os dias sem avançar nos projetos de expansão e novos canais.",
    deliverables: [
      "Matriz SWOT contextualizada ao mercado do Triângulo Mineiro",
      "Definição de OKRs e metas de crescimento a 1 e 3 anos",
      "Plano de Ação 5W2H com responsáveis e cronograma",
      "Rituais de acompanhamento e governança mensal",
      "Estratégia de expansão de canais e retenção"
    ],
    duration: "Ciclos de 6 a 12 meses",
    idealFor: "Empresas em fase de expansão, abertura de filiais ou reposicionamento de marca"
  },
  {
    id: "otimizacao-processos",
    number: "03",
    title: "Otimização e Padronização de Processos",
    shortDescription: "Mapeamento de fluxos operacionais, eliminação de gargalos e manuais de rotina (POPs) para escalar sem caos.",
    fullDescription: "Sua empresa não pode depender exclusivamente da memória dos fundadores ou de funcionários-chave. Documentamos, otimizamos e padronizamos cada etapa da operação para aumentar a produtividade e garantir qualidade contínua na entrega.",
    targetPain: "Erros operacionais frequentes, retrabalho, lentidão nas entregas e sobrecarga crônica da diretoria.",
    deliverables: [
      "Mapeamento ponta a ponta dos processos centrais (BPM)",
      "Eliminação de desperdícios e etapas redundantes",
      "Criação de Procedimentos Operacionais Padrão (POPs)",
      "Treinamento de equipe e indicadores de produtividade",
      "Automação de rotinas com ferramentas digitais acessíveis"
    ],
    duration: "6 a 10 semanas de imersão e implantação",
    idealFor: "Operações com equipe entre 5 e 50 colaboradores com problemas de padronização"
  },
  {
    id: "governanca-societaria",
    number: "04",
    title: "Governança & Estruturação Societária",
    shortDescription: "Acordo de sócios, alinhamento de papéis, divisão de lucros e segurança jurídica para o crescimento sustentável.",
    fullDescription: "Construímos bases sólidas para a harmonia entre sócios e a longevidade da empresa. Estabelecemos regras claras de pró-labore, reinvestimento, sucessão e tomadas de decisão estratégicas para prevenir conflitos futuros.",
    targetPain: "Dúvidas sobre divisão de resultados, papéis desalinhados entre sócios ou preparação para entrada de investidores.",
    deliverables: [
      "Mapeamento de papéis e responsabilidades dos sócios",
      "Política de remuneração, pró-labore e distribuição de lucros",
      "Matriz de alçadas decisórias e comitês estratégicos",
      "Diretrizes para acordo de acionistas/quotistas",
      "Plano de mitigação de riscos corporativos"
    ],
    duration: "Projetos de 4 a 8 semanas",
    idealFor: "Empresas com 2 ou mais sócios ou em transição de liderança"
  },
  {
    id: "diagnostico-360",
    number: "05",
    title: "Diagnóstico Empresarial 360° (Imersão Inicial)",
    shortDescription: "Auditoria estruturada de 5 eixos para mapear os 3 principais gargalos que travam o crescimento do seu negócio hoje.",
    fullDescription: "Uma avaliação profunda e sem rodeios da sua operação em Uberlândia. Em uma imersão prática, analisamos finanças, vendas, pessoas, processos e estratégia para entregar um parecer executivo com o plano de voo prioritário para os próximos 90 dias.",
    targetPain: "Saber que o negócio tem potencial para faturar muito mais, mas não saber exatamente por onde começar a mudar.",
    deliverables: [
      "Raio-X de maturidade nos 5 eixos corporativos",
      "Identificação dos 3 maiores vazamentos de eficiência",
      "Plano de Ação Rápido (Quick Wins em 30 dias)",
      "Sessão executiva devolutiva de 2 horas",
      "Relatório executivo impresso e digital"
    ],
    duration: "Entrega em até 10 dias úteis",
    idealFor: "Diretores e donos de negócio que buscam clareza imediata antes de grandes investimentos"
  }
];
