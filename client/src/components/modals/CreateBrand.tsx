import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createBrand } from "../../http/deviceApi";
import { IModal } from "./IModal";

function CreateBrand({ show, onHide }: IModal) {
  const [value, setValue] = useState("");

  const addBrand = async () => {
    await createBrand({ name: value });
    setValue("");
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Добавить бренд</Modal.Title>
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
        <Button onClick={addBrand} variant="outline-success ">
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateBrand;
