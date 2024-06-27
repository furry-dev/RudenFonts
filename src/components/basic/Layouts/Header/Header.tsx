import Logo from "@/components/basic/Logo/Logo"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import styles from "./Header.module.sass"
import {ReactElement} from "react"


/**
 * Function to render the page header.
 * @returns {ReactElement} The header ReactElement.
 */
export default function Header(): ReactElement {
    return (
        <header className={styles.header}>
            <Logo/>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.notify}/>
        </header>
    )
}
