import { 
    FC, 
    ChangeEvent,
    useState,
} from "react";
import { useDispatch } from "react-redux";
import { IMovie } from '../../models/interfaces';
import { addMovie } from "./movieSlice";

import './movieForm.css'
import { 
    Input,
    InputLabel
} from "@mui/material";


export const NewMovieInput: FC = () => {
    
    const [text, setText] = useState<string>('');
    const [rating, setRating] = useState<number>(0);    
    const [btnDisabled, setBtnDisabled] = useState(true);
    const dispatch = useDispatch()

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {   
        if (event.target.value.length > 0) {
            setBtnDisabled(false);
        } else {
            setBtnDisabled(true);
        }
        setText(event.target.value);
    }

    const handleRatingChange = (event: ChangeEvent<HTMLInputElement>): void => {        
        if (Number(event.target.value) > 0) {
            setBtnDisabled(false);
        }
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
        setBtnDisabled(true)        
        dispatch(addMovie(newMovie));        
    }        

    return(
        <div>
            <form>
                <div className='inputContainer'>
                    <InputLabel>Movie Title</InputLabel>
                    <Input 
                    type='text' 
                    placeholder='text..'          
                    name='text'          
                    value={text || ''}
                    onChange={handleTextChange}
                    />
                    
                    <InputLabel>Rating</InputLabel>
                    <Input 
                    type='number'                               
                    name='rating'
                    inputProps={{min: 1, max: 10}}
                    value={rating || 0}
                    onChange={handleRatingChange}                    
                    />
                </div>
                <button 
                    type='submit'
                    disabled={btnDisabled}
                    onClick={handleSubmit}
                >Submit
                </button>
            </form>
        </div>
    )
}