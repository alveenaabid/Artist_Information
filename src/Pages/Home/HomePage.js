import { Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useSelector } from 'react-redux'
import Cards from '../../Components/Cards/Cards'
import SearchBar from '../../Components/SearchBar/SearchBar'
import '../Home/home.css'

const HomePage = () => {
  const artistInfo = useSelector((state) => state.events.artistInfo)
  return (
    <>
      <Container backgroundColor="#EEEDE7">
        <div className="divmain">
          <SearchBar />
        </div>
        {artistInfo.name ? (
          <>
            <h3 style={{ marginTop: 50 }}>
              1 Result found for {artistInfo.name}
            </h3>

            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={4}>
                <Cards data={artistInfo} />
              </Grid>
            </Grid>
          </>
        ) : (

          <div style={{marginTop:"15px"}}>
            No Data Yet
          </div>
          
        )}
      </Container>
    </>
  )
}

export default HomePage
