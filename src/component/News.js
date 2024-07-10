// import React, {Component} from 'react';
import React, {useState, useEffect} from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

// export class News extends Component { //for class based component
const News = (props) => { //for function based component

    // static defaultProps = { //for class based component
    //     country: 'in',
    //     pageSize: 12,
    //     category: 'general'
    // } 
    
    // static propTypes = { //for class based component
    //     country: PropTypes.string,
    //     pageSize: PropTypes.number,
    //     category: PropTypes.string,
    //     setProgress: PropTypes.func.isRequired
    // }
    
    // constructor(props) { //for class based component
    //     super(props);
    //     this.state = {
    //         articles: [],
    //         loading: false,
    //         page: 1,
    //         totalResults: 0
    //     }
    //     document.title = `Capitalize News - ${this.props.category}`;
    // }

    const [articles, setArticles] = useState([]); //for function based component
    const [loading, setLoading] = useState(true); //for function based component
    const [page, setPage] = useState(1); //for function based component
    const [totalResults, setTotalResults] = useState(0); //for function based component

    // async updateNews() { //for class based component
    //     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
    //     this.setState({loading: true});
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({ 
    //         articles: parsedData.articles,
    //         totalResults: parsedData.totalResults,
    //         loading: false
    //     });
    // }

    const updateNews = async () => { //for function based component
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }

    useEffect(() => { //for function based component
        document.title = `Capitalize News - ${props.category}`;
        updateNews();
        // eslint-disable-next-line
    }, []);

    useEffect(() => { //for function based component
        if (page > 1) {
            fetchData();
            // eslint-disable-next-line
        }
    }, [page])
    
    // const componentDidMount = async () => { //for class based component
    //     this.updateNews();
    // }

    // fetchData = async () => { //for class based component
    //     props.setProgress(0);
    //     this.setState((prevStage) => ({page: prevStage.page + 1}), async() => {
    //         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
    //         props.setProgress(10);
    //         this.setState({loading: true});
    //         let data = await fetch(url);
    //         this.props.setProgress(20);
    //         let parsedData = await data.json();
    //         this.props.setProgress(30);
    //         this.setState({
    //             articles: this.state.articles.concat(parsedData.articles),
    //             totalResults: parsedData.totalResults,
    //             loading: false
    //         });
    //         this.props.setProgress(100);
    //     });
    // };

    const fetchData = async () => { //for function based component
        props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        props.setProgress(10);
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(20);
        let parsedData = await data.json();
        props.setProgress(30);
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    };

    const fetchMoreData = () => { //for function based component
        setPage((prevPage) => prevPage + 1);
    }
    
    // render() { //for class based component
    return (
        <div className="container my-3" style={{backgroundColor: props.mode==='light'?'white':'#2f4f4f'}}>
            <h2 className='text-center mb-4' style={{color: 'red', marginTop: '65px'}}>Capitalize News - Top Headlines</h2>
            {loading && <Spinner />}
            <InfiniteScroll 
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className='row'>
                    {articles.map((element) => {
                        return <div className='col-md-3' key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0, 40):""} description={element.description?element.description.slice(0, 70):""} imageURL={element.urlToImage} newsDate={element.publishedAt} newsURL={element.url} newsAuthor={element.author?element.author:"unknown"} newsSource={element.source.name?element.source.name:"unknown"} />
                        </div>
                    })}
                </div>
            </InfiniteScroll>
        </div>
    );
    // }
}

News.propTypes = { //for function based component
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    setProgress: PropTypes.func.isRequired
}

export default News;