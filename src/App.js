import './App.css'
import { Link, Route } from 'wouter'
import searchResult from './pages/SearchResult'
import Home from './pages/Home'
import Detail from './pages/Detail'

export default function App() {
  

  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          
        </Link>
        
        <Route 
          component={Home}
          path='/'
        />
        <Route 
          component={searchResult}
          path='/gif/:keyword'
        />
        <Route 
          component={Detail}
          path='/gif/:id'
        />
      </section>
    </div>
    
  )
}

