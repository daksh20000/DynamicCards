import RestrauntCard from "./Restrauntcard"
import resList from "../utils/mockData"
import { useState, useEffect } from "react"

const Body = ()=>{
    
    const [RES_DYNAMIC_DATA, setRES_DYNAMIC_DATA] = useState(resList)
    useEffect(
        ()=>{
            fetchData()
        },[]
    )
    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            )
            const json = await data.json()
            console.log(json);
            setRES_DYNAMIC_DATA(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredRating = RES_DYNAMIC_DATA.filter(
                        (res)=>(res.info.avgRating > 4));
                        setRES_DYNAMIC_DATA(filteredRating)
                        
                }}>
                    Top Rated Restraunts
                </button>
            </div>
            <div className="res-container">
                {RES_DYNAMIC_DATA.map((eachRestrauntNum)=>(
                <RestrauntCard key = {eachRestrauntNum.info.id} resData= {eachRestrauntNum}/>
                ))}
            </div>
        </div>
    )
}

export default Body