import { Link } from 'wouter'
//import {useState} from 'react'

const POPULAR_LINKS = ['Rick','Morty','Homer','Bart']
export default function Home() {
    // const [keyword, setKeyword] = useState('')
    // const [field, setField] = useState('')

    // const handleSubmit = () => {
    //     setKeyword(field)
    //     console.log(keyword)
    // }
    return (
        <div>
            <h1>Buscador de GIFs</h1>
            {/* <form>
                <input id='searchField' type="text" onChange={inp => setField(inp.target.value)} />
                <button type='submit' onClick={handleSubmit}>Buscar</button>
            </form> */}
            <h2>Links Populares</h2>
            <ul>
                {POPULAR_LINKS.map((popGif) => (
                    <li key={popGif}>
                        <Link to={`/search/${popGif}`}>Links de {popGif}</Link>
                    </li>
                ))}
            </ul>
            <hr />
        </div>

    )
}