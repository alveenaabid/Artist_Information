import { useContext, useEffect } from 'react'
import { Container } from '@mui/material'
import backarrow from '../../Assets/icons/backarrow.svg'
import '../Events/events.css'
import Cards from '../../Components/Cards/Cards'
import EventCards from './EventCards'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getEvent } from '../../redux/actions/Events'

const EventsPage = () => {
  const dispatch = useDispatch()
  const events = useSelector((state) => state.events.events)
  const artistInfo = useSelector((state) => state.events.artistInfo)

  useEffect(() => {
    dispatch(getEvent(artistInfo.name))
  }, [artistInfo])

  const navigate = useNavigate()
  return (
    <>
      <Container backgroundColor="#EEEDE7">
        <div className="main-div">
          <img
            className="arrow-icon"
            src={backarrow}
            onClick={() => {
              navigate('/')
            }}
          />
          <h3>Back to results {/* {userDetail.name} */}</h3>
        </div>

        <Cards data={artistInfo} />

        <h3 style={{ marginTop: 50 }}>
          {events ? events.length : 0} upcoming events {/* {userDetail.name} */}
        </h3>

        <Grid container spacing={1}>
          {events
            ? events.map((value, index) => (
                <Grid item xs>
                  <EventCards data={value} />
                </Grid>
              ))
            : ''}
        </Grid>
      </Container>
    </>
  )
}

export default EventsPage
