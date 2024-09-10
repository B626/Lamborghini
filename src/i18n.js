import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  EN: {
    translation: {
      "nav-home": "home",
      "nav-dealer": "dealer",
      "nav-revs": "reviews",
      "intro-subtitle": "feel the power",
      "races-text1": "lamborghini",
      "races-text2": "is",
      "races-text3": "the",
      "races-text4": "coolest",
      "races-text5": "car",
      "races-text6": "in",
      "races-text7": "the",
      "races-text8": "world",
      "races-text9": "no",
      "races-text10": "debate",
      "deal-title": "Best dealership in Ukraine",
      "deal-subtitle":
        "Located in the heart of Ukraine's vibrant capital, Kiev, the Lamborghini dealership stands as a beacon of automotive excellence amidst the city's bustling streets. Nestled in a sleek, modern building that reflects Lamborghini's iconic design ethos",
      "deal-btn": "Read more",
      "fast-title": "Lighthing fast and comfortable",
      "fast-subtitle":
        "The concept of Lamborghini Light Speed evokes a thrilling vision at the cutting edge of automotive innovation. It's more than just speed; it represents a leap forward in technology and design, pushing the boundaries of what's possible in supercar performance.",
      "fast-btn": "Read more",
      "revs-title": "Reviews",
      "revs-subtitle": "Check out these reviews from our clients",
      "erik-msg":
        "Driving the Lamborghini Huracán is an exhilarating experience like no other. The sleek design turns heads wherever you go, but it's the performance that truly sets it apart.",
      "anna-msg":
        "As a long-time Lamborghini enthusiast, I couldn't wait to get behind the wheel of the Huracán, and it did not disappoint. The exterior design is aggressive yet elegant",
      "william-msg":
        "Owning a Lamborghini Huracán has been a dream come true. Beyond its striking looks and powerful engine, the Huracán offers a driving experience that's second to none",
      "erik-name": "Erik D.",
      "erik-job": "Tech engineer",
      "anna-name": "Anna R.",
      "anna-job": "Designer",
      "william-name": "William K.",
      "william-job": "Web developer",
      "footer-official": "official dealer",
      "footer-menu-title": "Menu",
      "footer-nav-home": "home",
      "footer-nav-dealer": "dealer",
      "footer-nav-revs": "revs",
      "footer-copyright": "©2024 All rights reserved",
      "burger-home": "home",
      "burger-dealer": "dealer",
      "burger-revs": "reviews",
    },
  },
  UA: {
    translation: {
      "nav-home": "головна",
      "nav-dealer": "постачальник",
      "nav-revs": "відгуки",
      "intro-subtitle": "відчуй силу",
      "races-text1": "ламборгіні",
      "races-text2": "це",
      "races-text3": "найкрутіша",
      "races-text4": "машина",
      "races-text5": "в",
      "races-text6": "цілому",
      "races-text7": "світі",
      "races-text8": "без",
      "races-text9": "питань",
      "races-text10": "100%",
      "deal-title": "Найкраща ділова пропозиція в Україні",
      "deal-subtitle":
        "Розташований у самому центрі столиці України, Києві, дилерський центр Ламборгіні стоїть як маяк автомобільної досконалості серед гамірних вулиць міста. Розташований у витонченій сучасній будівлі, яка відображає культовий дух дизайну спорткару",
      "deal-btn": "Дізнатись більше",
      "fast-title": "Блискавично швидко і комфортно",
      "fast-subtitle":
        "Концепція «Lamborghini Light Speed» викликає захоплююче бачення на передньому краї автомобільних інновацій. Це більше, ніж просто швидкість; це стрибок уперед у технологіях та дизайні, що розширює межі того, що можливо у продуктивності суперкара.",
      "fast-btn": "Дізнатись більше",
      "revs-title": "Відгуки",
      "revs-subtitle": "Подивіться на ці відгуки наших клієнтів",
      "erik-msg":
        "Водіння спорткару Ламборгіні – це захоплююча подія. Витончений дизайн привертає увагу, куди б ви не пішли, але саме продуктивність виділяє його.",
      "anna-msg":
        "Як давній ентузіаст Ламборгіні, я не міг дочекатися, щоб сісти за кермо моделі Хуракан, і вона мене не розчарувала. Зовнішній дизайн агресивний і водночас елегантний",
      "william-msg":
        "Володіти Ламборгіні Хуракан - це мрія. Окрім вражаючого зовнішнього вигляду та потужного двигуна, спорткар пропонує неперевершені враження від водіння",
      "erik-name": "Ерік Д.",
      "erik-job": "Тех-інженер",
      "anna-name": "Анна Р.",
      "anna-job": "Дизайнер",
      "william-name": "Вільям К.",
      "william-job": "Веб-розробник",
      "footer-official": "офіційний ділер",
      "footer-menu-title": "Меню",
      "footer-nav-home": "головна",
      "footer-nav-dealer": "постачальник",
      "footer-nav-revs": "відгуки",
      "footer-copyright": "©2024 Всі права захищено",
      "burger-home": "головна",
      "burger-dealer": "постачальник",
      "burger-revs": "відгуки",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "UA", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;