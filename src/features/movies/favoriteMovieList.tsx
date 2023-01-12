import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { IMovie } from '../../models/interfaces';
import { useAppSelector } from '../../store';
import { FavoriteCard } from './favoriteCard';
import { removeFavorite } from './movieSlice';
  

const Favorites = () => {
    
    const favoritesList = useAppSelector(state => state.movie.favorites);
    const dispatch = useDispatch()

    const handleRemove = (favoriteToRemove: string) => {
        dispatch(removeFavorite(favoriteToRemove));
    }


    return (
        <div className='favoritesDiv'>
            <h1>Favorites Page</h1>
            <div className='favoritesList'>
                {
                    favoritesList.length>0 ? 
                        favoritesList.map((favorite: IMovie, key: number) => {
                            return (
                                <FavoriteCard 
                                    key={key}
                                    favorite={favorite}
                                    handleRemove={handleRemove}
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