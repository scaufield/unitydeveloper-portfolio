import React from 'react';
import './WorkItem.scss';


const WorkItem = ({item}) => {
    return (
        <div className="col-md-6 mb-5">
            <div className="work-item">
                <div className="work-item__date">{item.date}</div>
                <div className="work-item__role">{item.role}</div>
                <div className="work-item__work-org work-org">

                    {/*TODO испытать на картинке*/}

                    <div className="work-org__logo"> <i>{item.logo}</i></div>
                    <div className="work-org__name">{item.name}</div>
                    <div className="work-org__location">{item.location}</div>
                </div>
                <div className="work-item__body mt-1">
                    <div className="work-item__text">
                        {item.text}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkItem;