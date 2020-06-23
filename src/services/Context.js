import React from 'react';

const data = {
  logo: { 
    link: "/", 
    dark: "bbbbbbb", 
    light: "aaaaaaa" 
  },
  menu: [ 
    { link: "quem-somos", text: "Quem Somos" },
    { link: "diferenciais", text: "Diferenciais" }, 
    { link: "servicos", text: "Serviços" }, 
    { link: "areas-de-atuacao", text: "Áreas de Atuação" } 
  ],
  slide: [
    { image: "aaaaaa", text: "Soluções integradas para facilitar o dia a dia da sua empresa" },
    { image: "aaaaaa", text: "Soluções integradas para facilitar o dia a dia da sua empresa" },
    { image: "aaaaaa", text: "Soluções integradas para facilitar o dia a dia da sua empresa" }
  ],
  uteis: {
    title: "i9 Corporation, há 14 anos oferecendo serviços de qualidade com foco em resultados.",
    address: "Rua M.M.D.C, 450 - 5º Andar | Sala 501 a 503 - Butantã São Paulo, SP | CEP 05510-020",
    copyright: "Copyright © i9 Corporation",
    options: [
      { link: "#", text: "Entre em contato conosco" },
      { link: "#", text: "TEL: (11) 3721-3734" },
      { link: "orcamento", text: "Orçamento >" }
    ],
  },
  about: { 
    title: "Conheça a i9 Corporation", 
    image: "aasdasdas", 
    text: "Há mais de 14 anos, a i9 Corporation oferece as mais modernas soluções em Facilities com um sistema de gestão que atende aos diversos segmentos corporativos, condomínios residenciais e/ou administrativos.<br /><br /> Trabalhando com foco em resultados, competência e inovação, reforçamos nosso compromisso com os clientes de oferecer sempre a melhor relação entre custo e benefício.<br /><br /> Nossas soluções personalizadas tornam a prestação de serviços completa e eficiente para que você possa focar na sua atividade principal sem se preocupar com a gestão de Facilities. " 
  },
  why: {
    title: "Por que a i9?",
    options: [
      { icon: "", text: "Mais de 14 anos com o mesmo CNPJ comprovando idoneidade e responsabilidade de mercado" },
      { icon: "", text: "Infraestrutura de Recrutamento e Seleção" },
      { icon: "", text: "Estrutura de apoio aos supervisores" },
      { icon: "", text: "Responsabilidade Socioambiental" },
      { icon: "", text: "Relação de proximidade com os clientes" },
      { icon: "", text: "Soluções Customizadas" }
    ]
  },
  services: {
    title: "Serviços", text: "As soluções de Facilities da i9 Corporation garantem uma gestão moderna através de diagnósticos precisos e profissionais capacitados.",
    options: [
      { link: "#", image: "aaaa", text: "Portaria / Controle de acesso" },
      { link: "#", image: "aaaa", text: "Limpeza e conservação" },
      { link: "#", image: "aaaa", text: "Recepção" },
      { link: "#", image: "aaaa", text: "Manutenção e zeladoria" },
      { link: "#", image: "aaaa", text: "Proteção e combate a incêndios" },
      { link: "#", image: "aaaa", text: "Jardinagem" },
      { link: "#", image: "aaaa", text: "Copeira" },
      { link: "#", image: "aaaa", text: "Mensageria" },
    ]
  },
  expertise: {
    title: "Áreas de atuação", text: "A i9 Corporation visa oferecer serviço de qualidade em parceria com grandes empresas do setor privado. Conheça nossas áreas de atuação:",
    options: [
      { icon: "", text: "Indústrias" },
      { icon: "", text: "Hotéis" },
      { icon: "", text: "Estabelecimentos comerciais" },
      { icon: "", text: "Condomínios residenciais e empresariais" },
      { icon: "", text: "Academias" },
      { icon: "", text: "Shoppings" },
      { icon: "", text: "Bancos" },
      { icon: "", text: "Hospitais" },
    ]
  },
  socials: [
    { icon: "", link: ""},
    { icon: "", link: ""},
    { icon: "", link: ""},
  ]
};

const DefaultContext = React.createContext(data);
export default DefaultContext;
