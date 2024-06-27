import FontCard from "@/components/screens/home/FontCard/FontCard"
import styles from "./Home.module.sass"

export default function Home() {
    return (
        <main className={styles.main}>
            {[...Array(10)].map((_, index) => (
                <FontCard
                    key={index}
                    fontName={"Pacifico"}
                    fontUrl={"https://fonts.gstatic.com/s/pacifico/v22/FwZY7-Qmy14u9lezJ-6D6MmTpA.woff2"}
                    format={"woff2"}
                ></FontCard>
            ))}
        </main>
    )
}