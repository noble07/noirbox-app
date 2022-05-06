import { Grid } from '@mui/material'
import ChatContent from '../Components/ChatContent'
import ChatHeader from '../Components/ChatHeader'
import ChatInput from '../Components/ChatInput'
import SideBar from '../Components/SideBar'

const Home = () => {
  return (
    <>
      <Grid container >
        <Grid item xs={3} >
          <SideBar />
        </Grid>
        <Grid item xs={9} >
          <ChatHeader />
          <ChatContent />
          <ChatInput />
        </Grid>
      </Grid>
    </>
  )
}

export default Home