import React, { useEffect } from "react";
import "./FilterBar.css";
import barn from "../../../assets/filters/barn.png"
import beach from "../../../assets/filters/beach.png"
import boat from "../../../assets/filters/boat.png"
import cabin from "../../../assets/filters/cabin.png"
import camper from "../../../assets/filters/camper.png"
import castle from "../../../assets/filters/castle.png"
import cave from "../../../assets/filters/cave.png"
import dome from "../../../assets/filters/dome.png"
import earthHome from "../../../assets/filters/earth_home.png"
import farm from "../../../assets/filters/farm.png"
import houseboat from "../../../assets/filters/houseboat.png"
import mansion from "../../../assets/filters/mansion.png"
import pool from "../../../assets/filters/pool.png"
import ski from "../../../assets/filters/ski.png"
import treehouse from "../../../assets/filters/treehouse.png"

function FilterBar() {
    return (
        <>
            <div className="filter-container">
                <img className="filter-icon" src={barn} />
                <div className="filter-name">Barn</div>
            </div>

            <div className="filter-container">
                <img className="filter-icon" src={beach} />
                <div className="filter-name">Beach</div>
            </div>

            <div className="filter-container">
                <img className="filter-icon" src={boat} />
                <div className="filter-name">Boat</div>
            </div>

            <div className="filter-container">
                <img className="filter-icon" src={cabin} />
                <div className="filter-name">Cabin</div>
            </div>

            <div className="filter-container">
                <img className="filter-icon" src={camper} />
                <div className="filter-name">Camper</div>
            </div>

            <div className="filter-container">
                <img className="filter-icon" src={castle} />
                <div className="filter-name">Castle</div>
            </div>

            <div className="filter-container">
                <img className="filter-icon" src={cave} />
                <div className="filter-name">Cave</div>
            </div>

            <div className="filter-container">
                <img className="filter-icon" src={dome} />
                <div className="filter-name">Dome</div>
            </div>

            <div className="filter-container">
                <img className="filter-icon" src={earthHome} />
                <div className="filter-name">EarthHome</div>
            </div>

            <div className="filter-container">
                <img className="filter-icon" src={farm} />
                <div className="filter-name">Farm</div>
            </div>

            <div className="filter-container">
                <img className="filter-icon" src={houseboat} />
                <div className="filter-name">Houseboat</div>
            </div>

            <div className="filter-container">
                <img className="filter-icon" src={mansion} />
                <div className="filter-name">Mansion</div>
            </div>

            <div className="filter-container">
                <img className="filter-icon" src={pool} />
                <div className="filter-name">Pool</div>
            </div>

            <div className="filter-container">
                <img className="filter-icon" src={ski} />
                <div className="filter-name">Skiing</div>
            </div>

            <div className="filter-container">
                <img className="filter-icon" src={treehouse} />
                <div className="filter-name">Treehouse</div>
            </div>
 
        </>
    )
}

export default FilterBar
