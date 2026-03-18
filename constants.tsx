import React from 'react';
import type { NavLink, Project, Skill, Hobby, SocialLink } from './types';
import { LinkedInIcon, WhatsAppIcon, MailIcon, InstagramIcon, GitHubIcon } from './components/icons';

export const NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Projetos', href: '#projetos' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'Hobbies', href: '#hobbies' },
  { name: 'Contato', href: '#contato' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'WhatsApp', url: 'https://wa.me/5562995547882', icon: WhatsAppIcon },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rafael-braga-753a78222', icon: LinkedInIcon },
  { name: 'Email', url: 'mailto:rafaelreis.rrb@gmail.com', icon: MailIcon },
  { name: 'Instagram', url: 'https://instagram.com/bragaskyshot', icon: InstagramIcon },
  { name: 'GitHub', url: 'https://github.com/RRBraga', icon: GitHubIcon },
];

export const PROJECTS: Project[] = [
  {
    title: 'Sistema de E-commerce',
    description: 'Plataforma completa de e-commerce com carrinho de compras, checkout e painel de administração.',
    link: '#',
    tags: ['React', 'Node.js', 'TypeScript', 'MySQL'],
  },
  {
    title: 'Aplicativo de Gerenciamento de Tarefas',
    description: 'Um aplicativo para organizar tarefas diárias com sistema de prioridades e notificações.',
    link: '#',
    tags: ['React Native', 'Firebase', 'JavaScript'],
  },
  {
    title: 'Website Institucional',
    description: 'Website responsivo para uma empresa de consultoria, focado em UX e performance.',
    link: '#',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
   {
    title: 'API de Análise de Dados',
    description: 'Backend robusto para processamento e análise de grandes volumes de dados em tempo real.',
    link: '#',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
  },
];

export const SKILLS: Skill[] = [
  { name: 'JavaScript & TypeScript', description: 'Desenvolvimento front-end e back-end com as mais recentes funcionalidades.' },
  { name: 'React & React Native', description: 'Criação de interfaces de usuário reativas e de alta performance para web e mobile.' },
  { name: 'Node.js', description: 'Construção de APIs RESTful, microserviços e aplicações server-side eficientes e escaláveis.' },
  { name: 'MySQL & Bancos de Dados', description: 'Modelagem de dados, otimização de consultas e gerenciamento de bancos de dados relacionais.' },
  { name: 'Material UI & Tailwind CSS', description: 'Design de interfaces modernas e responsivas com bibliotecas e frameworks de CSS.' },
  { name: 'Arquitetura de Software', description: 'Planejamento e implementação de arquiteturas limpas, componentizadas e de fácil manutenção.' },
];

export const HOBBIES: Hobby[] = [
    { name: 'Leitura', description: 'Gosto de ler mangás e manhuas de diversos gêneros.' },
    { name: 'Fotografia', description: 'Captura de imagens da natureza, especialmente com drone.' },
    { name: 'Apicultura', description: 'Tenho como hobby a criação e o manuseio de colmeias de abelhas.' },
];