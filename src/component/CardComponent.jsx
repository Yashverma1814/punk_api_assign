import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export const CardComponent = ({product}) => {
  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={product.image_url}
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <div>{product.tagline}</div>
                    <div>Price :- {product.boil_volume.value}$</div>
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  )
}
