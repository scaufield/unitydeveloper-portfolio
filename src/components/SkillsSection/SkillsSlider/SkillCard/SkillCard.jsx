import React from 'react';
import "./SkillCard.scss";

const SkillCard = ({item}) => {
    return (
        <div className="skill-card">
            <div className="skill-card__head">
                <div className="skill-card__icon  fa-xs"><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.6054 3.69558H14.9266C14.0101 3.70133 13.14 3.31438 12.5592 2.6428L11.3477 1.05311C10.7767 0.375643 9.90661 -0.0131164 8.9915 0.000338085H6.39075C1.72272 0.000338085 1.01193e-06 2.60069 1.01193e-06 7.02235V11.8019C-0.00580733 12.3276 24.9945 12.3269 24.9961 11.8019V10.4123C25.0184 5.99063 23.3401 3.69558 18.6054 3.69558Z" fill="#BCA4FF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5402 5.39067C23.9401 5.83449 24.2491 6.34503 24.4515 6.89614C24.8498 8.02881 25.0341 9.21911 24.9961 10.4124V16.6448C24.9945 17.1698 24.9537 17.694 24.8739 18.2135C24.7219 19.1303 24.3821 20.0101 23.8736 20.8033C23.6399 21.1865 23.3561 21.5402 23.0289 21.8561C21.5479 23.1462 19.5812 23.8178 17.5718 23.7195H7.41326C5.40062 23.8171 3.43077 23.1458 1.94501 21.8561C1.62175 21.5396 1.34171 21.1859 1.11143 20.8033C0.605937 20.0106 0.273362 19.13 0.133373 18.2135C0.0443606 17.6949 -0.000242044 17.1703 0 16.6448V10.4124C-0.000216738 9.89189 0.0294654 9.37176 0.0889159 8.8543C0.101417 8.76351 0.120169 8.6742 0.138726 8.58582C0.169662 8.43848 0.200059 8.29371 0.200059 8.14894C0.312882 7.52449 0.518697 6.91836 0.811348 6.34869C1.67827 4.59056 3.45656 3.6957 6.36852 3.6957H18.5943C20.2253 3.57597 21.8441 4.042 23.1289 5.00114C23.2769 5.12024 23.4144 5.2505 23.5402 5.39067ZM6.21297 16.0657H18.7944H18.8166C19.0927 16.077 19.3621 15.9832 19.5646 15.8052C19.7672 15.6272 19.8861 15.3798 19.8947 15.1182C19.9103 14.8882 19.8306 14.6616 19.6724 14.4865C19.4905 14.2512 19.2023 14.1108 18.8944 14.1075H6.21297C5.64211 14.1075 5.17934 14.5458 5.17934 15.0866C5.17934 15.6273 5.64211 16.0657 6.21297 16.0657Z" fill="#BCA4FF"/>
                </svg></div>
                <div className="skill-card__title">{item.title}</div>
            </div>
            <a className="skill-card__body mt-3" href={item.link}>

                <div className="skill-card-button">
                    <div className="skill-card-button__icon">
                        <i className="fa fa-file" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="skill-card__text-wrapper ml-2">
                    <div className="skill-card__text mb-2">Открыть документ</div>
                    <svg width="129" height="5" viewBox="0 0 129 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" d="M2 2.59322H127" stroke="url(#paint0_linear)" stroke-width="4" stroke-linecap="round"/>
                        <path d="M2 2.59322H64.5" stroke="url(#paint1_linear)" stroke-width="4" stroke-linecap="round"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="1.1477" y1="3.19461" x2="127.87" y2="3.19461" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4136F1"/>
                                <stop offset="1" stop-color="#8743FF"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="1.57385" y1="3.19461" x2="64.9349" y2="3.19461" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4136F1"/>
                                <stop offset="1" stop-color="#8743FF"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </a>
        </div>
    );
};

export default SkillCard;