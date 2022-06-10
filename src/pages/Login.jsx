import { useContext, useEffect } from 'react'

import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import { Link as LinkRouter, useNavigate } from "react-router-dom"

import Copyright from '../Components/Copyright'
import { useForm } from '../hooks/useForm'
import { user } from '../db/gun-db'
import { searchContext } from '../utils/searchContext'
import { actions } from '../utils/actions'

const Login = () => {

  const navigate = useNavigate()
  const {dispatch} = useContext(searchContext)
  const { form, nickname, password, handleChange } = useForm({
    nickname: '',
    password: ''
  })

  useEffect(() => {
    if(user.is) navigate('/')
  }, [])

  const handleSubmit = async(e) => {
    e.preventDefault()
    navigate('/')
    console.log(form)

    user.auth(nickname, password, ({ err }) =>
     err 
     ? alert(err) 
     : dispatch({ 
        type: actions.setUser,
        payload: nickname
      })
    )

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
            Ingresar
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresa
            </Button>
            <Grid container>
              <Grid item>
                <Link component={LinkRouter} to="/signin" variant="body2">
                  {"¿No tienes una cuenta? Registrate"}
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

export default Login