import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export const CardComponent = ({product}) => {

  return (
    <div>

        {/* card to show data */}

        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <center>
                    <CardMedia
                    component="img"
                    height="200"
                    image={product.image_url}
                    alt="green iguana"
                    style={{height:'250px', width:'50px'}}
                    />
                </center>
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
