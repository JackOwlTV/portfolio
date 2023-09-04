import React from 'react'
import Paragraph from '../composants/Paragraph'
import Images from '../images/personne.png'
import '../styles/page/home.css'

export default function Home() {
    return (

        <section>

            <div>

                <img src={Images} alt="Illustration de Dylan" className='illustration'/>

            </div>

            <Paragraph
                Paragraph={"Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus"}
                link={"https://www.linkedin.com/in/dylan-vivant/"}
                button={"_linkedin"}
            />

        </section>


    )
}
