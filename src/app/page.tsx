import Home from "@/components/screens/home/Home"
import {notFound} from "next/navigation"

import type {Metadata} from "next"

export const metadata: Metadata = {
    title: "...",
    description: "...",
}


async function fetchData() {
    try {
        const res = await fetch(process.env.API_URL + "/fonts", {
            method: "GET",
            next: {revalidate: 3600}
        })
        if (!res.ok) {
            return notFound()
        }
        return await res.json()
    } catch (e) {
        return notFound()
    }
}

export default async function HomePage() {
    const fonts = await fetchData()
    return <Home fonts={fonts}/>
}
