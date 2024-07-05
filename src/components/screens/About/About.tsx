import Image from "next/image"

import styles from "./About.module.sass"
import {useTranslations} from "next-intl"

export default function About() {
    const t = useTranslations("AboutMe")

    return (
        <main className={styles.main}>
            <section className={styles.authorInfo}>
                <Image src="/images/author-photo.jpg" alt="Фото Автора" width={300} height={400}/>
                <h2>{t("name")}</h2>
                <ul className={styles.links}>
                    <li><strong>{t("groupName")}:</strong> AFE_34</li>
                    <li><strong>{t("classRoom")}:</strong> <a
                        href="https://classroom.google.com/u/1/c/NjIxNzEzMDc0ODU2">classroom.google.com</a></li>
                    <li><strong>{t("gitProfile")}:</strong> <a
                        href="https://github.com/furry-dev/RudenFonts">github.com</a></li>
                    <li><strong>{t("trelloBoard")}:</strong> <a
                        href="https://trello.com/b/wMFV6yL3/rudenko-maksym-afe34-individual-project">trello.com</a></li>
                    <li><strong>{t("site")}:</strong> <a href="https://portal.ruden.pro">Ruden</a></li>
                </ul>
            </section>
            <section className={styles.bio}>
                <h2>Bio:</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus laborum odit voluptates. Adipisci
                    dolor, dolores error facere fugiat impedit nihil numquam praesentium quisquam temporibus! A ab
                    architecto aut consequatur debitis dolores eius error est excepturi fugit in iusto maxime, molestiae
                    mollitia nam necessitatibus neque obcaecati, odit pariatur perferendis praesentium, quibusdam quidem
                    reiciendis repudiandae tenetur totam ullam unde veniam veritatis voluptates. Debitis eius harum
                    iusto
                    nam odit possimus quibusdam quod quos sit! Debitis dolor facere pariatur rerum? Deserunt in quo
                    sapiente! A amet architecto aspernatur cumque cupiditate deserunt dicta doloribus dolorum eaque
                    libero
                    magni maxime necessitatibus nihil odio porro quaerat quia quo repellat reprehenderit sapiente, sequi
                    sunt suscipit tenetur vero voluptatibus! Commodi dolor ea eos facere harum in minus neque obcaecati
                    omnis pariatur, qui quis ratione recusandae sit ut? Accusamus aspernatur doloremque ducimus expedita
                    harum modi necessitatibus perferendis quasi quia quisquam. Beatae, iste molestiae. Alias architecto,
                    aspernatur assumenda aut blanditiis corporis dolor ducimus eos est exercitationem expedita facilis
                    id
                    impedit laboriosam minima nobis, nulla officia officiis perferendis perspiciatis praesentium
                    provident
                    quod, recusandae repellendus reprehenderit repudiandae sed sint sunt suscipit tempora tenetur velit
                    voluptatem voluptates. Architecto, enim esse fugiat laboriosam nesciunt nihil officiis quo!
                    Accusamus
                    asperiores beatae commodi debitis dolor dolorem eaque, earum eius error et excepturi expedita fugit
                    in
                    iusto laborum libero obcaecati quasi quia quidem quis sunt voluptate voluptates? A accusamus
                    deserunt
                    dolores enim mollitia nesciunt nulla quia? Aspernatur consequatur error eveniet facilis maxime nisi
                    pariatur reiciendis repudiandae sunt? Consequatur est et temporibus voluptates voluptatum!
                </p>
            </section>
        </main>
    )
}