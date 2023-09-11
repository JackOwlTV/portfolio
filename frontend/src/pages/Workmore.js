import React from 'react'
import Logo from '../images/http.svg'
import ParagraphWork from '../composants/ParagraphWork'
import '../styles/composants/paragraph_work.css'


export default function Workmore() {
    return (
        <section className='work'>
            <div className="title">
                <img src={Logo} alt="Logo HTTP" />
                <h3 className='dev'>Développeur Web</h3>
            </div>
            <ParagraphWork
                Paragraph="Pendant un an, j'ai eu le privilège de travailler au sein de l'entreprise HTTP en tant que développeur web. Mon rôle au sein de cette entreprise était de mettre en œuvre mes compétences en utilisant la technologie Jython et en exploitant un CMS nommé Ignition. HTTP était une entreprise spécialisée dans l'automatisation des systèmes de chauffage et de ventilation industriels, un domaine passionnant qui nécessitait une expertise technique pointue.Ma mission principale consistait à collecter des données provenant de différents systèmes industriels et à les présenter de manière claire et conviviale sur une interface web de supervision. Cela impliquait de travailler en étroite collaboration avec d'autres départements de l'entreprise pour comprendre les besoins spécifiques de chaque projet. Cette expérience m'a permis de développer des compétences essentielles en matière de résolution de problèmes et de compréhension des besoins des clients. Travailler en alternance chez HTTP m'a également permis de me familiariser avec l'environnement professionnel. J'ai appris à gérer mon temps de manière efficace, à respecter des délais serrés et à être autonome dans la gestion de projets. Cette expérience m'a aidé à développer ma capacité à travailler de manière indépendante tout en étant un membre actif de l'équipe. Un aspect notable de mon expérience chez HTTP a été l'opportunité de travailler dans un open space. Cette approche favorise la communication et la collaboration au sein de l'entreprise. Travailler dans un environnement ouvert m'a permis d'interagir facilement avec mes collègues, de partager des idées et de résoudre des problèmes ensemble de manière efficace. Enfin, l'une des choses les plus précieuses que j'ai retirées de mon temps chez HTTP est la chaleur et la cohésion de l'équipe. J'ai eu la chance de travailler aux côtés de collègues dévoués et talentueux qui étaient toujours prêts à partager leurs connaissances et à offrir leur soutien. Cette ambiance conviviale a rendu mon expérience de travail d'autant plus enrichissante. Dans l'ensemble, mon passage en tant que développeur web chez HTTP a été une expérience inestimable. J'ai acquis des compétences techniques et professionnelles précieuses, tout en ayant la chance de travailler dans un environnement stimulant et convivial. Cela a renforcé ma passion pour le développement web et m'a préparé à relever de nouveaux défis passionnants dans ma carrière."
                button="_website"
                link="https://httproject.fr/"
            />
        </section>
    )
}
