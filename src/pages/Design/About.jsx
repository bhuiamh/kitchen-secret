import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import cover from "../../assets/cover.png";

function About() {
  return (
    <Container className="my-5 bg-dark">
      <Row>
        <Col md={6} className="d-flex align-items-center">
          <div className="p-4">
            <h2 className="mb-4 text-success fw-bold">About Kitchen Secret</h2>
            <p className="text-light">
              Kitchen Secret is a Bangladeshi website that offers authentic
              Bangladeshi traditional food catering services. Our team of
              experienced chefs can only be hired by people within Bangladesh
              who are looking to enjoy delicious home-cooked meals. With a
              passion for cooking and a deep appreciation for traditional
              Bangladeshi cuisine, our chefs use only the freshest and highest
              quality ingredients to create mouth-watering dishes that are sure
              to satisfy any appetite. Whether you are looking for a meal to
              enjoy at home, or need catering for a special event, Kitchen
              Secret is the perfect choice for anyone who loves traditional
              Bangladeshi food.
            </p>
          </div>
        </Col>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <Image src={cover} alt="Kitchen Secret" fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
