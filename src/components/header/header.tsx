import Image from "next/image";
import { MapPin } from "@phosphor-icons/react";
import { ButtonCart } from "../buttons/button-cart/button-cart";

import styles from "./header.module.css";

const coffeeDeliveryImg = "/img/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Image
          width={80}
          height={80}
          src={coffeeDeliveryImg}
          alt="Logo da Coffee Delivery"
        />
      </div>

      <nav className={styles.userInfo}>
        <span>
          <MapPin size={20} color="purple" weight="fill" />
          Porto Alegre, RS
        </span>
        <ButtonCart />
      </nav>
    </header>
  );
}
