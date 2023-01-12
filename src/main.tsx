import { Routes, Route } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import Home from './features/home/home';
import Favorites from './features/movies/favoriteMovieList';
import { MovieList } from './features/movies/movieList';


const Main = () => {
return (         
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Home' element={<Home/>} />
    <Route path='/Counter' element={<Counter/>} />
    <Route path='/movies' element={<MovieList/>} />
    <Route path='/favorites' element={<Favorites />} />
  </Routes>
);
}
export default Main;