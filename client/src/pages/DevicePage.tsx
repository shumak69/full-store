import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "..";
import bigStar from "../assets/big-star.svg";
import { fetchOneDevice } from "../http/deviceApi";
import { IDevicePage } from "../types/device";
import { REACT_APP_API_URL } from "../utils/consts";

function DevicePage() {
  const [device, setDevice] = useState<IDevicePage | null>(null);
  const [error, setError] = useState("");
  const { basket } = useContext(Context)!;
  const { id } = useParams();
  useEffect(() => {
    setError("");
    fetchOneDevice(+id!)
      .then((data) => setDevice(data))
      .catch((err) => setError(err.message));
  }, []);
  if (error) {
    return (
      <Container>
        <h1 className="mt-3 text-center text-danger">{error}</h1>
      </Container>
    );
  }
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
                width: 250,
                height: 240,
                fontSize: 64,
              }}
            >
              {device?.rating || 0}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{ width: 300, height: 300, fontSize: 32, border: "5px solid lightgray" }}
          >
            <h3>{device?.price} грн.</h3>
            <Button variant="success" onClick={() => basket.setBasketItems(device!)}>
              Добавить в корзину
            </Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column mt-5">
        <h1>Характеристики</h1>
        {!device?.info.length ? (
          <div>Характеристики не указаны</div>
        ) : (
          device?.info.map((info) => (
            <Row key={info.id} className="device-description p-2">
              {info.title}: {info.description}
            </Row>
          ))
        )}
      </Row>
    </Container>
  );
}

export default DevicePage;
