import ListArticles from '../components/ListArticles'
import { useState, useEffect } from 'react'

const rawArticles = [
  {
    id: 1,
    title: 'What is React all about?',
    body: 'React is all about one-way data flow, the Virtual DOM, and transpiling JSX.',
  },
  {
    id: 2,
    title: 'A lovely kid',
    body: 'In fact, a kid is also the name of a baby goat!',
  },
  {
    id: 3,
    title: 'On placeholder image URLs',
    body: "So yeah, you won't be able to look these images up. They're placeholders",
  },
]

function Articles() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    setArticles(rawArticles)
  }, [])

  return (
    <div>
      <h1>Articles</h1>
      <ListArticles articles={articles} />
    </div>
  )
}

export default Articles
