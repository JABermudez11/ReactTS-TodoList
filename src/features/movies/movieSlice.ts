import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { IMovie } from '../../models/interfaces';

export interface MoviesState {
    movies: IMovie[],
    favorites: IMovie[],
}

const initialState: MoviesState = {    
    movies: [],
    favorites: [],
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovie: (state, action: PayloadAction<IMovie>) => {
            state.movies.push({                
                text: action.payload.text,
                rating: action.payload.rating,
            })
        },
        removeMovie: (state, action: PayloadAction<string>) =>{            
            state.movies = state.movies.filter(movie => {
                return movie.text != action.payload
            })
            // state.favorites = state.favorites.filter(favorite => {
            //     return favorite.text != action.payload
            // })
        },
        addFavorite: (state, action: PayloadAction<IMovie>) => {
            state.favorites.push({
                text: action.payload.text,
                rating: action.payload.rating,
            })
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favorites = state.movies.filter(favorite => {
                return favorite.text != action.payload
            })
        },
    }
})

export const { addMovie, removeMovie, addFavorite, removeFavorite } = movieSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMovies = (state: RootState) => state.movie.movies
export const selectFavorites = (state: RootState) => state.movie.favorites

export default movieSlice.reducer