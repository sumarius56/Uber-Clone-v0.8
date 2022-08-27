import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
import { useState } from 'react'

const Search = () => {

  const [pickup, setPickup] = useState("")
  const [dropoff, setDropoff] = useState("")

  return (
    <Wrapper>
      <ButtonContainer><Link href="/" > 
       <BackButton className='cursor-pointer hover:rotate-180' src='https://img.icons8.com/ios-filled/50/000000/left.png' />
       </Link>
      </ButtonContainer>
      <InputContainer>
        <From2Icons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png"/>
        </From2Icons>
        <InputBoxes>
          <Input 
          placeholder="Enter pickup location"
          value={pickup}
          onChange={(e)=>setPickup(e.target.value)}
          />
          <Input 
          placeholder="Where to?"
          value={dropoff}
          onChange={(e)=>setDropoff(e.target.value)} 
          />
        </InputBoxes>
        <Plus className="cursor-pointer" src="https://img.icons8.com/ios/50/000000/plus-math.png" />  
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>
      <Link href={{
        pathname: "/confirm",
        query: {
          pickup:pickup,
          dropoff:dropoff,
        }
      }}>
        <ConfirmLocations>Confirm Locations 
        </ConfirmLocations>
      </Link>
      
    </Wrapper>
  )
}

export default Search

const Wrapper = tw.div`
bg-gray-200 h-screen
`
const ButtonContainer = tw.div`
bg-white px=4
`

const BackButton = tw.img`
h-12 cursor-poiner
`
const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2

`
const From2Icons = tw.div`
w-10 flex flex-col mr-2 items-center 
`
const Circle = tw.img`
h-2.5
`
const Line = tw.img`
h-10
`
const Square = tw.img`
h-3
`
const InputBoxes = tw.div`
flex flex-col flex-1 
`
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-4 p-2  outline-none
`
const Plus = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`
const SavedPlaces =tw.div`
flex  items-center bg-white px-4 py-2

`
const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p=2 rounded-full mr-2
`
const ConfirmLocations = tw.div`
bg-black  text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer
`