import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Typography from '@material-ui/core/Typography';

export default function IconLabelButtons(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button href={props.link} style={{backgroundColor: '#EEEEEE', color: '#fff!important', width: '17em'}} variant={props.type} startIcon={<ShoppingCartOutlinedIcon style={{ fontSize: '2em'}} />}>
      &nbsp;
        <Typography variant='button' size="large" style={{fontFamily: 'nassim', fontSize: '1.4em', color: '#fff!important'}} >
            خرید {props.text}
        </Typography>
      </Button>
    </Stack>
  );
}