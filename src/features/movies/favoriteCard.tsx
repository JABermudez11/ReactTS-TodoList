import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { IMovie } from '../../models/interfaces';

interface Props {
    favorite: IMovie,
    handleRemove(movieNameToRemove: string): void,    
}

export const FavoriteCard = ({favorite, handleRemove}: Props) => {
    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    movie name
                </Typography>
                <Typography variant="h3" component="div">
                    {favorite.text}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    rating out of 10
                </Typography>
                <Typography variant="body2">
                    {favorite.rating}
                </Typography>
                <Typography color="text.secondary">
                    Description
                </Typography>
                <Typography >
                    {
                        favorite.description?
                            favorite.description:
                            <h4>No Description added</h4>
                    }
                </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex'}}>
                <Button size="small"
                    onClick={()=>handleRemove(favorite.text)}
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}