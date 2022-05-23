import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import MoreIcon from '@mui/icons-material/MoreVert'

const SideAppBar = () => {
  return (
    <AppBar position="relative" color="primary" sx={{ top: 0 }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit">
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default SideAppBar