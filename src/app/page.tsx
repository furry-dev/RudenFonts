import Home from "@/components/screens/home/Home"

async function fetchData() {
    const res = await fetch(process.env.API_URL + "/font", {
        method: "GET",
        next: {revalidate: 3600}
    })
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    return await res.json()
}

export default async function HomePage() {
    const fonts = await fetchData()
    return <Home fonts={fonts}/>
}
