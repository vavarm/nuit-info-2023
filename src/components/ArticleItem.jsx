function ArticleItem({ article }) {
  return <li key={article.id}>{article.title}</li>
}

export default ArticleItem
