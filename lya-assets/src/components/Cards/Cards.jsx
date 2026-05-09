import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Removi o Container para os cards não ficarem com margens estranhas dentro do catálogo
import './Cards.css';

// Agora o componente recebe { itens } como propriedade
function Cards({ itens }) {
  
  // Se não houver itens, não renderiza nada (opcional)
  if (!itens || itens.length === 0) {
    return null;
  }

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {itens.map((sprite) => (
        <Col key={sprite.id}>
          <Card className="h-100 card-pixel">
            <Card.Img variant="top" src={sprite.imagem_url} />
            <Card.Body>
              <Card.Title>{sprite.titulo}</Card.Title>
              <Card.Text>
                {sprite.descricao}
              </Card.Text>
              <Button 
                className="w-100 btn-pixel" 
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
  );
}

export default Cards;