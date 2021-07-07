import React from "react";
import "./AboutSection.scss";
import {aboutPage} from "../../database";

function AboutSection() {
    return (
        <section className="container about section-spacing">
            <div className="row about__block">
                <div className="content-left mt-spacing col-md-3 ">
                    <img
                        className="content-left__image"
                        src="img/avatar.jpg"
                        alt="Главное фото"
                    />
                    <div className="display-bold">John Doe</div>
                    <h3 className="display-medium">Russia. Moscow</h3>
                    <b className="subtitle-text">26.05.2000 (20)</b>
                </div>
                <div className="content-right mt-spacing col-md-8">
                    <div className="about-icon">
                        <div className="_icon-quotes fa-3x"/>
                    </div>
                    <div className="content-right__text text-small">
                        {" "}
                        {aboutPage.info}
                    </div>
                </div>
            </div>

            <div className="row about__block ">

                <div className="about-item mt-spacing col-md-5 mr-5 ">
                    <div className="about-icon">
                        <div className="_icon-book fa-2x"/>
                    </div>
                    <div className="about-item__content">
                        <h4 className="heading">Образование</h4>
                        <div className="text-small"> {aboutPage.education}</div>
                    </div>
                </div>
                <div className="about-item  mt-spacing col-md-6 ">
                    <div className="about-item__content">
                        <div className="about-info">
                            <div className="about-info__text-bold">ВУЗ:</div>
                            <div className="about-info__text">
                                Московский Университет
                            </div>
                        </div>
                        <div className="about-info">
                            <div className="about-info__text-bold">
                                Годы обучения:
                            </div>
                            <div className="about-info__text">
                                2018 – н.в. (бакалавриат до 2022)
                            </div>
                        </div>
                        <div className="about-info">
                            <div className="about-info__text-bold">
                                Факультет:
                            </div>
                            <div className="about-info__text">
                                Институт информационных технологий
                            </div>
                        </div>
                        <div className="about-info">
                            <div className="about-info__text-bold">
                                Специальность:
                            </div>
                            <div className="about-info__text">
                                09.03.02 Информационные системы и технологии
                            </div>
                        </div>
                        <div className="about-info">
                            <div className="about-info__text-bold">
                                Специализация:
                            </div>
                            <div className="about-info__text">
                                Технологии дополненной реальности
                                в медиаиндустрии
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row about__block ">
                <div className="about-item mt-spacing col-md-5 mr-5">
                    <div className="about-icon">
                        <div className="_icon-discovery fa-2x"/>
                    </div>
                    <div className="about-item__content">
                        <h4 className="heading">Контакты</h4>
                        <div className="about-info">
                            <div className="about-info__text-bold">Email</div>
                            <div className="about-info__text">
                                {aboutPage.email}
                            </div>
                        </div>
                        <div className="about-info">
                            <div className="about-info__text-bold">Телефон</div>
                            <div className="about-info__text">
                                {aboutPage.phone}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-item mt-spacing  col-md-5">
                    <div className="mt-5 about-item__content-social">


                        <a className="about-info__icon" href={aboutPage.vk}>
                            <div className="_icon-vk-circle fa-2x"/>
                        </a>


                        <a className="about-info__icon" href={aboutPage.linkedin}>
                            <div className="_icon-linkedin_white fa-2x"/>
                        </a>


                        <a className="about-info__icon" href={aboutPage.telegram}>
                            <div className="_icon-telegram-circle fa-2x"/>
                        </a>


                        <a className="about-info__icon" href={aboutPage.github}>
                            <div className="_icon-github-circle-white fa-2x"/>
                        </a>


                        <a className="about-info__icon" href={aboutPage.skype}>
                            <div className="_icon-skype-circle fa-2x"/>
                        </a>

                    </div>
                </div>

            </div>
        </section>

    );
}

export default AboutSection;
