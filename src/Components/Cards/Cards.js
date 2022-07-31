import { useContext, useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import { Avatar } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import '../Cards/card.css'
const Cards = (props) => {
  const navigate = useNavigate()
  return (
    <>
      <Card className="card">
        <CardContent>
          <div
           className="cardcontentdiv"
          >
            <div>
              {props.data.image_url ? (
                <img
                className='img'
                  src={props.data.image_url}
                />
              ) : (
                <Avatar
                 className='img'
                ></Avatar>
              )}
            </div>
            <div style={{ marginLeft: '10px' }}>
              <a
                style={{ marginTop: '10px' }} className="paragrapghs"
                onClick={() => {
                  navigate('/events')
                }}
              >
                {props.data.name}
              </a>
              <br />
              <a
                className='paragrapghs'
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
