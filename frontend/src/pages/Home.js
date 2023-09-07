import React from 'react'
import Paragraph from '../composants/Paragraph'
import Images from '../images/personne.png'
import '../styles/page/home.css'

export default function Home() {
    return (

        <section>

            <div>

                <img src={Images} alt="Illustration de Dylan" className='illustration' />

            </div>

            <Paragraph
                Paragraph={"Bonjour, je suis Dylan, un passionné avant tout. Ma première passion, le graphisme, m'a conduit sur un chemin d'apprentissage autodidacte, principalement grâce à Internet, où YouTube est devenu mon meilleur ami. Aujourd'hui, je suis un développeur front-end junior, avide de défis et constamment avide d'apprendre.\n\nDepuis le début de mes études, je suis fier d'appeler Nantes ma maison, mais je suis tout aussi ouvert à de nouvelles aventures, peu importe où elles me mènent, même jusqu'à Mars. Mon parcours unique et ma soif de connaissances me permettent de créer des expériences web exceptionnelles. Explorez mon portfolio pour découvrir comment je combine ma passion pour le graphisme avec mes compétences en développement front-end pour donner vie à des projets exceptionnels.\n\nPrêt à collaborer sur de nouveaux projets passionnants ? N'hésitez pas à me contacter !"}
                link={"https://www.linkedin.com/in/dylan-vivant/"}
                button={"_linkedin"}
            />

        </section>


    )
}
