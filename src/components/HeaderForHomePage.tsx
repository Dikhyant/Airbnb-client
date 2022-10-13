import React from "react";
import "../style/HeaderForHomePage.css";

import AirbnbLogo from "../Logo/Airbnb_logo.svg";
import SearchIcon from "../icons/Search_icon.svg";
import GlobeIcon from "../icons/Globe_icon.svg";
import HamburgerIcon from "../icons/Hamburger_icon.svg";

export default class HeaderForHomePage extends React.Component {
    render(): React.ReactNode {
        return (
            <header>
                <div className="header-homepage-1">
                    <div style={{flex: 1}}>
                        <div className="logo-wrapper">
                            <img src={AirbnbLogo} alt="Airbnb" style={{width: "2vw"}} />
                            <span style={{color: "#ff385c" , fontWeight: "700", fontSize: "1.5em"}}>airbnb</span>
                        </div>
                    </div>
                    <div style={{flex: 1}} className="search-tool-wrapper">
                        <div className="search-tool">
                            <div style={{flex: 3.6, fontWeight: 600, color: "#484848"}} className="text-wapper" >Anywhere</div>
                            <div style={{flex: 3.8, fontWeight: 600, color: "#484848"}} className="text-wapper any-week-text" >Any week</div>
                            <div style={{flex: 3.6, color: "#717171"}} className="text-wapper" >Add guest</div>
                            <div style={{flex: 1}} className="search-btn-wrapper">
                                <div className="search-btn">
                                    <img src={SearchIcon} alt="/" className="search-icon" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div style={{flex: 1}} className="profile-control-section">
                        <div style={{flex: 4}} className="become-a-host-btn-wrapper" >
                            <div className="become-a-host-btn" ><p>Become a host</p></div>
                        </div>
                        <div style={{flex: 1}}>
                            <img src={GlobeIcon} alt="" style={{width: "1.2vw"}} />
                        </div>
                        <div style={{flex: 2}}>
                            <div>
                                <img src={HamburgerIcon} alt="" />
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="header-homepage-2"></div>
            </header>
        )
    }
}