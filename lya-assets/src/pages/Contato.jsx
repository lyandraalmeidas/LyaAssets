import React from 'react'
import './Contato.css'

function Contato() {
  return (
    <>
      <div className='contatobanner'>
          <h1>Contato</h1>
          <p>Entre em contato comigo!</p>
      </div>

      <div className='contatoformulario'>
          <form>
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" placeholder="Seu nome" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="seu@email.com" required />

              <label htmlFor="message">Mensagem:</label>
              <textarea id="message" name="message" placeholder="Sua mensagem..." required></textarea>

              <button type="submit">Enviar</button>
          </form>
      </div>
    </>
  )
}

export default Contato;