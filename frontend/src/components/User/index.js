import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as usersActions from "../../store/users";
import incomeTaxCalculator from "../../assets/income_tax_calculator.png"
import chooseYourNews from "../../assets/choose_your_news.png"

import "./index.css";

function User() {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const user = useSelector(usersActions.getUser(userId))

    useEffect(() => {
        dispatch(usersActions.fetchUser(userId))
    },[dispatch, userId])

    if (!user) {
        return null;
    }

    return (
        <>
            <div className="user-show-page-container">
                <div className="user-show-left-container">
                    <div className="user-show-left-box">
                            <div className="user-show-profile-container">
                                <img className="user-show-profile"src={user.photoUrl} />
                            </div>
                            <div className="user-show-left-upper-bullets">
                                <i class="fa-regular fa-star"></i>
                                <h1>Superhost</h1>
                            </div>
                            <div className="user-show-left-upper-bullets">
                            <i class="fa-solid fa-laptop"></i>
                                <h1>Software Engineer</h1>
                            </div>
                            <div className="user-show-left-upper-bullets">
                            <i class="fa-solid fa-check"></i>
                                <h1>Identity verified</h1>
                            </div>
                            <div className="user-show-left-divider"></div>
                            <div className="user-show-left-lower-title">
                                {user.firstName} confirmed
                            </div>
                            <div className="user-show-left-lower-bullets">
                                <i class="fa-solid fa-check"></i>
                                <h1>Identity</h1>
                            </div>
                            {user.id === 2 ? 
                            <>
                                <div className="user-show-left-lower-bullets">
                                    <i class="fa-solid fa-check"></i>
                                    <a href = "mailto: jeffreych6@gmail.com">Email address</a>
                                </div>
                                <div className="user-show-left-lower-bullets">
                                    <i class="fa-solid fa-check"></i>
                                    <a href="tel: 6466441749">Phone number</a>
                                </div>
                                <div className="user-show-left-lower-bullets">
                                    <i class="fa-solid fa-check"></i>
                                    <a href="https://www.jeffreycheng.dev/">Portfolio</a>
                                </div>
                                <div className="user-show-left-lower-bullets">
                                    <i class="fa-solid fa-check"></i>
                                    <a href="https://www.linkedin.com/in/jeffrey-cheng-38338290">LinkedIn</a>
                                </div>
                                <div className="user-show-left-lower-bullets">
                                    <i class="fa-solid fa-check"></i>
                                    <a href="https://github.com/jeffreych6/rarebnb">GitHub</a>
                                </div>
                            </>
                            :
                            <>
                                <div className="user-show-left-lower-bullets">
                                    <i class="fa-solid fa-check"></i>
                                    <a href = "mailto: jeffreych6@gmail.com">Email address</a>
                                </div>
                                <div className="user-show-left-lower-bullets">
                                    <i class="fa-solid fa-check"></i>
                                    <a href="tel: 6466441749">Phone number</a>
                                </div>
                            </>
                        }
                            <div className="user-show-left-lower-message">
                                <span>Learn more</span> about how confirming account info helps keep the RareBnB community secure.
                            </div>

                    </div>
                </div>

                <div className="user-show-right-container">
                    <h1 className="user-show-right-title">Hi, I'm {user.firstName}</h1>
                    <div className="user-show-right-date">Joined in 2022</div>
                    <div className="user-show-right-about">
                        <h1>About</h1>
                        {user.id === 2 ? 
                            <span className="user-show-right-description">I am the superhost of most of the rare, amazing listings on RareBnB. I am also a software engineer based in New York, NY. Building this Airbnb clone was very enjoyable and was a great learning experience. Feel free to check out my other listings and projects below.</span>
                            :
                            <span className="user-show-right-description">RareBnb is the best platform ever for booking and hosting. Thanks Jeffrey!</span>
                        }
                        <span className="user-show-right-bullets">
                            <i className="fa-solid fa-house"></i>
                            Lives in New York, NY
                        </span>
                        <span className="user-show-right-bullets">
                            <i class="fa-solid fa-message"></i>
                            Speaks English
                        </span>
                    </div>
                    
                    {user.id === 2 ?
                        <div className="user-show-right-projects-container">
                        <h1 className="user-show-right-projects-title">{user.firstName}'s projects</h1>
                        <div className="user-show-right-projects">
                            <a href="https://jeffreych6.github.io/income_tax_by_state/" className="user-show-project">
                                <img className="user-show-project-image" src={incomeTaxCalculator} />
                                <h1>Income Tax Calculator</h1>
                                <span>Estimates individual income tax based on income, status, and location</span>
                            </a>
                            <a href="https://choose-your-news.onrender.com/" className="user-show-project">
                                <img className="user-show-project-image" src={chooseYourNews} />
                                <h1>Choose Your News</h1>
                                <span>Displays relevant news articles based on topics followed</span>
                            </a>
                        </div>
                        </div>
                        :
                        <div className="user-show-right-projects-container">
                        </div>    
                    }
                </div>
            </div>
        </>
    )
}

export default User;