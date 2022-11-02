import { useContext, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Context } from "../..";
import { IDeviceInfo } from "../../types/device";
import { IModal } from "./IModal";

function CreateDevice({ show, onHide }: IModal) {
  const { device } = useContext(Context)!;
  const [info, setInfo] = useState<IDeviceInfo[]>([]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number: number) => {
    setInfo(info.filter((item) => item.number !== number));
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Добавить устройство</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control placeholder="Введите название устройства" className="mt-4" />
          <Form.Control placeholder="Введите стоимость устройства" className="mt-4" type="number" />
          <Form.Control className="mt-4" type="file" />
          <hr />
          <Button variant="warning" onClick={addInfo}>
            Добавить новое свойство
          </Button>
          {info.map((i) => (
            <Row key={i.number} className="mt-4">
              <Col md={4}>
                <Form.Control placeholder="Введите название характеристики" />
              </Col>
              <Col md={4}>
                <Form.Control placeholder="Введите описание свойства" />
              </Col>
              <Col md={4}>
                <Button variant="outline-danger" onClick={() => removeInfo(i.number!)}>
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant="outline-danger">
          Закрыть
        </Button>
        <Button onClick={onHide} variant="outline-success ">
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateDevice;
