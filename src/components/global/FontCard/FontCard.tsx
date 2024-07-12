"use client"

import styles from "./FontCard.module.sass"
import {FontCardProps} from "@/components/global/FontCard/font-card.interfaces"
import React, {useEffect, useRef, useState} from "react"
import {FontVariants} from "@/types/font.interfaces"
import Link from "next/link"
import {faDownload} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {useTranslations} from "next-intl"

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

export default function FontCard({font, variant, link, downloadLink}: FontCardProps) {
    const [fontVariant, setFontVariant] = useState<FontVariants>(variant || Object.keys(font.files)[0] as FontVariants)
    const [fontSize, setFontSize] = useState(13)

    const containerRef = useRef<HTMLParagraphElement>(null)

    const t = useTranslations()

    const fileUrl = font.files[fontVariant]!
    const fileFormat = getFontFormat(fileUrl)

    useEffect(() => {
        const handleResize = () => {
            const cardSize = containerRef.current?.clientHeight
            if (!cardSize) return
            setFontSize(cardSize / 3 / 6) // 1/3 высоты контейнера и текст содержит 6 строк
        }
        window.addEventListener("resize", handleResize)
        handleResize()
    })

    const className = Math.floor((Math.random() * 100000) + 1)

    const dynamicStyle = /*css*/`
        @font-face {
            font-family: "DynamicFont${className}";
            src: url("${fileUrl}") ${fileFormat ? `format("${fileFormat}")` : ""};
        }

        .${styles.text}.font${className} {
            font-family: "DynamicFont${className}", sans-serif;
            font-size: ${fontSize * font.sizeCoeff}px;
        }
        
        .${styles.text}.font${className} .sound1 {
            font-size: ${fontSize * font.sizeCoeff * 2.5}px;
        }
        
        .${styles.text}.font${className} .sound2 {
            font-size: ${fontSize * font.sizeCoeff * 3}px;
        }
        
        .${styles.text}.font${className} .sound3 {
            font-size: ${fontSize * font.sizeCoeff * 2}px;
        }
    `

    const content = (
        <>
            <style dangerouslySetInnerHTML={{__html: dynamicStyle}}/>
            {downloadLink &&
                <Link href={downloadLink} className={styles.downloadBtn}><FontAwesomeIcon icon={faDownload}
                    className={styles.icon}/></Link>}
            {!variant && <select className={styles.variantSelect} defaultValue={Object.keys(font.files)[0]}
                onChange={e => setFontVariant((e.target.value) as FontVariants)}
                onClick={e => e.preventDefault()}
            >
                {Object.keys(font.files).map(variant => <option key={variant} value={variant}>{variant}</option>)}
            </select>}
            <div className={styles.bubble}
                style={{background: `url("/images/${font.categories[0]}.png") center center / cover no-repeat`}}>
                <p className={`${styles.text} font${className}`} ref={containerRef}
                    dangerouslySetInnerHTML={{__html: t.raw(`FontPreview.${font.categories[0]}`)}}></p>
            </div>
            <div className={styles.footer}>
                <h3 className={styles.name}>{font.family}</h3>
                {variant && <a className={styles.variant}>{variant}</a>}
            </div>
        </>
    )

    return (
        <>
            {link ?
                <Link draggable={false} href={link || "#"} className={styles.card}>{content}</Link> :
                <div draggable={false} className={styles.card}>{content}</div>
            }
        </>
    )
}