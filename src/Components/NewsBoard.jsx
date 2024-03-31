import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) =>{

    const [articles,setArticles] = useState([])

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=5aeeb9b5dc45467599f2ca88ba249965`;
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles))

    }, [category])

    return (
        <>

            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            {articles.map((news, index)=>{
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            })}

        </>
    )
}

export default NewsBoard