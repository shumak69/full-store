import { Button, Form, Modal } from "react-bootstrap";
import { IModal } from "./IModal";

function СreateType({ show, onHide }: IModal) {
  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Добавить тип</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder="Введите название тип"></Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant="outline-danger">
          Закрыть
        </Button>
        <Button onClick={onHide} variant="outline-success">
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default СreateType;
