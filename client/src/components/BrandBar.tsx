import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Context } from "..";

function BrandBar() {
  const { device } = useContext(Context)!;
  return (
    <Row>
      <Col className="d-flex flex-wrap">
        {device.brands.map((brand) => (
          <Card
            style={{ cursor: "pointer" }}
            key={brand.id}
            className="p-3"
            onClick={() => device.setSelectedBrand(brand)}
            border={brand.id === device.selectedBrand?.id ? "primary" : "light"}
          >
            {brand.name}
          </Card>
        ))}
      </Col>
    </Row>
  );
}

export default observer(BrandBar);
