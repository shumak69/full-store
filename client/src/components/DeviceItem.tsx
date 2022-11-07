import { observer } from "mobx-react-lite";
import { Card, Col, Image } from "react-bootstrap";
import { IDevice } from "../store/DeviceStore";
import star from "../assets/Vector.svg";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE, REACT_APP_API_URL } from "../utils/consts";
import { useContext, MouseEvent } from "react";
import { Context } from "..";

interface DeviceItemProps {
  device: IDevice & { brandId: number };
  isBasket?: boolean;
  index?: number;
}

function DeviceItem({ device, isBasket = false, index }: DeviceItemProps) {
  const navigate = useNavigate();
  const { device: devices, basket } = useContext(Context)!;

  const deleteItem = (e: MouseEvent<SVGSVGElement>, i: number) => {
    e.stopPropagation();
    basket.deleteBasketItem(index || 0);
  };
  return (
    <Col md={isBasket ? 2 : 3} className="mt-3" onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}>
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image
          src={`${REACT_APP_API_URL}/${device.img}`}
          width={145}
          height={145}
          style={{ objectFit: "contain" }}
        />
        <div className="d-flex justify-content-between align-items-center mt-1 text-black-50 mx-1">
          <div>{devices.brands.find((item) => item.id === device.brandId)?.name}...</div>
          {isBasket ? (
            <svg
              className="remove"
              width="25"
              height="25"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={(e) => deleteItem(e, 0)}
            >
              <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="red" stroke="#DBDBDB"></rect>
              <path
                d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                fill="white"
              ></path>
            </svg>
          ) : (
            <div className="d-flex">
              <div>{device.rating}</div>
              <Image src={star} />
            </div>
          )}
        </div>
        <div className="text-center my-1">{device.name}</div>
        <strong className="text-center my-1 h4">{device.price} ₴</strong>
      </Card>
    </Col>
  );
}

export default observer(DeviceItem);
