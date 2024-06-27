import type {Metadata} from "next"
import {Open_Sans} from "next/font/google"
import "./globals.sass"
import React from "react"

import Navigation from "@/components/basic/Layouts/Navigation/Navigation"
import {Toaster} from "react-hot-toast"
import {ThemeLoader} from "@/components/theme/ThemeLoader"
import Header from "@/components/basic/Layouts/Header/Header"
import Footer from "@/components/basic/Layouts/Footer/Footer"

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
                <Footer/>
                <Navigation/>
                <ThemeLoader/>
            </body>
        </html>
    )
}
