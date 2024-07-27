import type {Metadata} from "next"
import {Open_Sans} from "next/font/google"
import "./globals.sass"
import React from "react"

import Navigation from "@/components/basic/Layouts/Navigation/Navigation"
import {Toaster} from "react-hot-toast"
import Header from "@/components/basic/Layouts/Header/Header"
import Footer from "@/components/basic/Layouts/Footer/Footer"
import {getLocale, getMessages} from "next-intl/server"
import {NextIntlClientProvider} from "next-intl"

const openSans = Open_Sans({subsets: ["cyrillic", "latin"]})

export const metadata: Metadata = {
    title: "Ruden - Manga",
    description: "Сайт для чтения манг",
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale()

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages()

    return (
        <html lang={locale} data-theme={"dark"}>
            <body className={openSans.className}>
                <NextIntlClientProvider messages={messages}>
                    <Toaster/>
                    <Header/>
                    {children}
                    <Footer/>
                    <Navigation/>
                    {/*<ThemeLoader/>*/}
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
