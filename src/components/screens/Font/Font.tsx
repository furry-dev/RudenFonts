import {FontPageProps} from "@/components/screens/Font/font.interfaces"
import FontCard from "@/components/screens/home/FontCard/FontCard"

import styles from "./Font.module.sass"

export default function Font({font}: FontPageProps) {
    return (
        <main className={styles.main}>
            <h1>{font.family}</h1>
            <section className={styles.data}>
                <ul className={styles.left}>
                    <li>Categories:</li>
                    <li>Langs:</li>
                    <li>Variants:</li>
                </ul>
                <ul className={styles.right}>
                    <li>
                        <ul>{font.categories.map((value, index) => <li key={index}>{value}</li>)}</ul>
                    </li>
                    <li>
                        <ul>{font.langs.map((value, index) => <li key={index}>{value}</li>)}</ul>
                    </li>
                    <li>
                        <ul>{font.variants.map((value, index) => <li key={index}>{value}</li>)}</ul>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Variants:</h2>
                <div className={styles.variants}>
                    {font.variants.map((variant, index) => <FontCard font={font} variant={variant}
                        downloadLink={font.files[variant]}/>)}
                </div>
            </section>
        </main>
    )
}