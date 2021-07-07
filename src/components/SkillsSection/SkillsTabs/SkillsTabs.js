import React from "react";
import "./SkillsTabs.scss";
import {useState} from "react";


const TabContent = ({title, subtitle, content}) => (
    <div className="col-md-8 col-lg-9">
        <div className="tabcontent">
            <div className="tabcontent__title display-bold">{title}</div>
            <ul className="text-small">
                {" "}
                {content.map((n, i) => (
                    <li className="tabcontent__text">
                        <i className="fa-xs _icon-arrow-right mr-3"></i>
                        {n.skill}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

function SkillsTabs({items}) {
    const [active, setActive] = useState(0);
    const openTab = (e) => setActive(+e.target.dataset.index);

    return (
        <div className="row mt-5">
            <div className="col-md-4 col-lg-3">
                <div className="skills-left">
                    <div className="tab c-white">
                        {items.map((n, i) => (
                            <>
                                <h4 key={i}
                                    className={`tab-elem ${
                                        i === (active) ? "active" : ""
                                    }`}
                                    onClick={openTab}
                                    data-index={i}
                                >
                                    <i className={n.icon}></i>
                                    {n.title}{" "}
                                </h4>
                            </>
                        ))}
                    </div>


                    <div className="cv-card mt-md-4">
                        <div className="cv-card__body">
                            <div className="cv-card__title">CV</div>
                            <div className="cv-card__subtitle">
                                Загрузить PDF с резюме
                            </div>
                        </div>
                        <a className="cv-card__btn" href="https://onedrive.live.com/?authkey=%21AKKXGLJgKRjxY5c&cid=39E32F952BB50C75&id=39E32F952BB50C75%21128259&parId=39E32F952BB50C75%21184525&o=OneUp">
                            <i className="_icon-arrow-down"></i>
                        </a>
                    </div>
                </div>
            </div>
            {
                items[active] && <TabContent {...items[active]} />
            }
        </div>
    )
        ;
}

export default SkillsTabs;
