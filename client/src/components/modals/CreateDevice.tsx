import { observer } from "mobx-react-lite";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Context } from "../..";
import { createDevice, fetchBrands, fetchTypes } from "../../http/deviceApi";
import { IDeviceInfo } from "../../types/device";
import { IModal } from "./IModal";

function CreateDevice({ show, onHide }: IModal) {
  const { device } = useContext(Context)!;
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [file, setFile] = useState<null | File>(null);
  const [brand, setBrand] = useState(null);
  const [type, setType] = useState(null);
  const [info, setInfo] = useState<IDeviceInfo[]>([]);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number: number) => {
    setInfo(info.filter((item) => item.number !== number));
  };

  const changeInfo = (key: "title" | "description", value: string, number: number) => {
    setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
  };

  const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files![0]);
  };

  const addDevice = () => {
    const formData = new FormData();
    console.log(JSON.stringify(info));
    formData.append("name", name);
    formData.append("price", price.toString());
    formData.append("img", file!);
    formData.append("brandId", device.selectedBrand!.id.toString());
    formData.append("typeId", device.selectedType!.id.toString());
    formData.append("info", JSON.stringify(info));
    createDevice(formData).then((data) => onHide());
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Добавить устройство</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>{device.selectedType?.name || "Выберите тип"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id} onClick={() => device.setSelectedType(type)}>
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>{device.selectedBrand?.name || "Выберите бренд"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item key={brand.id} onClick={() => device.setSelectedBrand(brand)}>
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            placeholder="Введите название устройства"
            className="mt-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            placeholder="Введите стоимость устройства"
            className="mt-4"
            type="number"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
          />
          <Form.Control className="mt-4" type="file" onChange={selectFile} />
          <hr />
          <Button variant="warning" onClick={addInfo}>
            Добавить новое свойство
          </Button>
          {info.map((i) => (
            <Row key={i.number} className="mt-4">
              <Col md={4}>
                <Form.Control
                  placeholder="Введите название характеристики"
                  value={i.title}
                  onChange={(e) => changeInfo("title", e.target.value, i.number!)}
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  placeholder="Введите описание свойства"
                  value={i.description}
                  onChange={(e) => changeInfo("description", e.target.value, i.number!)}
                />
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
        <Button onClick={addDevice} variant="outline-success">
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default observer(CreateDevice);
