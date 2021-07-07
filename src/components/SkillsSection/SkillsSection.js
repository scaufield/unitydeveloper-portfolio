import React from 'react';
import './SkillsSection.scss';
import SkillsTabs from './SkillsTabs/SkillsTabs'
import SkillsSlider from "./SkillsSlider/SkillsSlider";
import {skillTabs} from "../../database";

function SkillsSection() {
    return (
        <section className="container-lg skills section-spacing">
            <div className="row">
                <div className="col-md-12">
                    <div className="display-bold">Навыки</div>
                    <SkillsTabs items={skillTabs}/>
                </div>
            </div>

            <div className="section-spacing">
                <div className="display-bold">Достижения</div>
                <SkillsSlider/>
            </div>
        </section>
    );
}

export default SkillsSection;
