import styles from "./LocaleSelect.module.sass"
import React, {useEffect, useRef} from "react"
import {getCookie, setCookie} from "cookies-next"

export default function LocaleSelect() {
    const selectRef = useRef<HTMLSelectElement>(null)

    const changeLocaleHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCookie("lang", e.target.value)
        if (window) window.location.reload()
    }

    useEffect(() => {
        const select = selectRef.current
        if (select) select.value = getCookie("lang") as string
    }, [])

    return (
        <select className={styles.langSelect} onChange={changeLocaleHandler} ref={selectRef}>
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="uk">UK</option>
        </select>
    )
}