import React from 'react'
import '../styles/page/school.css'
import ParagraphSchool from '../composants/ParagraphSchool'
import { NavLink } from 'react-router-dom'

export default function School() {
    return (
        <section className="about">

            <div className="title school">
                <NavLink to={"https://openclassrooms.com/fr/"}>
                    <h2>OPENCLASSROOMS</h2>
                </NavLink>
                <h3>Développeur Web</h3>
            </div>

            <ParagraphSchool
                Paragraph={"Pendant la période de novembre 2022 à novembre 2023, j'ai entrepris un voyage exceptionnel de transformation en suivant la formation \"Développeur Web\" proposée par OpenClassrooms. Avec des connaissances limitées en HTML, CSS et JavaScript au départ, cette formation s'est révélée être une ressource inestimable pour mon développement professionnel.\n\nLa formation s'articule autour de plusieurs projets significatifs, chacun contribuant à renforcer mes compétences de manière progressive. J'ai commencé par apprendre à créer des pages web en utilisant HTML et CSS, puis j'ai plongé dans l'art de les dynamiser grâce à JavaScript. J'ai également acquis les compétences nécessaires pour récupérer des données à partir de backends et d'API, ce qui m'a permis de créer des applications web interactives et réactives.\n\nAu-delà de la technique, j'ai développé ma capacité à résoudre des problèmes complexes et à penser de manière logique. J'ai également exploré le monde du référencement (SEO) et de l'optimisation de sites web, des compétences essentielles pour garantir que les sites que je crée soient visibles et performants sur le web.\n\nDurant cette formation enrichissante, j'ai eu la chance d'être guidé par un développeur sénior dévoué qui a partagé son expertise et son expérience tout au long de mon parcours. Cette approche d'apprentissage pratique et personnalisée a été inestimable pour mon développement professionnel.\n\nJ'ai suivi cette formation en alternance au sein de l'entreprise HTTP Project, ce qui m'a permis de mettre en pratique mes compétences dans un environnement professionnel réel et d'acquérir une expérience précieuse.\n\nSi vous cherchez un développeur web passionné et compétent pour votre prochain projet, n'hésitez pas à me contacter. Mon parcours de formation chez OpenClassrooms m'a préparé à relever les défis les plus exigeants de l'univers du développement web."}
                link={"https://openclassrooms.com/fr/paths/717-developpeur-web"}
                button={"_more"}
            />

        </section>
    )
}
