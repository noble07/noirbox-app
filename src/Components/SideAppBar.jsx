import { useState } from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MoreIcon from '@mui/icons-material/MoreVert'
import { Menu, MenuItem, TextField, Typography } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import InboxIcon from '@mui/icons-material/Inbox';

import { db, user } from '../db/gun-db'
import { useContext } from 'react'
import { searchContext } from '../utils/searchContext'
import { actions } from '../utils/actions'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    }
  },
})

const SideAppBar = () => {

  const {dispatch} = useContext(searchContext)
  const [anchorEl, setAnchorEl] = useState(null)
  const [searchResult, setSearchResult] = useState([])
  const [value, setValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    user.leave()
    dispatch({
      type: actions.logout
    })
    navigate('/login')
  }

  return (
    <AppBar position="relative" color="primary" sx={{ top: 0 }}>
      <Toolbar>
        <InboxIcon  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, alignItems: 'center' }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            fontSize: 14
          }}
        >
          NoirBox
        </Typography>

        <Autocomplete
          freeSolo
          options={searchResult.map((option) => option)}
          sx={{ flex: '1 0 auto', color: 'white' }}
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue)
            dispatch({
              type: actions.setSearch,
              payload: newValue
            })
          }}
          inputValue={inputValue}
          onInputChange={async (_, newInputValue) => {
            db.get(`~@${newInputValue}`)
            .once(async(data, key)=>{
              if (data) {
                setSearchResult(result => !result.find(res => res === key) ? [key, ...result] : result)
              }
            })
            setInputValue(newInputValue)
          }}
          renderInput={(params) => (
            <CssTextField
              size="small"
              id="search"
              name="search"
              label="Search"
              {...params}
              sx={{
                marginRight: '1rem'
              }}
              fullWidth
              InputLabelProps={{
                style: { color: 'white' }
              }}
            />
          )}
        />

        <IconButton onClick={handleMenu} color="inherit" >
          <MoreIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>

      </Toolbar>
    </AppBar>
  )
}

export default SideAppBar