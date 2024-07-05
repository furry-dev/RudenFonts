"use client"

import styles from "./FontCard.module.sass"
import {FontCardProps} from "@/components/screens/home/FontCard/font-card.interfaces"
import React, {useState} from "react"
import {FontVariants} from "@/types/font.interfaces"

function getFontFormat(fontUrl: string): string | undefined {
    const extension = fontUrl.split(/[#?]/)[0].split(".").pop()?.trim().toLowerCase()

    switch (extension) {
    case "woff":
        return "woff"
    case "woff2":
        return "woff2"
    case "ttf":
        return "truetype"
    case "otf":
        return "opentype"
    case "eot":
        return "embedded-opentype"
    case "svg":
        return "svg"
    default:
        return undefined
    }
}

export default function FontCard({font}: FontCardProps) {
    const [variant, setVariant] = useState<FontVariants>(font.variants[0])
    const fileUrl = font.files[variant]!
    const fileFormat = getFontFormat(fileUrl)

    const className = Math.floor((Math.random() * 100) + 1)

    const dynamicStyle = `
                @font-face {
                    font-family: "DynamicFont${className}";
                    src: url("${fileUrl}") format("${fileFormat}");
                }

                .${styles.text}.font${className} {
                    font-family: "DynamicFont${className}", sans-serif;
                    font-size: ${18 * font.sizeCoeff}px
                }
                `

    return (
        <div className={styles.card}>
            <style dangerouslySetInnerHTML={{__html: dynamicStyle}}/>
            <select className={styles.variantSelect} defaultValue={font.variants[0]}
                onChange={e => setVariant((e.target.value) as FontVariants)}>
                {font.variants.map(variant => <option key={variant} value={variant}>{variant}</option>)}
            </select>
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
                <h3 className={styles.name}>{font.family}</h3>
            </div>
        </div>
    )
}