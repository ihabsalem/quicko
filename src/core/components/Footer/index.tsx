import type { NextPage } from "next";
import Image from "next/image";

import styles from "./styles/footer.module.scss";

export const Footer: NextPage = () => (
  <footer className={styles.footer}>
    <a href="/">
      Powered by{" "}
      <span className={styles.logo}>
        <Image className="mx-1" src="/logo.png" alt="Vercel Logo" width={72} height={16} />
      </span>
    </a>
  </footer>
);
