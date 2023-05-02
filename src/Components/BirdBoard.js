import React from 'react'
import { v1 as generateUniqueID } from "uuid";
import BirdCards from "./BirdCards"
import birdData from '../data/birds'

//We are getting the data from birdData and maps over it to create an array of Bird cards, passing each bird's information as props. But I also added a key which equals a UUID.

function BirdBoard() {
  return (
    <div className='birdBoard'>
        <div className='card'>
          {birdData.map((bird) => (
            <BirdCards 
              key =   { generateUniqueID }
              name =  { bird.name }
              id =    { bird.id }
              img =   { bird.img }
              amount = { bird.amount }
              />
            ))}
            <button > Adopt (add onClick) </button>
        </div>
    </div>
  )
}

export default BirdBoard