import React, { useState } from 'react'
import Tag from '../composants/Tag'
import Banner from '../composants/Banner'
import Arrow from '../composants/Arrow'
import Description from '../composants/Description'
import { projectList } from "../utils/projectList"
import { useParams } from 'react-router-dom'


export default function Oneproject() {
    const { id } = useParams();
    const project = projectList.find((project) => project.id === id);
    const [activeBanner, setActiveBanner] = useState(0);
    const [descriptionActive, setDescriptionActive] = useState(0);

    const previousBanner = () => {
        if (activeBanner === 0) {
            setActiveBanner(project.pictures.length - 1);
        } else {
            setActiveBanner(activeBanner - 1);
        }
    }

    const nextBanner = () => {
        if (activeBanner === project.pictures.length - 1) {
            setActiveBanner(0);
        } else {
            setActiveBanner(activeBanner + 1);
        }
    }

    const toggleDescription = () => {
        setDescriptionActive(!descriptionActive);
    };

    return (
        <div>
            <div className="project-banner">
                <div className="arrows-banner-zone">
                    <Arrow
                        onClick={previousBanner}
                        className={
                            project.pictures.length > 1
                                ? "arrow-left fa-solid fa-chevron-up"
                                : null
                        }
                    />
                    <Arrow
                        onClick={nextBanner}
                        className={
                            project.pictures.length > 1
                                ? "arrow-right fa-solid fa-chevron-up"
                                : null
                        }
                    />
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
                <div className="decription" onClick={toggleDescription} >
                    <span>Description</span>
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
