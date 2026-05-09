import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './Cards.css';

function Cards() {
  const [sprites, setSprites] = useState([]);

  // Função que busca os dados no banco
  const fetchSprites = async () => {
    const { data, error } = await supabase
      .from('sprites')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erro ao carregar:', error);
    } else {
      setSprites(data);
    }
  };

  useEffect(() => {
    fetchSprites();
  }, []);

  return (
    <Container className="mt-5">
      <Row xs={1} md={2} lg={3} className="g-4">
        {sprites.map((sprite) => (
          <Col key={sprite.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={sprite.imagem_url} />
              <Card.Body>
                <Card.Title>{sprite.titulo}</Card.Title>
                <Card.Text>
                  {sprite.descricao}
                </Card.Text>
                <Button 
                  className="w-100 btn" 
                  href={sprite.itchio_url} 
                  target="_blank"
                >
                  Ver no Itch.io
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cards;