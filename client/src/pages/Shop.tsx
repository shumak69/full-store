import { observer } from "mobx-react-lite";
import { useContext, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Context } from "..";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import Pages from "../components/Pages";
import TypeBar from "../components/TypeBar";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceApi";

function Shop() {
  const { device } = useContext(Context)!;
  const [error, setError] = useState("");
  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    // fetchDevices(null, null, 1, 2).then((data) => {
    //   device.setDevices(data.rows);
    //   device.setTotalCount(data.count);
    // });
  }, []);

  useEffect(() => {
    fetchDevices(device.selectedType?.id, device.selectedBrand?.id, device.page, device.limit)
      .then((data) => {
        device.setDevices(data.rows);
        device.setTotalCount(data.count);
      })
      .catch((err) => setError(err.message));
  }, [device.page, device.selectedType, device.selectedBrand]);

  if (error) {
    return (
      <Container>
        <h1 className="mt-3 text-center text-danger">{error}</h1>
      </Container>
    );
  }
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
}

export default observer(Shop);
