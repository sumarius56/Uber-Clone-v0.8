import { useEffect,useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'
import Map from './Components/Map'
import Link from 'next/link'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'




export default function Home() {

  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(()=>{
    return onAuthStateChanged(auth, user =>{
      if (user){
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      } else {
        setUser(null)
        router.push('/login')
      }
    })

  },[])

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/> 
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage src="https://upload.wikimedia.org/wikipedia/ro/thumb/7/78/Trollface.svg/1200px-Trollface.svg.png" onClick={()=> signOut(auth)} />  
          </Profile>
        </Header>
        <InputButton className='bg-gray-300 tracking-widest rounded-lg'>
        Where to?
        </InputButton>
        <ActionButtons className='mt-10'>
         <Link href="/search" > 
          <ActionButton className='mx-5 rounded-lg  tracking-widest bg-gray-300'><ActionButtonImage src='https://i.ibb.co/cyvcpfF/uberx.png' />
            Ride</ActionButton>
         </Link>   
          <ActionButton className='mx-5 rounded-lg tracking-widest bg-gray-300'><ActionButtonImage src='https://i.ibb.co/n776JLm/bike.png' />
            2-Wheels</ActionButton>
          <ActionButton className='mx-5 rounded-lg tracking-widest  bg-gray-300'><ActionButtonImage src='https://i.ibb.co/5RjchBg/uberschedule.png' />
            Reserve</ActionButton>
        </ActionButtons>
       
      </ActionItems>
    </Wrapper>
  )
}
const Wrapper = tw.div`
flex flex-col  h-screen
`

const ActionItems = tw.div`
flex-1 p-4
`
const Header = tw.div`
flex justify-between items-center
`
const UberLogo =tw.img`
h-28 
`
const UserImage = tw.img`
h-12 w-12 rounded-full border-gray-200 p-px cursor-pointer mr-[4px]
`
const Name = tw.div`
mr-4 w-20 text-sm
`
const Profile = tw.div`
flex items-center 
`
const ActionButtons = tw.div`
flex cursor-pointer 
`
const ActionButton = tw.div`
bg-gray-200 flex-1 m-1 shadow-xl  h-[8rem] items-center cursor:pointer flex flex-col justify-center rounded-lg transform hover:scale-105 hover:text-orange-500 transition text-xl
`
const ActionButtonImage = tw.img`  tracking-widest
h-3/5
`
const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 shadow-xl  

`