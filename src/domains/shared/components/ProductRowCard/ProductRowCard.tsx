import Count from "../Count/Count";
import IconButton from "../IconButton/IconButton";
import {
  cardContainer,
  cardDescription,
  cardFeatureContainer,
  cardImg,
  cardTitle,
} from "./ProductRowCard.css";

interface ProductRowCard {
  productImgUrl: string;
  title: string;
  price: number;
  quanity?: number;
  onChangeQuanity?: (quanity: number) => void;
  onRemove?: () => void;
  onCheck?: () => void;
  checked?: boolean;
}

export default function ProductRowCard({
  productImgUrl,
  title,
  price,
  quanity,
  onChangeQuanity,
  onRemove,
  onCheck,
  checked,
}: ProductRowCard) {
  return (
    <div className={cardContainer}>
      <div>
        <div>
          <input type="checkbox" />
        </div>
      </div>
      <div className={cardDescription}>
        <div>
          <img className={cardImg} src={productImgUrl} alt="product img" />
        </div>
        <div className={cardTitle}>{title}</div>
      </div>
      <div className={cardFeatureContainer}>
        <div>
          <IconButton
            width={30}
            height={26}
            src="/icons/carts.svg"
            alt="cart"
          />
        </div>
        <div>
          <Count />
        </div>
        <div>{price.toLocaleString()} 원</div>
      </div>
    </div>
  );
}
