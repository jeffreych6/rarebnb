import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
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
        <div className="filter-bar">
            <NavLink className="filter-container" to={"/all"}>
                <img className="filter-icon" src={pool} />
                <div className="filter-name">All</div>
            </NavLink>

            <NavLink className="filter-container" to={"/barnboatcabincampercastlecavedomeearthfarmhouseboatislandmansionpoolsktreehousecartowerhutentirehomevilla"}>
                <img className="filter-icon" src={barn} />
                <div className="filter-name">Barn</div>
            </NavLink>

            <NavLink className="filter-container" to={"/boat"}>
                <img className="filter-icon" src={boat} />
                <div className="filter-name">Boat</div>
            </NavLink>

            <NavLink className="filter-container" to={"/cabin"}>
                <img className="filter-icon" src={cabin} />
                <div className="filter-name">Cabin</div>
            </NavLink>

            <NavLink className="filter-container" to={"/camper"}>
                <img className="filter-icon" src={camper} />
                <div className="filter-name">Camper</div>
            </NavLink>

            <NavLink className="filter-container" to={"/castle"}>
                <img className="filter-icon" src={castle} />
                <div className="filter-name">Castle</div>
            </NavLink>

            <NavLink className="filter-container" to={"/cave"}>
                <img className="filter-icon" src={cave} />
                <div className="filter-name">Cave</div>
            </NavLink>

            <NavLink className="filter-container" to={"/dome"}>
                <img className="filter-icon" src={dome} />
                <div className="filter-name">Dome</div>
            </NavLink>

            <NavLink className="filter-container" to={"/earthHome"}>
                <img className="filter-icon" src={earthHome} />
                <div className="filter-name">Earth Home</div>
            </NavLink>  

            <NavLink className="filter-container" to={"/farm"}>
                <img className="filter-icon" src={farm} />
                <div className="filter-name">Farm</div>
            </NavLink>

            <NavLink className="filter-container" to={"/houseboat"}>
                <img className="filter-icon" src={houseboat} />
                <div className="filter-name">Houseboat</div>
            </NavLink>

            <NavLink className="filter-container" to={"/island"}>
                <img className="filter-icon" src={beach} />
                <div className="filter-name">Island</div>
            </NavLink>

            <NavLink className="filter-container" to={"/mansion"}>
                <img className="filter-icon" src={mansion} />
                <div className="filter-name">Mansion</div>
            </NavLink>

            <NavLink className="filter-container" to={"/ski"}>
                <img className="filter-icon" src={ski} />
                <div className="filter-name">Skiing</div>
            </NavLink>

            <NavLink className="filter-container" to={"/treehouse"}>
                <img className="filter-icon" src={treehouse} />
                <div className="filter-name">Treehouse</div>
            </NavLink>
        </div>
    )
}

export default FilterBar
