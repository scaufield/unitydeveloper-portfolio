// Общая инструкция

// 1. Все данные уже находятся на своих местах и импортированы, где необходимо.
// 2. Каждый целостный элемент тех или иных данных представляет собой объект, независимый от других.
// 3. Объекты в этой базе данных рассортированы по разделам, названия которых соответствуют названиям секций и страниц на сайте.
// 4. Чтобы изменить элемент на сайте, нужно найти нужную страницу и секцию в этой базе данных, названия которых соответствуют названию страницы и раздела на сайте и изменить объект.
// 5. В объект не следует добавлять новых свойств, за исключением однотипных свойств, например роль или скилл.
// 6. Однотипных свойств можно добавлять сколько требуется, но не больше, чем может поместится в элементе-родителе на странице сайта.
// 7. Во всех свойствах количество символов ограничено, если текст на сайте вылазит за пределы элемента-родителя, значит элемент не расчитан на такое количество символов.
// 8. Приблизительно число символов можно понять по размерам элементов на сайте, а также по уже заполненным образцам, которые встречаются на страницах.
// 9. Названия свойств семантически соответствуют разделам соответствующего элемента на сайте.
// 10. Редактирование текста некоторых элементов не предусмотрено в этой базе данных.

//<=====Страница "Обо мне" начало=====>

//1. Данные для страницы "Обо мне"

const aboutPage =
    {
        info: 'Занимаюсь разработкой игр и приложений под Android (Google Play, UDP), IOS (AppStore), WebGL(социальные сети). Учитывая мою специализацию «Технологии дополненной и виртуальной реальности в медиаиндустрии» -само собой, способен и делаю проекты в AR, VR и MR форматах (Google VR, ARFoundation, HTC Vive и т.п.).\n' +
            'Начинал свою «жизнь» в GameDev с разработки в Unity Engine на C#, делая свои личные проекты с нуля до релиза, поэтому за это время успел опробовать себя во многих должностях этой сферы –ProjectManager, GameDesigner и т.д.',

        email: 'johndoe@email.com',
        phone: '+77777777777',

        education: 'В данный момент учусь на 3 курсе в ВУЗе, но он не является помехой для полного рабочего графика, так как кафедра IT, к которой я отношусь, перешла на полный удаленный формат. Плюс в ВУЗе только рады работающим студентам.',
        vk: '',
        linkedin: '',
        telegram: '',
        github: '',
        skype: '',
    }
;

export {aboutPage};

//<=====Страница "Обо мне" конец=====>


//<=====Страница "Навыки" начало=====>

//1. Данные для табов "Навыки"

const skillTabs = [
    {
        title: 'Unity Developer', icon: '_icon-nut', subtitle: ' краткое Unity Developer', content: [
            {skill: ' Более 2х лет работы в Unity'},
            {skill: ' Навыки верстки (Unity UI)'},
            {skill: ' Понимание принципов ООП и паттернов проектирования'},
            {skill: ' Разработка под мобильные платформы - Android, IOS, UDP'},
            {skill: ' Разработка под социальные сети через WebGL + знакомство с JavaScript/PHP'},
            {skill: ' Разработка AR проектов ( HTC Vive, ARFoundation)'},
            {skill: ' Опыт использования огромного количества популярных плагинов'},
            {skill: ' Опыт разработки мультиплеерных игр'},
            {skill: ' Уверенное владение Git'},
        ]
    },
    {
        title: 'Game Designer', icon: '_icon-game', subtitle: ' краткое Unity Developer', content: [
            {skill: ' Опыт работы с проектами на разных платформах'},
            {skill: ' Хорошая алгоритмическая и математическая база'},
            {skill: ' Умение кратко и четко составлять ТЗ и ГДД'},
            {skill: ' Оптимальные навыки владения пакетами Adobe, Microsoft и т.п.'},
            {skill: ' Опыт использования огромного количества популярных плагинов'},
            {skill: ' Опыт разработки мультиплеерных игр'},
        ]
    },
    {
        title: 'Project Manager', icon: '_icon-peoplegroup', subtitle: ' краткое Unity Developer', content: [
            {skill: ' Опыт управления большим количеством людей\n'},
            {skill: ' Знание современных методологий (Scrum и Kanban)'},
            {skill: ' Языки: Русский (родной), Английский (Intermediate)'},
            {skill: ' Техническое образование'},
            {skill: ' Опыт работы в игровой индустрии'},
        ]
    },
    {
        title: 'Общие навыки', icon: '_icon-graph', subtitle: ' краткое Unity Developer', content: [
            {skill: ' Языки: Русский (родной), Английский (Intermediate)'},
            {skill: ' Техническое образование'},
            {skill: ' Опыт работы в игровой индустрии'},
            {skill: ' Большой игровой опыт в различных жанрах'},
            {skill: ' Опыт использования огромного количества популярных плагинов'},
            {skill: ' Опыт разработки мультиплеерных игр'},
            {skill: ' Уверенное владение Git'},
        ]
    },
];

export {skillTabs};


//2. Данные для слайдера "Достижения"

const skillsSlider = [
    [
        {
            title: 'Благодарность 1',
            link: ''
        },
        {
            title: 'Благодарность 2',
            link: ''
        },
        {
            title: 'Благодарность 3',
            link: ''
        },
    ],
    [
        {
            title: 'Благодарность 4',
            link: ''
        },
        {
            title: 'Благодарность 5',
            link: ''
        },
        {
            title: 'Благодарность 6',
            link: ''
        },
    ],

];

