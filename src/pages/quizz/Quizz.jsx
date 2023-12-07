import ListArticles from '../../components/ListArticles'
import { useState, useEffect } from 'react'



function Quizz() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    setArticles(rawArticles)
  }, [])

  return (
    <div>
      <h1>Quizz</h1>
      <ListArticles articles={articles} />
    </div>
  )
}

export default Quizz
