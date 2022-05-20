import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ActionAreaCard(props) {
  return (
    <a href={props.link} >
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="100%"
            image={props.aks}
            alt="Picture"
          />
          <CardContent>
            <Typography style={{fontFamily: 'nassim', textAlign: 'center', fontWeight: 1000, fontSize: '1.9em'}} gutterBottom variant="h5" component="div" >
            {props.text}
            </Typography>
          </CardContent>
      </Card>
    </a>
  );
}
