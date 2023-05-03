import { Card, Col, Row } from "react-bootstrap";

function Blog() {
  const cards = [
    {
      title: "Card 1",
      image: "https://via.placeholder.com/350x150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Card 2",
      image: "https://via.placeholder.com/350x150",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      title: "Card 3",
      image: "https://via.placeholder.com/350x150",
      description:
        "Nullam dignissim nulla quis magna maximus, sed varius sapien semper.",
    },
    {
      title: "Card 4",
      image: "https://via.placeholder.com/350x150",
      description:
        "Vivamus fermentum magna eget massa interdum, sed sollicitudin sapien imperdiet.",
    },
    {
      title: "Card 5",
      image: "https://via.placeholder.com/350x150",
      description:
        "Etiam non sapien vestibulum, lacinia nibh ac, malesuada turpis.",
    },
    {
      title: "Card 6",
      image: "https://via.placeholder.com/350x150",
      description: "Sed vel velit eget quam molestie faucibus a a nibh.",
    },
  ];

  return (
    <div>
      <Row xs={1} md={2}>
        {cards.map((card, index) => (
          <Col key={index}>
            <Card>
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Blog;
