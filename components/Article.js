import article from '../styles/Article.module.css'

const Article = ({articles}) => {
    return (
        <div className={article.grid}>
            {articles.map((articles) => (
                <h3 key={articles.id}>{articles.title}</h3>
            ))}
        </div>
    )
}
export default Article;