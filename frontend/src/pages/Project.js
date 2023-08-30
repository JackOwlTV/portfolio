import React, { useState } from 'react'
import Cube from '../composants/Cube'
import Carrousel from '../composants/Carrousel'
import { projectList } from '../utils/projectList'

export default function Project() {
    const [activeBanner, setActiveBanner] = useState(0);

    const previousCover = () => {
        setActiveBanner((activeBanner - 1 + projectList.length) % projectList.length);
    }

    const nextCover = () => {
        setActiveBanner((activeBanner + 1) % projectList.length);
    }

    return (
        <div>
            <div className="cube">
                <Cube onClick={previousCover}
                    className={
                        projectList.length > 1
                            ? "fa-solid fa-stop"
                            : null
                    } />
                <Cube onClick={nextCover}
                    className={
                        projectList.length > 1
                            ? "fa-solid fa-stop"
                            : null
                    } />
            </div>

            <section>
                {projectList.map((project, index) => (
                    <Carrousel
                        className={`img-banner ${index === activeBanner ? "active-banner" : ""}`}
                        key={index}
                        cover={project.cover}
                    />
                ))}
            </section>
        </div>
    )
}
