import {FontPageProps} from "@/components/screens/Font/font.interfaces"
import FontCard from "@/components/global/FontCard/FontCard"

import styles from "./Font.module.sass"
import {FontVariants} from "@/types/font.interfaces"
import {useTranslations} from "next-intl"

export default function Font({font}: FontPageProps) {

    const t = useTranslations()

    return (
        <main className={styles.main}>
            <h1>{font.family}</h1>
            <section className={styles.data}>
                <ul className={styles.left}>
                    <li>{t("FontPage.Categories")}:</li>
                    <li>{t("FontPage.Langs")}:</li>
                    <li>{t("FontPage.Variants")}:</li>
                </ul>
                <ul className={styles.right}>
                    <li>
                        <ul>{font.categories.map((value, index) => <li key={index}>{value}</li>)}</ul>
                    </li>
                    <li>
                        <ul>{font.langs.map((value, index) => <li key={index}>{value}</li>)}</ul>
                    </li>
                    <li>
                        <ul>{Object.keys(font.files).map((value, index) => <li key={index}>{value}</li>)}</ul>
                    </li>
                </ul>
            </section>
            <section>
                <span>
                    {t("FontPage.Commercial")}: <b style={{color: font.freeCommercial ? "limegreen" : "red"}}>
                        {t(`Global.${font.freeCommercial ? "Yes" : "No"}`)}
                    </b>
                </span>
            </section>
            <section>
                <h2>Variants:</h2>
                <div className={styles.variants}>
                    {Object.keys(font.files).map((variant, index) => (
                        <FontCard
                            key={index}
                            font={font}
                            variant={variant as FontVariants}
                            downloadLink={font.files[variant as FontVariants]}
                        />))}
                </div>
            </section>
        </main>
    )
}