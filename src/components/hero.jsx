import Carousel from "react-bootstrap/Carousel";

function HeroSection() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="img-fluid"
          alt="slider1"
          src={"./Assets/hero/slider1.jpg"}
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="img-fluid"
          alt="slider2"
          src={"./Assets/hero/slider2.png"}
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="img-fluid"
          alt="slider3"
          src={"./Assets/hero/slider3.png"}
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="img-fluid"
          alt="slider4"
          src={"./Assets/hero/slider4.png"}
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="img-fluid"
          alt="slider5"
          src={"./Assets/hero/slider5.png"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid"
          alt="slider6"
          src={"./Assets/hero/slider6.png"}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;
