import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

export default function MultiActionAreaCard() {
  const [texts, setTexts] = useState([]);
  const fetchData =() => {
      fetch('/api/about', {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
      .then(response => response.json())
      .then(data =>{
          setTexts(data)
      } );
  }
  useEffect(() => {
      // GET request using fetch inside useEffect React hook
      fetchData()
  }, []);
  const getAboutText = () => {
    return(
        <div>
            {texts.map((data, index) => (
                <Card elevation={6} sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="auto"
                      image={data.image}
                      alt="Elyas Kawish"
                    />
                    <CardContent>
                      <Typography  style={{fontFamily: 'nassim', textAlign: 'center', fontWeight: 1000, fontSize: '1.9em'}} gutterBottom variant="h5" component="div">
                        {data.ceo}
                      </Typography>
                      <Typography style={{fontFamily: 'nassim', textAlign: 'center', fontWeight: 800, fontSize: '1.2em'}} variant="body2" color="text.secondary">
                        {data.position}
                      </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
  }
  return (
    getAboutText()
  );
}
