import { ReactNode } from "react";
import { Header } from "../header/header";

import styles from "./grid.module.css";

interface GridProps {
  children: ReactNode;
}

export function Grid({ children }: GridProps) {
  return (
    <div className={styles.grid}>
      <Header />
      {children}
    </div>
  );
}
