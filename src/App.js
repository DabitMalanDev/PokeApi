import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login'
import PokeHome from './components/pokeHome/PokeHome';
import PokemonDetail from './components/PokemonDetail'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/pokehome' element={<PokeHome/>}/>
        <Route path='/pokemondetail' element={<PokemonDetail/>}/>
      </Routes>
      <h2>Hola</h2>
    </HashRouter>
  );
}

export default App;
