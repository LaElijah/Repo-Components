import React from "react";
import { ButtonProps } from "../types/button.types";
import styles from "./button.module.scss";


export default function Button({
    children,
}: ButtonProps): JSX.Element {

    return <button className={styles.button}>{children}</button>
}