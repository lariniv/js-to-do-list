import {
  createElement,
  createHeader,
  createPost,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Мій блог')

page.append(title)

const post = createPost()

page.append(post)

// const main = createElement('main', 'post')

// const post1 = createPost(
//   '25.01',
//   'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
//   false,
// )

// const post2 = createPost(
//   '15.01',
//   'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
//   true,
// )

// const post3 = createPost(
//   '25.01',
//   'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
//   false,
// )

// main.append(post1)
// main.append(post2)
// main.append(post3)

// page.append(main)
