import GifsList from "../../components/GifsList";

export default function SearchResult({params}){
    return(<GifsList keyword={params.keyword}/>)
}