import Link from "next/link";

const article = ({ article }) => {
    return (
        <div>
           <h2 style={{textAlign:'center'}}>{article.title}</h2> 
           <p style={{textAlign:'center'}}>{article.body}</p>
           <br />
           <Link href="/">
               <p style={{textAlign:'center',color:'blue', cursor:'pointer'}}>Go Back</p>
            </Link>
        </div>
    );
};

export const getStaticProps = async(context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props:{
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    
    const articles = await res.json()

    const ids = articles.map(article => article.id)

    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

export default article;