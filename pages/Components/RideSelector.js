import tw from "tailwind-styled-components"
import React from "react"
import { useEffect, useState } from "react"





const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {
   

  const carList = [
  {
    imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
    service: 'UberX',
    multiplier: 1,
  },
  {
    imgUrl: 'https://i.ibb.co/YDYMKny/uberxl.png',
    service: 'UberXL',
    multiplier: 1.5,
  },
  {
    imgUrl: 'https://i.ibb.co/Xx4G91m/uberblack.png',
    service: 'Black',
    multiplier: 2,
  },
  {
    imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
    service: 'Comfort',
    multiplier: 1.2,
  },
  {
    imgUrl: ' https://i.ibb.co/1nStPWT/uberblacksuv.png',
    service: 'Black SUV',
    multiplier: 2.8,
  }
]
  const [rideDuration,setRideDuration] = useState(0)

  useEffect(()=>{
   rideDuration  = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoibWFyaXVzNTZzdWNpdSIsImEiOiJjbDZ4eDJnemwwNDFrM2JxbXQ1M2gxcnpkIn0.jSNMRTA2p43SD-TolSyYlA`).then(res=>res.json())
   .then (data =>{
    
    setRideDuration(data.routes[0].duration/100)
  })
    .catch((e) => console.log(e));
  },[pickupCoordinates,dropoffCoordinates]) 

  return (
    <Wrapper>
     <Title>Choose a ride, or swap up for more</Title>
     <CarList>
        {carList.map((car,index)=>(
         <Car key={index}>
         <CarImage src={car.imgUrl}/>
         <CarDetails>
          <Service>{car.service}</Service>
          <Time>5 min away</Time>
         </CarDetails>
         <Price>{'$'+ (rideDuration * car.multiplier).toFixed(2) }</Price>
        </Car>
        ))}
     </CarList>
    </Wrapper>
  )
}

export default RideSelector

const Wrapper = tw.div`
flex-1  overflow-y-scroll flex flex-col
`
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`
const CarList =tw.div`
overflow-y-scroll
`
const Car = tw.div`
   flex p-4 items-center

`
const CarImage = tw.img`
h-14 mr-4
`
const CarDetails= tw.div`
flex-1
`
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-xs text-blue-500
`
const Price= tw.div`
text-sm
`