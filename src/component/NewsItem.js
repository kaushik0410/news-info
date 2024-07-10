// import React, {Component} from 'react'; //for class based component
import React from 'react';

// export class NewsItem extends Component { //for class based component
//     render() { //for class based component
const NewsItem = (props) => { //for function based component

    let {title, description, imageURL, newsDate, newsURL, newsAuthor, newsSource} = props;

    return (
        <div>
            <div className="card" style={{marginBottom: '10px', marginTop: '10px', height: '440px'}}>
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex: '1', left: '80%'}}>{newsSource}</span>
                <img src={imageURL} className="card-img-top" style={{height: "200px"}} alt="..." />
                <div className="card-body" >
                    <h5 className="card-title">{title}...</h5><span style={{fontWeight: '500'}}>By {newsAuthor} on {new Date(newsDate).toGMTString()}</span>
                    <p className="card-text">{description}...</p>
                    <a href={newsURL} className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    );
    // } //for class based component
}

export default NewsItem;