export {skillsSlider};

//3. Данные для секции "Опыт работы"

const workItems = [
    {
        date: 'Время начала работы - время конца работы',
        role: 'Game Designer',
        logo: '',
        name: 'Название организации',
        location: 'Страна, Город',
        text: 'Какое-либо описание работы' +
            'Available for a project or job in UX/UI, Visual and Product design.' +
            'Available for a project or job in UX/UI, Visual and Product design.' +
            'Available for a project or job in UX/UI, Visual and Product design.' + 'Available for a project or job in UX/UI, Visual and Product design.' +
            'Available for a project or job in UX/UI, Visual and Product design.' +
            'Available for a project or job in UX/UI, Visual and Product design.' +
            'Available for a project or job in UX/UI, Visual and Product design.',
    },
    {
        date: 'Июнь 2019 - Сейчас',
        role: 'Unity Developer',
        logo: '',
        name: 'REN Group',
        location: 'Netherlands, Worldwide',
        text: 'Available for a project or job in UX/UI, Visual and Product design.' +
            'Available for a project or job in UX/UI, Visual and Product design.' +
            'Available for a project or job in UX/UI, Visual and Product design.' +
            'Available for a project or job in UX/UI, Visual and Product design.',
    },
    {
        date: 'Июль 2017 - Сентябрь 2018',
        role: 'Project Manager',
        logo: '',
        name: 'D.Corp',
        location: 'Russia, Moscow',
        text: 'Available for a project or job in UX/UI, Visual and Product design.' +
            'Available for a project or job in UX/UI, Visual and Product design.' +
            'Available for a project or job in UX/UI, Visual and Product design.' +
            'Available for a project or job in UX/UI, Visual and Product design.',
    },
    {
        date: 'Март 2017 - Июль 2017',
        role: 'Freelance Designer',
        logo: '',
        name: 'FreeDevelopment',
        location: 'LA, USA',
        text: 'Available for a project or job in UX/UI, Visual and Product design.' +
            'Available for a project or job in UX/UI, Visual and Product design.' +
            'Available for a project or job in UX/UI, Visual and Product design.' +
            'Available for a project or job in UX/UI, Visual and Product design.',
    }
]

export {workItems};

//<=====Страница "Навыки" конец=====>


//<=====Страница "Проекты" начало=====>

//1. Данные для секции "Личные проекты"
const projectCard = [
    {
        src: 'img/moc-1.jpg',
        title: 'Mobile Game',
        subtitle: 'Это первый опыт большой работы в Unity Engine, когда я решил в феврале 2019 года доделать проект,' +
            ' начало которому положил в 2017 в виде компьютерной 3D версии с плохим дизайном и простой механикой' +
            ' переключения между несколькими сценами. Сейчас это же это мобильное приложение с приятным UI, музыкальным сопровождением и большим количеством особенностей.',
        state: 'v.1.0',
        text: 'Unity Engine, AR Kit, AR Foundation',
        path: '/services',
        github: 'https://play.google.com/store?hl=ru&gl=US',
        playMarket: 'https://play.google.com/store?hl=ru&gl=US',
        appStore: '',
        link: 'https://www.apple.com/ru/app-store/',
    },
    {
        src: 'img/moc-3.jpg',
        title: 'AR Game',
        subtitle: 'Начало моей работы с дополненной реальностью на основе Vuforia Engine для Unity — приложение,' +
            ' воспроизводящие мультимедиа при наведении на определенную страницу в брошюре.',
        state: 'Alpha',
        text: 'Unity Engine, Vuforia',
        path: '/services',
        github: 'https://play.google.com/store?hl=ru&gl=US',
        playMarket: 'https://play.google.com/store?hl=ru&gl=US',
        appStore: 'https://www.apple.com/ru/app-store/',
        link: 'https://www.apple.com/ru/app-store/',
    },
];

export {projectCard};

//2. Данные для секции "Студийные проекты"

const studioProject = [
    {
        src: 'img/moc-4.jpeg',
        name: 'AR MiniGames',
        studio: 'UnityDev studio',
        roles: [
            {role: 'Гейм-дизайнер'},
        ],
        playMarket: 'https://play.google.com/store?hl=ru&gl=US',
        appStore: 'https://www.apple.com/ru/app-store/',
        text: 'Это первый опыт большой работы в Unity Engine, когда я решил в феврале 2019 года доделать проект, начало которому положил в 2017 в виде компьютерной 3D версии с ужасным дизайном и простой механикой переключения между несколькими сценами. Сейчас это же это мобильное приложение с приятным UI, музыкальным сопровождением и большим количеством особенностей.',
        link: 'https://play.google.com/store?hl=ru&gl=US',
    },
    {
        src: 'img/moc-2.jpg',
        name: 'Battle Game',
        studio: 'MiniGames Studio',
        roles: [
            {role: 'Гейм-дизайнер'},
            {role: 'Unity Developer'},
        ],
        playMarket: '',
        appStore: 'https://play.google.com/store?hl=ru&gl=US',
        link: 'https://play.google.com/store?hl=ru&gl=US',

        text: 'Это AR-приложение. Нужно навести камерой в приложении на соответствующую страницу в брошюре и можно' +
            ' будет просмотреть видео в режиме дополненной реальности. На данный момент выложена тестовая версия приложения, работающая с приложенными картинками.',
    },
];

export {studioProject};

//<=====Страница "Проекты" конец=====>