import Font from "@/components/screens/Font/Font"
import {notFound} from "next/navigation"

interface pageParams {
    params: {
        font: string
    }
}

async function fetchData(fontName: string) {
    try {
        const res = await fetch(process.env.API_URL + "/fonts/" + fontName, {
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

export default async function FontPage({params}: pageParams) {
    const font = await fetchData(params.font)
    console.log(params.font)
    return <Font font={font}/>
}