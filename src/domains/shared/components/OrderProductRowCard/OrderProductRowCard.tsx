import Text from "../Text/Text";
import {
  cardContainer,
  cardImg,
  cardInfo,
  cardQuantity,
} from "./OrderProductRowCard.css";

interface OrderProductRowCard {
  imgSrc: string;
  title: string;
  quantity: number;
}

export default function OrderProductRowCard({
  imgSrc,
  title,
  quantity,
}: OrderProductRowCard) {
  return (
    <div className={cardContainer}>
      <div>
        <img className={cardImg} src={imgSrc} alt="product img" />
      </div>
      <div className={cardInfo}>
        <div>
          <Text as="description">{title}</Text>
        </div>
        <div className={cardQuantity}>
          <Text as="caption">{`수량: ${quantity.toLocaleString()}`}</Text>
        </div>
      </div>
    </div>
  );
}
