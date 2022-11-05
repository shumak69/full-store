import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "..";

function TypeBar() {
  const { device } = useContext(Context)!;

  return (
    <ListGroup>
      <ListGroup.Item
        key={"Все"}
        onClick={() => device.setSelectedType(null)}
        active={device.selectedType === null}
        style={{ cursor: "pointer" }}
      >
        Все
      </ListGroup.Item>
      {device.types.map((type) => (
        <ListGroup.Item
          key={type.id}
          onClick={() => device.setSelectedType(type)}
          active={type.id === device.selectedType?.id}
          style={{ cursor: "pointer" }}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default observer(TypeBar);
