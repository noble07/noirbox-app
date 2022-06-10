import { useEffect } from 'react'

import { Link as LinkRouter, useNavigate } from 'react-router-dom'

import { useForm } from '../hooks/useForm'

import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import { singinValidation } from '../utils/validations'
import { user } from '../db/gun-db'

import Copyright from '../Components/Copyright'

const Signin = () => {

  const navigate = useNavigate()
  const { form, nickname, birthday, password, password2, handleChange } = useForm({
    nickname: '',
    birthday: '',
    password: '',
    password2: ''
  })

  useEffect(() => {
    if(user.is) navigate('/')
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!singinValidation(form)) return

    user.create(nickname, password, ({ err }) => {
      if (err) {
        alert(`GUN: ${err}`);
      } else {
        navigate('/login')
      }
    })
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrate
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="nickname"
              label="Usuario"
              name="nickname"
              autoComplete="nickname"
              autoFocus
              value={nickname}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="birthday"
              label="Fecha de nacimiento"
              type="date"
              id="birthday"
              InputLabelProps={{
                shrink: true,
              }}
              value={birthday}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password2"
              label="Repite la contraseña"
              type="password"
              id="password2"
              autoComplete="current-password"
              value={password2}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar
            </Button>
            <Grid container>
              <Grid item>
                <Link component={LinkRouter} to="/login" variant="body2">
                  {"¿Tienes unas cuenta? Ingresa"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </>
  )
}

export default Signin