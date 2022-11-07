import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Context } from "..";
import DeviceItem from "../components/DeviceItem";

function Basket() {
  const { basket } = useContext(Context)!;
  const [isOrdered, setIsOrdered] = useState(false);
  const checkout = () => {
    basket.clearBasket();
    setIsOrdered(true);
  };

  if (isOrdered) {
    return <h2 className="mt-4 text-center">Заказ оформлен, спасибо что выбрали нас!</h2>;
  }

  if (!basket.basketItems.length) {
    return <h2 className="mt-4 text-center">Корзина пустая</h2>;
  }

  return (
    <Container>
      <h1>Корзина</h1>
      <Row className="d-flex">
        {basket.basketItems.map((item, i) => (
          <DeviceItem key={`${i} + ${item.id}`} device={item} isBasket index={i} />
        ))}
      </Row>
      {/* <Row> */}
      <Col md={3} className="mx-auto mt-5">
        <Button variant="outline-success w-100" onClick={checkout}>
          Оформить заказ
        </Button>
      </Col>
      {/* </Row> */}
    </Container>
  );
}

export default observer(Basket);
