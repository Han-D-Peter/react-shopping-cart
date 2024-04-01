import Text from "../shared/components/Text/Text";
import { useOrders } from "../shared/queryHook/orders/orders.query";
import { Order } from "../shared/queryHook/orders/orders.type";
import OrderBox from "./components/OrderBox/OrderBox";
import {
  container,
  orderSection,
  section,
  titleContainer,
  underLine,
} from "./MyordersPage.css";

export default function MyOrdersPage() {
  const { data } = useOrders();
  return (
    <main className={container}>
      <section className={section}>
        <div className={titleContainer}>
          <Text as="subtitle">주문 목록</Text>
        </div>
        <div className={underLine}></div>
        <div className={orderSection}>
          {data?.response.map(
            (order: { id: number; orderDetails: Order[] }) => {
              return <OrderBox id={order.id} orders={order.orderDetails} />;
            }
          )}
        </div>
      </section>
    </main>
  );
}
