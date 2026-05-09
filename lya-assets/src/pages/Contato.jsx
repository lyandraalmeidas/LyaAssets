import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Container from 'react-bootstrap/Container';

function Contato() {
  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault();

    // Substitua os campos abaixo pelos seus IDs do EmailJS
    emailjs.sendForm(
      'service_6lyfub5', 
      'template_0xkd9dr', 
      form.current, 
      'D3vMHWkzlBsKFhqTP'
    )
    .then((result) => {
        alert("Mensagem enviada com sucesso! ✨");
        form.current.reset();
    }, (error) => {
        alert("Erro ao enviar: " + error.text);
    });
  };

  return (
    <Container>
      {/* Banner de Título */}
      <div className="contatobanner">
        <h2>ENTRE EM CONTATO</h2>
        <p>Dúvidas, orçamentos ou apenas um "oi"!</p>
      </div>

      {/* Formulário */}
      <div className="contatoformulario">
        <form ref={form} onSubmit={enviarEmail}>
          <label>Nome</label>
          <input type="text" name="user_name" placeholder="Como te chamam?" required />

          <label>E-mail</label>
          <input type="email" name="user_email" placeholder="seu@email.com" required />

          <label>Mensagem</label>
          <textarea name="message" placeholder="Escreva aqui sua ideia..." required />

          <button type="submit">ENVIAR PIXEL-MAIL</button>
        </form>
      </div>
    </Container>
  );
}

export default Contato;