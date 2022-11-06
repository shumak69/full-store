import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";

function Basket() {
  const { basket } = useContext(Context)!;
  return <div>{JSON.stringify(basket.basketItems)}</div>;
}

export default observer(Basket);
