import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "../assets/big-star.svg";

function DevicePage() {
  const device = {
    id: 5,
    name: "Iphone 12 pro",
    price: 25000,
    rating: 5,
    img: "https://apiua.icoola.ua/aimeos/1.d/preview/b/d/bddb59eb_apple-iphone-12-pro-256gb-blue-icoola-1.jpg",
  };
  const description = [
    { id: 1, title: "Оперативная память", description: "5 гб" },
    { id: 2, title: "Камера", description: "12 мп" },
    { id: 3, title: "Процессор", description: "Пентиум 3" },
    { id: 4, title: "Кол-во ядер", description: "2" },
    { id: 5, title: "Аккумулятор", description: "4000 мА*ч" },
  ];
  return (
    <Container>
      <Row className="mt-3">
        <Col md={4}>
          <Image width={300} height={300} src={device.img} style={{ objectFit: "contain" }} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 className="text-center">{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center/cover`,
                width: 240,
                height: 240,
                fontSize: 64,
              }}
            >
              5
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{ width: 300, height: 300, fontSize: 32, border: "5px solid lightgray" }}
          >
            <h3>{device.price} грн.</h3>
            <Button variant="success">Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column mt-5">
        <h1>Характеристики</h1>
        {description.map((info) => (
          <Row key={info.id} className="device-description p-2">
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
}

export default DevicePage;
