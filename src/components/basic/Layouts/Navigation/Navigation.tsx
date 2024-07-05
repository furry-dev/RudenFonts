"use client"

import styles from "./Navigation.module.sass"
import Link from "next/link"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGraduationCap, faHeart, faHouse, faLayerGroup} from "@fortawesome/free-solid-svg-icons"
import {ReactElement} from "react"
import {usePathname} from "next/navigation"
import {useTranslations} from "next-intl"

/**
 * Renders the footer component.
 * @returns {ReactElement} The footer ReactElement.
 */
export default function Navigation(): ReactElement {
    const t = useTranslations("Navigation")
    const pathname = usePathname()

    return (
        <nav className={styles.navigate}>
            <ul className={styles.links}>
                <li>
                    <Link href="/" className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}>
                        <FontAwesomeIcon icon={faHouse} className={styles.icon}/>
                        <span className={styles.label}>{t("homeTabTitle")}</span>
                    </Link>
                </li>
                <li>
                    <Link href="/collections"
                        className={`${styles.link} ${pathname.includes("/collections") ? styles.active : ""}`}>
                        <FontAwesomeIcon icon={faLayerGroup} className={styles.icon}/>
                        <span className={styles.label}>{t("collectionsTabTitle")}</span>
                    </Link>
                </li>
                <li>
                    <Link href="/my-lists"
                        className={`${styles.link} ${pathname.includes("/my-lists") ? styles.active : ""}`}>
                        <FontAwesomeIcon icon={faHeart} className={styles.icon}/>
                        <span className={styles.label}>{t("myListsTabTitle")}</span>
                    </Link>
                </li>
                <li>
                    <Link href="/learn"
                        className={`${styles.link} ${pathname.includes("/learn") ? styles.active : ""}`}>
                        <FontAwesomeIcon icon={faGraduationCap} className={styles.icon}/>
                        <span className={styles.label}>{t("learnTabTitle")}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
