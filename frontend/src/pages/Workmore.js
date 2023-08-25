import React from 'react'
import Logo from '../images/http.svg'
import Paragraph from '../composants/Paragraph_work'
import '../styles/composants/paragraph_work.css'


export default function Workmore() {
    return (
        <section className='work'>
            <div className="title">
                <img src={Logo} alt="Logo HTTP" />
                <h3 className='dev'>Développeur Web</h3>
            </div>
            <Paragraph
                Paragraph="Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.

            Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna."
                button="_website"
                link="https://httproject.fr/"
            />
        </section>
    )
}
