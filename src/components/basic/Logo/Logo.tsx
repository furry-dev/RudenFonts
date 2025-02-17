import styles from "./Logo.module.sass"
import {ReactElement} from "react"

/**
 * Renders the logo component.
 * @returns {ReactElement} The logo ReactElement.
 */
export default function Logo(): ReactElement {
    return (
        <a className={styles.logo} href={"/"}>Ruden<small className={styles.subText}>Fonts</small></a>
    )
}