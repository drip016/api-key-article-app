import React from 'react'
import "./singleart.css"

export default function SingleArt() {
    return (
        // <div className="singleArt">
        //     <h1 className="artTitle">Article Title</h1>
        //     <p className="artDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias esse blanditiis vero, iste velit minima sequi inventore dolore eius eligendi. Amet laborum unde repellendus excepturi accusantium ab distinctio ducimus?</p>
        //     <button className="commentButton">Comment</button>
        // </div>
        <div class="card" style={{width: 22 + 'rem'}}>
            <img src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Article title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a class="btn btn-primary">Comment..</a>
            </div>
        </div>
    )
}
