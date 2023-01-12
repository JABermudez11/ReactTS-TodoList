import React, { 
    FC, 
    ChangeEvent,
    useState,
} from "react";
import { useDispatch } from "react-redux";
import { IMovie } from '../../models/interfaces';
import { addMovie } from "./movieSlice";


export const NewMovieInput: FC = () => {
    
    const [text, setText] = useState<string>('');
    const [rating, setRating] = useState<number>(0);    
    const dispatch = useDispatch()

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setText(event.target.value);
    }

    const handleRatingChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setRating(Number(event.target.value));
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const newMovie: IMovie = {
          text,
          rating,
        }        
        setText('');
        setRating(0);
        dispatch(addMovie(newMovie));        
    }    

    return(
        <div>
            <form>
                <div className='inputContainer'>
                    <input 
                    type='text' 
                    placeholder='text..'          
                    name='text'          
                    value={text || ''}
                    onChange={handleTextChange}
                    />
                    <input 
                    type='number' 
                    placeholder='rating..'          
                    name='rating'
                    value={rating || 0}
                    onChange={handleRatingChange}
                    />
                </div>
                <button 
                    type='submit'
                    onClick={handleSubmit}
                >Submit
                </button>
            </form>
        </div>
    )
}