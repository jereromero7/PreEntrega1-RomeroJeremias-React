import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function CartWidget() {
  return (
    <button>
      <FontAwesomeIcon icon={faShoppingCart} />
      <p>12</p>
    </button>
  );
}
