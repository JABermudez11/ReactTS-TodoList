import { useDispatch } from 'react-redux';
import { IMovie } from '../../models/interfaces';
import { useAppSelector } from '../../store';
import { FavoriteCard } from './favoriteCard';
import { removeFavorite } from './movieSlice';
  

const Favorites = () => {
    
    const moviesList = useAppSelector(state => state.movie.movies);
    const favoritesList = moviesList.filter(movie => {
        return movie.isFavorited === true
    })
    const dispatch = useDispatch()

    const handleUnfavorite = (favoriteToRemove: IMovie) => {
        dispatch(removeFavorite(favoriteToRemove));
    }


    return (
        <div className='favoritesDiv'>
            <h1>Favorites</h1>
            <div className='favoritesList'>
                {
                    favoritesList.length>0 ? 
                        favoritesList.map((favorite: IMovie, key: number) => {
                            return (
                                <FavoriteCard 
                                    key={key}
                                    favorite={favorite}
                                    handleUnfavorite={handleUnfavorite}                                    
                                />
                            )
                        }):
                        <p>No Favorites added</p>
                }
            </div>
        </div>                
    )
}

export default Favorites;