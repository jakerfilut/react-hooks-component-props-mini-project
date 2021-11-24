import React from "react";
import Article from './Article';

function ArticleList({posts}) {

    
    return (
        <main>
            {posts.map(post => (
            <Article
            date={post.date}
            key={post.id}
            minutes={post.minutes}
            preview={post.preview}
            title={post.title}/>
             ))}
        </main> 
    )}

export default ArticleList;