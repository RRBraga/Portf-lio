
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Sobre Mim</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
        </div>
        <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed space-y-6">
          <p>
            Olá! Sou um desenvolvedor apaixonado por tecnologia e por criar soluções que impactam positivamente a vida das pessoas. Com uma sólida formação em Análise e Desenvolvimento de Sistemas, minha jornada profissional tem sido focada no desenvolvimento de aplicações web robustas e escaláveis, utilizando as mais modernas tecnologias do mercado.
          </p>
          <p>
            Minha carreira acadêmica me proporcionou uma base teórica forte em algoritmos, estruturas de dados e paradigmas de programação, que aplico diariamente na resolução de problemas complexos. Profissionalmente, atuei em projetos desafiadores que me permitiram aprofundar conhecimentos em todo o ciclo de vida do desenvolvimento de software, desde a concepção e arquitetura até a implementação, testes e deploy.
          </p>
          <p>
            Estou sempre em busca de novos conhecimentos, explorando novas ferramentas e frameworks para me manter atualizado e entregar produtos de alta qualidade. Acredito que a combinação de habilidades técnicas e uma comunicação clara é fundamental para o sucesso de qualquer projeto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
