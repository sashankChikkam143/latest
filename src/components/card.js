import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345,ml:4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={props.image}
          alt="Sedan"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
        {props.details.map((detail) => 
            <Typography variant="body2" color="text.primary">
            {detail}
            </Typography>
        )}
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="=+918522058851"><Button variant="contained">CALL US</Button></a>
      </CardActions>
    </Card>
  );
}