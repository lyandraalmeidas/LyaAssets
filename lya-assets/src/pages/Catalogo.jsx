import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import './Catalogo.css';
import Cards from '../components/Cards/Cards';

function Catalogo() {
  const [sprites, setSprites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState('');

  // 1. Buscar dados do Supabase
  useEffect(() => {
    async function carregarSprites() {
      try {
        setLoading(true);
        // Fazemos um join com a tabela 'categorias' para pegar o nome
        const { data, error } = await supabase
          .from('sprites')
          .select(`
            *,
            categorias ( nome )
          `);

        if (error) throw error;

        // Ajustamos o objeto para manter a estrutura que o seu componente Cards espera
        const dadosFormatados = data.map(item => ({
          ...item,
          categoria: item.categorias?.nome || 'Sem Categoria'
        }));

        setSprites(dadosFormatados);
      } catch (error) {
        console.error('Erro ao carregar sprites:', error.message);
      } finally {
        // Pequeno delay opcional para evitar que o loading "pisque" rápido demais
        setTimeout(() => {
            setLoading(false);
        }, 500);
      }
    }

    carregarSprites();
  }, []);

  // 2. Filtragem dos sprites
  const spritesFiltrados = sprites.filter(sprite => {
    const termoBusca = busca.toLowerCase().trim();
    const titulo = sprite.titulo?.toLowerCase() || "";
    const categoria = sprite.categoria?.toLowerCase() || "";
    return titulo.includes(termoBusca) || categoria.includes(termoBusca);
  });

  // 3. Agrupamento por categorias
  const categoriasUnicas = [...new Set(spritesFiltrados.map(s => s.categoria))];

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
        {/* LÓGICA DE CARREGAMENTO */}
        {loading ? (
          <div className="LoadingContainer">
            <div className="Spinner"></div>
            <p>Carregando assets...</p>
          </div>
        ) : (
          <>
            {categoriasUnicas.length > 0 ? (
              categoriasUnicas.map(cat => (
                <div key={cat} className="CategoriaSecao">
                  <h2 className="TituloCategoria">{cat}</h2>
                  <div className='CardsGaleria'>
                    <Cards itens={spritesFiltrados.filter(s => s.categoria === cat)} />
                  </div>
                </div>
              ))
            ) : (
              <div className='contatobanner' style={{ textAlign: 'center', padding: '50px' }}>
                <p style={{ color: '#d77bba', fontSize: '1.2rem' }}>
                  Nenhum sprite encontrado para "{busca}".
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Catalogo;