json.reservation do
    json.extract! @reservation, 
        :id,
        :guest_id,
        :listing_id,
        :start_date,
        :end_date,
        :num_guests
end