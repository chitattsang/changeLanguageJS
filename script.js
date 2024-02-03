// Javascript Section
const langSec = document.querySelector('.languageSection');
const buttons = document.querySelectorAll('a');
const textTitle = document.querySelector('.title');
const textDesc = document.querySelector('.description');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        langSec.querySelector('.active').classList.remove('active');
        button.classList.add('active');

        const attr = button.getAttribute('language');

        textTitle.textContent = data[attr].title;
        textDesc.textContent = data[attr].description;
    });
});

const data = {
    "ar":
    {
        "title": " مرحباً أيها العالم! ",
        "description": " مرحبًا بكم! أنا آرثر وأنا مصمم جرافيك ومصمّم ويب مبدع مقيم في هونغ كونغ. "
    },

    "zh":
    {
        "title": " 你好，世界！ ",
        "description": " 大家好！我叫亞瑟，是一名創意平面和網頁設計師，常駐香港。 "
    },

    "en":
    {
        "title": " Hello World! ",
        "description": " Hey there! I’m Arthur and I'm a creative graphic and web designer based in Hong Kong. "
    },

    "fr":
    {
        "title": " Bonjour le monde ! ",
        "description": " Bonjour à tous ! Je m'appelle Arthur et je suis un graphiste et web designer créatif basé à Hong Kong. "
    },

    "ru":
    {
        "title": " Здравствуй, мир! ",
        "description": " Привет! Меня зовут Артур, я креативный графический и веб-дизайнер, живущий в Гонконге. "
    },

    "es":
    {
        "title": " Hola a todos. ",
        "description": " Hola a todos. Soy Arthur, diseñador gráfico y web creativo residente en Hong Kong. "
    },

    "jp":
    {
        "title": " ハロー・ワールド ",
        "description": " こんにちは！香港を拠点にクリエイティブなグラフィック＆ウェブデザイナーとして活動しています。 "
    },

    "ko":
    {
        "title": " 안녕하세요! ",
        "description": " 안녕하세요! 저는 홍콩에서 활동하는 크리에이티브 그래픽 및 웹 디자이너 아서입니다. "
    }
}