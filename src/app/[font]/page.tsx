import Font from "@/components/screens/Font/Font"

interface pageParams {
    params: {
        font: string
    }
}

async function fetchData(fontName: string) {
    const res = await fetch(process.env.API_URL + "/fonts/" + fontName, {
        method: "GET",
        next: {revalidate: 3600}
    })
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    return await res.json()
}

export default async function FontPage({params}: pageParams) {
    const font = await fetchData(params.font)
    console.log(params.font)
    return <Font font={font}/>
}