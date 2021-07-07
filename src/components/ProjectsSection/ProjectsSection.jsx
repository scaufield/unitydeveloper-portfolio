import React from 'react';
import './ProjectsSection.scss';
import ProjectCard from './ProjectCard/ProjectCard';
import StudioProject from './StudioProject/StudioProject';
import {projectCard, studioProject} from "../../database";

const ProjectsSection = () => {
    return (

        <section className="container about section-spacing">
            <div className="display-bold">Личные проекты</div>
            <div className='mt-3 subtitle-text'> Я разработчик и издатель игр и приложений для мобильных устройств. Всё
                это происходит на игровом движке Unity на языке программирования C#.
                Разрабатываю проекты самостоятельно, а также в составе студий.
                Также создавал приложения для ВУЗа, которые использовались на различных мероприятиях.
            </div>
            <section className='cards__wrapper'>

                <div className='cards__items'>

                    {projectCard.map((n, i) => (
                        <ProjectCard item={n}/>
                    ))}
                </div>

                <section className="container  section-spacing">
                    <div className="display-bold">Проекты в составе студий</div>
                    <div className="row">
                        {studioProject.map((n, i) => (
                            <StudioProject key={i} item={n}/>
                        ))}
                    </div>
                </section>

            </section>
        </section>

    );
}

export default ProjectsSection;
