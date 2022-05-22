import React, { useRef } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import './Style.css';
import Swal from 'sweetalert2'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  notchedOutline: {
    borderColor:  '#001527 !important',
    borderWidth: '1.1px !important',
  },
  input: {
      fontFamily: 'nassim !important '
  }
}));


export default function SignUp() {
  const classes = useStyles();
  const form = useRef();  
  const { register, errors, handleSubmit } = useForm();
  const Swal = require('sweetalert2')
  const Toast = Swal.mixin({
    toast: true,
    width: 600,
    position: 'bottom-left',
    color: '#112D4E',
    background: '#fff',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  const onSubmit = (data, event) => {
    event.preventDefault();
    
    emailjs.sendForm('service_8fow9lg', 'Contact', form.current, 'xi7-WnVPounMRePRq')
    // emailjs.sendForm('service_t9iih4j', 'Contact', form.current, 'erfixir-OJPouYs8M')
      .then((result) => {
        Toast.fire({
          icon: 'success',
          title: `<p style={{fontFamily: 'vazir', textAlign: 'justify', fontSize: '11px'}}>پیام شما دریافت شد.</p>`
        })
      }, (error) => {
        Toast.fire({
          icon: 'warning',
          title: `<p style={{fontFamily: 'vazir', textAlign: 'justify', fontSize: '11px'}}>لطفاً دوباره کوشش کنید.</p>`
        })
      });
      event.target.reset();
  }
  return (
    <Container id={'form'} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h2" variant="h5">
        <div className='titr'>
            <div>فورم تماس</div>
        </div>
        </Typography>
        {/* <form ref={form} onSubmit={sendEmail} className={classes.form} noValidate> */}
        <form ref={form} onSubmit={handleSubmit(onSubmit)} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                InputProps={{
                    classes: {
                    notchedOutline: classes.notchedOutline,
                    input: classes.input
                    }
                }}
                name="firstName"
                variant="outlined"
                inputRef={register({
                  required: <Typography variant='button' className='nassim' >
                  لطفاً نام تان را درج کنید.
                  </Typography>,
                })}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName?.message}
                required
                fullWidth
                id="firstName"
                label={
                    <Typography variant='button' className='nassim' >
                                  نام
                    </Typography>}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                InputProps={{
                    classes: {
                    notchedOutline: classes.notchedOutline,
                    input: classes.input
                    }
                }}
                variant="outlined"
                required
                inputRef={register({
                  required: <Typography variant='button' className='nassim' >
                  لطفاً تخلص تان را درج کنید.
                  </Typography>,
                })}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName?.message}
                fullWidth
                id="lastName"
                label={
                    <Typography variant='button' className='nassim' >
                                  تخلص
                    </Typography>}
                name="lastName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputProps={{
                    classes: {
                    notchedOutline: classes.notchedOutline,
                    input: classes.input
                    }
                }}
                variant="outlined"
                required
                fullWidth
                inputRef={register({
                  required: <Typography variant='button' className='nassim' >
                  لطفاً  ایمیل آدرس تان را درج کنید.
                  </Typography>,
                })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                id="email"
                label={
                    <Typography variant='button' className='nassim' >
                                 ایمیل آدرس
                    </Typography>}
                name="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputProps={{
                    classes: {
                    notchedOutline: classes.notchedOutline,
                    input: classes.input
                    }
                }}
                variant="outlined"
                required
                fullWidth
                name="phonenumber"
                label={<Typography variant='button' className='nassim'>
                 شماره تماس 
                </Typography>}
                type="tel"
                inputRef={register({
                  required: <Typography variant='button' className='nassim' >
                  لطفاً شماره تماس تان را درج کنید.
                  </Typography>,
                })}
                error={Boolean(errors.phonenumber)}
                helperText={errors.phonenumber?.message}
                id="phonenumber"
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                InputProps={{
                    classes: {
                    notchedOutline: classes.notchedOutline,
                    input: classes.input
                    }
                }}
                variant="outlined"
                multiline
                rows={4}
                required
                fullWidth
                name="message"
                inputRef={register({
                  required: <Typography variant='button' className='nassim' >
                  لطفاً پیام تان را درج کنید.
                  </Typography>,
                })}
                error={Boolean(errors.message)}
                helperText={errors.message?.message}
                label={<Typography variant='button' className='nassim'>
                 پیام 
                </Typography>}
              />
              </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{backgroundColor: '#3F72AF', marginTop: '2em'}}
          >
          {
            <Typography variant='h6' className='nassim' style={{fontWeight: 'bold'}}>
                         ارسال 
            </Typography>}
          </Button>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}
