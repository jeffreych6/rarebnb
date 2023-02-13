# RareBnB

## Background

<a href='https://rarebnb.onrender.com'>RareBnb</a> is a full-stack clone of AirBnb which not only displays listings of rare places to stay, but also what are considered rare finds on AirBnb!

## Technologies, Libraries, APIS
* Javascript
* React
* Redux
* Ruby on Rails
* Postgresql
* AWS S3
* Google Maps API

## Functionality & MVPs

* Host on Render
* Full user authentication (signup, login, logout)
* View listings on an index page and a specific listing on a show page
* Display the general location of a listing using Google Maps API
* View, create, modify, and delete reservations
* Read reviews made on listings

## Booking a reservation on the listing show page

<img src="https://github.com/jeffreych6/rarebnb/blob/main/frontend/src/assets/showpage_reservation.gif" />
<!-- ![](.frontend/src/assets/showpage_reservation.gif) -->

Within the show page of a listing, users can see all the details related to the listing such as photos, location, price, amenities, reviews, etc. All available information shown on the page is dynamically updated. There are vadildations in place to prevent the user from creating an impossible reservation.

ReservationForm.js
```js
<form className="reservation-form" onSubmit={handleSubmit}>
          <div className="reservation-form-inputs">
            <div className="reservation-form-dates-container">
                <label className="reservation-form-start-date">
                    <div className="reservation-form-date-text">CHECK-IN</div>
                    <input 
                      className="reservation-form-date-input"
                      type="date"
                      value={startDate}
                      min={moment().format("YYYY-MM-DD")}
                      max={calculateEndDate(endDate, -0.5)}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                </label>

                <label className="reservation-form-end-date">
                  <div className="reservation-form-date-text">CHECKOUT</div>
                  <input 
                    className="reservation-form-date-input"
                    type="date"
                    value={endDate}
                    min={calculateEndDate(startDate, 2)}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </label>
            </div>
            <label className="reservation-form-guests">
              <div className="reservation-form-guests-text">GUESTS</div>
              <input 
                className="reservation-form-guests-input"
                type="number"
                value={numGuests}
                min="1"
                max={listing.guests}
                onChange={(e) => setNumGuests(e.target.value)}
              />
            </label>
          </div>
          <br />
          {sessionUser ? <button className="reservation-form-button" type="submit">Reserve</button> : <button className="reservation-form-button-disabled" type="submit" disabled>Reserve</button>}
        </form>
```

## Modifying and deleting a reservation on the user's trips page

<img src="https://github.com/jeffreych6/rarebnb/blob/main/frontend/src/assets/edit_delete_reservation.gif" />
<!-- ![](.frontend/src/assets/edit_delete_reservation.gif) -->

Users can view their reservations on their Trips page. Depending on whether a reservation has already occurred (past today's date), it will be shown in the past trips list while future reservations appear in the upcoming trips list. Users cannot access old reservations. However, they can click on upcoming reservations which will display a modal where they can modify or delete their reservation.

```js
const upcomingReservationsList = (reservations) => {
        const upcomingReservations = []
        
        reservations.forEach((reservation) => {
            if (Date.parse(reservation.endDate) > Date.now()) {
                upcomingReservations.push(reservation)
            }
        })

        return upcomingReservations
    }

    const pastReservationsList = (reservations) => {
        const pastReservationsList = []
        
        reservations.forEach((reservation) => {
            if (Date.parse(reservation.endDate) < Date.now()) {
                pastReservationsList.push(reservation)
            }
        })

        return pastReservationsList
    }

    const upcomingReservations = upcomingReservationsList(reservations).map((reservation) => {
        return (
            <ReservationIndexItem key={reservation.id} reservation={reservation} />
        )
    })

    const pastReservations = pastReservationsList(reservations).map((reservation) => {
        return (
            <ReservationPastTrips key={reservation.id} reservation={reservation} />
        )
    })


    return (
        <div className="reservations-index-container">
            <h1 className="reservations-index-trip-title">
                Trips
            </h1>
            <div className="reservation-index-upcoming-reservations">
                Upcoming reservations
            </div>
            {upcomingReservations}
            <div className="reservation-index-upcoming-reservations">
                Where you've been
            </div>
            {pastReservations}
        </div>
    )
```


## Future Implementation
* Search/filter function to display specific listings
* Create reviews
* Carousel for listing photos
