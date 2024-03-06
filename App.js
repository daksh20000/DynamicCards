import React from "react"
import ReactDOM from "react-dom"

/**
 *Header
 *-logo
 *-nav items
 *Body
 * -Search
 * -Reastraunt Container
 * 
 * 
 * 
 * 
 * 
 * 
 */
// *********************************DATA******************************

const resObj = {
    "info": {
      "id": "649626",
      "name": "Mehfil",
      "cloudinaryImageId": "ea5e6f3521a1b76de25f43be8b43b4bd",
      "locality": "J Block ",
      "areaName": "Rajouri Garden",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Seafood",
        "Snacks",
        "Tandoor"
      ],
      "avgRating": 4.2,
      "parentId": "637",
      "avgRatingString": "4.2",
      "totalRatingsString": "50+",
      "sla": {
        "deliveryTime": 40,
        "lastMileTravel": 7.1,
        "serviceability": "SERVICEABLE",
        "slaString": "40 mins",
        "lastMileTravelString": "7.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-07 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-944dc0ee-2f7c-4b10-95f5-8b883093a7f0"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mehfil-j-block-rajouri-garden-delhi-649626",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }







const Header = ()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="header-logo" src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Orders</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
        
    )
}

const RestrauntCard1 = (props)=>{
    const{resData} = props
    return (
        <div className="res-card1">
            
            <img className= "resCard-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId}  alt="food photo"/>
            

            <div className="card-text">
            <h3> {resData.info.name}</h3>
            <h4 className="cuisine">{resData.info.cuisines.join(", ")}</h4>
            <h4>   {resData.info.avgRating} </h4>
            <h4>5 mins away</h4>
            </div>
        </div>
    )
}


const Body = ()=>{
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestrauntCard1
                resData = {resObj}
                />
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return (<div className="app">
        <Header/>
        <Body/>
    </div>)
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)