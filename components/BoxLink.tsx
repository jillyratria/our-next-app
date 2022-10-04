import React from "react";
import styles from "../styles/Home.module.css";

export function BoxLink(props) {
  return (
    <a href={props.href} className={styles.card}>
      <h2>{props.title} &rarr;</h2>
      <p>{props.description}</p>
    </a>
  );
}
