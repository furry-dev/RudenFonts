import FontCard from "@/components/screens/home/FontCard/FontCard"
import styles from "./Home.module.sass"

import {Font} from "@/types/font.interfaces"

export default function Home({fonts}: { fonts: Font[] }) {
    return (
        <main className={styles.main}>
            {fonts.map((font, index) => {
                return (
                    <FontCard
                        key={index}
                        font={font}
                        link={`/${font.family}`}
                    ></FontCard>
                )
            })}
        </main>
    )
}