import React from "react";
import "./HeroSection.scss";

export function HeroSection() {
    return (
        <>
            <section className="container hero">
                <div className="hero__text">
                    Приветствую, Меня зовут John Doe!
                    <div className="primary-color">Я Unity-разработчик!</div>
                </div>
                <img className="hero__image" src="img/hero-items.png"/>
            </section>
        </>
    );
}

