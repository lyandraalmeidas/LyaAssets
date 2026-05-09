import React, { useState } from 'react';
import './Catalogo.css';
import Cards from '../components/Cards/Cards';

const MEUS_SPRITES = [
  {
    "id": "0cde8d75-2fe0-40a6-80c6-556a84743578",
    "titulo": "Sprites 1",
    "descricao": "Este produto e um teste de banco de dados",
    "preco": "19.99",
    "imagem_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs4EB_QtAgLFDPYqfigAhVpzGORY9bmPu2eg&s",
    "itchio_url": "http://itch.io/",
    "categoria": "Personagem"
  },
  {
    "id": "25688cbe-ddc9-4803-8e6c-a4474cc0becd",
    "titulo": "Sprite Menina Fofa",
    "descricao": "Personagem feminina gratis",
    "preco": "0.00",
    "imagem_url": "https://www.gameart2d.com/uploads/3/0/9/1/30917885/cute-girl-sprite_orig.jpg",
    "itchio_url": "https://www.gameart2d.com/cute-girl-free-sprites.html",
    "categoria": "Personagem"
  }
];

function Catalogo() {
  const [busca, setBusca] = useState('');

  // 1. Filtragem dos sprites (Título ou Categoria)
  const spritesFiltrados = MEUS_SPRITES.filter(sprite => {
    const termoBusca = busca.toLowerCase().trim();
    const titulo = sprite.titulo?.toLowerCase() || "";
    const categoria = sprite.categoria?.toLowerCase() || "";
    
    return titulo.includes(termoBusca) || categoria.includes(termoBusca);
  });

  // 2. CORREÇÃO: Declaração da variável categorias
  // Isso cria uma lista de categorias únicas baseada nos itens que sobraram no filtro
  const categorias = [...new Set(spritesFiltrados.map(s => s.categoria))];

  return (
    <div className='Catalogo'>
      <div className='CatalogoDescricao'>
        <h1>Catálogo</h1>
        <p>Explore minha coleção de arte pixelada!</p>
        
        <div className='SearchContainer'>
          <input 
            type="text" 
            className="SearchInput"
            placeholder="Pesquisar por nome ou categoria..." 
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
      </div>

      <div className='CatalogoCards'>
        {/* Verifica se existem categorias após o filtro */}
        {categorias.length > 0 ? (
          categorias.map(cat => (
            <div key={cat} className="CategoriaSecao">
              {/* Título da Categoria */}
              <h2 className="TituloCategoria">{cat}</h2>
              
              <div className='CardsGaleria'>
                {/* Envia para o componente Cards apenas os itens desta categoria específica */}
                <Cards itens={spritesFiltrados.filter(s => s.categoria === cat)} />
              </div>
            </div>
          ))
        ) : (
          /* Mensagem caso a busca não retorne nada */
          <div className='contatobanner' style={{ textAlign: 'center', padding: '50px' }}>
            <p style={{ color: '#d77bba', fontSize: '1.2rem' }}>
              Nenhum sprite encontrado para "{busca}".
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Catalogo;