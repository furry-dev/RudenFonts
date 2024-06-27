import type {Metadata} from "next"
import {Open_Sans} from "next/font/google"
import "./globals.sass"
import React from "react"

import Navigation from "@/components/basic/Layouts/Navigation"
import {Toaster} from "react-hot-toast"
import {ThemeLoader} from "@/components/theme/ThemeLoader"
import Header from "@/components/basic/Layouts/Header"

const openSans = Open_Sans({subsets: ["cyrillic", "latin"]})

export const metadata: Metadata = {
    title: "Ruden - Manga",
    description: "Сайт для чтения манг",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" data-theme={"dark"}>
            <body className={openSans.className}>
                <Toaster/>
                <Header/>
                {children}
                <Navigation/>
                <ThemeLoader/>
            </body>
        </html>
    )
}
