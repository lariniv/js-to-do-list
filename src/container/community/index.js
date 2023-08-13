import {
  createElement,
  createHeader,
} from '../../script/layout'

import {
  createNav,
  createCommunityInfo,
} from '../../script/community'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

const nav = createNav()

page.append(nav)

const main = createCommunityInfo()

page.append(main)
