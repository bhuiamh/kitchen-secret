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
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
            style={{ height: "400px", position: "relative" }}
          />
          <div style={styles.overlay}></div>
          <Carousel.Caption style={styles.caption}>
            <h3 className="fw-bold text-warning">The All-American Burger</h3>
            <p>
              A burger is a popular food item consisting of a grilled or fried
              patty of ground beef or other proteins, typically served in a bun
              with various toppings and condiments.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
            style={{ height: "400px", position: "relative" }}
          />
          <div style={styles.overlay}></div>
          <Carousel.Caption style={styles.caption}>
            <h3 className="text-warning fw-bold">
              A Delicious Salad for Every Season
            </h3>
            <p>
              Salad is a dish made of mixed vegetables and other ingredients,
              often served cold and dressed with oil, vinegar, or other
              dressings.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1536096119648-4cbab718f351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFzdHVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
            style={{ height: "400px", position: "relative" }}
          />
          <div style={styles.overlay}></div>
          <Carousel.Caption style={styles.caption}>
            <h3 className="text-warning fw-bold">A Classic Italian Pasta</h3>
            <p>
              Pasta is a popular Italian dish made from unleavened dough of
              durum wheat flour, water, and eggs. It comes in a variety of
              shapes and sizes and can be served with various sauces and
              ingredients, making it a versatile and beloved meal worldwide.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselDesign;
