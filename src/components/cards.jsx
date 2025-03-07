import Card from "react-bootstrap/Card";

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

export function Product({ proImg, proName, proPrice }) {
  return (
    <Card className="m-2 p-2 ">
      <Card.Img variant="top" src={proImg} className="img-fluid " />
      <Card.Body className=" p-0 m-0">
        <Card.Title className=" p- m-0  text-capitalize">
          <p>{proName}</p>
        </Card.Title>
        <Card.Text className="fs-5 text-success">{proPrice}</Card.Text>
      </Card.Body>
    </Card>
  );
}
