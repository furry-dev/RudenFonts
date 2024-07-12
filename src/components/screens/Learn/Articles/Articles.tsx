import {useTranslations} from "next-intl"
import {Link, Route, Routes} from "react-router-dom"
import React from "react"

import styles from "./Articles.module.sass"

const startLinks = [
    {name: "Learn.Start.Page1.name", content: "Learn.Start.Page1.content"},
    {name: "Learn.Start.Page2.name", content: "Learn.Start.Page2.content"}
]

export default function Articles({category}: { category: "start" | "clean" | "type" | "translate" }) {
    const articles = startLinks

    const t = useTranslations()

    return (
        <div className={styles.articles}>
            <nav>
                <ul>
                    {articles.map((article) => (
                        <li key={article.name}>
                            <Link
                                className={"underline"}
                                to={`/learn/${category}/${t(article.name)}`}
                            >
                                {t(article.name)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <Routes>
                {articles.map((article, index) => {
                    const nextArticle = articles[index + 1]
                    const prewArticle = articles[index - 1]
                    return (
                        <Route
                            key={article.content}
                            path={index === 0 ? "*" : `/learn/${category}/${t(article.name)}`}
                            element={(
                                <div className={styles.right}>
                                    <div
                                        className={styles.content}
                                        dangerouslySetInnerHTML={{__html: t.raw(article.content)}}
                                    />
                                    <div className={styles.links}>
                                        {prewArticle &&
                                            <Link
                                                to={`/learn/${category}/${t(prewArticle?.name)}`}
                                                className={`underline ${styles.back}`}
                                            >
                                                Back
                                            </Link>}
                                        {nextArticle &&
                                            <Link
                                                to={`/learn/${category}/${t(nextArticle?.name)}`}
                                                className={`underline ${styles.next}`}
                                            >
                                                Next
                                            </Link>}
                                    </div>
                                </div>
                            )}/>
                    )
                })}
            </Routes>
        </div>
    )
}