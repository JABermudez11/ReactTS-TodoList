import { 
    FC, 
    ChangeEvent,
    useState,
    Fragment,
    SyntheticEvent,
} from "react";
import { useDispatch } from "react-redux";
import { IMovie } from '../../models/interfaces';
import { addMovie } from "./movieSlice";

import './movieForm.css'
import { 
    Input,
    InputLabel,
    Alert,
    Snackbar,    
    IconButton,
    Stack,
    TextField,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useAppSelector } from "../../store";


export const NewMovieInput: FC = () => {
    
    const [text, setText] = useState<string>('');
    const [rating, setRating] = useState<number>(0);
    const [description, setDescription] = useState<string>('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);
    const movies = useAppSelector(state => state.movie.movies);
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

    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setDescription(event.target.value);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const newMovie: IMovie = {
          text,
          rating,
          description,
          isFavorited: false,
        }        
        setText('');
        setRating(0);
        setDescription('');        
        setBtnDisabled(true);
        if(!isDuplicate(newMovie)) {
            dispatch(addMovie(newMovie));            
            setOpenSuccess(true);
        } else {
            setOpenError(true)
        }
    }        

    const isDuplicate = (movie: IMovie): boolean => {
        let i = 0;        
        while(i < movies.length){
            if(movies[i].text.toUpperCase() === movie.text.toUpperCase()){
                return true
            }
            i++
        }
        return false
    }

    const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }    
        if(openSuccess) {
            setOpenSuccess(false);        
        } else {
            setOpenError(false);
        }
    };
    
    const action = (
        <Fragment>          
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Fragment>
      );

    return(
        <div>
            <Stack>
                <Snackbar
                    open={openSuccess}
                    autoHideDuration={3000}
                    onClose={handleClose}                                
                    action={action}
                >
                    <Alert 
                        onClose={handleClose}
                        severity="success"
                    >
                        Movied Added!
                    </Alert>
                </Snackbar>
                <Snackbar
                    open={openError}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    action={action}
                >
                    <Alert severity="error">Movie is already in list. Submission Failed</Alert>
                </Snackbar>                                
            </Stack>
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

                    <InputLabel>Description</InputLabel>
                    <TextField 
                        id='description'
                        multiline
                        variant="filled"
                        maxRows={4}
                        value={description || ''}
                        placeholder='Description(optional)..'
                        onChange={handleDescriptionChange}
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