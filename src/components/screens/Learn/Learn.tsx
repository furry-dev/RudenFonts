"use client"

import React from "react"
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"

import styles from "./Learn.module.sass"
import Articles from "@/components/screens/Learn/Articles/Articles"
import {useTranslations} from "next-intl"

export default function Learn() {
    const t = useTranslations("Learn")

    return (
        <main className={styles.main}>
            <Router>
                <nav className={styles.navigation}>
                    <h4>{t("selectCategory")}</h4>
                    <ul>
                        <li>
                            <Link className={"underline"} to={"/learn"}>{t("start")}</Link>
                        </li>
                        <li>
                            <Link className={"underline"} to={"/learn/clean"}>{t("clean")}</Link>
                        </li>
                        <li>
                            <Link className={"underline"} to={"/learn/type"}>{t("type")}</Link>
                        </li>
                        <li>
                            <Link className={"underline"} to={"/learn/translate"}>{t("translate")}</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Routes>
                        <Route path="/learn/clean" element={<h1>Clean</h1>}/>
                        <Route path="/learn/type" element={<h1>Type</h1>}/>
                        <Route path="/learn/translate" element={<h1>Translate</h1>}/>
                        <Route path="*" element={<Articles category={"start"}/>}/>
                    </Routes>
                </div>
            </Router>
        </main>
    )
}