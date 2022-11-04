import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createType } from "../../http/deviceApi";
import { IModal } from "./IModal";

function СreateType({ show, onHide }: IModal) {
  const [value, setValue] = useState("");

  const addType = async () => {
    await createType({ name: value });
    setValue("");
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Добавить тип</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder="Введите название тип"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant="outline-danger">
          Закрыть
        </Button>
        <Button onClick={addType} variant="outline-success">
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default СreateType;
