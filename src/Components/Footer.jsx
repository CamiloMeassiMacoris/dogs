import React from "react";
import styles from "./Footer.module.css";
import Dogs from "../Assets/dogs-footer.svg?react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      Dogs. Alguns diretiros Reservados.
    </footer>
  );
};

export default Footer;
