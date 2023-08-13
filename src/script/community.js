import { createElement } from './layout'

/* <nav class="nav">
        <button class="nav__item">
            <div>База знань</div>
        </button>
        <button class="nav__item nav__item--active">
            <div>Інформація</div>
        </button>
    </nav>

    <main class="main">
        <div class="main__card">
            <img class="main__top-image" src="./img/community-image1.png" width="343px" width="160px">

            <div class="main__content">
                <h2 class="main__title">Що таке база знань?</h2>
                <p class="main__info">База знаний — база данных, содержащая правила вывода и информацию о человеческом
                    опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также
                    содержит информацию, являющуюся результатом решения предыдущих задач. </p>
            </div>

            <button class="main__button">Перейти до ком'юніті у Телеграм</button>
        </div>
    </main> */

const NAV_TABS = [
  {
    isActive: false,
    text: 'База знань',
  },
  {
    isActive: true,
    text: 'Інформація',
  },
]

export const createNav = () => {
  const nav = createElement('nav', 'nav')

  NAV_TABS.forEach((navTab) => {
    const tab = createElement(
      'button',
      navTab.isActive
        ? 'nav__item nav__item--active'
        : 'nav__item',
    )

    const tabContent = createElement(
      'div',
      false,
      navTab.text,
    )

    tab.append(tabContent)

    nav.append(tab)
  })

  return nav
}

const COMMUNITY_DATA = {
  img: {
    src: './img/community-image1.png',
    width: 343,
    height: 160,
  },
  title: 'Що таке база знань?',
  info: `База знаний — база данных, содержащая правила вывода и информацию о человеческом
  опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также
  содержит информацию, являющуюся результатом решения предыдущих задач.`,
  button: "Перейти до ком'юніті у Телеграм",
}
export const createCommunityInfo = () => {
  const main = createElement('main', 'main')

  const mainCard = createElement('div', 'main__card')

  const img = createElement('img')

  Object.entries(COMMUNITY_DATA.img).forEach(
    ([key, value]) => {
      img[key] = value
    },
  )

  const mainContent = createElement('div', 'main__content')

  const title = createElement(
    'h2',
    'main__title',
    COMMUNITY_DATA.title,
  )

  const info = createElement(
    'p',
    'main__info',
    COMMUNITY_DATA.info,
  )

  mainContent.append(title, info)

  const mainButton = createElement(
    'button',
    'main__button',
    COMMUNITY_DATA.button,
  )

  mainCard.append(img, mainContent, mainButton)

  main.append(mainCard)

  return main
}
