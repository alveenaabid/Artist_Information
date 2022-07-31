import { useContext, useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Divider, Grid } from '@mui/material'
import { getEvent } from '../../redux/actions/Events'
import moment from 'moment'

const EventCards = (props) => {
  return (
    <>
      <Card sx={{ width: 350, height: 270, marginTop: 3 }}>
        <CardContent>
          <p> EVENT DETAILS</p>
          <Divider />
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item x xs={12} sm={12} md={5}>
              <p > Country</p>
              <p>{props.data.venue.country}</p>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <p>City</p>
              <p>{props.data.venue.city}</p>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <p>Venue</p>
              <p>{props.data.venue.name}</p>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <p>Date</p>
              <p>{moment(props.data.starts_at).format('ll')}</p>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default EventCards
