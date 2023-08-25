import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getProjects } from '../composants/lib/common';
import ProjectBanner from '../composants/ProjectBanner';
import Cube from '../composants/Cube';
import '../styles/page/project.css';


export default function Project() {

    const [projects, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getProjectsList() {
            const data = await getProjects();
            if (data) {
                setProject(data);
                setLoading(false);
            }
        }
        getProjectsList();
    }, []);

    const { id } = useParams();
    const project = projects.find((project) => project.id === id);

    const [activeBanner, setActiveBanner] = useState(0);

    const NextBanner = () => {
        if (activeBanner === project.pictures.length - 1) {
            setActiveBanner(0);
        } else {
            setActiveBanner(activeBanner + 1)
        }
    }

    const PreviousBanner = () => {
        if (activeBanner === project.pictures.length - 1) {
            setActiveBanner(0);
        } else {
            setActiveBanner(activeBanner - 1)
        }
    }


    return (

        <main className={"project-banner"}>
            <header className='project-cube'>
                <Cube
                    onClick={PreviousBanner}
                    className={
                        project.pictures.length > 1
                            ? "fa-solid fa-stop"
                            : null
                    }
                />
                <Cube
                    onClick={NextBanner}
                    className={
                        project.pictures.length > 1
                            ? "fa-solid fa-stop"
                            : null
                    }
                />

                <Cube
                    onClick={NextBanner}
                    className={
                        project.pictures.length > 1
                            ? "fa-solid fa-stop"
                            : null
                    }
                />

                <Cube
                    onClick={NextBanner}
                    className={
                        project.pictures.length > 1
                            ? "fa-solid fa-stop"
                            : null
                    }
                />

            </header>
            {project.pictures.map((e, index) => (
                <ProjectBanner
                    className={`img-banner ${index === activeBanner ? "active-banner" : ""}`}
                    key={index}
                    imgSrc={e}
                    title={`${project.title} - Bannière n°${activeBanner + 1}`}
                />
            ))}

        </main>)
}
