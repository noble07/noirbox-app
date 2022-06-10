import React from 'react'

import Typography from '@mui/material/Typography'

import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import SideAppBar from './SideAppBar'


/* const messages = [
  {
    id: 1,
    primary: 'Juan Diego',
    secondary: "Estare por el barrio esta semana. Vamos a comer algo?",
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 2,
    primary: 'Profe Metodologias',
    secondary: `Me encanta ver que trabajan tan bien y con trabajos buenos, seguro van a ser excelentes profesionales... los quiero muchooo 😍`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    id: 3,
    primary: 'Manuel',
    secondary: 'Nadie puede reemplazar a Robert',
    person: '/static/images/avatar/2.jpg',
  },
  {
    id: 4,
    primary: 'Proyecto Metodologias',
    secondary: 'Enlace para el chat https://main--jazzy-conkies-2aa3cf.netlify.app/',
    person: '/static/images/avatar/3.jpg',
  },
  {
    id: 5,
    primary: "Restaurante",
    secondary: 'Listo, quedamos para el lunes a las 10am',
    person: '/static/images/avatar/4.jpg',
  },
  {
    id: 6,
    primary: 'Comidas Rapidas',
    secondary: `Pedido mas domicilio 40mil`,
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 7,
    primary: 'Proyecto Azul',
    secondary: `Quedo atento a la nueva versión`,
    person: '/static/images/avatar/1.jpg',
  },
];
 */


const SideBar = () => {
  return (
    <>
      <SideAppBar />
     {/*  <Paper square sx={{ pb: '50px', overflow: 'auto' }} elevation={0} >
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          Inbox
        </Typography>
        <List sx={{ mb: 2 }} >
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper> */}
    </>
  )
}

export default SideBar