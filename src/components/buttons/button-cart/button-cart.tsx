import { ShoppingCartSimple } from "@phosphor-icons/react";
import { ButtonHTMLAttributes } from "react";

import styles from "./button-cart.module.css";

interface ButtonCartProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hasCard?: boolean;
}

export function ButtonCart({ hasCard = false }: ButtonCartProps) {
  return (
    <button
      className={hasCard ? styles.buttonCartCard : styles.buttonCartDefault}
    >
      <ShoppingCartSimple size={32} weight="fill" color="white" />
    </button>
  );
}
