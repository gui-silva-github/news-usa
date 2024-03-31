import image from '../assets/news.jpeg'

const NewsItem = ({title, description, src, url})=>{
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
        <img src={src?src:image} style={{height: "200px", width: "327px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title!="[Removed]"?title.slice(0, 50):"News"}</h5>
        <p className="card-text">{description?description.slice(0,90):"News information"}</p>
        <a href={url} className="btn btn-primary">Read more</a>
        </div>
        </div>
    )
}

export default NewsItem

/*<button type="button" className="btn btn-primary">Primary</button>
    <button type="button" className="btn btn-secondary">Secondary</button>
    <button type="button" className="btn btn-success">Success</button>
    <button type="button" className="btn btn-danger">Danger</button>
    <button type="button" className="btn btn-warning">Warning</button>
    <button type="button" className="btn btn-info">Info</button>
    <button type="button" className="btn btn-light">Light</button>
    <button type="button" className="btn btn-dark">Dark</button>
    <button type="button" className="btn btn-link">Link</button>

    <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown button
    </button>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
    </ul>
    </div>

    <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
    </div>*/