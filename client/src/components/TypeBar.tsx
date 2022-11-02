import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "..";

function TypeBar() {
  const { device } = useContext(Context)!;

  return (
    <ListGroup>
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
