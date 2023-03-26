import { Trash } from "@phosphor-icons/react";
import { ButtonHTMLAttributes } from "react";
import styles from "./button-delete.module.css";

interface ButtonDeleteProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function ButtonDelete({ text }: ButtonDeleteProps) {
  return (
    <button className={styles.buttonDelete}>
      <Trash size={18} color="purple" />
      {text}
    </button>
  );
}
