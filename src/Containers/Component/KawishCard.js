import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

export default function MultiActionAreaCard() {
  const [texts, setTexts] = useState([]);
  const fetchData =() => {
      fetch('/api/author', {
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

  const getAuthorPicture = () => {
      return(
          <div>
              <Card elevation={6} sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="400vh"
                  image={texts.image}
                  alt="Noorul Haq Kawish"
                />
                <CardContent>
                    <Typography style={{fontFamily: 'nassim', textAlign: 'center', fontWeight: 1000, fontSize: '1.9em'}} gutterBottom variant="h5" component="div">
                    {texts.fullName}
                    </Typography>
                </CardContent>
              </Card>
          </div>
      )
  }
  return (
    getAuthorPicture()
  );
}
