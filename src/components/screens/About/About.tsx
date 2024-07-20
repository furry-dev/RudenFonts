import Image from "next/image"

import styles from "./About.module.sass"
import {useTranslations} from "next-intl"

export default function About() {
    const t = useTranslations()

    return (
        <main className={styles.main}>
            <section className={styles.authorInfo}>
                <Image src="/images/author-photo.jpg" alt="Фото Автора" width={300} height={400}/>
                <h2>{t("AboutMe.Name")}</h2>
                <ul className={styles.links}>
                    <li><strong>{t("AboutMe.GroupName")}:</strong> AFE_34</li>
                    <li><strong>{t("AboutMe.ClassRoom")}:</strong> <a
                        href="https://classroom.google.com/u/1/c/NjIxNzEzMDc0ODU2">classroom.google.com</a></li>
                    <li><strong>{t("AboutMe.GitProfile")}:</strong> <a
                        href="https://github.com/furry-dev/RudenFonts">github.com</a></li>
                    <li><strong>{t("AboutMe.TrelloBoard")}:</strong> <a
                        href="https://trello.com/b/wMFV6yL3/rudenko-maksym-afe34-individual-project">trello.com</a></li>
                    <li><strong>{t("AboutMe.Site")}:</strong> <a href="https://portal.ruden.pro">Ruden</a></li>
                </ul>
            </section>
            <section className={styles.bio}>
                <h2>Bio:</h2>
                <div dangerouslySetInnerHTML={{__html: t.raw("AboutMe.Bio")}}></div>
            </section>
        </main>
    )
}