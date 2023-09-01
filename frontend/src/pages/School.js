import React from 'react'
import '../styles/page/school.css'
import ParagraphSchool from '../composants/ParagraphSchool'
import { NavLink } from 'react-router-dom'

export default function School() {
    return (
        <section className="about">

            <div className="title">
                <NavLink to={"https://openclassrooms.com/fr/"}>
                    <h2>OPENCLASSROOMS</h2>
                </NavLink>
                <h3>Développeur Web</h3>
            </div>

            <ParagraphSchool
                Paragraph={"Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus"}
                link={"https://openclassrooms.com/fr/paths/717-developpeur-web"}
                button={"_more"}
            />

        </section>
    )
}
