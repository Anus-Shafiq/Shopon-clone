import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row className="justify-content-lg-between">
          <Col md={4} lg={"auto"}>
            <h5>Useful Links</h5>
            <ul className="list-unstyled small mt-3 mt-3">
              <li>
                <a href="/" className="text-white-50 nav-link">
                  About us
                </a>
              </li>
              <li>
                <a href="/about" className="text-white-50 nav-link">
                  Gift certificates
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white-50 nav-link">
                  Our Brand
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white-50 nav-link">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white-50 nav-link">
                  Blog
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} lg={"auto"}>
            <h5>My account</h5>
            <ul className="list-unstyled small mt-3">
              <li>
                <a href="/" className="text-white-50 nav-link">
                  Sign in
                </a>
              </li>
              <li>
                <a href="/about" className="text-white-50 nav-link">
                  Create Account
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} lg={"auto"}>
            <h5>Customer Service</h5>
            <ul className="list-unstyled small mt-3">
              <li>
                <a href="/" className=" text-white-50 nav-link">
                  Payment & Shipping
                </a>
              </li>
              <li>
                <a href="/about" className="text-white-50 nav-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white-50 nav-link">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white-50 nav-link">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white-50 nav-link">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white-50 nav-link">
                  About your order
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white-50 nav-link">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white-50 nav-link">
                  Comparison list
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} lg={"auto"}>
            <h5>Contact us</h5>
            <ul className="list-unstyled small mt-3">
              <li>
                <a href="/" className="text-white-50 nav-link">
                  , 15E Officers Colony Bosan Road Multan
                </a>
              </li>
              <li>
                <a href="/about" className="text-white-50 nav-link">
                  03336198169
                </a>
              </li>
              <li>
                <a href="/about" className="text-white-50 nav-link">
                  Mon-Sun 09:00 AM to 11:30 PM
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white-50 nav-link">
                  admin@shopon.pk
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white-50 nav-link">
                  View on map
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} lg={"auto"}>
            <h5>Keep In Touch</h5>
            <ul className="list-unstyled small mt-3">
              <li>
                <a href="/" className="text-white-50 nav-link">
                  Facebook
                </a>
              </li>
              <li>
                <a href="/about" className="text-white-50 nav-link">
                  Instagram
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white-50 nav-link">
                  Twitter
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white-50 nav-link">
                  Youtube
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="bg-white" />
        <p className="text-center mb-0">© 2025 Shopon. All Rights Reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
