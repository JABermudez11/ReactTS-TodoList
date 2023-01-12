import React, { FC } from 'react'
import { useAppSelector } from '../../store'
import { MovieCard } from './movieCard';
import { IMovie } from '../../models/interfaces';
import { NewMovieInput } from './movieForm';
import { useDispatch } from 'react-redux';
import { addFavorite, removeMovie } from './movieSlice';


export const MovieList: FC = () => {
        
    const movies=useAppSelector(state => state.movie.movies);
    const dispatch = useDispatch();

    const handleFavorite = (movieToFavorite: IMovie): void => {
        dispatch(addFavorite(movieToFavorite));
    }

    const handleRemove = (movieNameToRemove: string): void => {
        dispatch(removeMovie(movieNameToRemove))        ;
    }

    return(
        <div className='moviesDiv'>
            <h1>Movies Page</h1>            
            <div className='form'>
                <NewMovieInput />
            </div>            
                <div className='moviesList'>
                {
                    movies.length > 0 ? 
                        movies.map((movie: IMovie, key: number) => {
                            return (
                                <MovieCard
                                    key={key}
                                    movie={movie}
                                    handleRemove={handleRemove}
                                    handleFavorite={handleFavorite}
                                />
                            );
                        }):
                        <p>No Movies added</p>
                }
            </div>
        </div>        
    )
}

