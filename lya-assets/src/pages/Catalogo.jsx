import React from 'react';
import './Catalogo.css';
import Cards from '../components/Cards/Cards';

function Catalogo() {
  return (
    <div className='Catalogo'>
      <div className='CatalogoDescricao'>
        <h1>Catálogo</h1>
        <h2>Ainda não disponivel</h2>
        <p>Aqui você pode explorar uma variedade de sprites criados por mim. Desde personagens de jogos até objetos e cenários, meu catálogo é uma coleção diversificada de arte pixelada. Cada sprite é feito com cuidado e atenção aos detalhes!</p>
      </div>
      <div className='CatalogoCards'>
        <div className='CardsGaleria'>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div className='CardsGaleria'>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div className='CardsGaleria'>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Catalogo;