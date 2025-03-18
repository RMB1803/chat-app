import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import React, { useState } from 'react'
import { VisuallyHiddenInput } from '../componenets/styles/StyledComponents';

function Login() {

  const [isLogin, setIsLogin] = useState(true)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [errors, setErrors] = useState({
    username: "",
    password: ""
  });

  const handleUsernameChange = (e) => {
    const value = e.target.value;

    if (/[^a-zA-Z0-9]/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        username: "Only letters and numbers are allowed",
      }));
    } else {
      setErrors((prev) => ({ ...prev, username: "" }));
    }

    setUsername(value)
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;

    if(value.length < 8) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 8 characters long"
      }))
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }

    setPassword(value);
  }

  const handleLogin = (e) => {
    e.preventDefault()
  }

  const handleRegister = (e) => {
    e.preventDefault()
  }


  return (
    <Container component={'main'} maxWidth='xs' 
    sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Paper elevation={3} sx={{padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '1rem'}}>
            {isLogin ? 
            <>
              <Typography variant='h5'>Login</Typography>

              <form className='w-full mt-4' onSubmit={handleLogin}>
                <TextField 
                  required
                  fullWidth
                  label='Username'
                  margin='normal'
                  variant='outlined'
                  value={username}
                  onChange={handleUsernameChange}
                  error={!!errors.username}
                  helperText={errors.username}
                />

                <TextField 
                  required
                  fullWidth
                  label='Password'
                  type='password'
                  margin='normal'
                  variant='outlined'
                  value={password}
                  onChange={handlePasswordChange}
                  error={!!errors.password}
                  helperText={errors.password}
                />

                <Button 
                variant='contained' 
                type='submit' 
                color='primary' 
                sx={{marginTop:'1rem'}} 
                fullWidth>
                  Login
                </Button>

                <Typography textAlign={'center'} sx={{marginTop:'1rem'}}>OR</Typography>

                <Button 
                variant='text' 
                color='secondary' 
                onClick={() => setIsLogin(false)} 
                fullWidth>
                  Register
                </Button>
              </form>
            </> 
            : 
            <>
              <Typography variant='h5'>Register</Typography>

              <form className='w-full mt-4' onSubmit={handleRegister}>
                <Stack position={'relative'} width={'10rem'} margin={'auto'}>
                  <Avatar sx={{width: '10rem', height: '10rem', objectFit: 'contain'}}/>
                  <IconButton 
                  sx={{
                    position: 'absolute',
                    bottom: "0",
                    right: "0",
                    color: "white",
                    bgcolor: "rgba(0, 0, 0, 0.5)",
                    ":hover": {
                      bgcolor: "rgba(0, 0, 0, 0.7)"
                    }
                  }}
                  component = 'label'>
                    <>
                      <CameraAltIcon />
                      <VisuallyHiddenInput type='file'/>
                    </>
                  </IconButton>
                </Stack>

                <TextField 
                  required
                  fullWidth
                  label='Name'
                  type='text'
                  margin='normal'
                  variant='outlined'
                  value={name}
                  onChange={(e) => {setName(e.target.value)}}
                />

                <TextField 
                  required
                  fullWidth
                  label='Email'
                  type='email'
                  margin='normal'
                  variant='outlined'
                  value={email}
                  onChange={(e) => {setEmail(e.target.value)}}
                />

                <TextField 
                  required
                  fullWidth
                  label='Username'
                  margin='normal'
                  variant='outlined'
                  value={username}
                  onChange={handleUsernameChange}
                  error={!!errors.username}
                  helperText={errors.username}
                />

                <TextField 
                  required
                  fullWidth
                  label='Password'
                  type='password'
                  margin='normal'
                  variant='outlined'
                  value={password}
                  onChange={handlePasswordChange}
                  error={!!errors.password}
                  helperText={errors.password}
                />

                <Button 
                variant='contained' 
                type='submit' 
                color='primary' 
                sx={{marginTop:'1rem'}} 
                fullWidth>
                  Register
                </Button>

                <Typography textAlign={'center'} sx={{marginTop:'1rem'}}>OR</Typography>

                <Button 
                variant='text' 
                color='secondary' 
                onClick={() => setIsLogin(true)} 
                fullWidth>
                  Login
                </Button>
              </form>
           </>
        }
        </Paper>
    </Container>
  )
}

export default Login
