import Card from "react-bootstrap/Card";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faCartShopping,
  faTruck,
  faCreditCard,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

export function Categories({ catImg, catName, onClickBtn, scaleImg }) {
  return (
    <Card
      onClick={onClickBtn}
      className="border-0  align-items-center"
      style={{
        cursor: "pointer",
        scale: scaleImg,
      }}
    >
      <Card.Img
        variant="top"
        src={catImg}
        className="img-fluid m-3"
        style={{ height: "100px", width: "100px" }}
      />
      <Card.Body className=" p-0 m-0">
        <Card.Title className="text-center p-0 m-0 small text-capitalize">
          <p>{catName}</p>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export function Product({ proImg, proName, proPrice, link }) {
  return (
    <Link className="text-decoration-none" to={`/home/${link}`}>
      <Card className="m-2 p-2 ">
        <Card.Img variant="top" src={proImg} className="img-fluid " />
        <Card.Body className=" p-0 m-0">
          <div>
            <p className="m-0 p-0">
              <FontAwesomeIcon icon={faStar} className="text-warning small" />
              <FontAwesomeIcon icon={faStar} className="text-warning small" />
              <FontAwesomeIcon icon={faStar} className="text-warning small" />
              <FontAwesomeIcon icon={faStar} className="text-warning small" />
              <FontAwesomeIcon
                icon={faStarHalfStroke}
                className="text-warning small"
              />
            </p>
          </div>

          <Card.Title className=" p- m-0  text-capitalize">
            <p>{proName}</p>
          </Card.Title>
          <Card.Text className="fs-5 text-success">{proPrice}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export function GiftCard({ cardImg, customClass, imgKey }) {
  return (
    <Card className=" border-0">
      <img src={cardImg} className={`img-fluid ${customClass}`} alt={imgKey} />
    </Card>
  );
}

export function PreviewCard({ pImg, pPrice, pName }) {
  return (
    <Container className="mt-5">
      <Row>
        <Card>
          <Row>
            <Col className="py-3" lg={6}>
              <Card.Img className="img-fluid" src={pImg} />
            </Col>
            <Col lg={6} className="py-3 shadow-lg">
              <Card.Body className="px-0  h-100">
                <div className="px-3">
                  <Card.Title className="m-0 fs-1">{pName}</Card.Title>
                  <div>
                    <p className="m-0 p-0">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-warning small"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-warning small"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-warning small"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-warning small"
                      />
                      <FontAwesomeIcon
                        icon={faStarHalfStroke}
                        className="text-warning small"
                      />
                    </p>
                  </div>
                </div>
                <hr />
                <div className="px-3 ">
                  <Row>
                    <Col sm="6">
                      <Card.Text className=" fs-3 text-warning">
                        {pPrice}
                      </Card.Text>
                      <p className="text-danger fw-bold small">
                        Available: 10 item(s)
                      </p>
                      <p className="text-warning-emphasis  small">
                        <span className="text-black fw-bold">Vendor: </span>
                        carts.pk
                      </p>
                      <Button variant="warning" className="px-5 mt-5">
                        <FontAwesomeIcon icon={faCartShopping} /> Add to cart
                      </Button>
                    </Col>
                    <Col sm="6">
                      <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <span>
                              <FontAwesomeIcon
                                icon={faTruck}
                                className="fs-6"
                              />{" "}
                              Delivery
                            </span>
                          </Accordion.Header>
                          <Accordion.Body className=" small text-black-50">
                            <ul>
                              <li>— For PAK - Rs.199</li>
                              <li>— Worldwide - from $10</li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            <span>
                              <FontAwesomeIcon icon={faCreditCard} /> Payment
                              Method
                            </span>
                          </Accordion.Header>
                          <Accordion.Body className=" small text-black-50">
                            <ul>
                              <li>— Cash on delivery</li>
                              <li>— Easypaisa</li>
                              <li>— Bank Transfer</li>
                              <li>— Jazz Cash</li>
                              <li>— UBL Omni</li>
                              <li>— Visa and MasterCard</li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>
                            <span>
                              <FontAwesomeIcon icon={faCertificate} /> Our
                              Advantages
                            </span>
                          </Accordion.Header>
                          <Accordion.Body className=" small text-black-50">
                            <ul>
                              <li>— 24 hours checking warranty</li>
                              <li>— Return and exchange</li>
                              <li>— Different payment methods</li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <hr />
                      <div className="mt-3">
                        <h6 className="small fw-bold">
                          Shipping time and rates:
                          <span>Your City</span>
                        </h6>
                        <p className="small text-muted">
                          Sorry, we couldn't find any shipping options for your
                          location. Please contact us, and we'll see what we can
                          do about it.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Row>
    </Container>
  );
}
