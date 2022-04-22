import { Grid } from '@mui/material'
import SideBar from '../Components/SideBar'

const Home = () => {
  return (
    <>
      <Grid container >
        <Grid item xs={3} >
          <SideBar />
        </Grid>
        <Grid item xs={9} >
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut et molestiae reprehenderit maiores voluptate magnam perferendis tempora? Blanditiis saepe, consequatur nostrum provident quaerat ipsa, tempora molestiae illo quod, repudiandae placeat doloribus aliquam! Debitis, at! Eum perferendis eaque tenetur nam vero, ad exercitationem doloremque explicabo laboriosam maxime natus esse minus.</p>
        </Grid>
      </Grid>
    </>
  )
}

export default Home