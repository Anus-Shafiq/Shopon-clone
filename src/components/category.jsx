import { Product } from "./cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CategoryComponent({ cat }) {
  return (
    <Container className="mt-5">
      <Col lg={10} className="mx-auto bg-white rounded-4 p-2">
        <h3 className="text-center mt-4">{cat.name}</h3>

        <Row>
          {cat.items.map((items) => (
            <>
              {console.log(items.id)}
              <Col key={items.id} className="mt-3" xs={6} md={6} lg={3}>
                {/* <Link className="text-decoration-none" to={`/home/${items.id}`}> */}
                <Product
                  proImg={items.img}
                  proName={items.name}
                  proPrice={items.price}
                  link={items.id}
                />
                {/* </Link> */}
              </Col>
            </>
          ))}
        </Row>
      </Col>
    </Container>
  );
}

export default CategoryComponent;
