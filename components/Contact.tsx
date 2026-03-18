import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import type { SocialLink } from '../types';

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const recipientEmail = SOCIAL_LINKS.find(link => link.name === 'Email')?.url.replace('mailto:', '');

    if (!recipientEmail) {
      console.error("E-mail do destinatário não encontrado.");
      alert("Ocorreu um erro ao preparar o e-mail. Por favor, entre em contato diretamente.");
      return;
    }

    const subject = `Contato do Portfólio - ${name}`;
    const body = `
Nome: ${name}
Email: ${email}

Mensagem:
${message}
    `;

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contato" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Contato</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-lg text-gray-300 mb-8">
            Tem uma pergunta ou quer trabalhar junto? Envie uma mensagem.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            {SOCIAL_LINKS.map((social: SocialLink) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-transform transform hover:scale-110 duration-300"
                aria-label={social.name}
              >
                <social.icon className="h-8 w-8" />
              </a>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="sr-only">Nome</label>
                <input type="text" name="name" id="name" required className="block w-full px-4 py-3 rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Seu nome" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" required className="block w-full px-4 py-3 rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Seu email" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Mensagem</label>
              <textarea name="message" id="message" rows={4} required className="block w-full px-4 py-3 rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Sua mensagem"></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 shadow-lg"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
