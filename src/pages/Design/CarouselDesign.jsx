import { Carousel } from "react-bootstrap";

const styles = {
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.5,
  },
  caption: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    textAlign: "center",
    zIndex: 1,
  },
};

const CarouselDesign = () => {
  return (
    <div className="container w-75" style={{ marginTop: "125px" }}>
      <h1 className="fs-1 text-center text-danger fw-bold mb-4">
        Our top <span className="text-success">Recipe</span>
      </h1>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/a4/16/80/a416802367b70e22d948a4a58becef03.jpg"
            style={{ height: "400px", position: "relative" }}
          />
          <div style={styles.overlay}></div>
          <Carousel.Caption style={styles.caption}>
            <h3 className="fw-bold text-warning">Panta Ilish</h3>
            <p>
              Panta Ilish is a traditional Bangladeshi dish made with leftover
              rice soaked in water, mixed with raw onions, green chilies, and
              seasoned with salt and mustard oil. It is served with fried Hilsa
              fish, which is considered a delicacy in Bangladesh.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1633945274417-ab205ae69d10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fEthY2NoaSUyMGJpcnlhbml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
            style={{ height: "400px", position: "relative" }}
          />
          <div style={styles.overlay}></div>
          <Carousel.Caption style={styles.caption}>
            <h3 className="text-warning fw-bold">
              Puran Dhakar Kacci Biriyani
            </h3>
            <p>
              Puran Dhaka Kachchi Biriyani is a traditional and famous dish of
              Bangladesh, specifically originating from the old part of Dhaka
              city known as "Puran Dhaka". It is a flavorful and aromatic rice
              dish cooked with tender pieces of marinated meat (usually beef or
              mutton), spices, fried onions, and yogurt.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bongong.com/images/recipes/Pathisapta/pic13_1230902669_center.jpg"
            alt="Third slide"
            style={{ height: "400px", position: "relative" }}
          />
          <div style={styles.overlay}></div>
          <Carousel.Caption style={styles.caption}>
            <h3 className="text-warning fw-bold">Patishapta Pitha</h3>
            <p>
              Patishapta Pitha is a traditional Bengali sweet dish that is
              typically prepared during winter festivals such as Poush Sankranti
              and Makar Sankranti. It is a type of thin crepe made from a
              mixture of rice flour, all-purpose flour, and semolina, which is
              then filled with a sweetened mixture of coconut, jaggery, and
              cardamom powder.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselDesign;
