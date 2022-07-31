import { useContext, useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import { Avatar } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Cards = (props) => {
  const navigate = useNavigate()
  return (
    <>
      <Card sx={{ maxWidth: 350, height: 127 }}>
        <CardContent>
          <div
            style={{
              display: 'flex',
              marginBottom: 20,
              alignItems: 'center',
              paddingTop: 20,
            }}
          >
            <div>
              {props.data.image_url ? (
                <img
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 30,
                  }}
                  src={props.data.image_url}
                />
              ) : (
                <Avatar
                  sx={{
                    height: 50,
                    width: 50,
                    fontSize: 20,
                    background: 'grey',
                  }}
                ></Avatar>
              )}
            </div>
            <div style={{ marginLeft: '10px' }}>
              <a
                style={{ marginTop: '10px', cursor: 'default' }}
                onClick={() => {
                  navigate('/events')
                }}
              >
                {props.data.name}
              </a>
              <br />
              <a
                style={{ cursor: 'default' }}
                onClick={() => {
                  navigate('/events')
                }}
              >
                {props.data.facebook_page_url}
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default Cards
