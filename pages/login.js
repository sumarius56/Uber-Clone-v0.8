import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { onAuthStateChanged, getAuth, GoogleAuthProvider, signInWithPopup}  from 'firebase/auth'
import {auth, provider } from '../firebase'



const Login = () => {

 const router = useRouter()

 useEffect(()=>{
  onAuthStateChanged(auth, user => {
    if (user){
     router.push('/')
    }
  })
 })

  return (
   <Wrapper>
    <UberLogo src='https://i.ibb.co/n6LWQM4/Post.png' />
    <Title>Log in to access your account</Title>
    <HeadImage className='h-[30rem]' src="https://i.ibb.co/CsV9RYZ/login-image.png" />
    <SingInButton onClick={()=> signInWithPopup(auth, provider)}>Sing in with Google</SingInButton>
   </Wrapper>
  )
}

export default Login

const Wrapper=tw.div`
flex flex-col h-screen bg-gray-200 w-[95%] p-4 mx-auto 
`
const SingInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full cursor-pointer
`
const UberLogo = tw.img`
h-20 w-auto object-contain self-start mr-4
`
const Title = tw.div`
text-5xl pt-4 gray-500
`
const HeadImage = tw.img`
object-contain w-full 
`