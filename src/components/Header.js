import { useState } from "react"
import { LOGO_URL } from "../utils/constants"

const Header = ()=>{
    let [login, setlogin] = useState("Login")
    return(
        <div className="header">
            <div className="logo-container">
                <img className="header-logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Orders</li>
                    <li>Cart</li>
                    <button onClick={()=>{
                        login==="Login" ? setlogin("Logout") : setlogin("Login")
                    }}> {login}</button>
                </ul>
            </div>
        </div>     
    )
}

export default Header