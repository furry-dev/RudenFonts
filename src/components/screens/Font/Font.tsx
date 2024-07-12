import {FontPageProps} from "@/components/screens/Font/font.interfaces"
import FontCard from "@/components/global/FontCard/FontCard"

import styles from "./Font.module.sass"
import {FontVariants} from "@/types/font.interfaces"

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
                        <ul>{Object.keys(font.files).map((value, index) => <li key={index}>{value}</li>)}</ul>
                    </li>
                </ul>
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