# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Listing.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('listings')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      email: 'demo@user.io', 
      password: 'password',
      first_name: 'Demo',
      last_name: 'Lition',
      birth_date: '1994-09-16'
    )

    puts "Creating listings..."
    # Create one user with an easy to remember username, email, and password:
    Listing.create!(
      host_id: 1,
      title: "Justin's Garage",
      description: "No water, heating, or electricity. Perfect for a weekend stay!",
      price: 300,
      city: 'Long Island',
      state: 'New York',
      country: 'United States',
      lat: 40.7891,
      lng: -73.1350,
      zip_code: 11779,
      guests: 8,
      bedrooms: 1,
      beds: 2,
      baths: 1,
      kitchen: false,
      parking: true,
      wifi: false
    )

    Listing.create!(
      host_id: 1,
      title: "Gleb's Sedan",
      description: "No water, heating, or electricity. Perfect for road trips!",
      price: 180,
      city: 'Long Island',
      state: 'New York',
      country: 'United States',
      lat: 40.7891,
      lng: -73.1350,
      zip_code: 11779,
      guests: 5,
      bedrooms: 0,
      beds: 1,
      baths: 0,
      kitchen: false,
      parking: false,
      wifi: false
    )

    Listing.create!(
      host_id: 1,
      title: "Bonnie's Basement",
      description: "No water, heating, or electricity. Perfect for extended stays. Cash ONLY!",
      price: 250,
      city: 'Long Island',
      state: 'New York',
      country: 'United States',
      lat: 40.7891,
      lng: -73.1350,
      zip_code: 11779,
      guests: 8,
      bedrooms: 2,
      beds: 2,
      baths: 1,
      kitchen: true,
      parking: false,
      wifi: true
    )

    Listing.create!(
      host_id: 1,
      title: "Daniel's Closet",
      description: "No water, heating, or electricity. Perfect for a change in environment!",
      price: 120,
      city: 'Long Island',
      state: 'New York',
      country: 'United States',
      lat: 40.7891,
      lng: -73.1350,
      zip_code: 11779,
      guests: 2,
      bedrooms: 0,
      beds: 0,
      baths: 0,
      kitchen: false,
      parking: false,
      wifi: true
    )

    Listing.create!(
      host_id: 1,
      title: "Jeremy's Bike",
      description: "No water, heating, or electricity. Perfect for a brief stay. Just take a seat!",
      price: 50,
      city: 'Long Island',
      state: 'New York',
      country: 'United States',
      lat: 40.7891,
      lng: -73.1350,
      zip_code: 11779,
      guests: 2,
      bedrooms: 0,
      beds: 0,
      baths: 0,
      kitchen: false,
      parking: false,
      wifi: false
    )

    Listing.create!(
      host_id: 1,
      title: "Mahjong Parlor",
      description: "Come play!",
      price: 50,
      city: 'Long Island',
      state: 'New York',
      country: 'United States',
      lat: 40.7891,
      lng: -73.1350,
      zip_code: 11779,
      guests: 2,
      bedrooms: 0,
      beds: 0,
      baths: 0,
      kitchen: false,
      parking: false,
      wifi: false
    )
    
    Listing.create!(
      host_id: 1,
      title: "Mahjong Parlor",
      description: "Come play!",
      price: 50,
      city: 'Long Island',
      state: 'New York',
      country: 'United States',
      lat: 40.7891,
      lng: -73.1350,
      zip_code: 11779,
      guests: 2,
      bedrooms: 0,
      beds: 0,
      baths: 0,
      kitchen: false,
      parking: false,
      wifi: false
    )

    Listing.create!(
      host_id: 1,
      title: "Mahjong Parlor",
      description: "Come play!",
      price: 50,
      city: 'Long Island',
      state: 'New York',
      country: 'United States',
      lat: 40.7891,
      lng: -73.1350,
      zip_code: 11779,
      guests: 2,
      bedrooms: 0,
      beds: 0,
      baths: 0,
      kitchen: false,
      parking: false,
      wifi: false
    )

    Listing.create!(
      host_id: 1,
      title: "Mahjong Parlor",
      description: "Come play!",
      price: 50,
      city: 'Long Island',
      state: 'New York',
      country: 'United States',
      lat: 40.7891,
      lng: -73.1350,
      zip_code: 11779,
      guests: 2,
      bedrooms: 0,
      beds: 0,
      baths: 0,
      kitchen: false,
      parking: false,
      wifi: false
    )

    Listing.create!(
      host_id: 1,
      title: "Mahjong Parlor",
      description: "Come play!",
      price: 50,
      city: 'Long Island',
      state: 'New York',
      country: 'United States',
      lat: 40.7891,
      lng: -73.1350,
      zip_code: 11779,
      guests: 2,
      bedrooms: 0,
      beds: 0,
      baths: 0,
      kitchen: false,
      parking: false,
      wifi: false
    )

    Listing.create!(
      host_id: 1,
      title: "Mahjong Parlor",
      description: "Come play!",
      price: 50,
      city: 'Long Island',
      state: 'New York',
      country: 'United States',
      lat: 40.7891,
      lng: -73.1350,
      zip_code: 11779,
      guests: 2,
      bedrooms: 0,
      beds: 0,
      baths: 0,
      kitchen: false,
      parking: false,
      wifi: false
    )

    Listing.create!(
      host_id: 1,
      title: "Mahjong Parlor",
      description: "Come play!",
      price: 50,
      city: 'Long Island',
      state: 'New York',
      country: 'United States',
      lat: 40.7891,
      lng: -73.1350,
      zip_code: 11779,
      guests: 2,
      bedrooms: 0,
      beds: 0,
      baths: 0,
      kitchen: false,
      parking: false,
      wifi: false
    )

    Listing.create!(
      host_id: 1,
      title: "Mahjong Parlor",
      description: "Come play!",
      price: 50,
      city: 'Long Island',
      state: 'New York',
      country: 'United States',
      lat: 40.7891,
      lng: -73.1350,
      zip_code: 11779,
      guests: 2,
      bedrooms: 0,
      beds: 0,
      baths: 0,
      kitchen: false,
      parking: false,
      wifi: false
    )

    Listing.create!(
      host_id: 1,
      title: "Mahjong Parlor",
      description: "Come play!",
      price: 50,
      city: 'Long Island',
      state: 'New York',
      country: 'United States',
      lat: 40.7891,
      lng: -73.1350,
      zip_code: 11779,
      guests: 2,
      bedrooms: 0,
      beds: 0,
      baths: 0,
      kitchen: false,
      parking: false,
      wifi: false
    )

    Listing.create!(
      host_id: 1,
      title: "Mahjong Parlor",
      description: "Come play!",
      price: 50,
      city: 'Long Island',
      state: 'New York',
      country: 'United States',
      lat: 40.7891,
      lng: -73.1350,
      zip_code: 11779,
      guests: 2,
      bedrooms: 0,
      beds: 0,
      baths: 0,
      kitchen: false,
      parking: false,
      wifi: false
    )
  
    puts "Done!"
  end