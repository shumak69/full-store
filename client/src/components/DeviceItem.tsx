import { observer } from "mobx-react-lite";
import { Card, Col, Image } from "react-bootstrap";
import { IDevice } from "../store/DeviceStore";
import star from "../assets/Vector.svg";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

interface DeviceItemProps {
  device: IDevice;
}

function DeviceItem({ device }: DeviceItemProps) {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <Col md={3} className="mt-3" onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}>
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image src={device.img} width={150} height={150} style={{ objectFit: "contain" }} />
        <div className="d-flex justify-content-between align-items-center mt-1 text-black-50">
          <div>Samsung...</div>
          <div className="d-flex">
            <div>{device.rating}</div>
            <Image src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
}

export default observer(DeviceItem);
