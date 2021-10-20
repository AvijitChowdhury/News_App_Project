import React, { useEffect, useState } from 'react';
import News from '../News/News';
import { Fragment } from 'react';
import axios from 'axios';
const TopHeadline = () => {

    const [articles,setArticle] = useState([]);
    const getNews = ()=>{
        const url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=bc63a93720c5484c9e55ff613c915d98';
        // fetch(url)
        // .then(res=>res.json())
        // .then(data=>setArticle(data.articles))
        axios(url)
        .then(data=>setArticle(data.data.articles))
    }
    useEffect(()=>{
        getNews();
    },[]);
    console.log(articles);
    return (
        <React.Fragment>
            <h2>Top HeadLine :{articles.length}</h2>
            
            {
                articles.map(article=> <News article={article}></News>)
            }
            
        </React.Fragment>
    );
};

export default TopHeadline;