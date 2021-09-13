export default function Gif({title, id, url}){
    return(
        <div>
            <h2>{title}</h2>
            <strong>{id}</strong>
            <br/>
            <img src={url} alt={title} />
            <hr/>
        </div>
    )
}