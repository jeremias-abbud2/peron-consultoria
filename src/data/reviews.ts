export interface GoogleReview {
  id: string;
  author: string;
  role: string;
  companyOrSegment: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  highlight: string;
  category: "financeiro" | "processos" | "estrategia" | "governanca";
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "rev-1",
    author: "Rodrigo Alcantara",
    role: "Diretor Comercial",
    companyOrSegment: "Distribuidora de Alimentos · Uberlândia",
    location: "Uberlândia - MG",
    rating: 5,
    date: "Há 2 meses",
    highlight: "+32% de margem líquida em 4 meses",
    category: "financeiro",
    text: "A Peron Consultoria mudou a história da nossa distribuidora no Jardim Sul. Estávamos com faturamento alto, mas sem entender para onde ia o dinheiro no fim do mês. Eles mapearam cada centro de custo e ajustaram nossa precificação. Hoje temos previsibilidade total e caixa positivo."
  },
  {
    id: "rev-2",
    author: "Camila Guimarães",
    role: "Sócia-Fundadora",
    companyOrSegment: "Clínica Médica Integrada · Granja Marileusa",
    location: "Uberlândia - MG",
    rating: 5,
    date: "Há 1 mês",
    highlight: "Processos padronizados e menos sobrecarga",
    category: "processos",
    text: "Atendimento impecável e extremamente profissional. Como médica e gestora, eu vivia afogada em rotinas administrativas. A consultoria organizou os POPs da recepção ao financeiro. O retorno sobre o investimento foi imediato. Recomendo de olhos fechados em Uberlândia."
  },
  {
    id: "rev-3",
    author: "Marcos Vinicius Rezende",
    role: "CEO",
    companyOrSegment: "Indústria Metalmecânica · Distrito Industrial",
    location: "Uberlândia - MG",
    rating: 5,
    date: "Há 3 semanas",
    highlight: "Planejamento estratégico de verdade, sem enrolação",
    category: "estrategia",
    text: "Já havíamos contratado outras consultorias que entregavam pastas cheias de teorias que ninguém executava. O time da Peron é diferente: pragmático, direto ao ponto e focado na realidade empresarial do Triângulo Mineiro. As metas traçadas para 2026 já estão sendo batidas."
  },
  {
    id: "rev-4",
    author: "Fernanda Toledo",
    role: "Diretora de Operações",
    companyOrSegment: "Rede de Varejo de Moda · Center Shopping",
    location: "Uberlândia - MG",
    rating: 5,
    date: "Há 3 meses",
    highlight: "Governança e clareza entre os sócios",
    category: "governanca",
    text: "Estávamos passando por um momento crítico de expansão e divergências societárias sobre reinvestimento. A Peron conduziu as reuniões com uma maturidade excepcional. Hoje nossa empresa tem regras transparentes e metas compartilhadas. Nota 5 com todos os méritos!"
  },
  {
    id: "rev-5",
    author: "Eduardo Siqueira Campos",
    role: "Proprietário",
    companyOrSegment: "Transportadora & Logística · Distrito Sul",
    location: "Uberlândia - MG",
    rating: 5,
    date: "Há 4 meses",
    highlight: "Economia de R$ 85 mil em desperdícios operacionais",
    category: "financeiro",
    text: "O diagnóstico inicial da Peron foi um divisor de águas. Em menos de 15 dias eles apontaram três ralos financeiros que estávamos ignorando há anos. O suporte presencial no escritório deles no Jardim Sul foi um grande diferencial de proximidade e confiança."
  },
  {
    id: "rev-6",
    author: "Juliana Mendes Pires",
    role: "CFO",
    companyOrSegment: "Empresa de Software B2B · Santa Mônica",
    location: "Uberlândia - MG",
    rating: 5,
    date: "Há 5 meses",
    highlight: "DRE gerencial impecável e métricas em tempo real",
    category: "financeiro",
    text: "Excelente consultoria corporativa. Profissionais sérios, competentes e muito acessíveis. Desenvolveram nossos indicadores de SaaS com uma precisão cirúrgica. Com certeza a melhor consultoria empresarial de Uberlândia."
  },
  {
    id: "rev-7",
    author: "Leandro Batista",
    role: "Sócio-Diretor",
    companyOrSegment: "Construtora & Incorporadora · Fundinho",
    location: "Uberlândia - MG",
    rating: 5,
    date: "Há 6 meses",
    highlight: "Visão estratégica de mercado local",
    category: "estrategia",
    text: "Conhecem a fundo a dinâmica econômica e comercial da nossa região. Ter uma consultoria que entende a cultura de negócios de Uberlândia fez toda a diferença na aprovação dos nossos projetos de expansão."
  },
  {
    id: "rev-8",
    author: "Beatriz Nogueira",
    role: "Gerente Geral",
    companyOrSegment: "Complexo Educacional · Martins",
    location: "Uberlândia - MG",
    rating: 5,
    date: "Há 2 semanas",
    highlight: "Agilidade e equipe super capacitada",
    category: "processos",
    text: "Nota 10 em pontualidade, clareza e entrega de relatórios. Conseguiram engajar toda a nossa equipe de coordenadores sem atritos. Recomendo com toda certeza!"
  }
];

export const GOOGLE_MAPS_METRICS = {
  score: "5.0",
  totalReviews: 28,
  fiveStarPercentage: 100,
  verifiedGooglePlace: true,
  cityTag: "Uberlândia - MG",
};
