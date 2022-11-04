import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import bigStar from "../assets/big-star.svg";
import { fetchOneDevice } from "../http/deviceApi";
import { IDevicePage } from "../types/device";
import { REACT_APP_API_URL } from "../utils/consts";

function DevicePage() {
  const [device, setDevice] = useState<IDevicePage | null>(null);
  const { id } = useParams();
  useEffect(() => {
    fetchOneDevice(+id!).then((data) => setDevice(data));
  }, []);
  return (
    <Container>
      <Row className="mt-3">
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={`${REACT_APP_API_URL}${device?.img}`}
            style={{ objectFit: "contain" }}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 className="text-center">{device?.name}</h2>
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
            <h3>{device?.price} грн.</h3>
            <Button variant="success">Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column mt-5">
        <h1>Характеристики</h1>
        {device?.info.map((info) => (
          <Row key={info.id} className="device-description p-2">
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
}

export default DevicePage;
