import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../shared/components/Button/Button";
import DecisionPriceBox from "../../shared/components/DecisionPriceBox/DecisionPriceBox";
import ProductRowCard from "../../shared/components/ProductRowCard/ProductRowCard";
import Text from "../../shared/components/Text/Text";
import { useCarts } from "../../shared/queryHook/carts/carts.query";
import {
  buttonBox,
  cartContainer,
  container,
  decisionBox,
  list,
  listContainer,
  listNavBox,
  listTitle,
  section,
  titleContainer,
  underLine,
} from "./CartsPage.css";

type Cart = {
  id: number;
  quantity: number;
  checked: boolean;
  product: {
    id: number;
    price: number;
    name: string;
    imageUrl: string;
  };
};

export default function CartsPage() {
  const { data } = useCarts();

  const [carts, setCarts] = useState<Cart[]>([]);

  useEffect(() => {
    if (!data?.response) return;
    const propertiesAddedProducts = data.response.map((product) => ({
      ...product,
      quantity: 0,
      checked: false,
    }));
    setCarts(propertiesAddedProducts);
  }, [data]);

  const checkedAtLeast =
    carts.filter((cart) => cart.checked === true).length > 0;

  function unCheckAll(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.checked) {
      const unCheckedThings = [...carts].map((cart) => {
        cart.checked = false;
        return cart;
      });
      setCarts(unCheckedThings);
    }
  }

  const totalPrice = carts.reduce((total, product) => {
    if (!product.checked) return total;
    const mergedPrice = product.quantity * product.product.price;
    return total + mergedPrice;
  }, 0);

  function checkProduct(index: number) {
    return function () {
      const copied = [...carts];
      copied[index].checked = copied[index].checked ? false : true;
      setCarts(copied);
    };
  }

  function changeQuantity(index: number) {
    return function (quantity: number) {
      const copied = [...carts];
      copied[index].quantity = quantity;
      setCarts(copied);
    };
  }

  return (
    <main className={container}>
      <section className={section}>
        <div className={titleContainer}>
          <Text as="subtitle">장바구니</Text>
        </div>
        <div className={underLine}></div>
        <div className={cartContainer}>
          <div className={listContainer}>
            <div className={listNavBox}>
              <div>
                <input
                  checked={checkedAtLeast}
                  type="checkbox"
                  onChange={unCheckAll}
                />{" "}
                선택해제
              </div>
              <div className={buttonBox}>
                <Button appearance="outline">상품삭제</Button>
              </div>
            </div>
            <div className={listTitle}>든든배송 상품 (3개)</div>
            <div className={underLine}></div>
            <div className={list}>
              {carts.map(({ product, checked }, index) => {
                return (
                  <ProductRowCard
                    onChangeQuanity={changeQuantity(index)}
                    onCheck={checkProduct(index)}
                    checked={checked}
                    key={product.id}
                    productImgUrl={product.imageUrl}
                    title={product.name}
                    price={product.price}
                  />
                );
              })}
            </div>
          </div>
          <div className={decisionBox}>
            <DecisionPriceBox
              title="결제예상금액"
              subtitle="결제예상금액"
              price={totalPrice}
              buttonText={`주문하기(${carts.length}개)`}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
