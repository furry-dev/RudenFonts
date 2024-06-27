"use client"

import {useEffect} from "react"
import {getTheme} from "@/components/theme/themeUtils"


export function ThemeLoader() {
    useEffect(() => {
        document.documentElement.dataset.theme = getTheme()
    })
    return null
}