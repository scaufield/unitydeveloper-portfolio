import React from 'react';
import './WorkSection.scss';
import WorkItem from "./WorkItem/WorkItem";
import { workItems } from '../../database';



function WorkSection() {
    return (
        <section className="work-section">
            <div className="container ">
                <div className="display-bold">Опыт работы</div>
                    <div className="row section-spacing">
                        {workItems.map((n, i) => (
                            <WorkItem key={i} item ={n}/>
                        ))}
                    </div>
            </div>
        </section>
    );
}

// const items = [
//     {
//         date: 'Jul 2019 - Present',
//         role: 'Freelance Designer',
//         logo: '',
//         name: 'Integral',
//         location: 'Netherlands, Worldwide',
//         text: 'Available for a project or job in UX/UI, Visual and Product design.' +
//             'Available for a project or job in UX/UI, Visual and Product design.' +
//             'Available for a project or job in UX/UI, Visual and Product design.' +
//             'Available for a project or job in UX/UI, Visual and Product design.',
//     },
//     {
//         date: 'Jul 2019 - Present',
//         role: 'Freelance Designer',
//         logo: '',
//         name: 'Integral',
//         location: 'Netherlands, Worldwide',
//         text: 'Available for a project or job in UX/UI, Visual and Product design.' +
//             'Available for a project or job in UX/UI, Visual and Product design.' +
//             'Available for a project or job in UX/UI, Visual and Product design.' +
//             'Available for a project or job in UX/UI, Visual and Product design.',
//     },
//     {
//         date: 'Jul 2019 - Present',
//         role: 'Freelance Designer',
//         logo: '',
//         name: 'Integral',
//         location: 'Netherlands, Worldwide',
//         text: 'Available for a project or job in UX/UI, Visual and Product design.' +
//             'Available for a project or job in UX/UI, Visual and Product design.' +
//             'Available for a project or job in UX/UI, Visual and Product design.' +
//             'Available for a project or job in UX/UI, Visual and Product design.',
//     },{
//         date: 'Jul 2019 - Present',
//         role: 'Freelance Designer',
//         logo: '',
//         name: 'Integral',
//         location: 'Netherlands, Worldwide',
//         text: 'Available for a project or job in UX/UI, Visual and Product design.' +
//             'Available for a project or job in UX/UI, Visual and Product design.' +
//             'Available for a project or job in UX/UI, Visual and Product design.' +
//             'Available for a project or job in UX/UI, Visual and Product design.',
//     }
// ]


export default WorkSection;
