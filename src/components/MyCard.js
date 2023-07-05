import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import imageUrl from '../data/card-images/frete.png'

export default function MyCard({ item }) {
    const path = item.image;
    return (
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            {/* <img src={require(path)} /> */}
            <CardMedia
                component="div"
                sx={{
                    // 16:9
                    pt: '80.25%',
                }}
                image={item.image}
            />            
            <CardContent sx={{ flexGrow: 1, height: 150 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                </Typography>
                <Typography>
                    {item.description}
                </Typography>
            </CardContent>
        </Card>
    )
}
