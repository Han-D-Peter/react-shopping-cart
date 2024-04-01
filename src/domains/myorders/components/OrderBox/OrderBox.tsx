import OrderProductRowCard from "../../../shared/components/OrderProductRowCard/OrderProductRowCard";
import Text from "../../../shared/components/Text/Text";
import { Order, Orders } from "../../../shared/queryHook/orders/orders.type";
import { orderContainer, orderHeader, orderProductBox } from "./OrderBox.css";

interface OrderBox {
  id: number;
  orders: Order[];
}

export default function OrderBox({ id, orders }: OrderBox) {
  return (
    <div className={orderContainer}>
      <div className={orderHeader}>
        <Text as="description">{`주문번호: ${id}`}</Text>
        <Text as="description">{"상세보기>"}</Text>
      </div>

      {orders.map((order) => (
        <div key={order.id} className={orderProductBox}>
          <OrderProductRowCard
            imgSrc={order.imageUrl}
            title={order.name}
            quantity={order.quantity}
          />
        </div>
      ))}
    </div>
  );
}
