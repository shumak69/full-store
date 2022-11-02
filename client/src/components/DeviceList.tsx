import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "..";
import DeviceItem from "./DeviceItem";

function DeviceList() {
  const { device } = useContext(Context)!;
  return (
    <Row className="d-flex">
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
}

export default observer(DeviceList);
