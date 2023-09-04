import React, { useState, useEffect, useRef  } from 'react'
import Tag from '../composants/Tag'
import Banner from '../composants/Banner'
import Description from '../composants/Description'
import '../styles/page/oneproject.css'
import { projectList } from "../utils/projectList"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';





export default function Oneproject() {
    const { id } = useParams();
    const project = projectList.find((project) => project.id === id);
    const [activeBanner, setActiveBanner] = useState(0);
    const [descriptionActive, setDescriptionActive] = useState(0);
    const picturesLengthRef = useRef(project.pictures.length);



    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       // Calcul de l'indice de l'image suivante
    //       const nextIndex = (activeBanner + 1) % project.pictures.length;
    //       setActiveBanner(nextIndex);
    //     }, 7000); // Change d'image toutes les 5 secondes (5000 millisecondes)

    //     return () => {
    //       // Nettoie l'intervalle lorsque le composant est démonté
    //       clearInterval(interval);
    //     };
    //   }, [activeBanner]);

    useEffect(() => {
        picturesLengthRef.current = project.pictures.length;
      }, [project.pictures.length]);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setActiveBanner((prevActiveBanner) => (prevActiveBanner + 1) % picturesLengthRef.current);
        }, 7000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

    const toggleDescription = () => {
        setDescriptionActive(!descriptionActive);
    };

    return (
        <div>
            <div className="project-banner">
                <div className="link">
                    <div className='icon-block'>
                        <Link to={project.link.github} >
                            <FontAwesomeIcon icon={faGithub} className='icon-link' />
                        </Link>
                    </div>

                    <div className='icon-block'>
                        <Link to={project.link.website}>
                            <FontAwesomeIcon icon={faLink} className='icon-link' />
                        </Link>
                    </div>

                </div>

                {project.pictures.map((e, index) => (
                    <Banner
                        className={`img-banner ${index === activeBanner ? "active-banner" : ""}`}
                        key={index}
                        imgSrc={e}
                        title={`${project.title} - Bannière n°${activeBanner + 1}`}
                    />
                ))}
                <span className="counter">
                    {project.pictures.length > 1
                        ? `${activeBanner + 1}/${project.pictures.length}`
                        : null}
                </span>
            </div>
            <div className="description-zone">
                <div className={descriptionActive ? 'description active' : 'description'} onClick={toggleDescription} >
                    <span>_description</span>
                </div>
                <div className="tag-zone">
                    {project.tags.map((e, index) => (
                        <Tag key={index} tag={e} />
                    ))}
                </div>
            </div>
            <Description class={descriptionActive ? 'active-description' : 'hidden'} description={project.description} />



        </div>
    )
}
