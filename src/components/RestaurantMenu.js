import React from 'react'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'
import { CDN_IMAGE_URL, RES_MENU_URL } from '../utils/constants'
// import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {
    const[resInfo , setResInfo] = useState(null)
    // const {resId} = useParams()

    useEffect(()=>{
        fetchMenu()
    },[])
    const fetchMenu= async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=435207&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json()
        setResInfo(json.data)  
    }
    if (resInfo===null) {
        return <Shimmer/>
    }

    const{name, cloudinaryImageId, costForTwoMessage, areaName, avgRating, cuisines } = resInfo.cards[0].card.card.info;
    const{itemCards} = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    

  return (
    <div>

        <h1>{name}</h1>
        <img src = {CDN_IMAGE_URL + cloudinaryImageId } />
        <h3>{cuisines.join(", ")} :- {costForTwoMessage}</h3>
        <h4>{avgRating}</h4>
        <h5>{areaName}</h5>
        <h4>{itemCards.map(items=> <li>{items.card.info.name}</li>
        )}</h4>

    </div>
  )
}

export default RestaurantMenu