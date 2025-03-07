import "./App.css";
import OffcanvasExample from "./components/navbar";
import { Categories, Product } from "./components/cards";
import HeroSection from "./components/hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function App() {
  document.body.classList.add("bg-body-tertiary");
  const category = [
    {
      id: "gift card",
      name: "Gift Card",
      img: "./Assets/categories/gift-card.png",
      items: [
        {
          id: 2,
          name: "Card 2",
          price: "Rs.10000",
          img: "/Assets/card/amazon.jpg",
        },
        {
          id: 1,
          name: "Card 1",
          price: "Rs.15000",
          img: "/Assets/card/amazon.jpg",
        },
        {
          id: 3,
          name: "Card 3",
          price: "Rs.20000",
          img: "/Assets/card/amazon.jpg",
        },
        {
          id: 4,
          name: "Card 4",
          price: "Rs.25000",
          img: "/Assets/card/amazon.jpg",
        },
        {
          id: 5,
          name: "Card 5",
          price: "Rs.30000",
          img: "/Assets/card/amazon.jpg",
        },
        {
          id: 6,
          name: "Card 6",
          price: "Rs.35000",
          img: "/Assets/card/amazon.jpg",
        },
      ],
    },
    {
      id: "beauty",
      name: "Beauty",
      img: "./Assets/categories/beauty.png",
      items: [
        {
          id: 1,
          name: "Perfume 515",
          price: "Rs.15000",
          img: "/Assets/beauty/515.png",
        },
        {
          id: 2,
          name: "Perfume Burak",
          price: "Rs.25000",
          img: "/Assets/beauty/burak.png",
        },
        {
          id: 3,
          name: "Perfume Open",
          price: "Rs.12000",
          img: "/Assets/beauty/open.png",
        },
        {
          id: 4,
          name: "Pefume Jaguar",
          price: "Rs.20000",
          img: "/Assets/beauty/jaguar.png",
        },
        {
          id: 5,
          name: "Mascara",
          price: "Rs.5000",
          img: "/Assets/beauty/Mascara.png",
        },
        {
          id: 6,
          name: "Highlight Palette",
          price: "Rs.6000",
          img: "/Assets/beauty/highlight.png",
        },
      ],
    },
    {
      id: "electronics",
      name: "Electronics",
      img: "./Assets/categories/electonics.png",
      items: [
        {
          id: 1,
          name: "Water Dispenser",
          price: "Rs.15000",
          img: "/Assets/electronics/dispenser.png",
        },
        {
          id: 2,
          name: "Fridge",
          price: "Rs.180000",
          img: "/Assets/electronics/fridge.png",
        },
        {
          id: 3,
          name: "Hand Blender",
          price: "Rs.10000",
          img: "/Assets/electronics/handblender.jpg",
        },
        {
          id: 4,
          name: "Heater",
          price: "Rs.25000",
          img: "/Assets/electronics/heater.jpg",
        },
        {
          id: 5,
          name: "Iron",
          price: "Rs.5000",
          img: "/Assets/electronics/iron.png",
        },
        {
          id: 6,
          name: "Washing Machine",
          price: "Rs.40000",
          img: "/Assets/electronics/washing.png",
        },
      ],
    },
    {
      id: "fashion",
      name: "Fashion",
      img: "./Assets/categories/fashion.png",
      items: [
        {
          id: 1,
          name: "Banarsi Suit",
          price: "Rs.5000",
          img: "/Assets/fashion/Banarsi.jpg",
        },
        {
          id: 2,
          name: "Bridal Dress",
          price: "Rs.200000",
          img: "/Assets/fashion/Bridal.jpg",
        },
        {
          id: 3,
          name: "Bridal Dress 1",
          price: "Rs.180000",
          img: "/Assets/fashion/bridaldress.jpg",
        },
        {
          id: 4,
          name: "Lawn Suit",
          price: "Rs.5000",
          img: "/Assets/fashion/lawnsuit.jpg",
        },
        {
          id: 5,
          name: "Party Dress",
          price: "Rs.45000",
          img: "/Assets/fashion/partydress.jpeg",
        },
        {
          id: 6,
          name: "Suit",
          price: "Rs.4000",
          img: "/Assets/fashion/suit.jpg",
        },
      ],
    },
    {
      id: "home & decor",
      name: "Home & Decor",
      img: "./Assets/categories/home-decor-item.png",
      items: [
        {
          id: 1,
          name: "Jaa e Namaz 1",
          price: "Rs.5000",
          img: "/Assets/home/jen1.jpg",
        },
        {
          id: 2,
          name: "Jaa e Namaz 2",
          price: "Rs.5000",
          img: "/Assets/home/jen2.jpg",
        },
        {
          id: 3,
          name: "Jaa e Namaz 3",
          price: "Rs.5000",
          img: "/Assets/home/jen3.jpg",
        },
        {
          id: 4,
          name: "Mat 1",
          price: "Rs.4000",
          img: "/Assets/home/mat1.jpg",
        },
        {
          id: 5,
          name: "Mat 2",
          price: "Rs.4000",
          img: "/Assets/home/mat2.jpg",
        },
        {
          id: 6,
          name: "Mat 3",
          price: "Rs.4000",
          img: "/Assets/home/mat3.jpg",
        },
      ],
    },
    {
      id: "mobile & tablets",
      name: "Mobile & Tablets",
      img: "./Assets/categories/mobile-&-tablets.png",
      items: [
        {
          id: 1,
          name: "Samsung Galaxy A55",
          price: "Rs.50000",
          img: "/Assets/mobile/pk-galaxy-a55.png",
        },
        {
          id: 2,
          name: "Samsung Galaxy A13",
          price: "Rs.5000",
          img: "/Assets/mobile/Samsung-Galaxy-A13.png",
        },
        {
          id: 3,
          name: "Samsung Galaxy A14",
          price: "Rs.5000",
          img: "/Assets/mobile/Samsung-Galaxy-a14.jpg",
        },
        {
          id: 4,
          name: "Samsung Galaxy A33",
          price: "Rs.4000",
          img: "/Assets/mobile/samsung-galaxy-a33.jpg",
        },
        {
          id: 5,
          name: "Samsung Galaxy Z Flip 4",
          price: "Rs.4000",
          img: "/Assets/mobile/Samsung-Galaxy-Z-Flip-4.png",
        },
        {
          id: 6,
          name: "Samsung Galaxy Z Fold 4",
          price: "Rs.4000",
          img: "/Assets/mobile/Samsung-Galaxy-Z-Fold-4.jpg",
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(category[0]);
  return (
    <>
      <OffcanvasExample />
      <HeroSection />
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
      <Container className="mt-5">
        <Col lg={10} className="mx-auto bg-white rounded-4 p-2">
          {selectedCategory && (
            <>
              <h3 className="text-center mt-4">
                Items in {selectedCategory.name}
              </h3>
              <Row>
                {selectedCategory.items.map((item) => (
                  <Col key={item.id} xs={6} sm={6} md={6} lg={4}>
                    <Product
                      proImg={item.img}
                      proName={item.name}
                      proPrice={item.price}
                    />
                  </Col>
                ))}
              </Row>
            </>
          )}
        </Col>
      </Container>
    </>
  );
}

export default App;
