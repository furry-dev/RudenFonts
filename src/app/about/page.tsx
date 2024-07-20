import About from "@/components/screens/About/About"

import type {Metadata} from "next"
import {getTranslations} from "next-intl/server"


export async function generateMetadata({params: {locale}}: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations(locale)

    const bioParagraphs = t.raw("AboutMe.Bio").split("</p>")
    const description = bioParagraphs[0].split("<p>")[1]

    return {
        title: t("AboutMe.Name"),
        description,
    }
}

export default function AboutPage() {
    return <About/>
}