import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as usersActions from "../../store/users";
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


                            <img className="user-show-profile"src={user.photoUrl}></img>
                            <div>
                                <i className="fa-solid fa-star"></i>
                                Software Engineer
                            </div>
                            <div>
                                <i className="fa-solid fa-star"></i>
                                Software Engineer
                            </div>
                            <div>
                                <i className="fa-solid fa-star"></i>
                                Software Engineer
                            </div>
                            <div className="reservation-form-divider"></div>
                            <div>
                                {user.firstName} confirmed
                            </div>
                            <div>
                                <i class="fa-solid fa-check"></i>
                                Identity
                            </div>
                            <div>
                                <i class="fa-solid fa-check"></i>
                                Email address
                            </div>
                            <div>
                                <i class="fa-solid fa-check"></i>
                                Phone number
                            </div>


                    </div>
                </div>

                <div className="user-show-right-container">
                    <h1 className="user-show-right-title">Hi, I'm {user.firstName}</h1>
                    <div className="user-show-right-date">Joined in 2022</div>
                    <div className="user-show-right-about">
                        <h1>About</h1>
                        <span className="user-show-right-description">hello, i'm jeffrey</span>
                        <span className="user-show-right-bullets"><i className="fa-solid fa-star"></i>Lives in New York, NY</span>
                        <span className="user-show-right-bullets"><i className="fa-solid fa-star"></i>Speaks English</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default User;