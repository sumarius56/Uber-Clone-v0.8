import React from 'react'
import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaXVzNTZzdWNpdSIsImEiOiJjbDZ4eDJnemwwNDFrM2JxbXQ1M2gxcnpkIn0.jSNMRTA2p43SD-TolSyYlA'

const Map = (props) => {   
     useEffect(() => {
      const map = new mapboxgl.Map({
         container: 'map',
         style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
         center: [46.7712, 23.6236],
         zoom: 3,
       })
         if(props.pickupCoordinates){
            addToMap(map, props.pickupCoordinates)
         }
         if(props.dropoffCoordinates){
            addToMap(map, props.dropoffCoordinates)
         }

         if (props.pickupCoordinates, props.dropoffCoordinates){
            map.fitBounds([
               props.dropoffCoordinates,
               props.pickupCoordinates
            ],{
               padding: 60
            })
         }

       }, [props.pickupCoordinates, props.dropoffCoordinates])

  const addToMap = (map, coordinates) => {
         const marker1 = new mapboxgl.Marker()
               .setLngLat(coordinates)
               .addTo(map);
  }     
 
  


  return <Wrapper id='map'></Wrapper>
}

export default Map
const Wrapper = tw.div`
   flex-1 h-1/2
`