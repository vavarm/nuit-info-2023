import ArticleItem from './ArticleItem'

function ListArticles({ articles }) {
  const articlesDisplay = articles.map((article) => (
    <ArticleItem key={article.id} article={article} />
  ))

  return <ul>{articlesDisplay}</ul>
}

export default ListArticles
