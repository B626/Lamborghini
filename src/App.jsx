import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import close from "./assets/img/close.svg";
import logo from "./assets/img/logo.svg";
import british from "./assets/img/british.png";
import arrowDown from "./assets/img/arrow-down.svg";
import car from "./assets/img/car.png";
import carReflection from "./assets/img/car-reflection.png";
import erik from "./assets/img/erik.png";
import anna from "./assets/img/anna.png";
import william from "./assets/img/william.png";
import ODlogo from "./assets/img/ODlogotype.png";

import "./App.css";
import { useRef } from "react";
import PageLoader from "./components/PageLoader";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
// import Burger from "./components/Burger";


gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  const body = document.querySelector("body");
  const burgerBtn = document.querySelector(".header__burger");
  const burgerMenu = useRef(null)
  const burgerMenuCloseBtn = useRef(null)

  const slider = useRef(null)

  const handleButtonClick = () => {
      burgerMenu.current.style.right = "0%"
      body.style.overflow = "hidden"
  }
  const handleCloseButtonClick = () => {
      burgerMenu.current.style.right = "-100%";
      body.style.overflow = "visible";
  };
  const handleBurgerButtonClick = () => {
      burgerMenu.current.style.right = "-100%";
      body.style.overflow = "visible";
  };

  let carDealerX = -300;
  let carDealerY = 700;

  let carFastX = 250;
  let carFastY = 1400;

  if (window.innerWidth <= 1200) {
    carDealerX = -180;
    carFastX = 180;
  }

  useGSAP(
    () => {
      let slideTl = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 2,
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
      slideTl.to(slider.current, {
        xPercent: -580,
      });

      gsap.to(".loader", {
        y: "-100%",
        delay: 2.5,
      });

      gsap.from(".intro__car-area", {
        x: 1000,
        duration: 1,
        delay: 2.5,
      });
      if (window.innerWidth > 993) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: "#dealer",
              start: "top center",
              end: "bottom bottom",
              scrub: 2,
            },
          })
          .to(".intro__car-area", { y: carDealerY, x: carDealerX, scale: 0.7 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: "#fast",
              start: "top center",
              end: "bottom bottom",
              scrub: 2,
            },
          })
          .to(".intro__car-area", { y: carFastY, x: carFastX, scale: 0.6 });
      }
      gsap.from(".intro__title", {
        y: 130,
        scrollTrigger: {
          trigger: ".intro__title",
          start: "top bottom",
        },
        delay: 2.5,
        duration: 1,
        opacity: 0,
      });

      gsap.from(".deal__text-area", {
        x: 700,
        opacity: 0,
        scrollTrigger: ".deal__car-area",
        scrub: true,
        duration: 1,
      });

      gsap.from(".deal__car-area", {
        x: -700,
        opacity: 0,
        scrollTrigger: ".deal__car-area",
        scrub: true,
        duration: 1,
      });

      gsap.from(".fast__text-area", {
        x: -700,
        opacity: 0,
        scrollTrigger: ".fast__text-area",
        scrub: true,
        duration: 1,
      });

      gsap.from(".fast__img-area", {
        x: 700,
        opacity: 0,
        scrollTrigger: ".fast__text-area",
        scrub: true,
        duration: 1,
      });

      gsap.from(".revs__title", {
        y: 200,
        opacity: 0,
        scrollTrigger: ".revs__title",
        scrub: true,
        duration: 1,
      });

      gsap.from(".revs__subtitle", {
        y: 200,
        opacity: 0,
        scrollTrigger: ".revs__title",
        scrub: true,
        duration: 1,
      });

      gsap.from(".revs__items", {
        y: 300,
        opacity: 0,
        scrollTrigger: ".revs__items",
        scrub: true,
        duration: 1,
      });

    },
  );
  return (
    <div className="App">
      <PageLoader />
      <div className="burger" ref={burgerMenu}>
        <ul className="burger__list">
          <li>
            <Link
              className="burger-home burger-link"
              onClick={handleBurgerButtonClick}
              to={"intro"}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              className="burger-dealer burger-link"
              onClick={handleBurgerButtonClick}
              to={"dealer"}
            >
              dealer
            </Link>
          </li>
          <li>
            <Link
              className="burger-revs burger-link"
              onClick={handleBurgerButtonClick}
              to={"revs"}
            >
              reviews
            </Link>
          </li>
        </ul>
        <div className="header__burger-in">
          <img
            className="header__burger-in-close"
            ref={burgerMenuCloseBtn}
            onClick={handleCloseButtonClick}
            src={close}
            alt=""
          />
        </div>
      </div>
      <div className="sidebars">
        <div className="sidebars__container _container">
          <ul className="intro__social-media-sidebar sidebar">
            <li className="intro__social-media-sidebar-item">
              <a href="#" className="intro__social-media-sidebar-link">
                {/* <svg
                width="31"
                height="32"
                viewBox="0 0 31 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <mask
                  id="mask0_50_10"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="31"
                  height="32"
                >
                  <rect
                    y="0.5"
                    width="31"
                    height="31"
                    fill="url(#pattern0_50_10)"
                  />
                </mask>
                <g mask="url(#mask0_50_10)">
                  <rect
                    className="intro__social-media-sidebar-link-color"
                    x="1.55005"
                    y="2.05"
                    width="27.9"
                    height="27.9"
                    fill="#B4B4B4"
                  />
                </g>
                <defs>
                  <pattern
                    id="pattern0_50_10"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_50_10"
                      transform="scale(0.0111111)"
                    />
                  </pattern>
                  <image
                    id="image0_50_10"
                    width="90"
                    height="90"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEQ0lEQVR4nO2dTWxVRRSAv4RKoVWJXYE1QYsEExND+Fk0lGgMEnbFGDVBSNRaN5hQNMDWlVRX0qQrWZEYdvK3gMhC40ZjMBVYCCYSF6KBtq+6sk1KLxlyTArh1WnfnJm5954vOZumP+d+uZ07c+6ZeWAYhmEYhmEYhmF4swzYCgwAnwGngSvAb0ADmJFoyNeuyPd8Kj+zRX6H8RCeAoaAc8A/QNFi/A2cBQ4A3dSclcA+4CJwJ4DcZjELfA3sBVZQIx6VO+2motxmcRv4GFhFhXkEOARMJhD8YLgcPpKcKsV24GoGgh+Ma8AOKoAbE0eBuQykNguX2wjQTkl5GvghA5GFZ/wEPEvJ2BFomlZEDjctfJmS8CrwbwbSiiWGWwy9Sea8rzwnLiKFu4ZBMmW3LA5SSyoCyn6DzHDj2nQGcgqFYWQnmbC+pA++YhEPyHWpJbfLtKioeFxKPc8eTXThDeAE8B6wUSp0HZLTE0AX0AM8D+wCTgb4m25Rk4QXE6z4GlIveWyRuR4K8LfdtfYRmTbgcmTJ14HnlphvCNGF1GuiFqJCJV54xq8tljZD5nuQiPXkiYiSp4FNLeYcUvSEOFDnSOS7+ViG/4Gulq1e9vwzouQ5YEOGov+SV3Fq7It8N3+X8TPlLRS5GFn00YxFn0exJSB2Za7fM7de4ILMs2Pl5gpoazRED0WWXMjK7v/YmLD+/YGG6HMJLqTbI68vE0l2cSq0ZNdiNZXgQjo8cvsloeip0O1nWxNdiA8pboD5sZmADGQsukgc74QU7bo6TTSqU9B7nDHRNLvRvgopOnZJtCjR0DEWUvTviSSG4rii6BvBslTqAI3Jt4qix0MmOlNy0TeV6+XBKLPoDuV3m0FFl3noeEFRcvCho8wPw9eURd/IfXoXi8Nlmt5pLFhi8UWZFiwaS/BYfFOmJbgVlWgq+u26lEmLxNFqz0kWhX8fiioV/pG91SYavQfhf7htxSaa+xzs1xD9ZII9Kj6kGjaci9Uo4U4JMNHoNtCkaAnL+Y7eg3KTY8zjH3xIIVm9yTF2E3quoj8kAp1SGqyr6IlYjehII3ZdRR8g8mahn2so+mqKU2v6Imx/8yGW5DnZ8peEkRqJ/pyEtMv23aqL/hFYTmLWycb0qoqeAp4hE15S6rr3QVOya7N4hczoVyg6+aAl2e3XeZ1MGQy8ocgHDcmzcnJC1uwOOIz4oNF5lN0RPwsd/RPiAelD6Aefe96UirXA9yUSfSmHI31amWePtLCC/ERe5/fKiTJdMp9dLifN9AQQPCeLkeTz5FDL9csK42mr4XLaRsVok0NFYpVYF4pxqcK5nCpLp1zkHwkE35KDuh+nRqyQoxguKL9dn5UXqXvqdvT8w1gjG9hPBTqhoCG/a79mS0DZWSb9bO8Cw9INNCYfBTI57+NBJuVrY/I9w7KL1f2sfTyIYRiGYRiGYRgGntwFTfUu2e9YJQgAAAAASUVORK5CYII="
                  />
                </defs>
              </svg> */}
              </a>
            </li>
            <li className="intro__social-media-sidebar-item">
              <a href="#" className="intro__social-media-sidebar-link">
                {/* <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <mask
                  id="mask0_50_13"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="30"
                  height="31"
                >
                  <rect
                    y="0.5"
                    width="30"
                    height="30"
                    fill="url(#pattern0_50_13)"
                  />
                </mask>
                <g mask="url(#mask0_50_13)">
                  <rect
                    className="intro__social-media-sidebar-link-color"
                    x="1.5"
                    y="1.25005"
                    width="27"
                    height="27"
                    fill="#B4B4B4"
                  />
                </g>
                <defs>
                  <pattern
                    id="pattern0_50_13"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_50_13"
                      transform="scale(0.0111111)"
                    />
                  </pattern>
                  <image
                    id="image0_50_13"
                    width="90"
                    height="90"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEr0lEQVR4nO2cWahWVRTHf1oOjWZSEUU+RHMvFQ2UNGAUUVFBZXCjB8nyIahAMDOoKKgIJe1BwwYoo7JohgoRL2VlpEXzRFE0cstuZqThzR0L1oXj1/3mvc9e3/nWD/4P95vOXv+7zz57rz2A4ziO4ziO4ziO4ziO4zg7MQW4ELgZeBBYpVoBLADOB/ba+StOq4wDLgJeBrYDoYnkMy/pP0S+2y7ynePoM04HPmjB3Hp6D5jRxvXOBTYAc2MHci0wHntMBBYDO7oweVTyG4uAXetcaw9gDvCRfv53fS0aJ+kPL8UWewKrIxhcq9UFA/cHZgHPAH/XfG5+7IBWFn5cHi4WmAwMJjB5VFJrP2lwp7zboOZ3xG7AnzW319Xk59GEJjeT+HFs7IDOrtOWzSMfAxlNlubjzDp3WFfc1OCiizvsFnXD3sAvGWuy9DZGkdhPAZYB13cVFfBwk4s/DkyiPBZkMlm6cocB0/WOWg78oO+tidEje7aFQmwEDic9uxSCK1Mj2s8eHuO9b4ADYgT3SouF2QJcRVpmZqrN9fQbcESs4J5s8+KPAdNIw90GzB3VsLbP0VjSQSE2AdfF7mcCaw0YLBpKkeOY3UWBPgTOiliWHO1zrb6I2VwUOTJC4QY1Q9btk7l2CFy2XtT0azI+jVTQzzU5tXuH5RjJbLQksJIyP3KBt+hD9tI2TR+re1WmOq0gLSO3yx+JCv+XznzIw/NEYEKDcnxWdaOFG0oKZivwFnC/5lMGNKkvo7IXMpo8Ula6QUZl6zPXqJBRckeXxoHAjwaCDhkkXcukHFPz9/E69Ax9pvdTG71RR2RXFqbnJen9tYHgQ4mSqaykFJNK/2g7vUwnMYszL1XXPamNbpaP7hfNSW10N7mOUCGdmtrogw0EGTJrW1mzSBsMBBsy6g1KYpaBYENG3VWW0TIq/MpAwCGTzqFEZhhIU4YMGi4jPVrLvQYCDyXrETIgKcznDQQfStQFZGKiLvQOfaChkhcH/Q+Z3b6tD9rsOzHCGZrVChXUdh2smds3MlixGr4KA8hq+KOBqYXX9gXO01FU6HHtAE7AAJMLyf9tBowJkfUUhlhkwJCQqG2WRUNmOKiiif/lGGSeAWNC5H7zfhhkgqEVniGCZOWUWaS38aUBk0IVunPNmK578kKP6udY2yPKYGqiXawhsWRm/zR6jHG6j6WXFtjMpYeZoj2S7wwY2UhyjkclGK97PcT0J4DXgZ8MGCx6rskS4Z5mppFFkq/mzjOn3Fa8NNKZGt3qtRj7ti02HQOGmouVVTNZDL68cFJLyCy5kxZmOCAgaaLpFuBbA+aGwh4Z00PrVidqT9ZTaWQ5778GjA0FrdO9L6Z7B9cAV+isiUy5X6av3a6nv7xjOOm/VbuUssLKfBsrpv5qwLTQpmTh/FH0GJK/uAPYbMDA0ERv1zmCp6eYpoYPGTA01OhN4GIqxiTdNLQu8+BjE3DfGDvGKskh+sBZX9J6ju+Bh/ShXKlBRzvso4tolmht3xwhR/wx8DRwY7/U3E6QEdihenTZbOBW3TK3onC8sJwu9oAe37NQjzO7RA8diX1yjeM4juM4juM4juM4juPQU/wH51qBT42zgL8AAAAASUVORK5CYII="
                  />
                </defs>
              </svg> */}
              </a>
            </li>
            <li className="intro__social-media-sidebar-item">
              <a href="#" className="intro__social-media-sidebar-link">
                {/* <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <mask
                  id="mask0_50_17"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="30"
                  height="31"
                >
                  <rect
                    y="0.5"
                    width="30"
                    height="30"
                    fill="url(#pattern0_50_17)"
                  />
                </mask>
                <g mask="url(#mask0_50_17)">
                  <rect
                    className="intro__social-media-sidebar-link-color"
                    x="1.5"
                    y="1.25"
                    width="27"
                    height="27"
                    fill="#B4B4B4"
                  />
                </g>
                <defs>
                  <pattern
                    id="pattern0_50_17"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_50_17"
                      transform="scale(0.0111111)"
                    />
                  </pattern>
                  <image
                    id="image0_50_17"
                    width="90"
                    height="90"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE1ElEQVR4nO2cy49URRSHv1nA4Lp14QAmSIyiKI4zSgYlhqWJErc8tiQ+AHfiygkrCRpWDjoRloqS+HZUosQ/wGA0KGIC6hIRMIhxHKaZMpUcksmk7+3XOXWr69aX/JJJZ7rq1C/dp089bkEmk8lkMplMJpPJ1JRhYAuwH/gQOANcAa4DriLNSQw/SUw+tscl1oHjIWAa+KtCQ12X8ua/ATzIALAB+DwC01wfWgA+Ax4gQlYAh4D5CIxySvJjeU3GFgV3Ad9HYIwz0nfA2qpNHgcuRmCGM9ZlYKIqkx8G/o7ABBdIfqxjVaSLPyMYvAusP4A7Q5m8QvKWq6l+AG4JYfShCAbrKtZBa5PvT6yEcz1qXuYMZnwRwSBdJPrEyuRRmTW5hDQHvAiMiPbJa528d8Fquj4dgTFOWd7Ypezr4v2HtU0eHrAFIteh/Kd4KSNdTmSWaxq9JQJTXCCjV3bZxmZNo/dHYIoLlDpe6rKNSU2jP4rAFGegOTG7lx/Dm/pA0+gzFRlxDpgCtknV0wCWiRry2nb5UTpfUYw/ahp9KWDgTeAdYFOXMQ4BjwLHpI1Q8fo1HzW6/Tr1qhPA3QrxrgO+DhTzfyhiHey/wC70eQaYDRC/GpZBXpQNBCseCbCkq4alyfdgzzpjs9WwShfjHfR9B7AH+BI4C/wjOiuv7QZWd9DORsM0ooZFcLva9LkKONphBeH/54jM6sp4tm5Gn2jT39PAtR739ba2aftkXYxutinhXgBu9NG+f+/ekvbvNaizozT67Taf5H5MXmx22Sf7vToYvakkJ/eSLsrSSKvVOc9jqRt9TqbKrTiqPHivtwr68jH8lrLRUyUlnMX6RFO+Ka14M2WjtxW0v8fA5Jt6vqDPHSkbPVrB7vpMQZ9jKRvdKGj/F0Oj/QyyFbelbPTygvY1q42l8m0XbThno9Ez4WodjW4UtJ9Th7LRowVG5x9DZaO3Fxi92zBHP1fQ586UU8fhgvZXG01Y5ksmLNMpG32+ZAp+xMBob2YrfAy/p2y0kyMBrVip/EyMrzZuL+hrs/KYojT6WEk/TyilEL9M+lRJP8frYHRTNkuL2Kuw8O/XTopYr7TmHb3RDviqTX9be0wjPl08WdKuz83fGIwnWqOdHG4pY0TWk5sdVhfTJTnZuoxUwyK4WTnc0o5VstTpH+b/WdYursnfM1InF5Vwi5mQ41u1M9rJoZayfK3FfcYHNdVwxmZvxI6JAKdh1XDGmpXDLZoMSU62ShcmRoc6tntSzl30y3qj6sL82G7Ig+g3gHflSEDRdL0VQzLjO25QJwc7iF7VoxW/ym71Dtnja8gujdet8tpOKe00jw9U9mhFqg8LOQW9r2l0qo+/OQW9rGl0qg90OgX53xI1huVeuKoH5SLTJXkUTxXNI1QuEb2OASleI+H60ILlJYQzEQzQRSJfiZkuzlR5gauLRPMhrtR8NYKBuop1gAD4CuRUBIN1FenbkFcgr5XL9lzNdAFYQ2DGa3Zl5lW5F7sSxmryyb5QpcmL08ipxHPyGiJhWK6RTKn0uw68on0LmOaVmp8O+AxyAfhYaafHnA3yqNvlCIxzXSwQTVnfOWrFMtlempQF8tMyoFB7kK00JzGclpgmJUb1VbhMJpPJZDKZTCaTYRD4Hy2WYZFuOgQHAAAAAElFTkSuQmCC"
                  />
                </defs>
              </svg> */}
              </a>
            </li>
          </ul>
          <ul className="intro__progress-bar-sidebar sidebar">
            <a href="#" className="intro__progress-bar-sidebar-mobile-btn">
              <img
                className="intro__progress-bar-sidebar-mobile-btn-img"
                src="assets/img/up.png"
                alt="open"
              />
            </a>
            <li className="intro__progress-bar-sidebar-item">
              <a href="#intro" className="intro__progress-bar-sidebar-link">
                <p>01</p>
              </a>
            </li>
            <li className="intro__progress-bar-sidebar-item intro__progress-bar-sidebar-item_dec">
              <div></div>
            </li>
            <li className="intro__progress-bar-sidebar-item">
              <a href="#dealer" className="intro__progress-bar-sidebar-link">
                <p>02</p>
              </a>
            </li>
            <li className="intro__progress-bar-sidebar-item intro__progress-bar-sidebar-item_dec">
              <div></div>
            </li>
            <li className="intro__progress-bar-sidebar-item">
              <a href="#fast" className="intro__progress-bar-sidebar-link">
                <p>03</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrapper">
        <header className="header">
          <div className="header__container _container">
            <a href="#" className="header__logo">
              <img src={logo} alt="Lamborghini" />
            </a>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-list-item">
                  <a className="header__nav-list-link nav-home" href="#intro">
                    home
                  </a>
                </li>
                <li className="header__nav-list-item">
                  <a
                    className="header__nav-list-link nav-dealer"
                    href="#dealer"
                  >
                    dealer
                  </a>
                </li>
                <li className="header__nav-list-item">
                  <a className="header__nav-list-link nav-revs" href="#revs">
                    reviews
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header__lang-switch">
              <a
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="header__lang-switch-link dropdown-toggle"
                href="#"
              >
                <img className="header-lang-icon" src={british} alt="English" />
                <p className="header__lang-switch-value">EN</p>
                <img src={arrowDown} alt="see more" />
              </a>
              <div className="header__lang-options dropdown">
                <ul className="header__lang-dropdown dropdown-menu">
                  <li>
                    <a
                      className="header__lang-dropdown-item dropdown-item"
                      language="english"
                      href="#"
                    >
                      EN
                    </a>
                  </li>
                  <li>
                    <a
                      className="header__lang-dropdown-item dropdown-item"
                      language="ukrainian"
                      href="#"
                    >
                      UA
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header__burger" onClick={handleButtonClick}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </header>
        <main id="fullpage" className="main">
          <section id={"intro"} className="intro section">
            <div className="intro__container _container">
              <div className="intro__main">
                <div className="intro__main-text-area">
                  <p className="intro__suptitle">Dream</p>
                  <h1 className="intro__title">Lambo</h1>
                </div>
                <div className="intro__car-area">
                  <img src={car} alt="car" className="intro__car" />
                  <img
                    src={carReflection}
                    alt="car reflection"
                    className="intro__car-reflection"
                  />
                </div>
                <p className="intro__subtitle intro-subtitle">feel the power</p>
                <hr className="intro__hr" />
              </div>
            </div>
          </section>
          <section id={"dealer"} className="deal section">
            <div className="deal__container _container">
              <div className="deal__car-area"></div>
              <div className="deal__text-area">
                <h2 className="deal__title deal-title">
                  Best dealership in Ukraine
                </h2>
                <p className="deal__subtitle deal-subtitle">
                  Located in the heart of Ukraine's vibrant capital, Kiev, the
                  Lamborghini dealership stands as a beacon of automotive
                  excellence amidst the city's bustling streets. Nestled in a
                  sleek, modern building that reflects Lamborghini's iconic
                  design ethos
                </p>
                <a href="#" className="deal__btn btn deal-btn">
                  Read more
                </a>
              </div>
            </div>
          </section>
          <section id={"fast"} className="fast section">
            <div className="fast__container _container">
              <div className="fast__text-area">
                <h2 className="fast__title fast-title">
                  Lighthing fast and comfortable
                </h2>
                <p className="fast__subtitle fast-subtitle">
                  The concept of "Lamborghini Light Speed" evokes a thrilling
                  vision at the cutting edge of automotive innovation. It's more
                  than just speed; it represents a leap forward in technology
                  and design, pushing the boundaries of what's possible in
                  supercar performance.
                </p>
                <a href="#" className="fast__btn btn fast-btn">
                  Read more
                </a>
              </div>
              <div className="fast__img-area"></div>
            </div>
          </section>
          <section className="races">
            <div className="races__wrapper">
              <div className="races__main" ref={slider}>
                <h2 className="races-text1">Lamborghini</h2>
                <h2 className="races-text2">Is</h2>
                <h2 className="races-text3">The</h2>
                <h2 className="races-text4">Coolest</h2>
                <h2 className="races-text5">Car</h2>
                <h2 className="races-text6">In</h2>
                <h2 className="races-text7">The</h2>
                <h2 className="races-text8">World</h2>
                <h2 className="races-text9">No</h2>
                <h2 className="races-text10">Debate</h2>
              </div>
            </div>
          </section>
          <section id={"revs"} className="revs">
            <div className="revs__container _container">
              <h2 className="revs__title revs-title">Reviews</h2>
              <p className="revs__subtitle revs-subtitle">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              {/* <div className="revs__items">
                <div className="revs__item item-revs">
                  <img src={erik} alt="Erik" className="item-revs__img" />
                  <p className="item-revs__msg erik-msg">
                    Driving the Lamborghini Huracán is an exhilarating
                    experience like no other. The sleek design turns heads
                    wherever you go, but it's the performance that truly sets it
                    apart.
                  </p>
                  <span className="item-revs__name erik-name">Erik D.</span>
                </div>
                <div className="revs__item item-revs">
                  <img src={anna} alt="Anna" className="item-revs__img" />
                  <p className="item-revs__msg anna-msg">
                    As a long-time Lamborghini enthusiast, I couldn't wait to
                    get behind the wheel of the Huracán, and it did not
                    disappoint. The exterior design is aggressive yet elegant
                  </p>
                  <span className="item-revs__name anna-name">Anna R.</span>
                </div>
                <div className="revs__item item-revs">
                  <img src={william} alt="William" className="item-revs__img" />
                  <p className="item-revs__msg william-msg">
                    Owning a Lamborghini Huracán has been a dream come true.
                    Beyond its striking looks and powerful engine, the Huracán
                    offers a driving experience that's second to none
                  </p>
                  <span className="item-revs__name william-name">
                    William K.
                  </span>
                </div>
              </div> */}
              <div className="revs__items-2">
                <div className="revs__item-2 item-revs-2">
                  <div className="item-revs-2__author-area">
                    <img src={anna} alt="Anna R." />
                    <div>
                      <h5>Anna R.</h5>
                      <p>Tech engineer</p>
                    </div>
                  </div>
                  <p>
                    As a long-time Lamborghini enthusiast, I couldn't wait to
                    get behind the wheel of the Huracán, and it did not
                    disappoint. The exterior design is aggressive yet elegant
                  </p>
                </div>
                <div className="revs__item-2 item-revs-2">
                  <div className="item-revs-2__author-area">
                    <img src={erik} alt="Erik D." />
                    <div>
                      <h5>Erik D.</h5>
                      <p>Tech engineer</p>
                    </div>
                  </div>
                  <p>
                    As a long-time Lamborghini enthusiast, I couldn't wait to
                    get behind the wheel of the Huracán, and it did not
                    disappoint. The exterior design is aggressive yet elegant
                  </p>
                </div>
                <div className="revs__item-2 item-revs-2">
                  <div className="item-revs-2__author-area">
                    <img src={william} alt="William K." />
                    <div>
                      <h5>William K.</h5>
                      <p>Tech engineer</p>
                    </div>
                  </div>
                  <p>
                    As a long-time Lamborghini enthusiast, I couldn't wait to
                    get behind the wheel of the Huracán, and it did not
                    disappoint. The exterior design is aggressive yet elegant
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="footer__container _container">
            <div className="footer__main">
              <div className="footer__title-area">
                <h2 className="footer__title">Lamborghini</h2>
                <p className="footer-official">official dealer</p>
              </div>
              <div className="footer__list-area">
                <div className="footer__list-area-main">
                  <p className="footer-menu-title">Menu</p>
                  <ul className="footer__list">
                    <li>
                      <a className="nav-home footer-nav-home" href="#intro">
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="nav-dealer footer-nav-dealer"
                        href="#dealer"
                      >
                        Dealership
                      </a>
                    </li>
                    <li>
                      <a className="nav-revs footer-nav-revs" href="#revs">
                        Reviews
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer__ocean">
                <div className="footer__ocean-content">
                  <img src={ODlogo} alt="Ocean Studio" />
                  <p>Made by Ocean Studio</p>
                </div>
              </div>
            </div>
            <p className="footer__copyright footer-copyright">
              ©2024 All rights reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
