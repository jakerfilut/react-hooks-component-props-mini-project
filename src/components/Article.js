import React from "react";

function Article({title, date ="January 1, 1970", minutes, preview}) {
    const coffee ="☕️"
    const bentoBox ="🍱"
    let finalCount =""
    if (minutes <30 ){
    const emojiNumber = Math.ceil(minutes / 5)
        for (let i = 0; i < emojiNumber; i++){
            finalCount += coffee
        }
    } else {
        const emojiNumber = Math.ceil(minutes / 10)
        for (let i = 0; i < emojiNumber; i++){
            finalCount += bentoBox
    }}
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} {finalCount} {minutes}  min read</small>
            <p>{preview}</p>
        </article>
    )
}
export default Article;