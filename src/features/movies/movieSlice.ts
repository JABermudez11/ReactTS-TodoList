import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { IMovie } from '../../models/interfaces';

export interface MoviesState {
    movies: IMovie[],    
}

const initialState: MoviesState = {    
    movies: [],    
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovie: (state, action: PayloadAction<IMovie>) => {
            state.movies.push({                
                text: action.payload.text,
                rating: action.payload.rating,
                description: action.payload.description,
                isFavorited: action.payload.isFavorited,
            })            
        },
        deleteMovie: (state, action: PayloadAction<string>) =>{            
            state.movies = state.movies.filter(movie => {
                return movie.text != action.payload
            })
        },
        addFavorite: (state, action: PayloadAction<IMovie>) => {            
            for(let i = 0; i < state.movies.length; i++) {
                if (state.movies[i].text === action.payload.text) {
                    state.movies[i].isFavorited = true;                    
                }
            }            
        },
        removeFavorite: (state, action: PayloadAction<IMovie>) => {
            for(let i = 0; i < state.movies.length; i++) {
                if (state.movies[i].text === action.payload.text) {
                    state.movies[i].isFavorited = false;                    
                }
            }            
        },
    }
})

export const { addMovie, deleteMovie, addFavorite, removeFavorite } = movieSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMovies = (state: RootState) => state.movie.movies

export default movieSlice.reducer