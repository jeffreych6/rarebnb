import React from "react";
import { NavLink } from "react-router-dom";
import "./FilterBar.css";
import all from "../../../assets/filters/all.png"
import beach from "../../../assets/filters/beach.png"
import boat from "../../../assets/filters/boat.png"
import camper from "../../../assets/filters/camper.png"
import car from "../../../assets/filters/car.png"
import castle from "../../../assets/filters/castle.png"
import cave from "../../../assets/filters/cave.png"
import container from "../../../assets/filters/container.png"
import earthHome from "../../../assets/filters/earth_home.png"
import farm from "../../../assets/filters/farm.png"
import hut from "../../../assets/filters/hut.png"
import tent from "../../../assets/filters/tent.png"
import treehouse from "../../../assets/filters/treehouse.png"
import tower from "../../../assets/filters/tower.png"
import windmill from "../../../assets/filters/windmill.png"

function FilterBar() {
    return (
        <div className="filter-bar">
            <NavLink className="filter-container" to={"/all"}>
                <img className="filter-icon" src={all} />
                <div className="filter-name">All</div>
            </NavLink>

            <NavLink className="filter-container" to={"/boat"}>
                <img className="filter-icon" src={boat} />
                <div className="filter-name">Boat</div>
            </NavLink>

            <NavLink className="filter-container" to={"/camper"}>
                <img className="filter-icon" src={camper} />
                <div className="filter-name">Camper</div>
            </NavLink>

            <NavLink className="filter-container" to={"/car"}>
                <img className="filter-icon" src={car} />
                <div className="filter-name">Car</div>
            </NavLink>

            <NavLink className="filter-container" to={"/castle"}>
                <img className="filter-icon" src={castle} />
                <div className="filter-name">Castle</div>
            </NavLink>

            <NavLink className="filter-container" to={"/cave"}>
                <img className="filter-icon" src={cave} />
                <div className="filter-name">Cave</div>
            </NavLink>

            <NavLink className="filter-container" to={"/container"}>
                <img className="filter-icon" src={container} />
                <div className="filter-name">Container</div>
            </NavLink>

            <NavLink className="filter-container" to={"/earth"}>
                <img className="filter-icon" src={earthHome} />
                <div className="filter-name">Earth Home</div>
            </NavLink>  

            <NavLink className="filter-container" to={"/farm"}>
                <img className="filter-icon" src={farm} />
                <div className="filter-name">Farm</div>
            </NavLink>

            <NavLink className="filter-container" to={"/hut"}>
                <img className="filter-icon" src={hut} />
                <div className="filter-name">Hut</div>
            </NavLink>

            <NavLink className="filter-container" to={"/island"}>
                <img className="filter-icon" src={beach} />
                <div className="filter-name">Island</div>
            </NavLink>

            <NavLink className="filter-container" to={"/tent"}>
                <img className="filter-icon" src={tent} />
                <div className="filter-name">Tent</div>
            </NavLink>

            <NavLink className="filter-container" to={"/treehouse"}>
                <img className="filter-icon" src={treehouse} />
                <div className="filter-name">Treehouse</div>
            </NavLink>

            <NavLink className="filter-container" to={"/tower"}>
                <img className="filter-icon" src={tower} />
                <div className="filter-name">Tower</div>
            </NavLink>

            <NavLink className="filter-container" to={"/windmill"}>
                <img className="filter-icon" src={windmill} />
                <div className="filter-name">Windmill</div>
            </NavLink>
        </div>
    )
}

export default FilterBar
