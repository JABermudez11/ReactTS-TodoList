import { 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    Typography 
} from '@mui/material';

import { IMovie } from '../../models/interfaces';

interface Props {
    movie: IMovie,
    handleRemove(movieNameToRemove: string): void,
    handleFavorite(movieToFavorite: IMovie): void,
}


export const MovieCard = ({movie, handleRemove, handleFavorite}: Props) => {
    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    movie name
                </Typography>
                <Typography variant="h3" component="div">
                    {movie.text}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    rating out of 10
                </Typography>
                <Typography variant="body2">
                    {movie.rating}
                </Typography>
                <Typography color="text.secondary">
                    Description
                </Typography>
                <Typography >
                    {
                        movie.description?
                            movie.description:
                            <h4>No Description added</h4>
                    }
                </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Button size="small"
                    onClick={()=>handleFavorite(movie)}
                >
                    Favorite
                </Button>
                <Button size="small"
                    onClick={()=>handleRemove(movie.text)}
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}