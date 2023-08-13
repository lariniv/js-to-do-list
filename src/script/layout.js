export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }

  return elem
}

const HEADER_BUTTON_LIST = [
  {
    width: 24,
    height: 24,
    src: './svg/header__arrow.svg',
  },
  {
    width: 24,
    height: 24,
    src: './img/header_profile.png',
  },
]

export const createHeader = () => {
  const header = createElement('header', 'header')

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')

    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    button.insertAdjacentElement('beforeend', img)

    header.insertAdjacentElement('beforeend', button)
  })

  return header
}

// const TAGS = [
//   {
//     innerHTML: 'Важливо',
//     className: 'post__tag--important',
//   },
//   {
//     innerHTML: 'Нове',
//     className: 'post__tag--new',
//   },
// ]

// export const createPost = (date, content, isViewed) => {
//   const post = createElement('div', 'post__section')

//   if (isViewed) {
//     post.classList.add('post__section--viewed')
//   }

//   const postHeader = createElement('div', 'post__header')

//   const categoryList = createElement('div', 'post__category')

//   TAGS.forEach(({ innerHTML, className }) => {
//     const tag = createElement(
//       'div',
//       `post__tag ${className}`,
//     )
//     tag.innerHTML = innerHTML

//     categoryList.append(tag)
//   })

//   const headerDate = createElement(
//     'div',
//     'post__date',
//     date,
//   )

//   postHeader.append(tagList, headerDate)

//   const postContent = createElement(
//     'div',
//     'post__content',
//     content,
//   )

//   post.append(postHeader, postContent)

//   return post
// }

const POST_LIST = [
  {
    category: [
      { text: 'Важливо', id: 'important' },
      { text: 'Нове', id: 'new' },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '25.01',
    viewed: false,
  },
  {
    category: [
      { text: 'Важливо', id: 'important' },
      { text: 'Нове', id: 'new' },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '24.01',
    viewed: true,
  },
]

export const createPost = () => {
  const postList = createElement('main', 'post')

  POST_LIST.forEach((postData) => {
    const post = createElement(
      'div',
      postData.viewed
        ? 'post__section post__section--viewed'
        : 'post__section',
    )

    const postHeader = createElement('div', 'post__header')

    const categoryList = createElement(
      'div',
      'post__categories',
    )

    postData.category.forEach((category) => {
      const categorySpan = createElement(
        'div',
        `post__category post__category--${category.id}`,
        category.text,
      )

      categoryList.append(categorySpan)
    })

    const dateSpan = createElement(
      'div',
      'post__date',
      postData.date,
    )

    postHeader.append(categoryList, dateSpan)

    const infoParagraph = createElement(
      'div',
      'post__content',
      postData.info,
    )

    post.append(postHeader, infoParagraph)

    postList.append(post)
  })

  return postList
}
