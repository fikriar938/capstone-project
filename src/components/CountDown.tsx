"use client"
import React, { useEffect } from 'react'
import Countdown from 'react-countdown'


const endingDate = new Date("2024-1-25")

const CountDown = () => {
(
    <Countdown className='font-bold text-5xl text-yellow-300' date={endingDate}/>
  )
}

export default CountDown;



