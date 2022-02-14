import article from '../styles/Article.module.css'
import ArticleItem from './ArticleItem';

const Article = ({articles}) => {
    return (
        <div className={article.grid}>
            {articles.map((article,i) => (
                <ArticleItem article={article} key={i}/>
            ))}
        </div>
    )
}
export default Article;