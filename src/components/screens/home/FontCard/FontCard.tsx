import styles from "./FontCard.module.sass"
import {FontCardProps} from "@/components/screens/home/FontCard/font-card.interfaces"

export default function FontCard({fontName, fontUrl, format}: FontCardProps) {
    const className = Math.floor((Math.random() * 100) + 1)

    const dynamicStyle = `
                @font-face {
                    font-family: "DynamicFont${className}";
                    src: url(${fontUrl}) format("${format}");
                }

                .${styles.text}.font${className} {
                    font-family: "DynamicFont${className}", sans-serif;
                }
                `

    return (
        <div className={styles.card}>
            <style dangerouslySetInnerHTML={{__html: dynamicStyle}}/>
            <div className={styles.bubble}>
                <p className={`${styles.text} font${className}`}>
                    В отличии<br/>
                    от Хомуры<br/>
                    и Хикари, Ния<br/>
                    не так часто <br/>
                    флиртует со<br/>
                    мной.
                </p>
            </div>
            <div className={styles.footer}>
                <h3 className={styles.name}>{fontName}</h3>
            </div>
        </div>
    )
}