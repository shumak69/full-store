import { observer } from "mobx-react-lite";
import { Card, Col, Image } from "react-bootstrap";
import { IDevice } from "../store/DeviceStore";
import star from "../assets/Vector.svg";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE, REACT_APP_API_URL } from "../utils/consts";
import { useContext } from "react";
import { Context } from "..";

interface DeviceItemProps {
  device: IDevice & { brandId: number };
}

function DeviceItem({ device }: DeviceItemProps) {
  const navigate = useNavigate();
  const { device: devices } = useContext(Context)!;
  return (
    <Col md={3} className="mt-3" onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}>
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image
          src={`${REACT_APP_API_URL}/${device.img}`}
          width={145}
          height={145}
          style={{ objectFit: "contain" }}
        />
        <div className="d-flex justify-content-between align-items-center mt-1 text-black-50 mx-1">
          <div>{devices.brands.find((item) => item.id === device.brandId)?.name}...</div>
          <div className="d-flex">
            <div>{device.rating}</div>
            <Image src={star} />
          </div>
        </div>
        <div className="text-center my-1">{device.name}</div>
        <strong className="text-center my-1 h4">{device.price} ₴</strong>
      </Card>
    </Col>
  );
}

export default observer(DeviceItem);
