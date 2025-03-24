import OffcanvasExample from "./components/navbar";
import { Categories, Product, GiftCard } from "./components/cards";
import HeroSection from "./components/hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./components/footer";
import CategoryComponent from "./components/category";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import {
  category,
  cardImg,
  banners,
  fashionCat,
  cardImg1,
  settings,
} from "./components/data";

function App() {
  document.body.classList.add("bg-body-tertiary");

  const [selectedCategory, setSelectedCategory] = useState(category[0]);

  return (
    <>
      <OffcanvasExample />
      <HeroSection />

      {/* category selection  */}
      <Container className="mt-5">
        <Col lg={10} className="mx-auto bg-white rounded-4 p-2">
          <Row>
            {category.map((value) => {
              return (
                <Col key={value.id} xs={4} sm={4} md={2} lg={2}>
                  <Categories
                    onClickBtn={() => setSelectedCategory(value)}
                    catImg={value.img}
                    catName={value.name}
                    scaleImg={selectedCategory?.id === value.id ? "1.1" : "1"}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Container>

      {/* carousel slider  */}
      <Container className="mt-5">
        <Col lg={10} className="mx-auto bg-white rounded-4 p-2">
          {selectedCategory && (
            <>
              <h3 className="text-center mt-4">
                Items in {selectedCategory.name}
              </h3>
              <Row className="slider-container">
                <Slider {...settings}>
                  {selectedCategory.items.map((item) => (
                    <Col key={item.id} className="mt-3">
                      <Product
                        proImg={item.img}
                        proName={item.name}
                        proPrice={item.price}
                        link={item.id}
                      />
                    </Col>
                  ))}
                </Slider>
              </Row>
            </>
          )}
        </Col>
      </Container>
      {/* Trending gift card */}
      <Container className="mt-5">
        <Col lg={10} className="mx-auto bg-white rounded-4 p-2">
          <>
            <h3 className="text-center mt-4">Trending Gift Cards</h3>
            <Row>
              {cardImg.map((image) => (
                <Col
                  key={image.id}
                  className="mt-3"
                  xs={6}
                  sm={6}
                  md={6}
                  lg={3}
                >
                  <GiftCard
                    cardImg={image.img}
                    imgKey={image.id}
                    customClass={"rounded-4"}
                  />
                </Col>
              ))}
              {cardImg1.map((image1) => (
                <Col key={image1.id} className="mt-5" md={12} lg={6}>
                  <GiftCard
                    cardImg={image1.img}
                    imgKey={image1.id}
                    customClass={"rounded-0"}
                  />
                </Col>
              ))}
            </Row>
          </>
        </Col>
      </Container>
      {/* mobile & tab  */}
      <CategoryComponent cat={category[5]} />

      {/* electonics  */}
      <Container className="mt-3">
        <GiftCard cardImg={banners[0].img} />
      </Container>
      <CategoryComponent cat={category[2]} />
      {/* fashion */}
      <Container className="mt-5">
        <Col lg={10} className="mx-auto bg-white rounded-4 p-2">
          <h3 className="text-center mt-4">{category[3].name}</h3>
          <GiftCard cardImg={banners[1].img} />
          <Row>
            {fashionCat.map((image) => (
              <Col key={image.id} className="mt-3" xs={6} sm={6} md={6} lg={3}>
                <GiftCard
                  cardImg={image.img}
                  imgKey={image.id}
                  customClass={"rounded-4"}
                />
              </Col>
            ))}
            {category[3].items.map((items) => (
              <>
                <Col key={items.id} className="mt-3" xs={6} md={6} lg={3}>
                  <Product
                    proImg={items.img}
                    proName={items.name}
                    proPrice={items.price}
                  />
                </Col>
              </>
            ))}
          </Row>
        </Col>
      </Container>
      {/* home & decore  */}
      <Container className="mt-3">
        <GiftCard cardImg={banners[2].img} />
      </Container>
      <CategoryComponent cat={category[4]} />
      {/* Beauty  */}
      <Container className="mt-3">
        <GiftCard cardImg={banners[3].img} />
      </Container>

      <CategoryComponent cat={category[1]} />
      <Footer />
    </>
  );
}

export default App;
